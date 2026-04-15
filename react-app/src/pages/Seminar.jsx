import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const seminars = [
  {
    id: 1,
    title: 'Zero Waste Living: A Practical Guide',
    date: 'April 19, 2026',
    time: '9:00 AM – 12:00 PM',
    location: 'Cebu City Public Library, Osmena Blvd',
    seats: 40,
    remaining: 12,
    category: 'Lifestyle',
    icon: '🌿',
    color: '#1a5c3a',
    desc: 'Discover practical zero-waste strategies for everyday life. Covers composting, repurchasing alternatives, and community swap shops.',
  },
  {
    id: 2,
    title: 'Marine Ecosystems & Coastal Waste',
    date: 'April 26, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'Mactan Marine Station, Lapu-Lapu City',
    seats: 30,
    remaining: 5,
    category: 'Environment',
    icon: '🌊',
    color: '#0a2d47',
    desc: 'Learn about the impact of plastic waste on Cebu\'s marine ecosystems, coral reefs, and coastal communities.',
  },
  {
    id: 3,
    title: 'Youth Climate Leadership Program',
    date: 'May 3, 2026',
    time: '8:00 AM – 4:00 PM',
    location: 'USC Main Campus, Cebu City',
    seats: 60,
    remaining: 28,
    category: 'Leadership',
    icon: '🎓',
    color: '#6b21a8',
    desc: 'A full-day program for students aged 15–25 covering environmental advocacy, community organizing, and climate communication.',
    featured: true,
  },
  {
    id: 4,
    title: 'Home Composting & Organic Waste',
    date: 'May 10, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'Talamban Barangay Hall',
    seats: 25,
    remaining: 18,
    category: 'Practical',
    icon: '🌱',
    color: '#3baa3a',
    desc: 'Hands-on workshop on setting up a home compost bin, kitchen waste separation, and turning food scraps into garden gold.',
  },
  {
    id: 5,
    title: 'Corporate Sustainability Workshop',
    date: 'May 17, 2026',
    time: '1:00 PM – 4:00 PM',
    location: 'Marco Polo Hotel, Cebu City',
    seats: 50,
    remaining: 22,
    category: 'Business',
    icon: '🏢',
    color: '#c2410c',
    desc: 'For business owners and managers: how to implement sustainable practices, reduce corporate waste, and engage employees.',
  },
  {
    id: 6,
    title: 'Barangay Recycling Program Setup',
    date: 'May 24, 2026',
    time: '9:00 AM – 11:00 AM',
    location: 'Online (Zoom)',
    seats: 100,
    remaining: 67,
    category: 'Community',
    icon: '♻️',
    color: '#0369a1',
    desc: 'Step-by-step guide for barangay officials on setting up a community recycling program with minimal budget.',
  },
]

export default function Seminar() {
  const { user } = useAuth()
  const [modalSeminar, setModalSeminar] = useState(null)
  const [filter, setFilter] = useState('All')
  const [regForm, setRegForm] = useState({ name: user?.name || '', email: user?.email || '' })
  const [registered, setRegistered] = useState([])
  const [justRegistered, setJustRegistered] = useState(null)

  const categories = ['All', ...Array.from(new Set(seminars.map((s) => s.category)))]
  const filtered = filter === 'All' ? seminars : seminars.filter((s) => s.category === filter)

  const handleRegister = (e) => {
    e.preventDefault()
    if (!regForm.name || !regForm.email) return
    const existing = JSON.parse(localStorage.getItem('cebuCleanSeminarRegistrations') || '[]')
    existing.push({ seminar: modalSeminar.title, name: regForm.name, email: regForm.email, registeredAt: new Date().toISOString() })
    localStorage.setItem('cebuCleanSeminarRegistrations', JSON.stringify(existing))
    setRegistered((r) => [...r, modalSeminar.id])
    setJustRegistered(modalSeminar.title)
    setModalSeminar(null)
  }

  return (
    <>
      <div className="page-hero">
        <h1>Eco Education Seminars</h1>
        <p>Upcoming workshops and learning sessions on sustainability, waste management, and environmental leadership.</p>
      </div>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        {/* Success banner */}
        {justRegistered && (
          <div style={{ background: 'rgba(59,170,58,0.1)', border: '1.5px solid var(--brand-deep)', borderRadius: 12, padding: '0.85rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--brand-deep)' }}>
            <span>✅ Registered for: <strong>{justRegistered}</strong> — check your email for details.</span>
            <button onClick={() => setJustRegistered(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--brand-deep)' }}>✕</button>
          </div>
        )}

        {/* Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 50,
                border: '1.5px solid',
                borderColor: filter === cat ? 'var(--brand-deep)' : 'var(--line)',
                background: filter === cat ? 'rgba(59,170,58,0.1)' : 'var(--surface)',
                color: filter === cat ? 'var(--brand-deep)' : 'var(--muted)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: filter === cat ? 600 : 400,
                fontSize: '0.88rem',
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Seminar Grid */}
        <div className="grid-3">
          {filtered.map((s) => {
            const isRegistered = registered.includes(s.id)
            const pctFull = Math.round(((s.seats - s.remaining) / s.seats) * 100)
            return (
              <div
                key={s.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', overflow: 'hidden' }}
              >
                {s.featured && (
                  <div style={{ position: 'absolute', top: 12, right: -20, background: '#6fff00', color: '#0f291f', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 2rem', transform: 'rotate(45deg)', transformOrigin: 'center' }}>
                    FEATURED
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div>
                    <span className="badge" style={{ marginBottom: '0.2rem', display: 'inline-block' }}>{s.category}</span>
                    <h3 style={{ fontSize: '0.95rem', lineHeight: 1.3 }}>{s.title}</h3>
                  </div>
                </div>

                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
                  <span>📅 {s.date} · {s.time}</span>
                  <span>📍 {s.location}</span>
                </div>

                {/* Seat availability */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.3rem' }}>
                    <span>{s.remaining} seats remaining</span>
                    <span>{pctFull}% full</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--line)', borderRadius: 50, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${pctFull}%`, background: pctFull > 80 ? '#ef4444' : 'var(--brand-deep)', borderRadius: 50 }} />
                  </div>
                </div>

                <button
                  className={isRegistered ? 'btn-secondary' : 'btn-primary'}
                  disabled={isRegistered}
                  onClick={() => !isRegistered && setModalSeminar(s)}
                  style={{ marginTop: 'auto', padding: '0.6rem', fontSize: '0.9rem' }}
                >
                  {isRegistered ? '✓ Registered' : 'Register Now'}
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Registration Modal */}
      {modalSeminar && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && setModalSeminar(null)}>
          <div className="modal-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>{modalSeminar.category}</span>
                <h3 style={{ fontSize: '1.1rem', lineHeight: 1.3 }}>{modalSeminar.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
                  {modalSeminar.date} · {modalSeminar.location}
                </p>
              </div>
              <button onClick={() => setModalSeminar(null)} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--muted)', flexShrink: 0 }}>✕</button>
            </div>

            <form onSubmit={handleRegister} noValidate>
              <div className="form-group">
                <label htmlFor="sem-name">Full Name *</label>
                <input
                  id="sem-name"
                  value={regForm.name}
                  onChange={(e) => setRegForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sem-email">Email Address *</label>
                <input
                  id="sem-email"
                  type="email"
                  value={regForm.email}
                  onChange={(e) => setRegForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setModalSeminar(null)} style={{ padding: '0.75rem' }}>Cancel</button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={!regForm.name || !regForm.email}
                  style={{ padding: '0.75rem', opacity: (!regForm.name || !regForm.email) ? 0.6 : 1 }}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
