import { Link } from 'react-router-dom'

const values = [
  { icon: '🤝', title: 'Community First', desc: 'Every decision starts with the needs of Cebu\'s local communities.' },
  { icon: '🔍', title: 'Full Transparency', desc: 'We publish all financial records and program outcomes publicly.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Long-term environmental change through education and systemic action.' },
  { icon: '💡', title: 'Innovation', desc: 'We use data and technology to maximize the impact of every program.' },
  { icon: '⚖️', title: 'Equity', desc: 'Equal access to clean environments for all Cebuano communities.' },
  { icon: '💪', title: 'Empowerment', desc: 'Building local leadership so communities can drive change themselves.' },
]

const timeline = [
  { year: '2018', title: 'Founded', desc: 'Three university students start weekly beach cleanups in Mactan.' },
  { year: '2019', title: 'First Recycling Hub', desc: 'Launched Cebu\'s first community-managed recycling center in Lahug.' },
  { year: '2020', title: 'Went Digital', desc: 'Built our online volunteer platform to coordinate during the pandemic.' },
  { year: '2022', title: '1,000 Volunteers', desc: 'Reached a major milestone with 1,000 registered community volunteers.' },
  { year: '2024', title: 'National Recognition', desc: 'Awarded Best Environmental NGO by the DENR Region VII.' },
  { year: '2026', title: 'Today', desc: '2,659 volunteers, ₱1.2M raised, and 142 tons of waste diverted.' },
]

const team = [
  { name: 'Maria Santos', role: 'Executive Director', initials: 'MS', color: '#3baa3a' },
  { name: 'Carlo Reyes', role: 'Head of Programs', initials: 'CR', color: '#0a2d47' },
  { name: 'Ana Villanueva', role: 'Finance & Transparency', initials: 'AV', color: '#6b21a8' },
  { name: 'Ryan Uy', role: 'Volunteer Operations', initials: 'RU', color: '#c2410c' },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <span className="badge" style={{ background: 'rgba(111,255,0,0.18)', color: '#a0ff5a', marginBottom: '1rem', display: 'inline-block' }}>
          Est. 2018 · Cebu City, Philippines
        </span>
        <h1>About CebuClean</h1>
        <p>A grassroots movement turned recognized NGO, driven by the belief that collective action creates lasting change.</p>
      </div>

      {/* Mission & Vision */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div className="card" style={{ borderLeft: '4px solid var(--brand-deep)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Our Mission</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              To mobilize Cebuano communities in reducing waste, restoring ecosystems, and
              building sustainable practices through education, volunteer action, and transparent stewardship of donor funds.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔭</div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              A Cebu where every barangay has clean waterways, zero illegal dumpsites, and an
              empowered generation of environmental leaders who ensure that future generations
              inherit a thriving natural environment.
            </p>
          </div>
          <div className="card" style={{ borderLeft: '4px solid #6fff00' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💬</div>
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem' }}>Our Promise</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              Every peso donated is tracked and published. Every volunteer hour is counted.
              Every program outcome is measured and reported back to our community — no exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: 'linear-gradient(135deg, rgba(111,255,0,0.06), rgba(131,201,255,0.08))', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="text-center mb-4">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-sub">The principles that guide every decision we make</p>
          </div>
          <div className="grid-3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 760, margin: '0 auto' }}>
        <div className="text-center mb-4">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-sub">From a small beach cleanup to one of Cebu's leading environmental NGOs</p>
        </div>
        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid var(--line)' }}>
          {timeline.map((item, i) => (
            <div
              key={item.year}
              style={{
                marginBottom: '2rem',
                position: 'relative',
                paddingLeft: '1.5rem',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-2.6rem',
                  top: '0.1rem',
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: i === timeline.length - 1 ? 'var(--brand-deep)' : 'var(--surface)',
                  border: '3px solid var(--brand-deep)',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-deep)', fontSize: '0.9rem' }}>{item.year}</span>
                <h4 style={{ fontSize: '1rem' }}>{item.title}</h4>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '0 1.5rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="text-center mb-4">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-sub">Passionate individuals dedicating their time to a cleaner Cebu</p>
        </div>
        <div className="grid-4">
          {team.map((member) => (
            <div key={member.name} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: member.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  margin: '0 auto 1rem',
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{member.name}</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 1.5rem 4rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(59,170,58,0.08), rgba(131,201,255,0.1))' }}>
          <h2 style={{ marginBottom: '0.75rem', fontSize: '1.8rem' }}>Want to Get Involved?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
            Join over 2,659 volunteers who are already making Cebu cleaner, greener, and more sustainable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn-primary">Register as Volunteer</Link>
            <Link to="/contact" className="btn-secondary">Contact the Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
