import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowDown, ChevronRight, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const ROLES = personalInfo.roles;

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.18 }}
      aria-label="Cybersecurity operations center visual"
    >
      <div className="hero-visual-frame">
        <img
          className="hero-visual-image"
          src="/Portfolio/images/hijabi-soc-hero.webp"
          alt="Woman cybersecurity analyst in a full-cover hijab and niqab at a security operations center"
          fetchPriority="high"
        />
        <div className="hero-image-shade" aria-hidden="true" />
        <div className="hero-image-status">
          <span className="hero-live-dot" />
          <span>DEFENSE MONITORING</span>
        </div>
        <div className="hero-visual-caption">
          <span className="hero-caption-icon"><ShieldCheck size={27} strokeWidth={2.4} /></span>
          <span>
            <small>SECURITY PRACTICE</small>
            <strong>Offense meets defense</strong>
          </span>
        </div>
      </div>
      <div className="hero-float-card hero-float-top">
        <span className="hero-float-icon"><Activity size={23} strokeWidth={2.5} /></span>
        <span>
          <small>FOCUS AREA</small>
          <strong>Threat detection</strong>
        </span>
      </div>
      <div className="hero-float-card hero-float-bottom">
        <span className="hero-float-icon"><ShieldCheck size={23} strokeWidth={2.5} /></span>
        <span>
          <small>PURPLE TEAM FLOW</small>
          <strong>Assess · Detect · Respond</strong>
        </span>
      </div>
      <div className="hero-visual-orbit" aria-hidden="true" />
    </motion.div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = typing ? 0 : role.length;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (typing) {
        if (i <= role.length) {
          setDisplayed(role.slice(0, i++));
          timeout = setTimeout(tick, 60);
        } else {
          timeout = setTimeout(() => setTyping(false), 2000);
        }
      } else if (i >= 0) {
        setDisplayed(role.slice(0, i--));
        timeout = setTimeout(tick, 30);
      } else {
        setRoleIdx(current => (current + 1) % ROLES.length);
        setTyping(true);
      }
    };
    timeout = setTimeout(tick, 100);
    return () => clearTimeout(timeout);
  }, [roleIdx, typing]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-backdrop-grid" aria-hidden="true" />
      <div className="hero-backdrop-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <ShieldCheck size={24} strokeWidth={2.5} />
            <span>CYBERSECURITY <i /> PURPLE TEAM</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="hero-title-intro">Hi, I’m</span>
            <span className="hero-title-name">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.17 }}
            aria-live="polite"
          >
            <span className="hero-prompt" aria-hidden="true">//</span>
            <span>{displayed}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              Explore projects <ChevronRight size={22} strokeWidth={2.7} />
            </button>
            <a className="btn btn-outline" href={personalInfo.resume} download="Adeen_Shahzad_Resume.pdf">
              <Download size={21} strokeWidth={2.5} /> Download résumé
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              Contact me <ExternalLink size={19} />
            </button>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            aria-label="Social profiles"
          >
            {[
              { icon: <Github size={25} />, href: personalInfo.github, label: 'GitHub' },
              { icon: <Linkedin size={25} />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <ExternalLink size={23} strokeWidth={2.4} />, href: personalInfo.tryhackme, label: 'TryHackMe' },
            ].map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
                {social.icon}<span>{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <button className="hero-scroll-hint" onClick={() => scrollTo('projects')} aria-label="Scroll to projects">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={19} />
      </button>
    </section>
  );
}
