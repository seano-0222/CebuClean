import { Link } from 'react-router-dom'

const allocation = [
  { label: 'Cleanup Operations', pct: 45, color: '#3baa3a' },
  { label: 'Education & Training', pct: 30, color: '#83c9ff' },
  { label: 'Recycling Infrastructure', pct: 25, color: '#6fff00' },
]

const months = [
  { month: 'Jan 2026', donations: '₱148,000', expenses: '₱121,400', surplus: '₱26,600' },
  { month: 'Feb 2026', donations: '₱165,000', expenses: '₱138,000', surplus: '₱27,000' },
  { month: 'Mar 2026', donations: '₱210,500', expenses: '₱178,200', surplus: '₱32,300' },
  { month: 'Apr 2026', donations: '₱192,000', expenses: '₱161,500', surplus: '₱30,500' },
  { month: 'May 2026', donations: '₱245,000', expenses: '₱198,000', surplus: '₱47,000' },
  { month: 'Jun 2026', donations: '₱239,500', expenses: '₱202,800', surplus: '₱36,700' },
]

const overviewKpis = [
  { value: '₱1.2M', label: 'Total Donations Raised', icon: '💰' },
  { value: '₱999K', label: 'Total Funds Utilised', icon: '📤' },
  { value: '₱200K', label: 'Operational Reserve', icon: '🏦' },
  { value: '94%', label: 'Program Allocation Rate', icon: '📊' },
]

// Conic gradient for pie chart (CSS only)
const pieGradient = `conic-gradient(
  #3baa3a 0% 45%,
  #83c9ff 45% 75%,
  #6fff00 75% 100%
)`

export default function Transparency() {
  return (
    <>
      <div className="page-hero">
        <h1>Transparency Report</h1>
        <p>Every peso donated is tracked and published. Open books, always — because you deserve to know where your support goes.</p>
      </div>

      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>

        {/* KPIs */}
        <div className="kpi-grid" style={{ marginBottom: '2.5rem' }}>
          {overviewKpis.map((k) => (
            <div key={k.label} className="kpi-card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{k.icon}</div>
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Allocation: Pie + Breakdown */}
        <div className="grid-2" style={{ marginBottom: '2.5rem', alignItems: 'center' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Donation Allocation</h3>
            {/* CSS Pie Chart */}
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: pieGradient,
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {allocation.map((a) => (
                <div key={a.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  <div style={{ width: 14, height: 14, borderRadius: 3, background: a.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem' }}>{a.label}</span>
                  <span style={{ fontWeight: 700, color: 'var(--brand-deep)', marginLeft: 'auto', minWidth: 36 }}>{a.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>Allocation Breakdown</h3>
              {allocation.map((a) => (
                <div key={a.label} style={{ marginBottom: '1.1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>{a.label}</span>
                    <span style={{ color: 'var(--muted)' }}>{a.pct}%</span>
                  </div>
                  <div style={{ height: 10, background: 'var(--line)', borderRadius: 50, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${a.pct}%`, background: a.color, borderRadius: 50 }} />
                  </div>
                </div>
              ))}
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
                Our allocation is reviewed quarterly by an independent auditor. No more than 10% of any donation goes to administrative costs.
              </p>
            </div>
            <div className="card" style={{ background: 'rgba(59,170,58,0.05)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏆</div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Accredited by PhilNGO</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                CebuClean is accredited by the Philippine Council for NGO Certification (PCNC) and the Department of Social Welfare and Development (DSWD).
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Financial Table */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Monthly Financial Report</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>January – June 2026 · All figures in Philippine Peso (₱)</p>
            </div>
            <button className="btn-secondary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}>
              📥 Download PDF
            </button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)' }}>
                  {['Month', 'Donations Received', 'Funds Utilised', 'Surplus / Reserve'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {months.map((row, i) => (
                  <tr key={row.month} style={{ borderBottom: '1px solid var(--line)', background: i % 2 === 0 ? 'transparent' : 'var(--card)' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{row.month}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--brand-deep)', fontWeight: 600 }}>{row.donations}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--muted)' }}>{row.expenses}</td>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span style={{ background: 'rgba(59,170,58,0.1)', color: 'var(--brand-deep)', padding: '0.15rem 0.6rem', borderRadius: 50, fontSize: '0.82rem', fontWeight: 600 }}>
                        {row.surplus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ borderTop: '2px solid var(--line)', background: 'rgba(59,170,58,0.04)' }}>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>Total 2026 YTD</td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--brand-deep)' }}>₱1,200,000</td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--muted)' }}>₱999,900</td>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>
                    <span style={{ background: 'rgba(59,170,58,0.15)', color: 'var(--brand-deep)', padding: '0.2rem 0.8rem', borderRadius: 50, fontSize: '0.88rem' }}>
                      ₱200,100
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Have questions about our financials? Our team is happy to answer.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
