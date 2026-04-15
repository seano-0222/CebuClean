import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const roles = [
  'Cleanup Crew Member',
  'Community Educator',
  'Recycling Coordinator',
  'Youth Leader',
  'Events Organizer',
  'Social Media Volunteer',
  'Donor Liaison',
]

const steps = [
  { step: '01', title: 'Orientation', desc: 'Attend a 2-hour online orientation covering safety, waste sorting, and our community protocols.' },
  { step: '02', title: 'Deployment', desc: 'Get matched with events in your area and receive your volunteer kit.' },
  { step: '03', title: 'Track Hours', desc: 'Log your volunteer hours and earn recognition badges through your profile.' },
  { step: '04', title: 'Lead & Grow', desc: 'Experienced volunteers progress to team lead roles and take charge of events.' },
]

export default function Volunteer() {
  const { user, register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    barangay: '',
    area: user?.area || '',
    role: user?.role || '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.area || !form.role) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Update registry with volunteer details
      const existing = JSON.parse(localStorage.getItem('cebuCleanVolunteerRegistry') || '{}')
      const updated = { ...existing, ...form }
      localStorage.setItem('cebuCleanVolunteerRegistry', JSON.stringify(updated))
      setSubmitted(true)
    }, 700)
  }

  return (
    <>
      <div className="page-hero">
        <h1>Become a Volunteer</h1>
        <p>Join 2,659 community members already making a difference across Cebu's barangays.</p>
      </div>

      <section style={{ padding: '4rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

          {/* Registration Form */}
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🙌</div>
                <h3 style={{ marginBottom: '0.75rem' }}>You're Registered!</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  Welcome to the CebuClean volunteer family, <strong>{form.name}</strong>! Check your email for orientation details and upcoming events near you.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn-primary" onClick={() => navigate('/profile')} style={{ padding: '0.75rem 1.5rem' }}>
                    View My Profile
                  </button>
                  <button className="btn-secondary" onClick={() => navigate('/seminar')} style={{ padding: '0.75rem 1.5rem' }}>
                    Browse Seminars
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Volunteer Registration</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  Fill out the form below to join our network of community volunteers.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="vol-name">Full Name *</label>
                      <input id="vol-name" name="name" value={form.name} onChange={handleChange} placeholder="Juan dela Cruz" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-email">Email Address *</label>
                      <input id="vol-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="vol-phone">Phone Number</label>
                      <input id="vol-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="vol-area">City / Municipality *</label>
                      <input id="vol-area" name="area" value={form.area} onChange={handleChange} placeholder="e.g. Cebu City" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="vol-barangay">Barangay</label>
                    <input id="vol-barangay" name="barangay" value={form.barangay} onChange={handleChange} placeholder="e.g. Lahug" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vol-role">Primary Volunteer Interest *</label>
                    <select id="vol-role" name="role" value={form.role} onChange={handleChange} required>
                      <option value="">Select a role…</option>
                      {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="vol-message">Why do you want to volunteer? (optional)</label>
                    <textarea id="vol-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us your motivation…" rows={3} />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading || !form.name || !form.email || !form.area || !form.role}
                    style={{ width: '100%', padding: '0.9rem', opacity: (loading || !form.name || !form.email || !form.area || !form.role) ? 0.6 : 1 }}
                  >
                    {loading ? 'Submitting…' : 'Register as Volunteer 🙋'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Onboarding + Benefits */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>How It Works</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {steps.map((s, i) => (
                  <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingLeft: '0.5rem', borderLeft: '3px solid', borderLeftColor: i === 0 ? 'var(--brand-deep)' : 'var(--line)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--brand-deep)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>{s.step}</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{s.title}</div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>Volunteer Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  '🎽 Free volunteer T-shirt and cleanup kit',
                  '📜 Certificate of service for each event',
                  '🏆 Recognition badges on your profile',
                  '🎓 Free access to all eco-education seminars',
                  '🤝 Join a network of 2,659+ like-minded changemakers',
                  '📊 Personal impact dashboard tracking your contributions',
                ].map((b) => (
                  <div key={b} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    {b}
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
