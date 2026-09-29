import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { accentColors, type AccentColor } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Lab', href: '#lab' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { accent, setAccent, mode, setMode } = useTheme();

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    setHidden(y > lastY && y > 100);
    setLastY(y);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Active section detection
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, { threshold: 0.4 });

    NAV_LINKS.forEach(link => {
      const el = document.getElementById(link.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        role="banner"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
            aria-label="Adeen Shahzad — Home"
          >
            <div style={{
              width: 50, height: 50,
              borderRadius: 12,
              background: 'linear-gradient(135deg, var(--accent), #4b2a68)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px var(--accent-glow)',
            }}>
              <Shield className="cyber-icon" size={34} color="#fff" strokeWidth={4.5} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              Adeen Shahzad
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" style={{ display: 'flex', gap: '0.25rem' }}>
            {NAV_LINKS.slice(0, 7).map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 8,
                  fontSize: '1.03rem',
                  fontWeight: 700,
                  color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                  transition: 'color 0.2s, background 0.2s',
                  fontFamily: 'var(--font-sans)',
                }}
                className="nav-link"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)')}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', border: '1px solid var(--border)', borderRadius: 9999, background: 'rgba(255,255,255,0.03)' }}>
              <div className="status-dot" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>ONLINE</span>
            </div>

            {/* Accent switcher */}
            <div style={{ display: 'flex', gap: '0.3rem' }} role="group" aria-label="Theme accent color">
              {(Object.keys(accentColors) as AccentColor[]).map(c => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  title={`${accentColors[c].label} accent`}
                  aria-label={`${accentColors[c].label} accent`}
                  aria-pressed={accent === c}
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'transparent',
                    border: accent === c ? '1px solid var(--border-accent)' : '1px solid transparent',
                    cursor: 'pointer',
                    outline: 'none',
                    padding: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.2s, border-color 0.2s',
                    transform: accent === c ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <span style={{ width: 25, height: 25, borderRadius: '50%', background: accentColors[c].primary, display: 'block', boxShadow: `0 0 12px ${accentColors[c].glow}` }} />
                </button>
              ))}
              <button
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                title={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                aria-label={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', color: 'var(--accent)', borderRadius: 8, padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}
              >
                {mode === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 0, minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              className="mobile-burger"
            >
              {mobileOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: 280,
              background: 'var(--bg-surface)',
              borderLeft: '1px solid var(--border)',
              zIndex: 200,
              padding: '5rem 1.5rem 2rem',
              backdropFilter: 'blur(20px)',
            }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="mobile-drawer-close"
              aria-label="Close navigation"
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--accent-dim)', border: '1px solid var(--border-accent)',
                borderRadius: 10, color: 'var(--accent)', cursor: 'pointer',
              }}
            >
              <X size={25} />
            </button>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: activeSection === link.href.slice(1) ? 'var(--accent-dim)' : 'none',
                    border: 'none', cursor: 'pointer',
                    padding: '0.875rem 1rem',
                    minHeight: 48,
                    borderRadius: 8,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                    textAlign: 'left',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%',
                    fontFamily: 'var(--font-sans)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {link.label}
                  <ChevronRight size={20} />
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 199, backdropFilter: 'blur(2px)',
          }}
          aria-hidden="true"
        />
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-burger { display: none !important; } }
        @media (max-width: 768px) {
          nav[aria-label="Primary navigation"] { display: none !important; }
          .status-dot ~ span { display: none; }
        }
      `}</style>
    </>
  );
}
