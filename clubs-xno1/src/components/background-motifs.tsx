export default function BackgroundMotifs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Top right constellation */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 text-theme-primary opacity-[0.03]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="2" fill="currentColor" />
        <circle cx="80" cy="30" r="2" fill="currentColor" />
        <circle cx="120" cy="50" r="2" fill="currentColor" />
        <circle cx="160" cy="20" r="2" fill="currentColor" />
        <circle cx="60" cy="80" r="2" fill="currentColor" />
        <circle cx="100" cy="100" r="2" fill="currentColor" />
        <circle cx="140" cy="70" r="2" fill="currentColor" />
        <circle cx="180" cy="90" r="2" fill="currentColor" />
        <path
          d="M40,40 L80,30 L120,50 L160,20 M60,80 L100,100 L140,70 L180,90"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          strokeOpacity="0.5"
        />
        <path
          d="M40,40 L60,80 M80,30 L100,100 M120,50 L140,70 M160,20 L180,90"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          strokeOpacity="0.5"
        />
      </svg>

      {/* Bottom left planetary orbit */}
      <svg
        className="absolute bottom-0 left-0 w-96 h-96 text-theme-primary opacity-[0.03]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <circle cx="160" cy="100" r="2" fill="currentColor" />
        <circle cx="100" cy="40" r="2" fill="currentColor" />
        <circle cx="40" cy="100" r="2" fill="currentColor" />
        <circle cx="100" cy="160" r="2" fill="currentColor" />
      </svg>

      {/* Middle aura waves */}
      <svg
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full text-theme-primary opacity-[0.02]"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,50 C300,50 350,150 350,200 C350,250 300,350 200,350 C100,350 50,250 50,200 C50,150 100,50 200,50 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M200,80 C280,80 320,150 320,200 C320,250 280,320 200,320 C120,320 80,250 80,200 C80,150 120,80 200,80 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M200,110 C260,110 290,150 290,200 C290,250 260,290 200,290 C140,290 110,250 110,200 C110,150 140,110 200,110 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M200,140 C240,140 260,150 260,200 C260,250 240,260 200,260 C160,260 140,250 140,200 C140,150 160,140 200,140 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  )
}
