import { Link } from 'react-router-dom'

const stats = [
  { value: '2,659', label: 'Active Volunteers', icon: '👥' },
  { value: '142.2t', label: 'Waste Diverted', icon: '🌿' },
  { value: '₱1.2M', label: 'Donations Raised', icon: '💰' },
  { value: '48', label: 'Communities Served', icon: '🏘️' },
]

const features = [
  { icon: '🌊', title: 'Beach Cleanups', desc: 'Organized shoreline cleanup drives across Cebu\'s coastal barangays.' },
  { icon: '♻️', title: 'Recycling Centers', desc: 'Barangay-level hubs making waste sorting simple and accessible.' },
  { icon: '🎓', title: 'Eco Workshops', desc: 'Education seminars on sustainability, composting, and zero waste living.' },
  { icon: '📊', title: 'Full Transparency', desc: 'Open donation tracking and program impact reports for all supporters.' },
]

const impactNumbers = [
  { n: '500+', l: 'Tons of waste produced daily in Cebu' },
  { n: '48', l: 'Cleanup events organized' },
  { n: '6', l: 'Active recycling centers' },
  { n: '92%', l: 'Donor satisfaction rate' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d3d20 0%, #0a2d47 100%)',
          color: 'white',
          padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(111,255,0,0.14) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          <span className="badge" style={{ background: 'rgba(111,255,0,0.18)', color: '#a0ff5a', marginBottom: '1.5rem', display: 'inline-block' }}>
            🌿 Community-Driven Environmental Action
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              color: 'white',
              marginBottom: '1.5rem',
            }}
          >
            A Cleaner Cebu<br />
            <span style={{ color: '#6fff00' }}>Starts With Us</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              opacity: 0.82,
              maxWidth: 620,
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
            }}
          >
            CebuClean mobilizes volunteers, allocates donations with full transparency, and runs
            community programs to tackle Cebu's growing waste crisis — one barangay at a time.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.4rem' }}>
              Donate Now
            </Link>
            <Link
              to="/register"
              className="btn-secondary"
              style={{ fontSize: '1.05rem', padding: '0.9rem 2.4rem', color: 'white', borderColor: 'rgba(255,255,255,0.45)' }}
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="kpi-grid">
          {stats.map((s) => (
            <div key={s.label} className="kpi-card fade-up">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div className="kpi-value">{s.value}</div>
              <div className="kpi-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section style={{ padding: '1rem 1.5rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ color: 'var(--brand-deep)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Our Mission
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', margin: '0.5rem 0 1.25rem', lineHeight: 1.15 }}>
              Protecting Cebu's<br />Natural Heritage
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Cebu generates over 500 tons of solid waste daily. Illegal dumping threatens coastal
              ecosystems and landfills are nearing capacity. CebuClean brings together volunteers,
              donors, and local leaders to reverse this trend through hands-on action and education.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary">Learn Our Story</Link>
              <Link to="/impact" className="btn-secondary">See Our Impact</Link>
            </div>
          </div>
          <div className="grid-2">
            {impactNumbers.map((item) => (
              <div key={item.l} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--brand-deep)' }}>{item.n}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.25rem', lineHeight: 1.4 }}>{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, rgba(111,255,0,0.06), rgba(131,201,255,0.1))', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-4">
            <h2 className="section-title">What We Do</h2>
            <p className="section-sub">Four pillars driving real environmental change in Cebu</p>
          </div>
          <div className="grid-4">
            {features.map((f) => (
              <div key={f.title} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/menu" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.8rem' }}>
              Explore All Features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Volunteer Spotlight ───────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0d3d20 0%, #0a2d47 100%)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Ready to Make a<br />
              <span style={{ color: '#6fff00' }}>Real Difference?</span>
            </h2>
            <p style={{ opacity: 0.8, lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Whether you volunteer your time, donate to our cause, or join a seminar —
              every action moves Cebu closer to a cleaner future.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/register" className="btn-primary">Get Started Today</Link>
              <Link to="/contact" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.45)' }}>Get In Touch</Link>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { step: '1', title: 'Create an Account', desc: 'Register in minutes as a volunteer or donor.' },
              { step: '2', title: 'Choose a Program', desc: 'Pick cleanups, seminars, or donation drives.' },
              { step: '3', title: 'Make an Impact', desc: 'Track your contribution and see real results.' },
            ].map((s) => (
              <div key={s.step} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#6fff00', color: '#0f291f', width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '0.85rem' }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>{s.title}</div>
                  <div style={{ opacity: 0.7, fontSize: '0.88rem' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
