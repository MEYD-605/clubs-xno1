document.addEventListener('DOMContentLoaded', () => {
    console.log('🔱 Oracle Dashboard Initialized');

    // Set current date
    const dateEl = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', options);

    // Sidebar navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            console.log(`Switching to tab: ${item.dataset.tab}`);
            // To be implemented: actual tab switching logic
        });
    });

    // Refresh data
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.addEventListener('click', () => {
        refreshBtn.classList.add('spinning');
        fetchData();
        setTimeout(() => refreshBtn.classList.remove('spinning'), 1000);
    });

    // Initial fetch
    fetchData();

    // Auto-refresh every 30 seconds
    setInterval(fetchData, 30000);
});

async function fetchData() {
    console.log('🔄 Fetching system data from local gateway...');

    try {
        // 🛡️ Oracle Security Gate (API Key should be managed via Environment Variables or Proxy)
        const API_KEY = "SOUL_BREWS_AUTH_TOKEN"; // Placeholder for production token
        const GATEWAY_URL = "http://localhost:8080"; // Placeholder for gateway URL if needed

        const response = await fetch('/api/dashboard/status', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        const data = await response.json();

        if (data.error) throw new Error(data.error);

        updateUI(data);
        addLog('Oracle Status: Deep context synchronized.', 'success');
    } catch (error) {
        console.error('❌ Fetch failed:', error);
        addLog('Warning: Local sovereignty connection weak.', 'danger');
    }
}

function updateUI(data) {
    document.getElementById('memory-count').textContent = data.memories;

    // Calculate total health across fleet
    const fleet = data.fleet || {};
    const healthValues = Object.values(fleet).map((f) => f.health);
    const avgHealth = healthValues.length > 0
        ? healthValues.reduce((a, b) => a + b, 0) / healthValues.length
        : 0;

    document.getElementById('fleet-health').textContent = Math.round(avgHealth) + '%';

    // Update individual fleet items
    if (fleet['claude-pro']) {
        const proStatus = document.getElementById('status-pro');
        proStatus.textContent = fleet['claude-pro'].online ? 'Online (Pro)' : 'Offline (Fallback Active)';
        proStatus.className = 'fleet-status ' + (fleet['claude-pro'].online ? 'online' : 'offline');
    }

    if (data.hybrid_active) {
        document.getElementById('fleet-mode').textContent = 'Hybrid Sovereignty Active';
        document.getElementById('fleet-mode').className = 'badge pro-badge'; // We might need a new CSS class for this
    }
}

function addLog(msg, type = 'info') {
    const logContainer = document.getElementById('log-container');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    entry.innerHTML = `<span class="time">${time}</span><span class="msg">${msg}</span>`;

    logContainer.prepend(entry);

    // Limit log entries
    if (logContainer.children.length > 10) {
        logContainer.lastElementChild.remove();
    }
}
