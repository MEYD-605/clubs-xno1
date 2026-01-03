'use client'

export default function ServicesPage() {
  return (
    <div style={{ padding: '80px 40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Discover what No.1 can do for you.
      </p>
      <button
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          backgroundColor: '#ff948a',
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
}
