import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    // Simulate async
    setTimeout(() => {
      const result = login(form)
      setLoading(false)
      if (result.success) {
        navigate('/profile')
      } else {
        setError(result.message)
      }
    }, 400)
  }

  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ padding: '3.5rem 1.5rem 3rem' }}>
        <h1>Welcome Back</h1>
        <p>Sign in to access your volunteer dashboard and track your impact.</p>
      </div>

      {/* Form */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 460, margin: '0 auto' }}>
        <div className="card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌿</div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>Sign In</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: 'var(--brand-deep)', fontWeight: 600 }}>Register here</Link>
            </p>
          </div>

          {error && (
            <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: 10, padding: '0.85rem 1rem', marginBottom: '1.25rem', color: '#991b1b', fontSize: '0.9rem' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: 500, color: 'var(--muted)' }}>
                <input type="checkbox" style={{ width: 'auto' }} />
                Remember me
              </label>
              <span style={{ color: 'var(--brand-deep)', fontWeight: 600, cursor: 'pointer' }}>Forgot password?</span>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <div style={{ position: 'relative', borderTop: '1.5px solid var(--line)', marginBottom: '1.5rem' }}>
              <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'var(--surface)', padding: '0 0.75rem', color: 'var(--muted)', fontSize: '0.82rem' }}>or continue with</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {['🌐 Google', '📘 Facebook'].map((btn) => (
                <button
                  key={btn}
                  type="button"
                  style={{ padding: '0.7rem', border: '1.5px solid var(--line)', borderRadius: 10, background: 'var(--card)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)' }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Demo tip */}
        <div style={{ marginTop: '1.25rem', background: 'rgba(59,170,58,0.08)', border: '1.5px solid var(--line)', borderRadius: 12, padding: '1rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <strong style={{ color: 'var(--brand-deep)' }}>Demo tip:</strong> Register first to create an account, then log in with those credentials.
        </div>
      </section>
    </>
  )
}
