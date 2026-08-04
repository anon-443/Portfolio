import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'rgba(13,19,32,0.5)' }}>
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            06 / Achievements
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Competition Results
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Real competition placements and notable security projects.
          </motion.p>
        </div>

        {/* Highlight podiums */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {achievements.map((ach, i) => (
            <motion.article
              key={ach.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i}
              style={{
                padding: '1.5rem',
                borderRadius: 16,
                background: ach.highlight ? 'linear-gradient(135deg, var(--accent-dim) 0%, rgba(59,130,246,0.05) 100%)' : 'var(--bg-card)',
                border: `1px solid ${ach.highlight ? 'var(--border-accent)' : 'var(--border)'}`,
                boxShadow: ach.highlight ? '0 0 30px var(--accent-glow)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px var(--accent-glow)' }}
            >
              {ach.highlight && (
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  color: 'var(--accent)', background: 'var(--accent-dim)',
                  padding: '0.2rem 0.6rem', borderRadius: 9999,
                  border: '1px solid var(--border-accent)',
                  letterSpacing: '0.08em',
                }}>
                  HIGHLIGHT
                </div>
              )}

              <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{ach.icon}</div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {ach.title}
              </h3>

              <div style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.25rem 0.75rem',
                borderRadius: 9999,
                background: 'var(--accent)',
                marginBottom: '0.875rem',
              }}>
                <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#000', fontFamily: 'var(--font-mono)' }}>
                  {ach.position}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {ach.description}
              </p>

              <div style={{
                marginTop: '1rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {ach.event}
                </span>
                <span className="tag-chip">{ach.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
