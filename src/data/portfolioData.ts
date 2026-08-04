// ============================================================
// Portfolio Data — Adeen Shahzad | Cybersecurity Specialist
// ============================================================

export const personalInfo = {
  name: "Adeen Shahzad",
  title: "Cybersecurity Specialist",
  roles: ["Cybersecurity Specialist", "Penetration Tester", "Security Researcher", "Ethical Hacker"],
  tagline: "Securing Digital Systems Through Ethical Hacking, Penetration Testing, and Vulnerability Assessment.",
  about: `I'm a passionate cybersecurity professional currently pursuing my B.S. in Cybersecurity at Air University, Islamabad. My journey into security began with a deep curiosity about how systems fail — and how to make them more resilient. From static malware analysis to hands-on red team operations across four industry internships, I've built a strong foundation in offensive and defensive security practices. I believe that understanding the attacker's mindset is the most effective way to build truly secure systems.`,
  university: "Air University, Islamabad",
  degree: "B.S. Cybersecurity",
  graduationYear: "2028",
  email: "anonaura.66@gmail.com",
  github: "https://github.com/anon-443",
  githubUsername: "anon-443",
  linkedin: "https://www.linkedin.com/in/adeen-shahzad-/",
  tryhackme: "https://tryhackme.com/p/adeen",
  location: "Islamabad, Pakistan",
  resume: "/Adeen_Shahzad_Resume.pdf",
  now: "Currently deepening expertise in Active Directory attacks and defenses, building VARE v2 with dynamic analysis capabilities, and grinding Hack The Box Pro Labs.",
};

// ============================================================
// SKILLS
// ============================================================

export type SkillCategory = "offensive" | "defensive" | "frameworks" | "languages";

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number; // 0–100
}

export const skills: Skill[] = [
  // Offensive
  { name: "Nmap", icon: "🗺️", category: "offensive", proficiency: 90 },
  { name: "Burp Suite", icon: "🕷️", category: "offensive", proficiency: 88 },
  { name: "Metasploit", icon: "💀", category: "offensive", proficiency: 82 },
  { name: "SQLMap", icon: "💉", category: "offensive", proficiency: 85 },
  { name: "Hydra", icon: "🐍", category: "offensive", proficiency: 80 },
  { name: "Gobuster", icon: "🔍", category: "offensive", proficiency: 82 },
  { name: "FFUF", icon: "⚡", category: "offensive", proficiency: 78 },
  { name: "Nikto", icon: "🎯", category: "offensive", proficiency: 75 },
  { name: "Ettercap", icon: "🕸️", category: "offensive", proficiency: 72 },
  { name: "Bettercap", icon: "🔓", category: "offensive", proficiency: 70 },
  // Defensive
  { name: "Wireshark", icon: "🦈", category: "defensive", proficiency: 88 },
  { name: "Wazuh SIEM", icon: "🛡️", category: "defensive", proficiency: 80 },
  { name: "Snort IDS", icon: "👃", category: "defensive", proficiency: 75 },
  { name: "Nessus", icon: "🔬", category: "defensive", proficiency: 78 },
  { name: "YARA Rules", icon: "📋", category: "defensive", proficiency: 82 },
  { name: "VirusTotal API", icon: "🔭", category: "defensive", proficiency: 85 },
  // Frameworks
  { name: "OWASP Top 10", icon: "📊", category: "frameworks", proficiency: 90 },
  { name: "MITRE ATT&CK", icon: "⚔️", category: "frameworks", proficiency: 85 },
  { name: "NIST SP 800-207", icon: "📜", category: "frameworks", proficiency: 75 },
  { name: "CVSS", icon: "📈", category: "frameworks", proficiency: 82 },
  { name: "PTES", icon: "🗂️", category: "frameworks", proficiency: 78 },
  // Languages & OS
  { name: "Python", icon: "🐍", category: "languages", proficiency: 85 },
  { name: "Bash", icon: "💻", category: "languages", proficiency: 88 },
  { name: "C++", icon: "⚙️", category: "languages", proficiency: 72 },
  { name: "x86 Assembly", icon: "🔩", category: "languages", proficiency: 65 },
  { name: "HTML/CSS/JS", icon: "🌐", category: "languages", proficiency: 78 },
  { name: "Kali Linux", icon: "🐉", category: "languages", proficiency: 90 },
  { name: "Windows Security", icon: "🪟", category: "languages", proficiency: 80 },
  { name: "Git", icon: "🌿", category: "languages", proficiency: 85 },
];

