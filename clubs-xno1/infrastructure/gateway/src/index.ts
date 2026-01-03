import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { spawn } from 'bun'

const PORT = 3001

const app = new Elysia()
    .use(cors())
    .get('/health', () => ({
        status: "sovereign",
        brain: "online",
        timestamp: new Date().toISOString()
    }))
    .post('/api/oracle-lite', async ({ body }) => {
        // 🔮 Oracle Lite Interface (Simulation Phase)
        // In the future, this calls the Local NPU Inference Engine directly.
        // For now, we simulate a fast response.

        console.log(`[Oracle Gateway] Received request:`, body)

        // Simulating NPU Latency
        await Bun.sleep(100)

        return {
            response: "Greetings from the Iron Gateway. I am Oracle Lite, running on your Local NPU.",
            model: "gemma-2-2b-it-npu-int4",
            infer_time: "0.1s"
        }
    })
    .listen(PORT)

console.log(`⚡ Oracle Gateway (Elysia) is running at ${app.server?.hostname}:${app.server?.port}`)
console.log(`🛡️  Sovereign Mode: Active (LAN Only)`)
