import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero', icon: '🏠' },
  { label: 'About', href: '#about', icon: '👤' },
  { label: 'Skills', href: '#skills', icon: '⚡' },
  { label: 'Projects', href: '#projects', icon: '🔬' },
  { label: 'Experience', href: '#experience', icon: '💼' },
  { label: 'Certifications', href: '#certifications', icon: '🏆' },
  { label: 'Achievements', href: '#achievements', icon: '🎯' },
  { label: 'GitHub', href: '#github', icon: '💻' },
  { label: 'Lab Setup', href: '#lab', icon: '🛡️' },
  { label: 'Contact', href: '#contact', icon: '✉️' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = NAV_LINKS.filter(l =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = useCallback((href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
    setQuery('');
    setActiveIdx(0);
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { setActiveIdx(i => (i + 1) % filtered.length); e.preventDefault(); }
      if (e.key === 'ArrowUp') { setActiveIdx(i => (i - 1 + filtered.length) % filtered.length); e.preventDefault(); }
      if (e.key === 'Enter' && filtered[activeIdx]) { navigate(filtered[activeIdx].href); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filtered, activeIdx, navigate, onClose]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) { setQuery(''); setActiveIdx(0); }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="command-palette-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          <motion.div
            className="command-palette"
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
          >
            {/* Search input */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{
                position: 'absolute', left: '1.25rem',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
              }}>
                {'//'}
              </span>
              <input
                autoFocus
                value={query}
                onChange={e => { setQuery(e.target.value); setActiveIdx(0); }}
                placeholder="Search sections..."
                aria-label="Search sections"
                style={{ paddingLeft: '3rem' }}
              />
              <kbd style={{
                position: 'absolute', right: '1rem',
                padding: '0.2rem 0.4rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}>
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: 360, overflowY: 'auto' }}>
              {filtered.length === 0 ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  No results for "{query}"
                </div>
              ) : (
                filtered.map((link, i) => (
                  <button
                    key={link.href}
                    className={`command-item ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => navigate(link.href)}
                    onMouseEnter={() => setActiveIdx(i)}
                    style={{ width: '100%', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '1rem' }}>{link.icon}</span>
                    <span>{link.label}</span>
                    {i === activeIdx && (
                      <kbd style={{
                        marginLeft: 'auto',
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: 4,
                        fontSize: '0.65rem',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-mono)',
                      }}>
                        ↵ ENTER
                      </kbd>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div style={{
              padding: '0.625rem 1.25rem',
              borderTop: '1px solid var(--border)',
              display: 'flex', gap: '1.25rem',
              alignItems: 'center',
            }}>
              {[['↑↓', 'Navigate'], ['↵', 'Jump to'], ['ESC', 'Close']].map(([key, action]) => (
                <div key={action} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <kbd style={{
                    padding: '0.15rem 0.4rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>{key}</kbd>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{action}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
