#!/bin/bash
# Deploy to Cloudflare Pages using Global API Key
# This is the method that worked yesterday

set -e

# Cloudflare Credentials
CF_API_KEY="4963d2e48ef6f24bb21d9dd72ad677af4e796"
CF_EMAIL="ai.no.1bro@gmail.com"
CF_ACCOUNT_ID="192ec87b3fcfae427c57069a51c6f111"
PROJECT_NAME="clubs-xno1"

# Build directory
DIST_DIR="$(pwd)/dist"

echo "🚀 Deploying to Cloudflare Pages..."
echo "Project: $PROJECT_NAME"
echo "Directory: $DIST_DIR"
echo ""

# Check if dist exists
if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Error: $DIST_DIR not found. Run 'npm run build' first."
  exit 1
fi

# Create deployment
echo "📤 Creating deployment..."
RESPONSE=$(curl -s -X POST \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/pages/projects/$PROJECT_NAME/deployments" \
  -H "X-Auth-Email: $CF_EMAIL" \
  -H "X-Auth-Key: $CF_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "branch": "main",
    "commit_hash": "944cee5",
    "commit_message": "fix: responsive design + SEO improvements (12 fixes)"
  }')

# Check response
SUCCESS=$(echo "$RESPONSE" | jq -r '.success // false')

if [ "$SUCCESS" = "true" ]; then
  echo "✅ Deployment created successfully!"
  echo ""
  echo "📋 Upload URL:"
  UPLOAD_URL=$(echo "$RESPONSE" | jq -r '.result.upload_url')
  echo "$UPLOAD_URL"
  echo ""
  echo "⏳ Uploading files..."

  # Upload files using the upload URL
  cd "$DIST_DIR"
  tar -czf - . | curl -s -X PUT \
    -H "Content-Type: application/x-gzip" \
    --data-binary @- \
    "$UPLOAD_URL" > /dev/null

  echo "✅ Upload complete!"
  echo ""
  echo "🌐 Your site will be live at:"
  echo "   https://clubsxai.com"
  echo "   https://clubs-xno1.pages.dev"
else
  echo "❌ Failed to create deployment"
  echo ""
  echo "Error details:"
  echo "$RESPONSE" | jq -r '.errors[]?.message // .'
  exit 1
fi
