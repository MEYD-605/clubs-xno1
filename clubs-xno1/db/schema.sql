-- ClubsxAI D1 Database Schema
-- Version: 2026.01.03
-- 🔱 Empowering Digital Sovereignty

-- 1. Leads Table (Capture all inquiries)
CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    service_type TEXT,
    message TEXT,
    status TEXT DEFAULT 'new', -- new, contacted, booked, completed, cancelled
    source TEXT, -- organic, utm_campaign, etc.
    client_ip TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Bookings Table (Photography sessions)
CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER REFERENCES leads(id),
    session_date DATETIME,
    location TEXT,
    notes TEXT,
    total_price REAL,
    payment_status TEXT DEFAULT 'pending', -- pending, partial, paid
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. System Events (For Audit & Learning)
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL, -- PAGE_VISIT, CONVERSION, ERROR
    level TEXT DEFAULT 'info',
    message TEXT,
    metadata TEXT, -- JSON details
    client_ip TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Articles Table (SEO Blog Content)
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL, -- Markdown/HTML content
    description TEXT,
    author TEXT DEFAULT 'Bo Clubs',
    image TEXT,
    tags TEXT, -- Comma-separated list
    status TEXT DEFAULT 'published', -- draft, scheduled, published
    pub_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Initial Audit Log
INSERT INTO events (event_type, message) VALUES ('SYSTEM_INIT', 'ClubsxAI Phase 6 Database Layer Initialized 🔱');
INSERT INTO events (event_type, message) VALUES ('PHASE_7_DB_BLOG', 'DB-Driven Blog Table Created 🗄️');
