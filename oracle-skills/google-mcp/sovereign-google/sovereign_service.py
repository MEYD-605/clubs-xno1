import json
import os
from typing import Dict, List, Optional, Union, Any
from pathlib import Path

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from googleapiclient.errors import HttpError

class SovereignGoogleService:
    """Sovereign Service to interact with multiple Google APIs using local credentials."""
    
    SCOPES = [
        'https://www.googleapis.com/auth/documents',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/gmail.modify',
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/contacts'
    ]
    
    def __init__(self, credentials_path: str, token_path: str):
        self.credentials_path = Path(credentials_path)
        self.token_path = Path(token_path)
        self.creds = self._authenticate()
        
        # Initialize sub-services
        self.drive = build('drive', 'v3', credentials=self.creds)
        self.gmail = build('gmail', 'v1', credentials=self.creds)
        self.calendar = build('calendar', 'v3', credentials=self.creds)
        self.docs = build('docs', 'v1', credentials=self.creds)
        self.sheets = build('sheets', 'v4', credentials=self.creds)
        self.people = build('people', 'v1', credentials=self.creds)

    def _authenticate(self):
        creds = None
        if self.token_path.exists():
            with open(self.token_path, 'r') as token:
                creds = Credentials.from_authorized_user_info(json.load(token), self.SCOPES)
        
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    str(self.credentials_path), self.SCOPES)
                creds = flow.run_local_server(port=0, open_browser=False)
            
            with open(self.token_path, 'w') as token:
                token.write(creds.to_json())
        return creds

    # --- Drive Methods ---
    def search_files(self, query: str = None, page_size: int = 10) -> List[Dict]:
        results = self.drive.files().list(
            q=query, pageSize=page_size, fields="nextPageToken, files(id, name, mimeType)").execute()
        return results.get('files', [])

    # --- Gmail Methods ---
    def list_messages(self, query: str = '', max_results: int = 10) -> List[Dict]:
        results = self.gmail.users().messages().list(userId='me', q=query, maxResults=max_results).execute()
        return results.get('messages', [])

    def get_message(self, message_id: str) -> Dict:
        return self.gmail.users().messages().get(userId='me', id=message_id).execute()

    # --- Calendar Methods ---
    def list_events(self, calendar_id: str = 'primary', max_results: int = 10) -> List[Dict]:
        results = self.calendar.events().list(calendarId=calendar_id, maxResults=max_results).execute()
        return results.get('items', [])

    def create_event(self, summary: str, start_time: str, end_time: str, description: str = None) -> Dict:
        """Create a calendar event. start_time and end_time should be in ISO format (e.g. 2026-01-15T10:00:00Z)"""
        event = {
            'summary': summary,
            'description': description,
            'start': {'dateTime': start_time},
            'end': {'dateTime': end_time},
        }
        return self.calendar.events().insert(calendarId='primary', body=event).execute()

    # --- Gmail Methods Extra ---
    def create_draft(self, to: str, subject: str, body: str) -> Dict:
        """Create a Gmail draft."""
        from email.message import EmailMessage
        import base64
        
        message = EmailMessage()
        message.set_content(body)
        message['To'] = to
        message['Subject'] = subject
        
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
        create_message = {'message': {'raw': encoded_message}}
        
        return self.gmail.users().drafts().create(userId='me', body=create_message).execute()
