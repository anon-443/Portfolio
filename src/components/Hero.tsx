import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, ArrowDown, ChevronRight, Shield } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

// Animated radar/HUD graphic
function CyberHUD() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '1', margin: '0 auto' }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        {/* Concentric rings */}
        {[160, 120, 80, 40].map((r, i) => (
          <circle
            key={r}
            cx="200" cy="200" r={r}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeOpacity={0.15 + i * 0.05}
          />
        ))}

        {/* Cross-hairs */}
        <line x1="200" y1="40" x2="200" y2="360" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.1" />

        {/* Scanning arc */}
        <motion.g
          style={{ transformOrigin: '200px 200px' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        >
          <path
            d={`M 200 200 L 200 40 A 160 160 0 0 1 ${200 + 160 * Math.sin(Math.PI / 3)} ${200 - 160 * Math.cos(Math.PI / 3)} Z`}
            fill="url(#scanGrad)"
            strokeWidth="0"
            opacity="0.3"
          />
          <line x1="200" y1="200" x2="200" y2="40" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.8" />
        </motion.g>

        {/* Gradient for scan */}
        <defs>
          <radialGradient id="scanGrad" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Nodes */}
        {[
          { cx: 120, cy: 110, label: 'RECON', pulse: 0 },
          { cx: 290, cy: 145, label: 'EXPLOIT', pulse: 1 },
          { cx: 310, cy: 270, label: 'REPORT', pulse: 2 },
          { cx: 115, cy: 280, label: 'DEFEND', pulse: 3 },
          { cx: 200, cy: 85, label: 'INTEL', pulse: 4 },
        ].map(node => (
          <motion.g key={node.label}>
            <motion.circle
              cx={node.cx} cy={node.cy} r={5}
              fill="var(--accent)"
              animate={{ opacity: [0.4, 1, 0.4], r: [4, 6, 4] }}
              transition={{ repeat: Infinity, duration: 2 + node.pulse * 0.5, ease: 'easeInOut', delay: node.pulse * 0.4 }}
            />
            <text
              x={node.cx} y={node.cy - 12}
              textAnchor="middle"
              fontSize="8"
              fill="var(--accent)"
              fontFamily="var(--font-mono)"
              opacity="0.7"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Center */}
        <motion.circle cx="200" cy="200" r="8" fill="var(--accent)"
          animate={{ r: [7, 10, 7], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <text x="200" y="230" textAnchor="middle" fontSize="9" fill="var(--text-muted)" fontFamily="var(--font-mono)">
          TARGET ACQUIRED
        </text>
      </svg>

      {/* Corner decorations */}
      {['-left', '-right', 'left', 'right'].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 20, height: 20,
          borderTop: i < 2 ? '2px solid var(--accent)' : 'none',
          borderBottom: i >= 2 ? '2px solid var(--accent)' : 'none',
          borderLeft: i % 2 === 0 ? '2px solid var(--accent)' : 'none',
          borderRight: i % 2 === 1 ? '2px solid var(--accent)' : 'none',
          top: i < 2 ? 0 : 'auto',
          bottom: i >= 2 ? 0 : 'auto',
          left: i % 2 === 0 ? 0 : 'auto',
          right: i % 2 === 1 ? 0 : 'auto',
          opacity: 0.5,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = typing ? 0 : role.length;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (typing) {
        if (i <= role.length) {
          setDisplayed(role.slice(0, i++));
          timeout = setTimeout(tick, 60);
        } else {
          timeout = setTimeout(() => setTyping(false), 2000);
        }
      } else {
        if (i >= 0) {
          setDisplayed(role.slice(0, i--));
          timeout = setTimeout(tick, 30);
        } else {
          setRoleIdx(r => (r + 1) % ROLES.length);
          setTyping(true);
        }
      }
    };
    timeout = setTimeout(tick, 100);
    return () => clearTimeout(timeout);
  }, [roleIdx, typing]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Radial gradient accent */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 9999,
                border: '1px solid var(--border-accent)',
                background: 'var(--accent-dim)',
                marginBottom: '1.5rem',
              }}
            >
              <Shield size={13} color="var(--accent)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                CYBERSECURITY PROFESSIONAL
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.6vw, 3.2rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              Hi, I'm{' '}
              <span style={{ color: 'var(--accent)', textShadow: '0 0 30px var(--accent-glow)' }}>
                Adeen Shahzad
              </span>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2em',
              }}
              aria-live="polite"
            >
              <span style={{ color: 'var(--accent)' }}>$ </span>
              {displayed}
              <span className="typewriter-cursor" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: '2.5rem',
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'nowrap' }}
            >
              <button className="btn btn-primary" onClick={scrollToProjects} style={{ whiteSpace: 'nowrap' }}>
                View Projects <ChevronRight size={16} />
              </button>
              <a className="btn btn-outline" href={personalInfo.resume} download="Adeen_Shahzad_Resume.pdf" style={{ whiteSpace: 'nowrap' }}>
                <Download size={16} /> Download Resume
              </a>
              <button className="btn btn-ghost" onClick={scrollToContact} style={{ whiteSpace: 'nowrap' }}>
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
            >
              {[
                { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <ExternalLink size={18} />, href: personalInfo.tryhackme, label: 'TryHackMe' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)',
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
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: HUD graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CyberHUD />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
          color: 'var(--text-muted)',
        }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #hero > div > div {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div > div:last-child {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
