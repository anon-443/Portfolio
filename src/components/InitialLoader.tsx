import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

const BOOT_LINES = [
  { text: '> INITIALIZING SECURITY PROTOCOLS...', delay: 0 },
  { text: '> LOADING ENCRYPTION MODULES...', delay: 400 },
  { text: '> SCANNING NETWORK INTERFACES...', delay: 800 },
  { text: '> AUTHENTICATING USER CREDENTIALS...', delay: 1200 },
  { text: '> ESTABLISHING SECURE TUNNEL...', delay: 1600 },
  { text: '> ACCESS GRANTED ✓', delay: 2000, accent: true },
];

export default function InitialLoader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisible(v => [...v, i]);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => {
            setDone(true);
            setTimeout(onDone, 600);
          }, 500);
        }
      }, line.delay);
    });
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
          }}
        >
          <div style={{ maxWidth: 520, width: '90%' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginBottom: '2rem', textAlign: 'center' }}
            >
              <div style={{
                width: 64, height: 64,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--accent), #4b2a68)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 0 40px var(--accent-glow)',
              }}>
                <Shield className="cyber-icon" size={42} color="#fff" strokeWidth={4.5} />
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}>
                ADEEN SHAHZAD // CYBERSECURITY
              </div>
            </motion.div>

            {/* Terminal window */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span style={{ marginLeft: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  boot_sequence.sh
                </span>
              </div>
              <div className="terminal-body" style={{ padding: '1.5rem' }}>
                {BOOT_LINES.map((line, i) => (
                  <AnimatePresence key={i}>
                    {visible.includes(i) && (
                      <motion.div
                        className="loader-line"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: line.accent ? 'var(--accent)' : 'var(--text-secondary)' }}
                      >
                        {line.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
                {visible.length > 0 && !done && (
                  <div style={{ color: 'var(--accent)', marginTop: '0.25rem' }}>
                    <span className="typewriter-cursor" />
                  </div>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: '1.5rem' }}>
              <div className="progress-track">
                <motion.div
                  className="progress-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(visible.length / BOOT_LINES.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginTop: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}>
                <span>SYSTEM BOOT</span>
                <span>{Math.round((visible.length / BOOT_LINES.length) * 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
