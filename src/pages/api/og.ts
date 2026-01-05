import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
    const title = url.searchParams.get('title') || 'ClubsxAI';
    const description = url.searchParams.get('description') || 'Premium Portrait Photography';
    const image = url.searchParams.get('image') || 'https://clubsxai.com/images/bo_snake_portrait_hero.jpg';

    // For now, we return a high-quality SVG that works as an OG image
    // In a full implementation with Satori, this would be a PNG.
    // But SVG is a great "Auto-generate" start for digital sovereignty.

    const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      
      <!-- Background Image Placeholder / Brand Element -->
      <rect x="0" y="0" width="1200" height="630" fill="#000" opacity="0.5" />
      
      <!-- Content -->
      <rect x="50" y="50" width="1100" height="530" rx="20" fill="none" stroke="#FF6B35" stroke-width="2" opacity="0.3" />
      
      <text x="100" y="250" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#FFFFFF">${title}</text>
      <text x="100" y="330" font-family="Arial, sans-serif" font-size="30" fill="#FF6B35" opacity="0.8">CLUBSXAI | PREMIUM PORTRAIT</text>
      <text x="100" y="420" font-family="Arial, sans-serif" font-size="24" fill="#CCCCCC" width="800">${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</text>
      
      <text x="100" y="550" font-family="Arial, sans-serif" font-size="18" fill="#555555" letter-spacing="2">EST. 2024 | BANGKOK, THAILAND</text>
      
      <!-- Logo Branding -->
      <circle cx="1100" cy="550" r="30" fill="#FF6B35" />
      <text x="1100" y="558" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#000000" text-anchor="middle">AI</text>
    </svg>
  `;

    return new Response(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
};
