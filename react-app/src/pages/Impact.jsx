const problems = [
  {
    icon: '🗑️',
    stat: '500+',
    unit: 'tons/day',
    title: 'Unsustainable Waste Generation',
    desc: 'Metro Cebu produces over 500 metric tons of solid waste every day — far exceeding the capacity of existing disposal facilities.',
    color: '#ef4444',
  },
  {
    icon: '⚠️',
    stat: '47',
    unit: 'illegal sites',
    title: 'Illegal Dumpsites',
    desc: 'Forty-seven identified illegal dumping sites across Cebu\'s coastal and upland barangays pollute waterways and harm communities.',
    color: '#f97316',
  },
  {
    icon: '📉',
    stat: '82%',
    unit: 'capacity used',
    title: 'Landfills Near Capacity',
    desc: 'Cebu\'s main Inayawan landfill is operating at 82% capacity with no approved expansion plan — a crisis expected by 2028.',
    color: '#eab308',
  },
]

const solutions = [
  {
    icon: '♻️',
    stat: '6',
    unit: 'active centers',
    title: 'Community Recycling Centers',
    desc: 'CebuClean operates 6 barangay-level recycling hubs where residents can drop off sorted recyclables, reducing landfill load by up to 30%.',
    color: '#3baa3a',
  },
  {
    icon: '🌊',
    stat: '48',
    unit: 'events held',
    title: 'Organized Cleanup Drives',
    desc: 'We\'ve facilitated 48 coastal and barangay cleanup events collected 142 metric tons of waste — diverting it from waterways and dumpsites.',
    color: '#0369a1',
  },
  {
    icon: '🎓',
    stat: '31',
    unit: 'seminars run',
    title: 'Environmental Education',
    desc: 'Our seminar program has reached 3,200+ participants with hands-on training in composting, waste sorting, and sustainable living.',
    color: '#6b21a8',
  },
]

const sdgs = [
  { number: '11', label: 'Sustainable Cities', icon: '🏙️' },
  { number: '12', label: 'Responsible Consumption', icon: '♻️' },
  { number: '14', label: 'Life Below Water', icon: '🌊' },
  { number: '15', label: 'Life on Land', icon: '🌿' },
]

export default function Impact() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Impact</h1>
        <p>Real problems. Real solutions. Measurable results for Cebu's environment and communities.</p>
      </div>

      {/* Problems */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="text-center mb-4">
          <h2 className="section-title">The Problem We're Solving</h2>
          <p className="section-sub">Cebu faces a mounting waste crisis that demands collective action now</p>
        </div>
        <div className="grid-3">
          {problems.map((p) => (
            <div key={p.title} className="card" style={{ borderTop: `4px solid ${p.color}` }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{p.icon}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: p.color }}>{p.stat}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{p.unit}</span>
              </div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Arrow divider */}
      <div style={{ textAlign: 'center', fontSize: '2.5rem', margin: '-1rem 0', lineHeight: 1 }}>↓</div>

      {/* Solutions */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="text-center mb-4">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-sub">Evidence-based programs delivering measurable change across Cebu's communities</p>
        </div>
        <div className="grid-3">
          {solutions.map((s) => (
            <div key={s.title} className="card" style={{ borderTop: `4px solid ${s.color}`, background: 'linear-gradient(135deg, rgba(59,170,58,0.03), rgba(131,201,255,0.05))' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: s.color }}>{s.stat}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{s.unit}</span>
              </div>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SDG Alignment */}
      <section style={{ background: 'linear-gradient(135deg, #0d3d20, #0a2d47)', padding: '4rem 1.5rem', color: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'white', marginBottom: '0.75rem' }}>
            Aligned with the UN Sustainable Development Goals
          </h2>
          <p style={{ opacity: 0.78, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Our programs directly contribute to four United Nations SDGs
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            {sdgs.map((sdg) => (
              <div key={sdg.number} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '1.5rem', textAlign: 'center', minWidth: 120 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.4rem' }}>{sdg.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', color: '#6fff00' }}>SDG {sdg.number}</div>
                <div style={{ fontSize: '0.82rem', opacity: 0.8, marginTop: '0.2rem' }}>{sdg.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 1000, margin: '0 auto' }}>
        <div className="text-center mb-4">
          <h2 className="section-title">What Our Community Says</h2>
        </div>
        <div className="grid-3">
          {[
            { quote: 'CebuClean gave our barangay the tools and knowledge to manage our own recycling program. The change is visible.', name: 'Barangay Captain Rosa M.', area: 'Talamban, Cebu City' },
            { quote: 'I\'ve been a volunteer for 2 years. Every cleanup drive reminds me why this matters — the ocean\'s health is our health.', name: 'Miguel P.', area: 'Lapu-Lapu City' },
            { quote: 'As a donor, the transparency reports give me full confidence that every peso I give creates real impact.', name: 'Andie V.', area: 'Mandaue City' },
          ].map((t) => (
            <div key={t.name} className="card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--brand-deep)', lineHeight: 1, marginBottom: '0.75rem', fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{t.quote}</p>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{t.area}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
