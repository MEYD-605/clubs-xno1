import type { APIRoute } from 'astro';
import { captureLead, logEvent } from '../../lib/db';
import { scoreLead } from '../../lib/oracle';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
    try {
        const data = await request.formData();
        const honey = data.get('_honey')?.toString();

        // 🛡️ Honeypot check: If bot filled this, silently ignore or return 200 to trick bot
        if (honey) {
            return new Response(JSON.stringify({ success: true, message: 'Processed (spam)' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const phone = data.get('phone')?.toString();
        const service = data.get('service')?.toString();
        const message = data.get('message')?.toString();
        const source = data.get('source')?.toString() || 'web_form';

        if (!name || !email) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Access D1 Database from Cloudflare Locals
        // Note: Locals.runtime.env.DB is populated by @astrojs/cloudflare
        const db = (locals as any).runtime?.env?.DB;

        if (!db) {
            console.warn("D1 Database binding 'DB' not found. Check wrangler.toml.");
            // We return a simulated success if DB is missing during transition
            return new Response(JSON.stringify({
                success: true,
                message: 'Provisionally recorded (Mock mode)'
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 🧠 Oracle Intelligence: Score the lead (Async but we wait for it for D1)
        let priority_score = 0;
        let oracle_insight = "Pending analysis...";

        try {
            const evaluation = await scoreLead(message || "No message provided.");
            priority_score = evaluation.score;
            oracle_insight = evaluation.insight;
        } catch (e) {
            console.warn("Oracle scoring failed, proceeding without score:", e);
        }

        // 💾 Save to DB
        const result = await captureLead(db, {
            name,
            email,
            phone,
            service_type: service,
            message,
            source,
            client_ip: clientAddress,
            priority_score,
            oracle_insight
        });

        // 🛡️ Log the event
        await logEvent(db, 'NEW_LEAD', 'info', `Source: ${source} | AI Score: ${priority_score}`, clientAddress);

        return new Response(JSON.stringify({
            success: true,
            id: result.id
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error("API Error in leads.ts:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
