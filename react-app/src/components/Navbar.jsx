import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LeafIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path
      d="M20 4C12 4 5 11 5 20c0 7.5 4.5 12.5 10 15l5 2.5 5-2.5C30.5 32.5 35 27.5 35 20c0-9-7-16-15-16z"
      fill="#6fff00"
    />
    <path d="M20 8c-4 4-6 10-4 17" stroke="#0f291f" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 8c4 4 6 10 4 17" stroke="#0f291f" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Features' },
  { to: '/donate', label: 'Donate' },
  { to: '/seminar', label: 'Seminars' },
  { to: '/impact', label: 'Impact' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setMobileOpen(false)
  }

  const close = () => setMobileOpen(false)

  const activeLinkStyle = ({ isActive }) => ({
    padding: '0.35rem 0.85rem',
    borderRadius: 8,
    fontWeight: 500,
    fontSize: '0.9rem',
    color: isActive ? '#0f291f' : 'var(--muted)',
    background: isActive ? 'var(--brand)' : 'transparent',
    transition: 'all 0.15s',
  })

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(237,245,239,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1.5px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={close}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--ink)',
            flexShrink: 0,
          }}
        >
          <LeafIcon />
          Cebu Clean
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={activeLinkStyle}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="desktop-nav" style={{ gap: '0.5rem' }}>
          {user ? (
            <>
              <NavLink
                to="/profile"
                style={activeLinkStyle}
              >
                👤 {user.name.split(' ')[0]}
              </NavLink>
              <NavLink
                to="/dashboard"
                style={activeLinkStyle}
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="btn-secondary"
                style={{ padding: '0.35rem 1rem', fontSize: '0.85rem' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ padding: '0.35rem 0.9rem', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', color: 'var(--muted)' }}>
                Login
              </Link>
              <Link to="/register" className="btn-primary" style={{ padding: '0.4rem 1.1rem', fontSize: '0.875rem' }}>
                Join Us
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: '1.5px solid var(--line)',
            borderRadius: 8,
            padding: '0.3rem 0.6rem',
            cursor: 'pointer',
            fontSize: '1.3rem',
            color: 'var(--ink)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: 'var(--surface)',
            borderTop: '1.5px solid var(--line)',
            padding: '1.25rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={close}
              style={({ isActive }) => ({
                padding: '0.65rem 1rem',
                borderRadius: 10,
                fontWeight: 500,
                fontSize: '0.95rem',
                textAlign: 'center',
                background: isActive ? 'var(--brand)' : 'var(--card)',
                color: 'var(--ink)',
                border: '1.5px solid transparent',
              })}
            >
              {l.label}
            </NavLink>
          ))}

          {user ? (
            <>
              <NavLink to="/profile" onClick={close} style={{ padding: '0.65rem 1rem', borderRadius: 10, fontWeight: 500, fontSize: '0.95rem', textAlign: 'center', background: 'var(--card)', color: 'var(--ink)' }}>
                My Profile
              </NavLink>
              <NavLink to="/dashboard" onClick={close} style={{ padding: '0.65rem 1rem', borderRadius: 10, fontWeight: 500, fontSize: '0.95rem', textAlign: 'center', background: 'var(--card)', color: 'var(--ink)' }}>
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                style={{ gridColumn: 'span 2', padding: '0.65rem 1rem', borderRadius: 10, fontWeight: 600, background: '#fee2e2', color: '#991b1b', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={close} style={{ padding: '0.65rem 1rem', borderRadius: 10, fontWeight: 500, fontSize: '0.95rem', textAlign: 'center', background: 'var(--card)', color: 'var(--ink)' }}>
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={close}
                style={{ padding: '0.65rem 1rem', borderRadius: 10, fontWeight: 700, fontSize: '0.95rem', textAlign: 'center', background: 'linear-gradient(135deg,#6fff00,#3baa3a)', color: 'var(--ink)' }}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </header>
  )
}
