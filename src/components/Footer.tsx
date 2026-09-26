import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ExternalLink, Mail, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
    }} role="contentinfo">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem',
              color: 'var(--text-primary)', marginBottom: '0.875rem',
            }}>
              Adeen Shahzad
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.25rem' }}>
              Cybersecurity Specialist. Penetration Tester. Security Researcher.
              Air University, Islamabad.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {[
                { href: personalInfo.github, icon: <Github size={17} />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { href: personalInfo.tryhackme, icon: <ExternalLink size={17} />, label: 'TryHackMe' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />, label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 36, height: 36, borderRadius: 9,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.background = 'var(--accent-dim)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              NAVIGATION
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} aria-label="Footer navigation">
              {NAV_LINKS.slice(0, 5).map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0, textAlign: 'left',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-sans)',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* More links */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              SECTIONS
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} aria-label="Footer sections navigation">
              {NAV_LINKS.slice(5).map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0, textAlign: 'left',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-sans)',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Security disclosure */}
            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '0.625rem' }}>
                SECURITY
              </h3>
              <a
                href="#security-disclosure"
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                Vulnerability Disclosure
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span>© 2026 Adeen Shahzad. Built with</span>
            <Heart size={13} style={{ color: 'var(--accent)', margin: '0 0.2rem' }} />
            <span>and ⚡</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="status-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem', right: '2rem',
          width: 44, height: 44,
          borderRadius: 12,
          background: 'var(--accent)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#000',
          boxShadow: '0 4px 20px var(--accent-glow)',
          zIndex: 50,
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 8px 30px var(--accent-glow)' }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </motion.button>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div[style*="grid-template-columns: 1.5fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
