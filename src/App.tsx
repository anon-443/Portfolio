import { useState, useEffect } from 'react';
import CyberParticles from './components/CyberParticles';
import CursorGlow from './components/CursorGlow';
import InitialLoader from './components/InitialLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import LabSection from './components/LabSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { ThemeProvider } from './context/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0%' }}
      aria-hidden="true"
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);

  // Global Ctrl+K / Cmd+K handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(v => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <ThemeProvider>
      {loading && <InitialLoader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ScrollProgress />
          <CyberParticles />
          <CursorGlow />
          <Navbar />

          {/* Command palette hint */}
          <div style={{
            position: 'fixed', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50, pointerEvents: 'none',
            opacity: 0,
            animation: 'fadeHint 3s ease-out forwards',
            animationDelay: '2s',
          }}>
            <div style={{
              padding: '0.5rem 1rem',
              background: 'rgba(13,19,32,0.9)',
              border: '1px solid var(--border-accent)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              backdropFilter: 'blur(8px)',
            }}>
              <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', background: 'var(--accent-dim)', padding: '0.15rem 0.4rem', borderRadius: 4 }}>
                Ctrl+K
              </kbd>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Command Palette</span>
            </div>
          </div>

          <main id="main-content" style={{ position: 'relative', zIndex: 2 }}>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <LabSection />
            <About />
            <Certifications />
            <Achievements />
            <GitHubSection />
            <Contact />
          </main>

          <Footer />
          <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
        </>
      )}

      <style>{`
        @keyframes fadeHint {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </ThemeProvider>
  );
}
