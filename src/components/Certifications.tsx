import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { ExternalLink, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            05 / Certifications
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Credentials
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Verified certifications from industry-recognized security bodies.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              className="cert-badge"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i % 4}
              whileHover={{ y: -4 }}
            >
              {/* Gradient accent bar */}
              <div style={{
                height: 3,
                borderRadius: '9999px 9999px 0 0',
                background: `linear-gradient(90deg, ${cert.color.replace('from-', '').split(' ')[0]} 0%, ${cert.color.split(' ')[2]} 100%)`,
                marginBottom: '1.25rem',
                marginTop: '-1.5rem',
                marginLeft: '-1.5rem',
                marginRight: '-1.5rem',
                borderRadius: '12px 12px 0 0',
              }} />

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <img
                  src="/images/cert_badge.png"
                  alt="Security Badge"
                  style={{
                    width: 48, height: 48,
                    borderRadius: 10,
                    objectFit: 'cover',
                    border: '1px solid var(--border-accent)',
                    boxShadow: '0 0 12px var(--accent-glow)',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Award size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                      {cert.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontWeight: 600, fontSize: '0.9375rem',
                    color: 'var(--text-primary)', lineHeight: 1.4,
                    marginBottom: '0.375rem',
                  }}>
                    {cert.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem' }}>{cert.issuer}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                      {cert.year}
                    </span>
                  </div>
                  {cert.credentialId && (
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.name}`}
                    style={{
                      color: 'var(--text-muted)',
                      padding: '0.375rem',
                      borderRadius: 8,
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'all 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--border-accent)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
