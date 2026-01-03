import asyncio
from mcp.server.stdio import stdio_server
from mcp.server import Server
from mcp.types import Tool, TextContent, EmbeddedResource
from sovereign_service import SovereignGoogleService
import os

# Configuration
CREDENTIALS_PATH = "/root/credentials.json"
TOKEN_PATH = "/root/maw-workspace/oracle-skills/google-mcp/sovereign-google/token.json"

# Initialize Service
service = SovereignGoogleService(CREDENTIALS_PATH, TOKEN_PATH)

app = Server("sovereign-google-workspace")

@app.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="drive_search",
            description="Search for files in Google Drive",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Google Drive search query"},
                    "pageSize": {"type": "integer", "default": 10}
                }
            }
        ),
        Tool(
            name="gmail_list_messages",
            description="List emails from Gmail",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Gmail search query (e.g., from:someone)"},
                    "maxResults": {"type": "integer", "default": 10}
                }
            }
        ),
        Tool(
            name="calendar_list_events",
            description="List events from primary Google Calendar",
            inputSchema={
                "type": "object",
                "properties": {
                    "maxResults": {"type": "integer", "default": 10}
                }
            }
        ),
        Tool(
            name="calendar_create_event",
            description="Create an event in Google Calendar",
            inputSchema={
                "type": "object",
                "properties": {
                    "summary": {"type": "string"},
                    "start_time": {"type": "string", "description": "ISO format date-time"},
                    "end_time": {"type": "string", "description": "ISO format date-time"},
                    "description": {"type": "string"}
                },
                "required": ["summary", "start_time", "end_time"]
            }
        ),
        Tool(
            name="gmail_create_draft",
            description="Create a draft in Gmail",
            inputSchema={
                "type": "object",
                "properties": {
                    "to": {"type": "string"},
                    "subject": {"type": "string"},
                    "body": {"type": "string"}
                },
                "required": ["to", "subject", "body"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    if name == "drive_search":
        query = arguments.get("query")
        files = service.search_files(query, arguments.get("pageSize", 10))
        text = "\n".join([f"- {f['name']} ({f['id']})" for f in files])
        return [TextContent(type="text", text=f"Found files:\n{text}")]
    
    elif name == "gmail_list_messages":
        query = arguments.get("query", "")
        msgs = service.list_messages(query, arguments.get("maxResults", 10))
        text = "\n".join([f"- ID: {m['id']} (Thread: {m['threadId']})" for m in msgs])
        return [TextContent(type="text", text=f"Recent messages:\n{text}")]
    
    elif name == "calendar_list_events":
        events = service.list_events(max_results=arguments.get("maxResults", 10))
        text = "\n".join([f"- {e.get('summary', 'No Title')} ({e.get('start', {}).get('dateTime', 'All Day')})" for e in events])
        return [TextContent(type="text", text=f"Upcoming events:\n{text}")]
    
    elif name == "calendar_create_event":
        res = service.create_event(
            arguments.get("summary"),
            arguments.get("start_time"),
            arguments.get("end_time"),
            arguments.get("description")
        )
        return [TextContent(type="text", text=f"Event created: {res.get('htmlLink')}")]

    elif name == "gmail_create_draft":
        res = service.create_draft(
            arguments.get("to"),
            arguments.get("subject"),
            arguments.get("body")
        )
        return [TextContent(type="text", text=f"Draft created with ID: {res.get('id')}")]

    raise ValueError(f"Unknown tool: {name}")

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await app.run(
            read_stream,
            write_stream,
            app.create_initialization_options()
        )

if __name__ == "__main__":
    asyncio.run(main())
