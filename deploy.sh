#!/bin/bash
set -e

CF_API_KEY="4963d2e48ef6f24bb21d9dd72ad677af4e796"
CF_EMAIL="ai.no.1bro@gmail.com"
CF_ACCOUNT_ID="192ec87b3fcfae427c57069a51c6f111"
PROJECT_NAME="clubs-xno1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$SCRIPT_DIR/dist"

echo "🚀 Deploying to Cloudflare Pages..."
echo "Project: $PROJECT_NAME"
echo "Dist: $DIST_DIR"

if [ ! -d "$DIST_DIR" ]; then
  echo "❌ Error: $DIST_DIR not found"
  exit 1
fi

# Create manifest
echo "📋 Creating manifest..."
cd "$DIST_DIR"
MANIFEST=$(find . -type f | jq -R -s -c 'split("\n")[:-1] | map({file: .})')
FILES_COUNT=$(echo "$MANIFEST" | jq 'length')
echo "   Found $FILES_COUNT files"

echo "📤 Creating deployment..."
RESPONSE=$(curl -s -X POST \
  "https://api.cloudflare.com/client/v4/accounts/$CF_ACCOUNT_ID/pages/projects/$PROJECT_NAME/deployments" \
  -H "X-Auth-Email: $CF_EMAIL" \
  -H "X-Auth-Key: $CF_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"branch\": \"main\",
    \"commit_hash\": \"944cee5\",
    \"commit_message\": \"fix: responsive design + SEO improvements\",
    \"manifest\": $MANIFEST
  }")

SUCCESS=$(echo "$RESPONSE" | jq -r '.success // false' 2>/dev/null || echo "false")

if [ "$SUCCESS" = "true" ]; then
  echo "✅ Deployment created!"
  UPLOAD_URL=$(echo "$RESPONSE" | jq -r '.result.upload_url')
  echo "📤 Uploading $FILES_COUNT files..."
  
  # Upload each file
  find . -type f | while read -r file; do
    if [ "$file" != "." ]; then
      FILE_UPLOAD_URL="$UPLOAD_URL${file:1}"
      curl -s -X PUT -H "Content-Type: application/octet-stream" --data-binary "$file" "$FILE_UPLOAD_URL" > /dev/null &
      if (( $(jobs -r | wc -l) >= 10 )); then
        wait
      fi
    fi
  done
  wait
  
  echo "✅ Deploy complete!"
  echo "🌐 https://clubsxai.com"
  echo "🔙 https://clubs-xno1.pages.dev"
else
  echo "❌ Failed"
  echo "$RESPONSE"
  exit 1
fi
