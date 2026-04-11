import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    phone: '', area: '', barangay: '', role: '',
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    setErrors((err) => ({ ...err, [name]: '' }))
  }

  const validateStep1 = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required.'
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters.'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match.'
    return e
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.area.trim()) e.area = 'City/municipality is required.'
    if (!form.role) e.role = 'Please select a volunteer role.'
    if (!form.agreeTerms) e.agreeTerms = 'You must agree to the terms.'
    return e
  }

  const handleNext = () => {
    const errs = validateStep1()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStep(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validateStep2()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      register(form)
      setLoading(false)
      navigate('/profile')
    }, 600)
  }

  const FieldError = ({ field }) =>
    errors[field] ? (
      <span style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>
        {errors[field]}
      </span>
    ) : null

  return (
    <>
      <div className="page-hero" style={{ padding: '3.5rem 1.5rem 3rem' }}>
        <h1>Join CebuClean</h1>
        <p>Register as a volunteer and start making a difference in your community.</p>
      </div>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 540, margin: '0 auto' }}>
        {/* Progress Steps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          {[1, 2].map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div
                style={{
                  width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: step >= s ? 'var(--brand-deep)' : 'var(--line)', color: step >= s ? 'white' : 'var(--muted)',
                  fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
                }}
              >
                {step > s ? '✓' : s}
              </div>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.88rem', fontWeight: step === s ? 600 : 400, color: step === s ? 'var(--ink)' : 'var(--muted)' }}>
                {s === 1 ? 'Account Info' : 'Profile Details'}
              </span>
              {s < 2 && <div style={{ flex: 1, height: 2, background: step > s ? 'var(--brand-deep)' : 'var(--line)', marginLeft: '0.75rem', marginRight: '0.25rem' }} />}
            </div>
          ))}
        </div>

        <div className="card">
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
              {step === 1 ? 'Create Your Account' : 'Your Volunteer Profile'}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
              Already registered?{' '}
              <Link to="/login" style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>Sign in here</Link>
            </p>
          </div>

          {step === 1 && (
            <div>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Juan dela Cruz" autoComplete="name" />
                <FieldError field="name" />
              </div>
              <div className="form-group">
                <label htmlFor="reg-email">Email Address *</label>
                <input id="reg-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
                <FieldError field="email" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input id="password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 8 characters" autoComplete="new-password" />
                  <FieldError field="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input id="confirmPassword" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" autoComplete="new-password" />
                  <FieldError field="confirmPassword" />
                </div>
              </div>
              <button type="button" className="btn-primary" onClick={handleNext} style={{ width: '100%', padding: '0.85rem' }}>
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" autoComplete="tel" />
                  <FieldError field="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="area">City / Municipality *</label>
                  <input id="area" name="area" value={form.area} onChange={handleChange} placeholder="e.g. Cebu City" />
                  <FieldError field="area" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="barangay">Barangay</label>
                <input id="barangay" name="barangay" value={form.barangay} onChange={handleChange} placeholder="e.g. Lahug" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Primary Volunteer Role *</label>
                <select id="role" name="role" value={form.role} onChange={handleChange}>
                  <option value="">Select a role…</option>
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                <FieldError field="role" />
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontWeight: 400 }}>
                  <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} style={{ width: 'auto', marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>
                    I agree to the <span style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>Terms of Service</span> and{' '}
                    <span style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>Privacy Policy</span>
                  </span>
                </label>
                <FieldError field="agreeTerms" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.75rem' }}>
                <button type="button" className="btn-secondary" onClick={() => setStep(1)} style={{ padding: '0.85rem' }}>
                  ← Back
                </button>
                <button type="submit" className="btn-primary" disabled={loading} style={{ padding: '0.85rem', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Creating account…' : 'Create Account 🌿'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
