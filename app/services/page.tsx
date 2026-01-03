'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Head from 'next/head';


export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('authToken', data.token || '');
        router.push('/dashboard');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Club S by Bo | ช่างภาพและนักสร้างระบบ AI</title>
        <meta name="description" content="ชมผลงานของช่างภาพและนักสร้างระบบอัตโนมัติด้วย AI พร้อมฟีเจอร์ที่ล้ำยุค" />
        <meta name="keywords" content="ช่างภาพ, AI, ระบบอัตโนมัติ, No-code, Club S, Automation, บร๊ะเจ้าโบ" />
        <meta property="og:title" content="Club S by Bo" />
        <meta property="og:description" content="เว็บสาธารณะรวมผลงาน + ระบบ AI ฟรีสำหรับทุกคน" />
        <meta property="og:image" content="https://clubsxnolai.com/og-image.jpg" />
        <meta property="og:url" content="https://clubsxnolai.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="pt-24">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/20 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Dashboard</h1>
            <p className="text-xl text-gray-600 mb-8">Access our automation workflows and service tools</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="w-full h-[1000px] md:h-[80vh] relative">
              <iframe
                src="https://clubsxnolai.com/services/n8n"
                className="absolute inset-0 w-full h-full border-0"
                title="n8n Dashboard"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>If the dashboard doesn't load, please check your network connection or try again later.</p>
          </div>
        </div>
      </section>
      {/* Native Chat UI */}
      <div className="fixed bottom-6 left-6 z-50 w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-gray-800 text-white px-4 py-2 font-semibold">AI Chatbot Assistant</div>
        <div id="chat-log" className="h-[300px] p-4 overflow-y-auto text-sm text-gray-800 space-y-2">
          {/* messages will be appended here */}
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const input = document.getElementById('chat-input') as HTMLInputElement;
            const log = document.getElementById('chat-log');
            const message = input.value;
            if (!message.trim()) return;

            // show user message
            const userMsg = document.createElement('div');
            userMsg.className = 'text-right text-blue-600';
            userMsg.textContent = 'You: ' + message;
            log?.appendChild(userMsg);

            // scroll to bottom
            log?.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });

            // fetch reply
            const res = await fetch('/chatbot-receive', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message }),
            });

            const data = await res.json();
            const botMsg = document.createElement('div');
            botMsg.className = 'text-left text-gray-700';
            botMsg.textContent = 'Bot: ' + (data.reply || '...');
            log?.appendChild(botMsg);
            input.value = '';
            log?.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });
          }}
          className="flex border-t"
        >
          <input
            id="chat-input"
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button type="submit" className="bg-blue-600 text-white px-4">Send</button>
        </form>
      </div>
      {/* Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <iframe
          src="https://clubsxnolai.com/chat-widget"
          style={{
            width: "350px",
            height: "500px",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)"
          }}
          title="AI Assistant Chatbot"
        />
      </div>
      </main>
    </>
  )
}
