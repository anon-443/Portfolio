import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../data/portfolioData';
import { Activity, AlertTriangle, Brain, ChevronRight, Code2, Cpu, Crosshair, Database, ExternalLink, FileSearch, HeartPulse, LockKeyhole, Monitor, Network, Shield, ShieldCheck, Trophy, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Github } from './BrandIcons';

const CATEGORIES = ['All', 'Malware Analysis', 'Web Security', 'Network Security', 'Offensive Security', 'Software Engineering'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const PROJECT_ICONS: Record<string, LucideIcon> = {
  'ai-security-automation-platform': ShieldCheck,
  'soar-anomaly-detection': Activity,
  securedocs: LockKeyhole,
  vare: FileSearch,
  mediconnect: HeartPulse,
  sdfs: Database,
  netlab: Network,
  rdc: Monitor,
  'ctf-scheduler': Trophy,
  'vgg-16': Brain,
  'ztna-self-healing': ShieldCheck,
  securepipeline: Code2,
  'cybershield-sme': Shield,
};

function ProjectIcon({ projectId, size = 25 }: { projectId: string; size?: number }) {
  const Icon = PROJECT_ICONS[projectId] || Crosshair;
  return <Icon size={size} strokeWidth={2.35} aria-hidden="true" />;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="command-palette-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        style={{
          width: '100%', maxWidth: 720,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-accent)',
          borderRadius: 20,
          maxHeight: '88vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 40px var(--accent-glow)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem 1.75rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="project-modal-icon"><ProjectIcon projectId={project.id} size={27} /></span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                  {project.category}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.25rem' }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Overview */}
          <div>
            <SectionLabel icon={<Shield size={14} />} label="Overview" />
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>{project.description}</p>
          </div>

          {/* Architecture */}
          <div>
            <SectionLabel icon={<Cpu size={14} />} label="Architecture" />
            <div className="terminal" style={{ padding: 0 }}>
              <div className="terminal-body" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>
                {project.architecture}
              </div>
            </div>
          </div>

          {/* Threat Model */}
          <div>
            <SectionLabel icon={<AlertTriangle size={14} />} label="Threat Model" />
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>{project.threatModel}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <SectionLabel icon={<Code2 size={14} />} label="Tech Stack" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map(t => (
                <span key={t} className="tag-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div>
            <SectionLabel icon={<Shield size={14} />} label="Security Features" />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.securityFeatures.map(f => (
                <li key={f} style={{ display: 'flex', gap: '0.625rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <ChevronRight size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Lessons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <SectionLabel icon={<AlertTriangle size={14} />} label="Challenges" />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.challenges.map(c => (
                  <li key={c} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    → {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel icon={<ChevronRight size={14} />} label="Lessons Learned" />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.lessons.map(l => (
                  <li key={l} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    → {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderTop: '1px solid var(--border)',
          display: 'flex', gap: '0.875rem',
          flexShrink: 0,
        }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
              <Github size={15} /> View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = (activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)).sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            03 / Projects
          </motion.span>
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Case Studies
          </motion.h2>
          <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            High signal security projects across offensive security web application testing AI security VAPT DFIR and purple team operations.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.1rem', minHeight: 44, borderRadius: 9999,
                border: '1px solid', cursor: 'pointer',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background: activeCategory === cat ? 'var(--accent-dim)' : 'transparent',
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '0.85rem', fontWeight: 500, transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="project-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.25rem',
        }}>
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i % 3}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              whileHover={{ y: -5, borderColor: 'var(--border-accent)', boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px var(--accent-glow)' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-cover">
                <img src={project.image} alt="" loading="lazy" />
                <div className="project-cover-shade" aria-hidden="true" />
                <span className="project-category-pill"><ProjectIcon projectId={project.id} size={17} />{project.category}</span>
              </div>

              <div className="project-card-head">
                <span className="project-icon-tile"><ProjectIcon projectId={project.id} size={29} /></span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                </div>
                <span className="project-view-cue" aria-hidden="true"><ChevronRight size={22} /></span>
              </div>

              {/* Card body */}
              <div className="project-card-body" style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                  {project.tagline}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.techStack.slice(0, 4).map(t => (
                    <span key={t} className="tag-chip project-tag">{t}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tag-chip project-tag">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Card footer */}
              <div className="project-card-footer" style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                  Open case study
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-muted)', transition: 'color 0.2s', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      <Github size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
