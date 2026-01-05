/**
 * ClubsxAI Database Utility
 * Handles interactions with Cloudflare D1
 */

export interface Lead {
    id: number;
    name: string;
    email: string;
    phone?: string;
    service_type?: string;
    message?: string;
    status: 'new' | 'contacted' | 'booked' | 'completed' | 'cancelled';
    source: string;
    client_ip?: string;
    created_at: string;
    updated_at: string;
    priority_score?: number;
    oracle_insight?: string;
}

export interface Booking {
    id: number;
    lead_id: number;
    session_date: string;
    location?: string;
    notes?: string;
    total_price?: number;
    payment_status: 'pending' | 'partial' | 'paid';
    created_at: string;
    updated_at: string;
}

export interface Article {
    id: number;
    slug: string;
    title: string;
    content: string;
    description?: string;
    author?: string;
    image?: string;
    tags?: string;
    status: 'draft' | 'scheduled' | 'published';
    pub_date: string;
    created_at: string;
    updated_at: string;
}

export const DB_ERRORS = {
    MISSING_BINDING: "DATABASE_BINDING_MISSING",
    QUERY_FAILED: "DB_QUERY_FAILED",
};

export async function captureLead(db: D1Database, lead: Partial<Lead>) {
    if (!db) throw new Error(DB_ERRORS.MISSING_BINDING);

    const { name, email, phone, service_type, message, source, client_ip, priority_score, oracle_insight } = lead;

    try {
        const result = await db.prepare(`
            INSERT INTO leads (name, email, phone, service_type, message, source, client_ip, priority_score, oracle_insight)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
            name,
            email,
            phone || null,
            service_type || null,
            message || null,
            source || 'direct',
            client_ip || null,
            priority_score || 0,
            oracle_insight || null
        ).run();

        return { success: true, id: result.meta.last_row_id };
    } catch (error) {
        console.error("DB Error capturing lead:", error);
        throw new Error(DB_ERRORS.QUERY_FAILED);
    }
}

export async function updateLeadInsight(db: D1Database, id: number, score: number, insight: string) {
    if (!db) return;
    try {
        await db.prepare(`
            UPDATE leads 
            SET priority_score = ?, oracle_insight = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `).bind(score, insight, id).run();
    } catch (error) {
        console.error("DB Error updating lead insight:", error);
    }
}

export async function logEvent(db: D1Database, event: string, level: string = 'info', message: string = '', ip: string = '') {
    if (!db) return;

    try {
        await db.prepare(`
            INSERT INTO events (event_type, level, message, client_ip)
            VALUES (?, ?, ?, ?)
        `).bind(event, level, message, ip).run();
    } catch (error) {
        console.error("DB Error logging event:", error);
    }
}

export async function getAllLeads(db: D1Database) {
    if (!db) return [];
    try {
        const { results } = await db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all<Lead>();
        return results;
    } catch (error) {
        console.error("DB Error fetching leads:", error);
        return [];
    }
}

export async function getBookings(db: D1Database) {
    if (!db) return [];
    try {
        const { results } = await db.prepare(`
            SELECT b.*, l.name as client_name 
            FROM bookings b 
            JOIN leads l ON b.lead_id = l.id 
            ORDER BY b.session_date ASC
        `).all();
        return results;
    } catch (error) {
        console.error("DB Error fetching bookings:", error);
        return [];
    }
}

const DEFAULT_ARTICLES: Article[] = [
    {
        id: 0,
        slug: 'executive-portrait-bangkok',
        title: 'สถาปนาภาพลักษณ์ด้วย Executive Portrait ระดับพรีเมียม',
        description: 'ทำไมผู้บริหารระดับสูงถึงต้องมีภาพ Portrait ที่สะท้อนตัวตนและวิสัยทัศน์ที่ชัดเจน',
        content: '# Executive Portrait\n\nในโลกธุรกิจยุคใหม่ ภาพลักษณ์ของคุณคือ "นามบัตรแรก" ที่คนจะเห็น...',
        author: 'Bo Clubs',
        image: '/images/bo_snake_portrait_hero.jpg',
        tags: 'Personal Branding, Photography',
        status: 'published',
        pub_date: '2026-01-03',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: -1,
        slug: 'sony-a7iii-review-2026',
        title: 'รีวิว Sony A7III ในปี 2026: ยังคุ้มค่าสำหรับการเริ่มต้นธุรกิจถ่ายภาพหรือไม่?',
        description: 'เจาะลึกกล้องรุ่นในตำนานที่ยังคงเป็นม้าใช้ที่ซื่อสัตย์ของช่างภาพหลายคน',
        content: '# Sony A7III Review\n\nแม้จะเป็นกล้องที่ออกมาหลายปีแล้ว แต่ Sony A7III ยังคงมีเสน่ห์...',
        author: 'Bo Clubs',
        image: '/images/bo_neon_purple_portrait.png',
        tags: 'Gear, Sony, Review',
        status: 'published',
        pub_date: '2026-01-03',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

/**
 * @deprecated This function is for the D1-driven blog system which is currently disabled in favor of Static Markdown.
 * Use getCollection('blog') instead.
 */
export async function getArticles(db: D1Database, includeHidden = false) {
    if (!db) return DEFAULT_ARTICLES;
    try {
        let query = "SELECT * FROM articles";
        if (!includeHidden) {
            query += " WHERE status = 'published' AND pub_date <= CURRENT_TIMESTAMP";
        }
        query += " ORDER BY pub_date DESC";
        const { results } = await db.prepare(query).all<Article>();
        return results.length > 0 ? results : DEFAULT_ARTICLES;
    } catch (error) {
        console.error("DB Error fetching articles, using fallback:", error);
        return DEFAULT_ARTICLES;
    }
}

/**
 * @deprecated This function is for the D1-driven blog system which is currently disabled.
 */
export async function getArticleBySlug(db: D1Database, slug: string) {
    if (!db) return DEFAULT_ARTICLES.find(a => a.slug === slug) || null;
    try {
        const article = await db.prepare("SELECT * FROM articles WHERE slug = ?").bind(slug).first<Article>();
        return article || DEFAULT_ARTICLES.find(a => a.slug === slug) || null;
    } catch (error) {
        console.error("DB Error fetching article by slug, using fallback:", error);
        return DEFAULT_ARTICLES.find(a => a.slug === slug) || null;
    }
}

/**
 * @deprecated This function is for the D1-driven blog system which is currently disabled.
 */
export async function upsertArticle(db: D1Database, article: Partial<Article>) {
    if (!db) return;
    const { slug, title, content, description, image, tags, status, pub_date } = article;
    try {
        await db.prepare(`
            INSERT INTO articles (slug, title, content, description, image, tags, status, pub_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(slug) DO UPDATE SET
                title = excluded.title,
                content = excluded.content,
                description = excluded.description,
                image = excluded.image,
                tags = excluded.tags,
                status = excluded.status,
                pub_date = excluded.pub_date,
                updated_at = CURRENT_TIMESTAMP
        `).bind(slug, title, content, description || null, image || null, tags || null, status || 'published', pub_date || null).run();
    } catch (error) {
        console.error("DB Error upserting article:", error);
    }
}
