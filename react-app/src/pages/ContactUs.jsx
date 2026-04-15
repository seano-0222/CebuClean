import { useState } from 'react'

const contactInfo = [
  { icon: '📍', label: 'Address', value: '2F Colon Heritage Bldg, Colon St., Cebu City 6000' },
  { icon: '✉️', label: 'Email', value: 'hello@cebuclean.org' },
  { icon: '📞', label: 'Phone', value: '+63 32 234 5678' },
  { icon: '🕐', label: 'Office Hours', value: 'Monday – Friday, 9:00 AM – 5:00 PM' },
]

const subjects = [
  'General Inquiry',
  'Volunteer Opportunities',
  'Donation Questions',
  'Partnership / Sponsorship',
  'Media & Press',
  'Event Collaboration',
  'Report an Issue',
]

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>Have a question, idea, or want to partner with us? We'd love to hear from you.</p>
      </div>

      <section style={{ padding: '4rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you for reaching out. Our team will get back to you within 1–2 business days.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  style={{ padding: '0.7rem 1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  Fill out the form and we'll respond as soon as possible.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email *</label>
                      <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject…</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you…"
                      rows={5}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading || !form.name || !form.email || !form.message}
                    style={{ width: '100%', padding: '0.85rem', opacity: (loading || !form.name || !form.email || !form.message) ? 0.6 : 1 }}
                  >
                    {loading ? 'Sending…' : 'Send Message ✉️'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactInfo.map((item) => (
                <div key={item.label} className="card-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(59,170,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.15rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.95rem' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              style={{
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1.5px solid var(--line)',
                background: 'linear-gradient(135deg, #c8e6c9, #b3e5fc)',
                height: 220,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: 'var(--muted)',
              }}
            >
              <div style={{ fontSize: '3rem' }}>📍</div>
              <div style={{ fontWeight: 600 }}>Cebu City, Philippines</div>
              <div style={{ fontSize: '0.85rem' }}>Colon Heritage Building</div>
            </div>

            {/* FAQ teaser */}
            <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(59,170,58,0.04)' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>💬 Frequently Asked</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'How do I volunteer for a cleanup event?',
                  'Is my donation tax-deductible?',
                  'How can I track where my donation goes?',
                ].map((q) => (
                  <div key={q} style={{ fontSize: '0.88rem', color: 'var(--brand-deep)', display: 'flex', gap: '0.4rem' }}>
                    <span>→</span> {q}
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
