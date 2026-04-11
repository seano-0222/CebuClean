import { Link } from 'react-router-dom'

const features = [
  {
    icon: '📊',
    title: 'Dashboard',
    desc: 'View real-time stats on volunteers, waste collected, donations, and active events across Cebu.',
    to: '/dashboard',
    color: '#0a2d47',
    badge: 'Analytics',
  },
  {
    icon: '💰',
    title: 'Donate',
    desc: 'Contribute to cleanup operations, education programs, and recycling infrastructure.',
    to: '/donate',
    color: '#1a5c3a',
    badge: 'Support Us',
  },
  {
    icon: '🙋',
    title: 'Volunteer',
    desc: 'Register for cleanup drives, seminars, and community programs across Cebu\'s barangays.',
    to: '/volunteer',
    color: '#3baa3a',
    badge: 'Join Us',
  },
  {
    icon: '🎓',
    title: 'Seminars',
    desc: 'Attend eco-education workshops on waste management, composting, and sustainable living.',
    to: '/seminar',
    color: '#6b21a8',
    badge: 'Learn',
  },
  {
    icon: '🌍',
    title: 'Our Impact',
    desc: 'Explore the environmental problems we\'re tackling and the solutions we\'ve deployed.',
    to: '/impact',
    color: '#c2410c',
    badge: 'Results',
  },
  {
    icon: '🔍',
    title: 'Transparency',
    desc: 'See exactly how every peso donated is allocated and track month-by-month financials.',
    to: '/transparency',
    color: '#0369a1',
    badge: 'Open Books',
  },
  {
    icon: '👤',
    title: 'My Profile',
    desc: 'Manage your volunteer profile, view your personal impact metrics, and update your details.',
    to: '/profile',
    color: '#065f46',
    badge: 'Personal',
  },
  {
    icon: 'ℹ️',
    title: 'About Us',
    desc: 'Learn about CebuClean\'s story, mission, core values, and the team behind the movement.',
    to: '/about',
    color: '#64748b',
    badge: 'Our Story',
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <h1>Features & Programs</h1>
        <p>Everything CebuClean offers — explore programs, track impact, and manage your involvement.</p>
      </div>

      {/* Quick Actions */}
      <section style={{ padding: '3rem 1.5rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(59,170,58,0.08), rgba(131,201,255,0.1))',
            border: '1.5px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: 200 }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Quick Access</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Jump directly to the most popular features</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { to: '/donate', label: '💰 Donate Now' },
              { to: '/volunteer', label: '🙋 Volunteer' },
              { to: '/seminar', label: '🎓 Seminars' },
              { to: '/dashboard', label: '📊 Dashboard' },
            ].map((btn) => (
              <Link key={btn.to} to={btn.to} className="btn-secondary" style={{ padding: '0.45rem 1.1rem', fontSize: '0.88rem' }}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '2rem 1.5rem 5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid-4">
          {features.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="card"
                style={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(8,40,26,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                }}
              >
                {/* Icon + Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: f.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                    }}
                  >
                    {f.icon}
                  </div>
                  <span className="badge">{f.badge}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65, flex: 1 }}>{f.desc}</p>
                </div>

                <div style={{ marginTop: 'auto', color: 'var(--brand-deep)', fontWeight: 600, fontSize: '0.88rem' }}>
                  Open {f.title} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
