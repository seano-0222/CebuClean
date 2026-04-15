import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const amounts = [250, 500, 1000, 2500, 5000, 10000]

const allocation = [
  { label: 'Cleanup Operations', pct: 52, color: '#3baa3a' },
  { label: 'Training & Education', pct: 24, color: '#83c9ff' },
  { label: 'Logistics', pct: 14, color: '#6fff00' },
  { label: 'Admin & Operations', pct: 10, color: '#b7d7c2' },
]

export default function Donate() {
  const { user } = useAuth()
  const [form, setForm] = useState({
    amount: '',
    customAmount: '',
    name: user?.name || '',
    email: user?.email || '',
    message: '',
    anonymous: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const selectedAmount = form.customAmount ? form.customAmount : form.amount

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedAmount || !form.name || !form.email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // store donation
      const existing = JSON.parse(localStorage.getItem('cebuCleanDonations') || '[]')
      existing.push({ amount: selectedAmount, name: form.anonymous ? 'Anonymous' : form.name, email: form.email, message: form.message, date: new Date().toISOString() })
      localStorage.setItem('cebuCleanDonations', JSON.stringify(existing))
    }, 800)
  }

  return (
    <>
      <div className="page-hero">
        <h1>Support CebuClean</h1>
        <p>Your donation funds cleanup drives, recycling infrastructure, and environmental education programs across Cebu.</p>
      </div>

      <section style={{ padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* Donation Form */}
          <div className="card" style={{ gridColumn: 'span 1' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💚</div>
                <h3 style={{ marginBottom: '0.75rem' }}>Thank You!</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                  Your donation of <strong style={{ color: 'var(--brand-deep)' }}>₱{parseInt(selectedAmount).toLocaleString()}</strong> has been received.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  You'll receive a confirmation email shortly. Track how your donation is used on our Transparency page.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/transparency" className="btn-primary">View Transparency Report</Link>
                  <button className="btn-secondary" onClick={() => { setSubmitted(false); setForm({ ...form, amount: '', customAmount: '', message: '' }) }} style={{ padding: '0.75rem 1.5rem' }}>
                    Donate Again
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.75rem' }}>Make a Donation</h2>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Amount selector */}
                  <div className="form-group">
                    <label>Select Amount (₱)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '0.75rem' }}>
                      {amounts.map((a) => (
                        <button
                          type="button"
                          key={a}
                          onClick={() => setForm((f) => ({ ...f, amount: String(a), customAmount: '' }))}
                          style={{
                            padding: '0.7rem',
                            border: '1.5px solid',
                            borderColor: form.amount === String(a) && !form.customAmount ? 'var(--brand-deep)' : 'var(--line)',
                            borderRadius: 10,
                            background: form.amount === String(a) && !form.customAmount ? 'rgba(59,170,58,0.1)' : 'var(--card)',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: 'var(--ink)',
                            transition: 'all 0.15s',
                          }}
                        >
                          ₱{a.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      name="customAmount"
                      value={form.customAmount}
                      onChange={handleChange}
                      placeholder="Or enter custom amount (₱)"
                      min="1"
                      style={{ borderColor: form.customAmount ? 'var(--brand-deep)' : undefined }}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="donor-name">Full Name *</label>
                      <input id="donor-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="donor-email">Email *</label>
                      <input id="donor-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="donate-message">Leave a Message (optional)</label>
                    <textarea id="donate-message" name="message" value={form.message} onChange={handleChange} placeholder="Your message of support…" rows={3} />
                  </div>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                    <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={handleChange} style={{ width: 'auto' }} />
                    Donate anonymously
                  </label>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading || !selectedAmount || !form.name || !form.email}
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', opacity: (loading || !selectedAmount || !form.name || !form.email) ? 0.6 : 1 }}
                  >
                    {loading ? 'Processing…' : `Donate ${selectedAmount ? `₱${parseInt(selectedAmount).toLocaleString()}` : 'Now'} 💚`}
                  </button>

                  <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.78rem', marginTop: '0.75rem' }}>
                    🔒 Secure · 100% goes to programs · Tax-deductible receipt provided
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Fund Allocation */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>Where Your Money Goes</h3>
              {allocation.map((item) => (
                <div key={item.label} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: 'var(--muted)', fontWeight: 600 }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 10, background: 'var(--line)', borderRadius: 50, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: item.color, borderRadius: 50 }} />
                  </div>
                </div>
              ))}
              <Link to="/transparency" style={{ color: 'var(--brand-deep)', fontSize: '0.88rem', fontWeight: 600, display: 'block', marginTop: '0.5rem' }}>
                View full financial report →
              </Link>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>Your Impact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { amount: '₱250', impact: 'Covers 1 volunteer\'s cleanup gear for a full event' },
                  { amount: '₱500', impact: 'Provides waste collection bags for 2 barangays' },
                  { amount: '₱1,000', impact: 'Funds a recycling education workshop for 20 youth' },
                  { amount: '₱5,000', impact: 'Sponsors a full coast cleanup drive for 50 volunteers' },
                ].map((item) => (
                  <div key={item.amount} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.6rem', borderRadius: 8, background: 'var(--card)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-deep)', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>{item.amount}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{item.impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
