import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(13,19,32,0.5)' }}>
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            04 / Experience
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Industry Experience
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Verified experience across purple team security AI security automation SOC operations red teaming VAPT DevOps and web development.
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 32,
            top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            opacity: 0.25,
          }} aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
                style={{ display: 'flex', gap: '2rem', paddingLeft: '0.5rem' }}
              >
                {/* Timeline dot */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <motion.div
                    style={{
                      width: 48, height: 48,
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--accent)' : 'var(--bg-card)',
                      border: `2px solid ${i === 0 ? 'var(--accent)' : 'var(--border)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: i === 0 ? '0 0 20px var(--accent-glow)' : 'none',
                      zIndex: 1,
                      position: 'relative',
                    }}
                    whileInView={i === 0 ? { boxShadow: ['0 0 10px var(--accent-glow)', '0 0 30px var(--accent-glow)', '0 0 10px var(--accent-glow)'] } : {}}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  >
                    <Briefcase size={18} color={i === 0 ? '#000' : 'var(--accent)'} />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  style={{
                    flex: 1,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: '1.5rem',
                    marginBottom: '0.5rem',
                  }}
                  whileHover={{ borderColor: 'var(--border-accent)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                      <span className="tag-chip">{exp.type}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                    {exp.responsibilities.map(r => (
                      <li key={r} style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Skills used */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skills.map(s => (
                      <span key={s} className="tag-chip" style={{ fontSize: '0.72rem' }}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