// ============================================================
// PROJECTS
// ============================================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  threatModel: string;
  securityFeatures: string[];
  challenges: string[];
  lessons: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: "vare",
    title: "VARE — Static Malware Analysis Tool",
    tagline: "MITRE ATT&CK mapped PE file analyzer with automated PDF reporting",
    description:
      "VARE (Vulnerability Analysis & Reverse Engineering) is a desktop Python application for comprehensive static analysis of Windows PE (Portable Executable) files. It extracts metadata, computes Shannon entropy to detect packing/obfuscation, performs YARA rule matching, extracts IOCs (IPs, URLs, emails, registry keys), and maps findings to MITRE ATT&CK techniques — generating a professional PDF report.",
    architecture:
      "Single-application GUI (CustomTkinter) → PE Parser (pefile) → YARA Engine → Shannon Entropy Calculator → IOC Extractor (regex) → MITRE ATT&CK Mapper → ReportLab PDF Generator",
    threatModel:
      "Target: malicious PE files submitted for analysis. Attack surface: malformed PE headers designed to crash parsers. Mitigations: sandboxed parsing with exception handling, no code execution of submitted samples.",
    securityFeatures: [
      "YARA rule engine for signature-based detection",
      "Shannon entropy analysis to detect packed/encrypted payloads",
      "MITRE ATT&CK TTP mapping for threat actor attribution",
      "IOC extraction (IPs, domains, URLs, registry keys, file paths)",
      "Automated professional PDF report generation",
      "No sample execution — fully static analysis",
    ],
    challenges: [
      "Handling malformed or truncated PE headers gracefully",
      "Building a comprehensive YARA ruleset covering common malware families",
      "Mapping low-level behaviors to MITRE ATT&CK techniques accurately",
      "Designing an intuitive GUI for non-technical analysts",
    ],
    lessons: [
      "Deep understanding of PE file format internals",
      "How entropy analysis can fingerprint packing tools (UPX, MPRESS)",
      "Practical MITRE ATT&CK framework application in malware triage",
      "Building analysis pipelines resilient to adversarial file crafting",
    ],
    techStack: ["Python", "CustomTkinter", "pefile", "YARA", "ReportLab", "MITRE ATT&CK", "Regex"],
    githubUrl: "https://github.com/anon-443",
    category: "Malware Analysis",
    featured: true,
    image: "/images/malware_sandbox.png",
  },
  {
    id: "mediconnect",
    title: "MediConnect — Secure Healthcare Platform",
    tagline: "OWASP Top 10 compliant healthcare web application with JWT auth",
    description:
      "MediConnect is a full-stack healthcare web application built with security-first design. It implements OWASP Top 10 mitigations throughout, featuring role-based access control for patients, doctors, and admins, encrypted data at rest and in transit, and a complete audit trail for HIPAA-aware compliance.",
    architecture:
      "React (SPA) → FastAPI (REST) → PostgreSQL → JWT Auth Middleware → bcrypt Password Hashing → HTTPS/TLS → Audit Log Table",
    threatModel:
      "Sensitive PHI (Protected Health Information) at risk. Threats: SQL injection, broken authentication, IDOR (Insecure Direct Object Reference), XSS. Mitigations: parameterized queries, JWT expiry, object-level authorization checks, CSP headers.",
    securityFeatures: [
      "JWT-based authentication with refresh token rotation",
      "bcrypt password hashing with configurable cost factor",
      "Role-based access control (RBAC) — patient / doctor / admin",
      "IDOR prevention with object-level authorization checks",
      "SQL injection prevention via parameterized queries (SQLAlchemy ORM)",
      "CSP, HSTS, X-Frame-Options, X-Content-Type-Options headers",
      "Complete audit logging for all sensitive operations",
    ],
    challenges: [
      "Implementing HIPAA-aware audit trails without degrading performance",
      "Preventing IDOR when patients access their own medical records",
      "Secure session management across refresh token cycles",
    ],
    lessons: [
      "Practical application of OWASP Top 10 in a real project",
      "The complexity of building secure multi-role authentication flows",
      "Importance of security requirements during design, not as an afterthought",
    ],
    techStack: ["FastAPI", "PostgreSQL", "React", "JWT", "bcrypt", "SQLAlchemy", "Python"],
    githubUrl: "https://github.com/anon-443",
    category: "Web Security",
    featured: true,
    image: "/images/vulnerability_scanner.png",
  },
  {
    id: "sdfs",
    title: "SDFS — Zero Trust Distributed File System",
    tagline: "NIST SP 800-207 based file system with AI anomaly detection",
    description:
      "SDFS (Secure Distributed File System) implements a Zero Trust architecture as defined by NIST SP 800-207, treating every access request as untrusted regardless of network location. It features continuous verification, least-privilege enforcement, encrypted storage, and an AI-powered anomaly detection layer that flags suspicious access patterns.",
    architecture:
      "Client → Policy Engine (ZTNA) → Identity Verifier → Micro-segmented Storage Nodes → AI Anomaly Detector → Audit Store",
    threatModel:
      "Insider threats and lateral movement post-breach. Threats: privilege escalation, data exfiltration, unauthorized bulk reads. Mitigations: continuous authentication, behavioral baselining with ML, encryption of data at rest and in transit.",
    securityFeatures: [
      "Zero Trust Network Access (ZTNA) — never trust, always verify",
      "Continuous authentication on every file operation",
      "Least-privilege access with just-in-time permission grants",
      "AES-256 encryption of files at rest",
      "AI anomaly detection (behavioral baselining + outlier detection)",
      "Microsegmentation — no lateral movement between storage nodes",
    ],
    challenges: [
      "Balancing continuous verification overhead with file system performance",
      "Training anomaly detection model on synthetic normal-behavior data",
      "Implementing microsegmentation without complex network infrastructure",
    ],
    lessons: [
      "Practical implementation of NIST SP 800-207 Zero Trust principles",
      "How AI anomaly detection works in security — and its blind spots",
      "Performance cost of cryptographic operations at scale",
    ],
    techStack: ["Python", "ZTNA", "NIST 800-207", "AES-256", "scikit-learn", "FastAPI"],
    githubUrl: "https://github.com/anon-443",
    category: "Network Security",
    featured: true,
    image: "/images/network_ids.png",
  },
  {
    id: "netlab",
    title: "Network Security Lab",
    tagline: "DNS spoofing & ARP poisoning monitoring with live traffic analysis",
    description:
      "A hands-on multi-machine virtual lab environment demonstrating Layer 2 and DNS-level network attacks. Built using VirtualBox with segmented networks, it simulates ARP poisoning and DNS spoofing attacks using Ettercap and Bettercap, with real-time Wireshark capture and Snort IDS alerting to detect and analyze the attacks.",
    architecture:
      "VirtualBox NAT Network → Attacker (Kali) → Victim VMs → Ettercap/Bettercap ARP Poison → DNS Spoof Module → Wireshark Capture → Snort IDS Alerts",
    threatModel:
      "Man-in-the-Middle attacks on local network segments. Threats: credential interception, session hijacking, DNS redirection to phishing pages. Lab includes both attack execution and detection.",
    securityFeatures: [
      "Live ARP poisoning detection via Snort IDS custom rules",
      "DNS response validation monitoring",
      "Network segmentation to prevent lab escape",
      "Full packet capture and analysis workflow",
    ],
    challenges: [
      "Preventing lab attacks from bleeding into the host network",
      "Writing precise Snort rules that detect ARP poisoning without false positives",
      "Reproducing real-world timing conditions of MITM attacks",
    ],
    lessons: [
      "How ARP poisoning enables silent MITM with no target interaction",
      "Why DNS over HTTPS (DoH) matters for DNS spoofing prevention",
      "Writing effective Snort rules from packet analysis",
    ],
    techStack: ["Kali Linux", "VirtualBox", "Ettercap", "Bettercap", "Wireshark", "Snort IDS"],
    githubUrl: "https://github.com/anon-443",
    category: "Network Security",
    featured: false,
    image: "/images/network_ids.png",
  },
  {
    id: "rdc",
    title: "Remote Desktop Control Tool",
    tagline: "Python socket-based C2-style remote administration tool",
    description:
      "A low-level remote administration and control tool built purely on Python socket programming, without relying on RDP protocols. Demonstrates how attacker-controlled C2 (Command & Control) channels operate at the socket level, including command execution, file transfer, and screenshot capture — built for educational and red team research purposes.",
    architecture:
      "Python Client (Victim) ↔ TCP Socket Channel ↔ Python Server (Attacker/Admin) → Command Parser → Response Handler",
    threatModel:
      "Simulates persistent access mechanisms used by APT actors. Demonstrates how simple socket-based backdoors evade signature-based AV. Controlled lab use only.",
    securityFeatures: [
      "Demonstrates socket-level C2 communication",
      "Command authentication via pre-shared token",
      "Connection handling with timeout and error recovery",
    ],
    challenges: [
      "Handling concurrent connections and threading safely",
      "Implementing reliable file transfer over raw sockets",
      "Error recovery when target connection drops unexpectedly",
    ],
    lessons: [
      "How raw socket programming enables low-level network communication",
      "The simplicity of basic backdoor mechanisms — and why endpoint detection matters",
      "Multithreaded server design for concurrent client management",
    ],
    techStack: ["Python", "Sockets", "Threading", "Subprocess"],
    githubUrl: "https://github.com/anon-443",
    category: "Offensive Security",
    featured: false,
    image: "/images/malware_sandbox.png",
  },
  {
    id: "ctf-scheduler",
    title: "CTF Tournament Scheduler",
    tagline: "C++ bracket management system for competitive CTF events",
    description:
      "A command-line tournament management system written in C++ that handles team registration, bracket generation, match scheduling, score tracking, and leaderboard display for Capture The Flag competitions. Features both single-elimination and round-robin formats.",
    architecture:
      "CLI Interface → Team Registry → Bracket Engine → Match Scheduler → Score Database (File I/O) → Leaderboard Renderer",
    threatModel:
      "Data integrity for tournament results. Input validation prevents buffer overflows and injection via cin. File I/O secured against path traversal.",
    securityFeatures: [
      "Input validation and sanitization throughout",
      "Boundary checking on all array accesses",
      "Secure file I/O with path validation",
    ],
    challenges: [
      "Implementing a clean bracket generation algorithm for non-power-of-2 team counts",
      "Persisting tournament state to disk without a database library",
    ],
    lessons: [
      "C++ memory management and RAII patterns",
      "Algorithm design for tournament bracket systems",
      "Importance of input validation even in CLI applications",
    ],
    techStack: ["C++", "STL", "File I/O", "Algorithm Design"],
    githubUrl: "https://github.com/anon-443",
    category: "Software Engineering",
    featured: false,
    image: "/images/vulnerability_scanner.png",
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "cyberster",
    role: "Red Team Intern",
    company: "Cyberster",
    type: "Internship",
    period: "2025",
    description:
      "Conducted red team operations including OSINT, network enumeration, web application attacks, and post-exploitation activities in controlled client environments.",
    responsibilities: [
      "Performed active and passive reconnaissance on target infrastructure",
      "Conducted web application penetration testing following OWASP methodology",
      "Executed internal network enumeration and lateral movement simulation",
      "Authored professional penetration testing reports with remediation guidance",
    ],
    skills: ["Nmap", "Burp Suite", "Metasploit", "OSINT", "Reporting"],
  },
  {
    id: "arzens",
    role: "AI, Automation & Security Engineering Intern",
    company: "THE ARZENS",
    type: "Internship",
    period: "2025",
    description:
      "Worked at the intersection of AI and cybersecurity — developing automation pipelines, security tooling, and AI-assisted anomaly detection systems.",
    responsibilities: [
      "Developed Python automation scripts for security workflow optimization",
      "Integrated AI models for anomaly detection in system logs",
      "Built and tested security-focused automation pipelines",
      "Collaborated on the design of AI-assisted threat detection features",
    ],
    skills: ["Python", "AI/ML", "Automation", "Log Analysis", "Security Engineering"],
  },
  {
    id: "ogdcl",
    role: "Cybersecurity Intern",
    company: "Oil and Gas Development Company Ltd. (OGDCL)",
    type: "Internship",
    period: "2024",
    description:
      "Gained experience in enterprise-scale cybersecurity operations within Pakistan's largest oil and gas company. Worked with critical infrastructure protection, SIEM monitoring, and vulnerability assessment.",
    responsibilities: [
      "Monitored SIEM dashboards for threat indicators and anomalous activity",
      "Performed vulnerability scans on internal infrastructure using Nessus",
      "Assisted in security policy review and critical infrastructure protection assessments",
      "Participated in incident response tabletop exercises",
    ],
    skills: ["Wazuh SIEM", "Nessus", "Vulnerability Assessment", "Critical Infrastructure", "OPSWAT"],
  },
  {
    id: "techbiz",
    role: "Ethical Hacking Intern",
    company: "Tech Biz Security",
    type: "Internship",
    period: "2024",
    description:
      "Entry-level ethical hacking internship focused on penetration testing fundamentals, network security assessments, and hands-on vulnerability exploitation in lab environments.",
    responsibilities: [
      "Conducted network penetration tests using Nmap, Nessus, and Metasploit",
      "Performed web application security assessments on test targets",
      "Analyzed packet captures with Wireshark for network forensics",
      "Documented findings and drafted remediation recommendations",
    ],
    skills: ["Penetration Testing", "Nmap", "Metasploit", "Wireshark", "Report Writing"],
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  credentialId?: string;
  verifyUrl?: string;
  year: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    id: "iso27001",
    name: "ISO/IEC 27001:2022 Information Security Associate",
    issuer: "SkillFront",
    category: "Information Security",
    year: "2024",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "cti101",
    name: "Cyber Threat Intelligence 101",
    issuer: "arcX",
    category: "Threat Intelligence",
    verifyUrl: "https://arcx.io",
    year: "2024",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "soc",
    name: "SOC Foundations",
    issuer: "Microsoft",
    category: "SOC Operations",
    year: "2024",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "cip",
    name: "Critical Infrastructure Protection",
    issuer: "OPSWAT",
    category: "ICS/OT Security",
    verifyUrl: "https://www.opswat.com",
    year: "2024",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "sqli",
    name: "SQL Injection Attacks",
    issuer: "EC-Council",
    category: "Web Security",
    year: "2023",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "darkweb",
    name: "Intro to Dark Web, Anonymity & Cryptocurrency",
    issuer: "EC-Council",
    category: "Dark Web & OSINT",
    year: "2023",
    color: "from-slate-500 to-gray-700",
  },
  {
    id: "tia",
    name: "Foundation Level Threat Intelligence Analyst",
    issuer: "arcX",
    category: "Threat Intelligence",
    verifyUrl: "https://arcx.io",
    year: "2024",
    color: "from-pink-500 to-rose-600",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================

export interface Achievement {
  id: string;
  title: string;
  event: string;
  position: string;
  year: string;
  description: string;
  icon: string;
  highlight: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "rdx-ctf",
    title: "RDX CTF",
    event: "RDX Capture The Flag Competition",
    position: "Top 10 Finalist",
    year: "2024",
    description:
      "Competed in the RDX CTF competition, securing a Top 10 position among all participating teams through web exploitation, cryptography, forensics, and binary challenges.",
    icon: "🏆",
    highlight: true,
  },
  {
    id: "airange-ctf",
    title: "AIRange CTF",
    event: "AIRange Capture The Flag",
    position: "Top 10 Finalist",
    year: "2024",
    description:
      "Achieved Top 10 placement in the AIRange CTF, a cybersecurity competition with challenges spanning AI security, web exploitation, reverse engineering, and network forensics.",
    icon: "🏆",
    highlight: true,
  },
  {
    id: "nust-hackathon",
    title: "NUST Hackathon",
    event: "NUST National Hackathon",
    position: "Top 50 Finalists",
    year: "2024",
    description:
      "Selected among the Top 50 finalist teams at NUST's national-level hackathon, competing across cybersecurity, AI, and software development tracks.",
    icon: "🏅",
    highlight: false,
  },
  {
    id: "vare-tool",
    title: "VARE — Malware Analysis Tool",
    event: "Personal Research Project",
    position: "Featured Project",
    year: "2024",
    description:
      "Built VARE, a comprehensive static malware analysis tool featuring YARA rule matching, MITRE ATT&CK mapping, Shannon entropy analysis, and automated PDF reporting.",
    icon: "🔬",
    highlight: false,
  },
  {
    id: "internships",
    title: "4 Cybersecurity Internships",
    event: "Industry Experience",
    position: "Tech Biz Security · OGDCL · THE ARZENS · Cyberster",
    year: "2024–2025",
    description:
      "Completed four distinct cybersecurity internships spanning ethical hacking, enterprise SOC operations, AI-driven security, and red team operations.",
    icon: "💼",
    highlight: false,
  },
];

