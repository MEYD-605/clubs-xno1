from sovereign_service import SovereignGoogleService
import os

CREDENTIALS_PATH = "/root/credentials.json"
TOKEN_PATH = "/root/maw-workspace/oracle-skills/google-mcp/sovereign-google/token.json"

def run_handshake():
    print("🔱 ORACLE SOVEREIGN AUTH HANDSHAKE 🔱")
    print(f"Using credentials from: {CREDENTIALS_PATH}")
    
    # This will trigger the auth flow if token doesn't exist or is invalid
    service = SovereignGoogleService(CREDENTIALS_PATH, TOKEN_PATH)
    
    print("📡 Testing Drive access...")
    files = service.search_files(page_size=1)
    if files:
        print(f"✅ Success! Found file: {files[0]['name']}")
    else:
        print("✅ Connection Successful! (Drive is empty)")
    
    print("\n🔱 SOVEREIGN POWER ESTABLISHED 🔱")

if __name__ == "__main__":
    run_handshake()
