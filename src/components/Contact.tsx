import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ExternalLink, Mail, Download, Send, Copy, Check, X } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Partial<typeof formData> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (formData.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your Web3Forms access key
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: personalInfo.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub', sub: '@anon-443' },
    { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn', sub: 'adeen-shahzad-' },
    { href: personalInfo.tryhackme, icon: <ExternalLink size={18} />, label: 'TryHackMe', sub: 'adeen' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            09 / Contact
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Get In Touch
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Open to cybersecurity roles, collaborations, and security research opportunities.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Info */}
          <div>
            {/* Email copy */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              style={{
                padding: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-accent)',
                borderRadius: 12,
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Mail size={14} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>EMAIL</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {personalInfo.email}
                </span>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  style={{
                    background: 'none', border: '1px solid var(--border)',
                    borderRadius: 8, cursor: 'pointer', padding: '0.35rem',
                    color: copied ? 'var(--accent)' : 'var(--text-muted)',
                    transition: 'all 0.2s', display: 'flex', alignItems: 'center',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
              style={{ marginBottom: '2rem' }}
            >
              <a href={personalInfo.resume} download className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Download size={16} /> Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.875rem 1.125rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: 'var(--text-primary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.background = 'var(--accent-dim)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.label}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{s.sub}</div>
                  </div>
                  <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
          >
            <div style={{
              padding: '2rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
            }}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: 'center', padding: '3rem 1rem' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{
                        width: 64, height: 64,
                        borderRadius: '50%',
                        background: '#10b98120',
                        border: '2px solid #10b981',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '1.75rem',
                      }}
                    >
                      ✓
                    </motion.div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Thanks for reaching out. I'll get back to you within 24–48 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn btn-ghost"
                      style={{ marginTop: '1.5rem' }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          className="form-field"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          style={{ borderColor: errors.name ? '#ef4444' : undefined }}
                        />
                        {errors.name && <p id="name-error" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className="form-field"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          style={{ borderColor: errors.email ? '#ef4444' : undefined }}
                        />
                        {errors.email && <p id="email-error" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        className="form-field"
                        placeholder="Security Collaboration / Job Opportunity"
                        value={formData.subject}
                        onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
                        aria-required="true"
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        style={{ borderColor: errors.subject ? '#ef4444' : undefined }}
                      />
                      {errors.subject && <p id="subject-error" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        className="form-field"
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                        aria-required="true"
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        style={{ resize: 'vertical', borderColor: errors.message ? '#ef4444' : undefined }}
                      />
                      {errors.message && <p id="message-error" style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        borderRadius: 8,
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        color: '#ef4444', fontSize: '0.875rem',
                      }}>
                        <X size={14} />
                        Failed to send. Please email directly at {personalInfo.email}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === 'loading'}
                      style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
                    >
                      {status === 'loading' ? (
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                          ⟳
                        </motion.span>
                      ) : (
                        <Send size={16} />
                      )}
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
