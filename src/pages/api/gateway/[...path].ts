export const prerender = false;
import type { APIRoute } from 'astro';

const GATEWAY_URL = 'http://localhost:3010';

export const ALL: APIRoute = async ({ request, params }) => {
  const url = new URL(request.url);
  // Extract the path after /api/gateway/
  // Example: /api/gateway/api/brain -> /api/brain
  const targetPath = url.pathname.replace(/^\/api\/gateway/, '');

  console.log(`[Proxy] Forwarding ${url.pathname} -> ${GATEWAY_URL}${targetPath}`);

  try {
    const response = await fetch(`${GATEWAY_URL}${targetPath}`, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      // @ts-ignore - duplex is needed for streaming but TS might complain
      duplex: 'half'
    });

    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  } catch (error) {
    console.error(`[Proxy Error] Failed to connect to Gateway:`, error);
    return new Response(JSON.stringify({ error: 'Brain Gateway Unreachable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
