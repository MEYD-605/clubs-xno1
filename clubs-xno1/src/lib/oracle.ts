/**
 * ClubsxAI Oracle Bridge
 * Connects the web layer to the local Oracle NPU Intelligence (Port 8088)
 */

const ORACLE_URL = "http://localhost:8088/generate";

export interface OracleResponse {
    text: string;
    model: string;
    usage: any;
}

export async function askOracle(prompt: string, model: "thinker" | "visionary" = "thinker"): Promise<string> {
    try {
        const response = await fetch(ORACLE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: model,
                prompt: prompt,
                max_tokens: 1024,
                temperature: 0.7
            })
        });

        if (!response.ok) throw new Error(`Oracle Error: ${response.statusText}`);

        const data = await response.json() as OracleResponse;
        return data.text;
    } catch (error) {
        console.error("Failed to connect to Oracle:", error);
        return "Oracle is currently in deep meditation. Please try again later. 🔱";
    }
}

/**
 * SEO Intelligence: Score a lead's priority
 */
export async function scoreLead(message: string): Promise<{ score: number; insight: string }> {
    const prompt = `System: You are the Oracle. Analyze this photography lead message.
    Score it from 0-100 based on conversion probability. 
    Provide a 1-sentence insight in Thai.
    Format your response as JSON: {"score": number, "insight": "string"}
    
    Message: "${message}"`;

    try {
        const raw = await askOracle(prompt);
        // Basic extraction if Oracle doesn't return pure JSON
        const jsonMatch = raw.match(/\{.*\}/s);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return { score: 50, insight: "AI วิเคราะห์เบื้องต้น: มีความสนใจทั่วไปครับบอส" };
    } catch {
        return { score: 0, insight: "ไม่สามารถประเมินได้ในขณะนี้" };
    }
}

/**
 * SEO Engine: Generate Human-like Blog Drafts
 */
export async function generateBlogDraft(topic: string): Promise<string> {
    const prompt = `System: You are Bo (ช่างภาพกรุงเทพ), founder of ClubsxAI.
    Write a high-quality SEO blog post in Thai about "${topic}".
    Use your signature style: Professional, Moody, Direct, and using terms like "สถาปนา", "Vibe", "อธิปไตย".
    Google loves E-E-A-T, so include personal experience with Sony cameras and expert lighting tips.
    Format: Markdown.`;

    return await askOracle(prompt);
}
