import { Link } from 'react-router-dom'

const kpis = [
  { icon: '👥', value: '2,659', label: 'Active Volunteers', change: '+124 this month', up: true },
  { icon: '🌿', value: '142.2t', label: 'Waste Collected', change: '+8.4t this month', up: true },
  { icon: '💰', value: '₱1.2M', label: 'Donations Raised', change: '+₱45K this month', up: true },
  { icon: '📅', value: '12', label: 'Active Events', change: '3 this week', up: false },
]

const wasteData = [
  { month: 'Jan', tons: 18, h: 45 },
  { month: 'Feb', tons: 22, h: 55 },
  { month: 'Mar', tons: 28, h: 70 },
  { month: 'Apr', tons: 24, h: 60 },
  { month: 'May', tons: 31, h: 78 },
  { month: 'Jun', tons: 38, h: 95 },
]

const volunteerData = [
  { month: 'Jan', count: 340, h: 38 },
  { month: 'Feb', count: 480, h: 54 },
  { month: 'Mar', count: 620, h: 70 },
  { month: 'Apr', count: 790, h: 89 },
  { month: 'May', count: 950, h: 107 },
  { month: 'Jun', count: 1140, h: 128 },
]

const recentActivity = [
  { icon: '🌊', text: 'Mactan Beach Cleanup Drive completed', time: '2 hours ago', detail: '47 volunteers · 3.2 tons collected' },
  { icon: '💰', text: 'New donation received', time: '5 hours ago', detail: '₱5,000 from anonymous donor' },
  { icon: '🎓', text: 'Eco Workshop: Zero Waste Living registered', time: '1 day ago', detail: '28 participants enrolled' },
  { icon: '♻️', text: 'Lahug Recycling Center opened', time: '2 days ago', detail: 'Serving 3 barangays' },
  { icon: '👥', text: '12 new volunteers joined', time: '3 days ago', detail: 'Cleanup crew & educators' },
]

function BarChart({ data, valueKey, label, color1, color2 }) {
  const maxH = Math.max(...data.map(d => d.h))
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem', height: 140, padding: '0 0.5rem' }}>
        {data.map((d) => (
          <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', height: '100%', justifyContent: 'flex-end' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--brand-deep)', fontWeight: 600 }}>{d[valueKey]}</div>
            <div
              style={{
                width: '100%',
                height: `${(d.h / maxH) * 100}%`,
                background: `linear-gradient(to top, ${color1}, ${color2})`,
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.4s ease',
                minHeight: 4,
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '0.4rem', padding: '0 0.5rem', marginTop: '0.4rem', borderTop: '1.5px solid var(--line)' }}>
        {data.map((d) => (
          <div key={d.month} style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted)', paddingTop: '0.3rem' }}>
            {d.month}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <>
      <div className="page-hero" style={{ textAlign: 'left', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <span className="badge" style={{ background: 'rgba(111,255,0,0.18)', color: '#a0ff5a', marginBottom: '0.75rem', display: 'inline-block' }}>
            📊 Live Data
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Operations Dashboard</h1>
          <p>Real-time overview of CebuClean's volunteer operations, environmental impact, and financial health.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* KPIs */}
        <div className="kpi-grid" style={{ marginBottom: '2rem' }}>
          {kpis.map((k) => (
            <div key={k.label} className="kpi-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div style={{ fontSize: '1.75rem' }}>{k.icon}</div>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: 50, background: k.up ? 'rgba(59,170,58,0.12)' : 'rgba(131,201,255,0.2)', color: k.up ? 'var(--brand-deep)' : '#0369a1', fontWeight: 600 }}>
                  {k.up ? '↑' : '→'} {k.change}
                </span>
              </div>
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid-2" style={{ marginBottom: '2rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Waste Collected</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Jan – Jun 2026 (metric tons)</p>
              </div>
              <span className="badge">2026</span>
            </div>
            <BarChart data={wasteData} valueKey="tons" label="tons" color1="#1a5c3a" color2="#6fff00" />
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Volunteer Growth</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Cumulative registered volunteers</p>
              </div>
              <span className="badge">2026</span>
            </div>
            <BarChart data={volunteerData} valueKey="count" label="volunteers" color1="#0a2d47" color2="#83c9ff" />
          </div>
        </div>

        {/* Bottom: Recent Activity + Progress */}
        <div className="grid-2">
          {/* Activity Feed */}
          <div className="card">
            <h3 style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    paddingBottom: '1rem',
                    marginBottom: '1rem',
                    borderBottom: i < recentActivity.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.1rem' }}>{item.text}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{item.detail}</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', flexShrink: 0 }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions + Program Progress */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>Program Goals 2026</h3>
              {[
                { label: 'Waste Collected', current: 142, target: 200, unit: 't' },
                { label: 'Volunteers Recruited', current: 2659, target: 3000, unit: '' },
                { label: 'Donations Raised', current: 1200000, target: 2000000, unit: '₱', display: '₱1.2M / ₱2M' },
                { label: 'Seminars Held', current: 31, target: 50, unit: '' },
              ].map((prog) => {
                const pct = Math.min(100, Math.round((prog.current / prog.target) * 100))
                return (
                  <div key={prog.label} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.88rem' }}>
                      <span style={{ fontWeight: 600 }}>{prog.label}</span>
                      <span style={{ color: 'var(--muted)' }}>{pct}%</span>
                    </div>
                    <div style={{ height: 8, background: 'var(--line)', borderRadius: 50, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #3baa3a, #6fff00)', borderRadius: 50, transition: 'width 0.6s ease' }} />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>Quick Actions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { to: '/donate', label: '💰 Donate', cls: 'btn-primary' },
                  { to: '/volunteer', label: '🙋 Volunteer', cls: 'btn-secondary' },
                  { to: '/seminar', label: '🎓 Seminars', cls: 'btn-secondary' },
                  { to: '/transparency', label: '🔍 Reports', cls: 'btn-secondary' },
                ].map((btn) => (
                  <Link key={btn.to} to={btn.to} className={btn.cls} style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem', textAlign: 'center' }}>
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
