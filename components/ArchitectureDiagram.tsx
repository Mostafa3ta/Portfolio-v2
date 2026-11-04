import React from 'react'

// Elevent at the pattern level only: no hostnames, sizes or security settings.
// Drawn vertically so it stays readable on a 360px screen.
const box = { fill: 'rgba(30, 41, 59, 0.7)', stroke: '#475569', strokeWidth: 1.25 }
const accent = { fill: 'rgba(45, 212, 191, 0.07)', stroke: 'rgba(45, 212, 191, 0.55)', strokeWidth: 1.25 }
const arrow = { stroke: '#64748b', strokeWidth: 1.5, markerEnd: 'url(#arch-arrow)' }
const title = { fill: '#e2e8f0', fontSize: 14, fontWeight: 600 }
const sub = { fill: '#94a3b8', fontSize: 12 }

export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 400 580"
      role="img"
      aria-labelledby="arch-title arch-desc"
      className="mx-auto h-auto w-full max-w-md"
    >
      <title id="arch-title">Elevent architecture</title>
      <desc id="arch-desc">
        The web browser talks only to the Next.js app on Cloudflare Workers, which serves pages and proxies API calls with an
        httpOnly session cookie and a CSRF check. The mobile app calls the API with a bearer token. Both reach the API over a
        private connection. On DigitalOcean, a FastAPI API and a background worker for reminders and email run in Docker and
        use a managed PostgreSQL database with automated backups.
      </desc>
      <defs>
        <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#64748b" />
        </marker>
      </defs>

      {/* Clients */}
      <rect x="8" y="8" width="252" height="56" rx="10" {...box} />
      <text x="134" y="32" textAnchor="middle" {...title}>Web browser</text>
      <text x="134" y="51" textAnchor="middle" {...sub}>Desktop and mobile web</text>

      <rect x="276" y="8" width="116" height="56" rx="10" {...box} />
      <text x="334" y="32" textAnchor="middle" {...title} fontSize={13}>iOS / Android</text>
      <text x="334" y="51" textAnchor="middle" {...sub}>in progress</text>

      {/* Browser → Next.js app */}
      <line x1="134" y1="64" x2="134" y2="104" {...arrow} />
      <text x="142" y="89" {...sub}>HTTPS</text>

      {/* Next.js on Cloudflare Workers */}
      <rect x="8" y="108" width="252" height="120" rx="10" {...accent} />
      <text x="24" y="134" {...title} fill="#99f6e4" fontSize={15}>Next.js app</text>
      <text x="24" y="153" {...sub}>Cloudflare Workers · OpenNext</text>
      <text x="24" y="180" {...sub} fill="#cbd5e1">• Pages, SEO, role-based UI</text>
      <text x="24" y="199" {...sub} fill="#cbd5e1">• Auth proxy, httpOnly cookie</text>
      <text x="24" y="218" {...sub} fill="#cbd5e1">• CSRF: origin + token check</text>

      {/* Mobile → private connection */}
      <line x1="334" y1="64" x2="334" y2="250" {...arrow} />
      <text x="342" y="150" {...sub}>Bearer</text>
      <text x="342" y="165" {...sub}>token</text>

      {/* Next.js app → private connection */}
      <line x1="134" y1="228" x2="134" y2="250" {...arrow} />

      {/* Private connection to the API */}
      <rect x="8" y="254" width="384" height="44" rx="10" {...accent} strokeDasharray="5 4" />
      <text x="200" y="281" textAnchor="middle" {...sub} fill="#cbd5e1" fontSize={13}>Private connection to the API</text>

      {/* Private connection → API */}
      <line x1="108" y1="298" x2="108" y2="366" {...arrow} />

      {/* DigitalOcean */}
      <rect x="8" y="320" width="384" height="140" rx="10" fill="none" stroke="#334155" strokeWidth="1.25" />
      <text x="384" y="340" textAnchor="end" {...sub}>DigitalOcean · Docker</text>

      <rect x="24" y="370" width="168" height="74" rx="8" {...box} />
      <text x="108" y="400" textAnchor="middle" {...title}>FastAPI API</text>
      <text x="108" y="421" textAnchor="middle" {...sub}>REST · permissions · audit</text>

      <rect x="208" y="370" width="168" height="74" rx="8" {...box} />
      <text x="292" y="400" textAnchor="middle" {...title}>Background worker</text>
      <text x="292" y="421" textAnchor="middle" {...sub}>Reminders · email</text>

      {/* API and worker → database */}
      <line x1="108" y1="444" x2="108" y2="496" {...arrow} />
      <line x1="236" y1="444" x2="236" y2="496" {...arrow} />

      {/* Data */}
      <rect x="8" y="500" width="252" height="72" rx="10" {...box} />
      <text x="134" y="529" textAnchor="middle" {...title}>PostgreSQL</text>
      <text x="134" y="550" textAnchor="middle" {...sub}>Managed database</text>

      <line x1="260" y1="536" x2="272" y2="536" {...arrow} />

      <rect x="276" y="500" width="116" height="72" rx="10" {...box} />
      <text x="334" y="532" textAnchor="middle" {...title} fontSize={13}>Backups</text>
      <text x="334" y="551" textAnchor="middle" {...sub}>Automated</text>
    </svg>
  )
}
