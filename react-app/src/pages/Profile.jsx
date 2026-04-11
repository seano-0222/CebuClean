import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const activityFeed = [
  { icon: '🌊', text: 'Participated in Mactan Beach Cleanup', date: 'Apr 8, 2026', kg: '12 kg collected' },
  { icon: '🎓', text: 'Attended Zero Waste Living Seminar', date: 'Mar 22, 2026', kg: null },
  { icon: '🌿', text: 'Completed Lahug Park Cleanup Drive', date: 'Mar 15, 2026', kg: '8 kg collected' },
  { icon: '🎓', text: 'Attended Marine Ecosystem Workshop', date: 'Feb 28, 2026', kg: null },
  { icon: '🌊', text: 'Participated in Colon Street Cleanup', date: 'Feb 14, 2026', kg: '11 kg collected' },
]

const badges = [
  { icon: '🥉', label: 'First Cleanup', earned: true },
  { icon: '🌊', label: 'Beach Guardian', earned: true },
  { icon: '🎓', label: 'Eco Learner', earned: true },
  { icon: '🥈', label: '10 Events', earned: true },
  { icon: '🌿', label: '100 kg Warrior', earned: true },
  { icon: '🥇', label: '25 Events', earned: false },
  { icon: '🏆', label: 'Year Leader', earned: false },
  { icon: '⭐', label: 'All-Star', earned: false },
]

export default function Profile() {
  const { user, logout, updateProfile } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [editForm, setEditForm] = useState({ name: user?.name || '', area: user?.area || '', role: user?.role || '' })

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🔒</div>
        <h2 style={{ marginBottom: '0.75rem' }}>You're not logged in</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>Please sign in to view your volunteer profile.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/login" className="btn-primary">Sign In</Link>
          <Link to="/register" className="btn-secondary">Register</Link>
        </div>
      </div>
    )
  }

  const handleSave = () => {
    updateProfile(editForm)
    setEditing(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const initials = user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <>
      {/* Profile Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0d3d20 0%, #0a2d47 100%)',
          padding: '3.5rem 1.5rem',
          color: 'white',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6fff00, #3baa3a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 900,
              color: '#0f291f',
              flexShrink: 0,
              border: '3px solid rgba(255,255,255,0.2)',
            }}
          >
            {initials}
          </div>
          <div style={{ flex: 1 }}>
            <span className="badge" style={{ background: 'rgba(111,255,0,0.2)', color: '#a0ff5a', marginBottom: '0.4rem', display: 'inline-block' }}>
              Active Volunteer
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'white', marginBottom: '0.25rem' }}>
              {user.name}
            </h1>
            <p style={{ opacity: 0.75, fontSize: '0.9rem' }}>
              {user.role || 'Volunteer'} · {user.area || 'Cebu'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setEditing(!editing)}
              className="btn-secondary"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)', padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
            >
              {editing ? 'Cancel' : '✏️ Edit Profile'}
            </button>
            <button onClick={handleLogout} className="btn-danger" style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 1000, margin: '0 auto' }}>

        {/* Edit Form */}
        {editing && (
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>Edit Profile</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input value={editForm.name} onChange={(e) => setEditForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label>City / Municipality</label>
                <input value={editForm.area} onChange={(e) => setEditForm((f) => ({ ...f, area: e.target.value }))} />
              </div>
            </div>
            <div className="form-group">
              <label>Primary Role</label>
              <input value={editForm.role} onChange={(e) => setEditForm((f) => ({ ...f, role: e.target.value }))} />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-primary" onClick={handleSave} style={{ padding: '0.7rem 1.5rem' }}>Save Changes</button>
              <button className="btn-secondary" onClick={() => setEditing(false)} style={{ padding: '0.7rem 1.5rem' }}>Cancel</button>
            </div>
          </div>
        )}

        {/* Profile Details */}
        <div className="grid-2" style={{ marginBottom: '2rem', alignItems: 'start' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>Profile Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Full Name', value: user.name },
                { label: 'Email Address', value: user.email },
                { label: 'City / Municipality', value: user.area || '—' },
                { label: 'Primary Role', value: user.role || '—' },
                { label: 'Member Since', value: 'January 2025' },
                { label: 'Volunteer Status', value: 'Active ✅' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--line)', gap: '1rem' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.85rem', flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Impact */}
          <div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1.25rem' }}>My Impact</h3>
              <div className="grid-2" style={{ gap: '0.75rem' }}>
                {[
                  { value: '128', label: 'Hours Volunteered', icon: '⏰' },
                  { value: '31', label: 'Missions Completed', icon: '✅' },
                  { value: '11', label: 'Seminars Attended', icon: '🎓' },
                  { value: '214 kg', label: 'Waste Recovered', icon: '♻️' },
                ].map((k) => (
                  <div key={k.label} style={{ background: 'var(--card)', borderRadius: 12, padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{k.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--brand-deep)' }}>{k.value}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '0.15rem', lineHeight: 1.3 }}>{k.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="card">
              <h3 style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>Badges Earned</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
                {badges.map((b) => (
                  <div
                    key={b.label}
                    title={b.label}
                    style={{
                      textAlign: 'center',
                      padding: '0.75rem 0.5rem',
                      borderRadius: 10,
                      background: b.earned ? 'rgba(59,170,58,0.08)' : 'var(--card)',
                      border: '1.5px solid',
                      borderColor: b.earned ? 'var(--brand-deep)' : 'var(--line)',
                      opacity: b.earned ? 1 : 0.45,
                    }}
                  >
                    <div style={{ fontSize: '1.4rem' }}>{b.icon}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.3 }}>{b.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity History */}
        <div className="card">
          <h3 style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {activityFeed.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.85rem 0',
                  borderBottom: i < activityFeed.length - 1 ? '1px solid var(--line)' : 'none',
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.text}</div>
                  {item.kg && <div style={{ fontSize: '0.8rem', color: 'var(--brand-deep)', marginTop: '0.1rem' }}>♻️ {item.kg}</div>}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', flexShrink: 0 }}>{item.date}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <Link to="/volunteer" className="btn-secondary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
              Find More Events →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
