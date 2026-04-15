import { Link } from 'react-router-dom'

const programs = [
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/donate', label: 'Donate' },
  { to: '/seminar', label: 'Seminars' },
  { to: '/dashboard', label: 'Dashboard' },
]

const info = [
  { to: '/about', label: 'About Us' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/transparency', label: 'Transparency' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0b1f14', color: 'white', padding: '3.5rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M20 4C12 4 5 11 5 20c0 7.5 4.5 12.5 10 15l5 2.5 5-2.5C30.5 32.5 35 27.5 35 20c0-9-7-16-15-16z" fill="#6fff00" />
                <path d="M20 8c-4 4-6 10-4 17" stroke="#0b1f14" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>Cebu Clean</span>
            </div>
            <p style={{ opacity: 0.65, fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 280 }}>
              Building a cleaner, greener Cebu through community action, transparency, and collective responsibility.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['🌐', '📘', '📸', '🐦'].map((icon, i) => (
                <span
                  key={i}
                  style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.15s' }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '1rem', color: 'white' }}>Programs</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {programs.map((l) => (
                <Link key={l.to} to={l.to} style={{ opacity: 0.75, fontSize: '0.95rem', transition: 'opacity 0.15s' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '1rem', color: 'white' }}>Organization</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {info.map((l) => (
                <Link key={l.to} to={l.to} style={{ opacity: 0.75, fontSize: '0.95rem', transition: 'opacity 0.15s' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '1rem', color: 'white' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', opacity: 0.75 }}>
              <span>📍 Cebu City, Philippines</span>
              <span>✉️ hello@cebuclean.org</span>
              <span>📞 +63 32 234 5678</span>
              <span>🕐 Mon–Fri, 9AM–5PM</span>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ opacity: 0.4, fontSize: '0.82rem' }}>© 2026 CebuClean. All rights reserved.</p>
          <p style={{ opacity: 0.4, fontSize: '0.82rem' }}>Made with 💚 for a cleaner Cebu</p>
        </div>
      </div>
    </footer>
  )
}
