import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, type SkillCategory } from '../data/portfolioData';

const CATEGORY_LABELS: Record<SkillCategory | 'all', string> = {
  all: 'All',
  offensive: 'Offensive',
  defensive: 'Defensive',
  frameworks: 'Frameworks',
  languages: 'Languages & OS',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

function SkillBar({ proficiency, inView }: { proficiency: number; inView: boolean }) {
  return (
    <div className="progress-track" style={{ marginTop: '0.5rem' }}>
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${proficiency}%` : 0 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(13,19,32,0.5)' }}>
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            02 / Skills
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Technical Arsenal
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Tools, frameworks, and languages I use daily in security research and operations.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          className="skill-filters"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}
          role="tablist"
          aria-label="Skill categories"
        >
          {(Object.keys(CATEGORY_LABELS) as (SkillCategory | 'all')[]).map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem', minHeight: 44,
                borderRadius: 9999,
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background: activeCategory === cat ? 'var(--accent-dim)' : 'transparent',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i % 6}
              style={{
                padding: '1.25rem',
                borderRadius: 12,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.25s',
              }}
              whileHover={{ y: -3, borderColor: 'var(--border-accent)', boxShadow: '0 8px 30px rgba(0,0,0,0.4), 0 0 20px var(--accent-glow)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="skill-icon-wrap">{skill.icon}</div>
                  <div className="skill-name">
                    {skill.name}
                  </div>
                  <div className="skill-category">
                    {skill.category}
                  </div>
                </div>
                <div className="skill-percent">
                  {skill.proficiency}%
                </div>
              </div>
              <SkillBar proficiency={skill.proficiency} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
