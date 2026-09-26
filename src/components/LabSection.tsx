import { motion } from 'framer-motion';
import { labSetup } from '../data/portfolioData';

const CATEGORY_COLORS: Record<string, string> = {
  OS: '#ef4444',
  Platform: '#8b5cf6',
  Defensive: '#10b981',
  Offensive: '#f59e0b',
  Analysis: '#3b82f6',
  Target: '#ec4899',
  Assessment: '#06b6d4',
  Practice: '#64748b',
};

const TOOL_ICONS: Record<string, string> = {
  'Kali Linux': '🐉',
  'VirtualBox': '💻',
  'Wazuh SIEM': '🛡️',
  'Burp Suite': '🕷️',
  'Wireshark': '🦈',
  'Metasploitable 2': '🎯',
  'Snort IDS/IPS': '👃',
  'Nessus Essentials': '🔬',
  'Ettercap / Bettercap': '🕸️',
  'TryHackMe': '🟥',
  'Hack The Box': '🟩',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function LabSection() {
  return (
    <section id="lab" className="section" style={{ background: 'rgba(13,19,32,0.5)' }}>
      <div className="container">
        <div className="section-header">
          <motion.span className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            08 / Tools & Lab
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Home Lab Setup
          </motion.h2>
          <motion.p className="section-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            {labSetup.description}
          </motion.p>
        </div>

        {/* Lab architecture diagram */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          style={{
            padding: '2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-accent)',
            borderRadius: 16,
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
            LAB ARCHITECTURE
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              background: '#020408',
              padding: '1.5rem',
              borderRadius: 12,
              textAlign: 'left',
              border: '1px solid var(--border)',
            }}>
              <span style={{ color: 'var(--accent)' }}>Host Machine</span>
              {` → `}
              <span style={{ color: '#8b5cf6' }}>VirtualBox Hypervisor</span>
              {`\n├── `}
              <span style={{ color: '#ef4444' }}>Kali Linux VM</span>
              {` [Attacker] → Nmap, Burp Suite, Metasploit\n├── `}
              <span style={{ color: '#f59e0b' }}>Metasploitable 2</span>
              {` [Vulnerable Target]\n├── `}
              <span style={{ color: '#10b981' }}>Wazuh SIEM Node</span>
              {` [Defender] → Log Ingestion & Alerting\n└── `}
              <span style={{ color: '#3b82f6' }}>Snort IDS</span>
              {` [Monitor] → Packet Inspection`}
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-accent)', boxShadow: '0 0 20px var(--accent-glow)' }}>
              <img src="/Portfolio/images/network_ids.png" alt="Lab Network Monitor" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </motion.div>

        {/* Tools grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {labSetup.tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i % 4}
              style={{
                padding: '1.25rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                transition: 'all 0.25s',
              }}
              whileHover={{ y: -3, borderColor: 'var(--border-accent)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
            >
              <div style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.125rem' }}>
                {TOOL_ICONS[tool.name] || '🔧'}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{tool.name}</h3>
                  <span style={{
                    padding: '0.15rem 0.5rem',
                    borderRadius: 9999,
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    background: `${CATEGORY_COLORS[tool.category]}20`,
                    color: CATEGORY_COLORS[tool.category] || 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                    border: `1px solid ${CATEGORY_COLORS[tool.category]}40`,
                  }}>
                    {tool.category}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {tool.purpose}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
