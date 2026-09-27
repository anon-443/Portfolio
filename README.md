# Adeen Shahzad Portfolio

A responsive React and TypeScript portfolio for Adeen Shahzad, a Purple Team security specialist focused on offensive security, web application testing, AI security automation, VAPT, DFIR, malware analysis, SOC operations, and security engineering.

**Live site:** <https://anon-443.github.io/Portfolio/>

**GitHub:** <https://github.com/anon-443>

**LinkedIn:** <https://www.linkedin.com/in/adeen-shahzad-/>

## Portfolio highlights

- Purple Team security positioning for internships, security roles, and paid project work
- Offensive security and web application testing case studies
- AI security automation and ML based threat detection projects
- VAPT, malware analysis, digital forensics, SOC, and threat intelligence skills
- Verified internship timeline with current roles marked as ongoing
- Downloadable PDF resume
- Live GitHub repository activity
- Responsive navigation and mobile friendly layouts
- Dark mode by default with red, cyan, and dark purple accent choices
- Optional light theme
- Accessible focus states and reduced motion support

## Featured projects

- **AI Security Automation Platform** — threat intelligence enrichment, risk scoring, IOC workflows, and explainable response automation
- **SOAR Anomaly Detection Pipeline** — anomaly detection, IOC management, threat intelligence enrichment, and response workflows
- **SecureDocs** — role based document security and verification workflows
- **VARE Static Malware Analysis Tool** — PE analysis, entropy scoring, YARA matching, IOC extraction, MITRE ATT&CK mapping, and PDF reporting
- **MediConnect Secure Healthcare Platform** — secure full stack application with authentication, RBAC, audit logging, and OWASP aligned controls
- **Secure Distributed File System with AI Monitoring** — encrypted storage, Zero Trust authentication, AI threat detection, and compliance monitoring
- **ZTNA Self Healing Network Architecture** — dynamic trust scoring, AI assisted threat analysis, and automated enforcement
- **SecurePipeline** — DevSecOps deployment platform with security checks integrated into delivery

## Experience covered

The portfolio currently includes the following resume verified roles:

- AI Automation and Security Engineering Intern at THE ARZENS — Jul 2026 to Present
- SOC Analyst Intern at Tech Biz Security — Aug 2026 to Present
- Red Team Intern at Cyberster — Jun 2026 to Sep 2026
- Ethical Hacking Intern at Tech Biz Security — Jul 2026 to Aug 2026
- DevOps and Web Development Intern at TechSkillHub — Aug 2026 to Sep 2026
- Web Development Intern at Sqrock IT Solutions — Aug 2026 to Sep 2026
- AI Data Annotation Intern at Infinity Wave Inc — Sep 2026 to Present
- Cybersecurity Intern at Oil and Gas Development Company Ltd. Pakistan — Jul 2026 to Aug 2026
- DevOps Engineer Intern at TechSkillHub — Aug 2026 to Sep 2026

## Tech stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS custom properties
- GitHub Pages deployment
- Typst for the resume PDF

## Local development

```bash
npm install
npm run dev
```

Open the local Vite server at <http://localhost:8080>.

## Production build

```bash
npm run build
npm run lint
```

The build output is written to `dist/`.

## Deployment

The repository uses the `gh-pages` package and publishes the production bundle to the `gh-pages` branch.

```bash
npm run deploy
```

The Vite base path is `/Portfolio/`, which matches the GitHub Pages URL.

## Content updates

Most portfolio content is stored in `src/data/portfolioData.ts`.

### Add an internship

Add a new object to `experiences` with:

- A stable `id`
- Role and company
- Exact month and year dates
- A short professional summary
- Three or four specific responsibilities
- The tools and frameworks used

Use `Present` only for a role that is still active. Do not add estimated dates or unverified claims.

### Add a project

Add a `Project` object with:

- Project title and one line summary
- Accurate description of the work completed
- Architecture and threat model
- Security features
- Challenges and lessons learned
- Technologies used
- Direct GitHub repository URL
- A category and image path

Set `featured: true` for high signal projects that should appear near the top of the case studies section.

### Update the resume

The downloadable resume is stored at:

```text
public/Adeen_Shahzad_Resume.pdf
```

After replacing it, keep the filename unchanged or update `personalInfo.resume` in `src/data/portfolioData.ts`. Rebuild the site and test the download link.

## Theme controls

The default accent is red. The available accent choices are:

- Bright crimson red
- Cyan
- Dark purple

The light theme is optional and can be switched from the navigation bar. Theme choices are stored in local storage for the returning visitor.

## Contact form

The contact form is wired for Web3Forms but requires a valid Web3Forms access key. Replace the placeholder key in `src/components/Contact.tsx` before treating form submissions as production ready.

## Project structure

```text
public/              Static images, favicon, and downloadable resume
src/components/      Portfolio sections and interactive UI
src/context/         Theme state and persistence
src/data/            Portfolio content and theme definitions
src/index.css        Design system, layout, responsive rules, and theme styles
src/App.tsx          Main page composition
index.html           SEO metadata and structured data
```

## Notes

- Keep project and internship claims factual and verifiable.
- Prefer short paragraphs and clear bullets over dense blocks of text.
- Use direct repository links instead of linking every project to the GitHub profile.
- Run `npm run build` and `npm run lint` before publishing changes.
