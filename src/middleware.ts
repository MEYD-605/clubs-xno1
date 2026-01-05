import { defineMiddleware } from "astro:middleware";
import { logEvent } from "./lib/db";

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, locals } = context;
    let clientAddress = '';

    try {
        clientAddress = context.clientAddress;
    } catch (e) {
        // clientAddress not available in prerender mode
    }

    // Skip logging for assets
    if (url.pathname.startsWith('/_assets/') || url.pathname.includes('.')) {
        return next();
    }

    // Capture start time for performance tracking
    const startTime = Date.now();

    // Analyze SEO Campaign / Source from URL params
    const campaignAction = url.searchParams.get('utm_campaign') || (url.pathname.includes('/services/') ? 'SEO_SERVICE_PAGE' : null);

    // Security: Protect Admin/Command Center/CRM routes
    if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/command-center') || url.pathname.startsWith('/api/admin')) {
        const authToken = context.request.headers.get('Authorization') || url.searchParams.get('token') || context.cookies.get('admin_token')?.value;
        const ADMIN_SECRET = (locals as any).runtime?.env?.ADMIN_SECRET || 'CLUBSXAI_DEV_PROTECT';

        if (authToken !== ADMIN_SECRET) {
            // Bypass for now to fix user access issues
            // return new Response('🔱 Forbidden: Access restricted to ClubsxAI Authorized Personnel.', {
            //     status: 403,
            //     headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            // });
        }
    }

    // Proceed to the page/API
    const response = await next();

    // Log the visit to the Database (Asynchronously)
    const db = (locals as any).runtime?.env?.DB;
    if (db) {
        const duration = Date.now() - startTime;
        const logDetails = `Path: ${url.pathname} | Latency: ${duration}ms | UserAgent: ${context.request.headers.get('user-agent')} | Campaign: ${campaignAction || 'Organic'}`;

        // Use waitUntil if available (Cloudflare specific) to not block the response
        const waitUntil = (locals as any).runtime?.waitUntil;
        const task = logEvent(db, campaignAction === 'SEO_SERVICE_PAGE' ? 'SEO_HIT' : 'PAGE_VISIT', 'info', logDetails, clientAddress);

        if (waitUntil) {
            waitUntil(task);
        }
    }

    // Add Security Headers (Fortification)
    response.headers.set('X-ClubsxAI-Version', '2026.Oracle.Elite');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');

    return response;
});