// ============================================================
// BLOG POSTS (populate with real content when available)
// ============================================================

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  url?: string;
}

export const blogCategories = [
  "Malware Analysis",
  "CTF Writeups",
  "Web Security",
  "Active Directory",
  "Digital Forensics",
  "Threat Intelligence",
];

// Leave empty — section will auto-hide when no posts
export const blogPosts: BlogPost[] = [];

// ============================================================
// LAB SETUP
// ============================================================

export const labSetup = {
  description:
    "A purpose-built cybersecurity home lab running multiple virtual machine environments for penetration testing, malware analysis, SIEM monitoring, and network security research.",
  tools: [
    { name: "Kali Linux", purpose: "Primary offensive security OS — attack tools, exploitation", category: "OS" },
    { name: "VirtualBox", purpose: "Hypervisor for isolated multi-VM lab environments", category: "Platform" },
    { name: "Wazuh SIEM", purpose: "Security event monitoring, log analysis, alerting", category: "Defensive" },
    { name: "Burp Suite", purpose: "Web application security testing and interception proxy", category: "Offensive" },
    { name: "Wireshark", purpose: "Network packet capture and protocol analysis", category: "Analysis" },
    { name: "Metasploitable 2", purpose: "Intentionally vulnerable VM for exploitation practice", category: "Target" },
    { name: "Snort IDS/IPS", purpose: "Network intrusion detection and prevention", category: "Defensive" },
    { name: "Nessus Essentials", purpose: "Vulnerability scanning and assessment", category: "Assessment" },
    { name: "Ettercap / Bettercap", purpose: "MITM attacks — ARP poisoning, DNS spoofing", category: "Offensive" },
    { name: "TryHackMe", purpose: "Structured guided labs and learning paths", category: "Practice" },
    { name: "Hack The Box", purpose: "Real-world machines for advanced penetration testing", category: "Practice" },
  ],
};

// ============================================================
// THEME ACCENTS
// ============================================================

export type AccentColor = "cyan" | "blue" | "emerald";

export const accentColors: Record<AccentColor, { primary: string; glow: string; label: string }> = {
  cyan: { primary: "#06b6d4", glow: "rgba(6,182,212,0.15)", label: "Cyan" },
  blue: { primary: "#3b82f6", glow: "rgba(59,130,246,0.15)", label: "Blue" },
  emerald: { primary: "#10b981", glow: "rgba(16,185,129,0.15)", label: "Emerald" },
};
