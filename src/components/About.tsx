import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { MapPin, GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  whoami    — About me
  skills    — Core competencies
  projects  — Notable work
  certs     — Certifications
  contact   — Get in touch
  clear     — Clear terminal`,
  whoami: `Adeen Shahzad
Role: Purple Team Security Specialist | Penetration Tester
Education: B.S. Cybersecurity @ Air University (2028)
Location: Islamabad, Pakistan
Focus: Offensive Security, Web App Security, AI Security, VAPT, DFIR`,
  skills: `Offensive: Nmap, Burp Suite, Metasploit, SQLMap, Hydra
Defensive: Wazuh SIEM, Snort IDS, Nessus, YARA
Frameworks: OWASP Top 10, MITRE ATT&CK, NIST 800-207
Languages: Python, Bash, C++, x86 Assembly`,
  projects: `1. VARE — Static Malware Analysis Tool
2. MediConnect — Secure Healthcare Platform
3. SDFS — Zero Trust Distributed File System
4. Network Security Lab (ARP Poisoning / DNS Spoof)
5. Remote Desktop Control Tool
6. CTF Tournament Scheduler

Type 'projects' in hero to see full case studies →`,
  certs: `✓ ISO/IEC 27001:2022 — SkillFront
✓ Cyber Threat Intelligence 101 — arcX
✓ SOC Foundations — Microsoft
✓ Critical Infrastructure Protection — OPSWAT
✓ SQL Injection Attacks — EC-Council
✓ Intro to Dark Web, Anonymity & Crypto — EC-Council
✓ Foundation Level Threat Intel Analyst — arcX`,
  contact: `Email: adeen.cys@gmail.com
GitHub: github.com/anon-443
LinkedIn: linkedin.com/in/adeen-shahzad-/
TryHackMe: tryhackme.com/p/adeen`,
};

function InteractiveTerminal() {
  const [history, setHistory] = useState<{ cmd: string; out: string }[]>([
    { cmd: '', out: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      setHistory([{ cmd: '', out: 'Terminal cleared. Type "help" for commands.' }]);
      setInput('');
      return;
    }
    const output = COMMANDS[trimmed] || `Command not found: "${trimmed}". Type "help" for available commands.`;
    setHistory(h => [...h, { cmd: trimmed, out: output }]);
    setInput('');
  };

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [history]);

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: '#ff5f57' }} />
        <div className="terminal-dot" style={{ background: '#febc2e' }} />
        <div className="terminal-dot" style={{ background: '#28c840' }} />
        <span style={{ marginLeft: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          adeen@kali:~$
        </span>
      </div>
      <div ref={bodyRef} className="terminal-body">
        {history.map((h, i) => (
          <div key={i}>
            {h.cmd && (
              <div>
                <span className="terminal-prompt">adeen@kali:~$ </span>
                <span style={{ color: 'var(--text-primary)' }}>{h.cmd}</span>
              </div>
            )}
            <div className="terminal-output">{h.out}</div>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
          <span className="terminal-prompt">adeen@kali:~$ </span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleCommand(input);
            }}
            aria-label="Terminal command input"
            spellCheck={false}
            autoComplete="off"
          />
          <span className="typewriter-cursor" style={{ marginLeft: 2 }} />
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            01 / About
          </motion.span>
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Who Am I?
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left: Bio & Details */}
          <div>
            {/* Info tags */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}
            >
              {[
                { icon: <GraduationCap size={20} />, text: `${personalInfo.degree} @ ${personalInfo.university}` },
                { icon: <MapPin size={20} />, text: personalInfo.location },
                { icon: <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>📅</span>, text: `Graduating ${personalInfo.graduationYear}` },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex', alignItems: 'center', gap: '0.625rem',
                  color: 'var(--text-secondary)', fontSize: '0.9375rem',
                }}>
                  <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Bio paragraphs */}
            {[personalInfo.about].map((para, i) => (
              <motion.p
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 1}
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '0.9375rem',
                  marginBottom: '1.25rem',
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Now section */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={3}
              style={{
                padding: '1.25rem',
                borderRadius: 12,
                background: 'var(--accent-dim)',
                border: '1px solid var(--border-accent)',
                marginTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div className="status-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                  NOW
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {personalInfo.now}
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={4}
              style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}
            >
              {[
                { href: personalInfo.github, label: 'GitHub', icon: <Github size={16} /> },
                { href: personalInfo.linkedin, label: 'LinkedIn', icon: <Linkedin size={16} /> },
                { href: personalInfo.tryhackme, label: 'TryHackMe', icon: <ExternalLink size={16} /> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual Showcase & Terminal */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Cyber Profile Image Showcase */}
            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid var(--border-accent)',
              boxShadow: '0 0 30px var(--accent-glow)',
              position: 'relative',
            }}>
              <img
                src="/Portfolio/images/about_profile.png"
                alt="Cybersecurity analyst reviewing network activity in an operations center"
                style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 12, left: 12, right: 12,
                background: 'rgba(8, 12, 20, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.875rem',
                borderRadius: 8,
                border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="status-dot" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc' }}>
                    SECURITY OPERATIONS // OFFENSE + DEFENSE
                  </span>
                </div>
                <ShieldCheck size={20} color="var(--accent)" aria-hidden="true" />
              </div>
            </div>

            {/* Interactive Terminal */}
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  INTERACTIVE TERMINAL
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                  Click the terminal and type a command to explore.
                </p>
              </div>
              <InteractiveTerminal />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
