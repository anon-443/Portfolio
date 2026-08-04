import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Star, GitFork, ExternalLink, Code, Clock } from 'lucide-react';
import { Github } from './BrandIcons';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface UserData {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
}

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Assembly: '#6E4C13',
  Rust: '#dea584',
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' },
  }),
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = personalInfo.githubUsername;

    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
    ])
      .then(async ([userRes, repoRes]) => {
        if (!userRes.ok || !repoRes.ok) throw new Error('API error');
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        setUser(userData);
        setRepos(repoData.filter((r: Repo & { fork: boolean }) => !r.fork));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            07 / GitHub
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Open Source Activity
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Live repository data from{' '}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
              @{personalInfo.githubUsername}
            </a>
          </motion.p>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              FETCHING GITHUB DATA...
            </motion.div>
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p>Could not load GitHub data. View profile directly at{' '}
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                github.com/{personalInfo.githubUsername}
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* User stats */}
            {user && (
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem',
                  maxWidth: 480,
                  margin: '0 auto 2rem',
                }}
              >
                {[
                  { label: 'Repositories', value: user.public_repos },
                  { label: 'Followers', value: user.followers },
                  { label: 'Following', value: user.following },
                ].map(stat => (
                  <div key={stat.label} style={{
                    padding: '1.25rem 1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--accent)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Contribution graph */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
              style={{
                padding: '1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                marginBottom: '2rem',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Github size={16} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                  CONTRIBUTION ACTIVITY
                </span>
              </div>
              <img
                src={`https://ghchart.rshah.org/${personalInfo.githubUsername}`}
                alt={`GitHub contribution chart for ${personalInfo.githubUsername}`}
                style={{ width: '100%', borderRadius: 8, filter: 'invert(1) hue-rotate(180deg) brightness(0.8) saturate(1.5)' }}
                loading="lazy"
              />
            </motion.div>

            {/* Repos grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1rem',
            }}>
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  className="github-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  custom={i % 3}
                  whileHover={{ y: -3, borderColor: 'var(--border-accent)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Code size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9375rem', fontFamily: 'var(--font-mono)' }}
                      >
                        {repo.name}
                      </a>
                    </div>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label="Open repository" style={{ color: 'var(--text-muted)' }}>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', minHeight: '2.4em' }}>
                    {repo.description || 'No description provided.'}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    {repo.language && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <div className="lang-dot" style={{ background: LANG_COLORS[repo.language] || '#aaa' }} />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{repo.language}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Star size={12} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <GitFork size={12} />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: 'auto' }}>
                      <Clock size={12} />
                      <span>{timeAgo(repo.updated_at)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View all link */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github size={16} /> View All Repositories
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
