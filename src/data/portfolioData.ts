// ============================================================
// Portfolio Data — Adeen Shahzad | Purple Team Security Specialist
// ============================================================

export const personalInfo = {
  name: "Adeen Shahzad",
  title: "Purple Team Security Specialist",
  roles: ["Purple Team Security Specialist", "Penetration Tester", "Web Security Tester", "AI Security Engineer", "VAPT & DFIR Analyst"],
  tagline: "Focused on offensive security, web application testing, AI security automation, VAPT, DFIR, and purple team operations.",
  about: `I'm a cybersecurity undergraduate at Air University, Islamabad. I began my degree and hands-on cybersecurity practice in 2024. My journey into security began with a deep curiosity about how systems fail — and how to make them more resilient. From web application testing and red team operations to AI security automation, malware analysis, and digital forensics across six internships, I've built a practical purple team security foundation. I believe that understanding the attacker's mindset is the most effective way to build truly secure systems.`,
  university: "Air University, Islamabad",
  degree: "B.S. Cybersecurity",
  graduationYear: "2028",
  email: "adeen.cys@gmail.com",
  github: "https://github.com/anon-443",
  githubUsername: "anon-443",
  linkedin: "https://www.linkedin.com/in/adeen-shahzad-/",
  tryhackme: "https://tryhackme.com/p/adeen",
  location: "Islamabad, Pakistan",
  resume: "/Portfolio/Adeen_Shahzad_Resume.pdf",
  now: "Currently building AI-assisted security pipelines, ML-based intrusion detection systems, and secure software projects across offensive security, defensive operations, VAPT, AI security, and DFIR.",
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
  { name: "OWASP ZAP", icon: "🕸️", category: "offensive", proficiency: 82 },
  { name: "Hashcat", icon: "🔑", category: "offensive", proficiency: 76 },
  { name: "Shodan", icon: "🌐", category: "offensive", proficiency: 78 },
  { name: "theHarvester", icon: "🛰️", category: "offensive", proficiency: 80 },
  { name: "Volatility", icon: "🧠", category: "defensive", proficiency: 74 },
  { name: "Autopsy", icon: "🧾", category: "defensive", proficiency: 72 },
  { name: "Ollama", icon: "🤖", category: "defensive", proficiency: 80 },
  { name: "Scikit-learn", icon: "📐", category: "defensive", proficiency: 78 },
  { name: "XGBoost", icon: "📊", category: "defensive", proficiency: 76 },
  { name: "NIST AI RMF", icon: "🧩", category: "frameworks", proficiency: 74 },
  { name: "Purple Team Operations", icon: "🟣", category: "frameworks", proficiency: 82 },
  { name: "Digital Forensics", icon: "🔎", category: "frameworks", proficiency: 74 },
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
    id: "ai-security-automation-platform",
    title: "AI Security Automation Platform",
    tagline: "AI-assisted threat analysis and security operations automation",
    description: "A Python security automation platform that enriches telemetry, scores risk, manages indicators of compromise, and supports explainable response workflows for security teams.",
    architecture: "Telemetry Intake → Feature Engineering → Threat Intelligence Enrichment → Risk Scoring → SOAR Workflow → Audit Log",
    threatModel: "The platform addresses noisy alerts, inconsistent triage, missing context, and delayed response while keeping actions reviewable and logged.",
    securityFeatures: ["Threat intelligence enrichment", "Risk scoring and anomaly detection", "IOC management workflows", "Explainable response actions", "Audit logging and Streamlit visibility"],
    challenges: ["Making automated decisions useful without hiding uncertainty", "Keeping feature engineering reproducible across datasets"],
    lessons: ["Security automation needs clear decision boundaries", "Good telemetry context improves triage quality"],
    techStack: ["Python", "Streamlit", "SOAR", "Threat Intelligence", "Machine Learning", "Audit Logging"],
    githubUrl: "https://github.com/anon-443/ai-security-automation-platform",
    category: "AI Security",
    featured: true,
    image: "/Portfolio/images/network-defense-visual.webp",
  },
  {
    id: "soar-anomaly-detection",
    title: "SOAR Anomaly Detection Pipeline",
    tagline: "Anomaly detection pipeline with automated response and investigation context",
    description: "An internship project focused on anomaly detection, IOC handling, threat intelligence enrichment, and SOAR-style response workflows for practical security operations.",
    architecture: "Security Events → Feature Engineering → ML Detection → IOC Enrichment → Response Decision → Case Record",
    threatModel: "The pipeline helps identify unusual activity and reduce repetitive analyst work while preserving evidence and response history.",
    securityFeatures: ["Anomaly detection", "IOC management", "Threat intelligence enrichment", "Automated response logic", "Investigation audit trail"],
    challenges: ["Reducing false positives while keeping suspicious behavior visible", "Turning detection output into actionable cases"],
    lessons: ["Detection quality depends on useful features", "Every automated action should remain traceable"],
    techStack: ["Python", "Scikit-learn", "SOAR", "IOC Management", "Threat Intelligence"],
    githubUrl: "https://github.com/anon-443/arzens-internship-assignment5-soar-anomaly-detection",
    category: "AI Security",
    featured: true,
    image: "/Portfolio/images/vulnerability_scanner.png",
  },
  {
    id: "securedocs",
    title: "SecureDocs",
    tagline: "Secure role-based document management and verification platform",
    description: "A secure document platform built around role-based access, verification workflows, protected records, and clear separation between user capabilities.",
    architecture: "React Client → Auth Layer → RBAC Policy → Document Services → Verification Workflow → Audit Trail",
    threatModel: "The application addresses unauthorized access, insecure document handling, weak authorization, and missing activity history through permission checks and auditable workflows.",
    securityFeatures: ["Role-based access control", "Protected document workflows", "Verification history", "Secure authentication", "Audit-ready activity records"],
    challenges: ["Keeping authorization consistent across document actions", "Making verification status clear to different user roles"],
    lessons: ["Authorization must be enforced at every sensitive action", "Security controls should remain understandable to users"],
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "JWT", "RBAC"],
    githubUrl: "https://github.com/anon-443/securedocs",
    category: "Web Security",
    featured: true,
    image: "/Portfolio/images/vulnerability_scanner.png",
  },
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
    githubUrl: "https://github.com/anon-443/YARA-Strings-Metadata-Static-Malware-Analyzer-Tool",
    category: "Malware Analysis",
    featured: true,
    image: "/Portfolio/images/malware_sandbox.png",
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
    githubUrl: "https://github.com/anon-443/MediConnect",
    category: "Web Security",
    featured: true,
    image: "/Portfolio/images/vulnerability_scanner.png",
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
    githubUrl: "https://github.com/anon-443/Secure-Distributed-File-System-with-AI-Monitoring-Agent",
    category: "Network Security",
    featured: true,
    image: "/Portfolio/images/network_ids.png",
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
    githubUrl: "https://github.com/anon-443/webrecon-framework",
    category: "Network Security",
    featured: false,
    image: "/Portfolio/images/network_ids.png",
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
    githubUrl: "https://github.com/anon-443/Remote-Desktop-Networking-Project",
    category: "Offensive Security",
    featured: false,
    image: "/Portfolio/images/malware_sandbox.png",
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
    githubUrl: "https://github.com/anon-443/DS_Project_CyberTournamentScheduler",
    category: "Software Engineering",
    featured: false,
    image: "/Portfolio/images/vulnerability_scanner.png",
  },
  {
    id: "ztna-self-healing",
    title: "ZTNA Self-Healing Network Architecture",
    tagline: "Zero Trust network layer with dynamic trust scoring and automated response",
    description:
      "A NIST SP 800-207 aligned Zero Trust architecture that recalculates device trust on every request and automates the detect, decide, and enforce cycle. AI-assisted threat analysis can trigger firewall policy updates while the SOC dashboard surfaces current risk decisions.",
    architecture:
      "Client Request → Trust Scoring Engine → Policy Decision Point → AI Threat Analysis → iptables Enforcement → SOC Dashboard",
    threatModel:
      "Designed to reduce lateral movement and contain compromised devices through continuous verification, least privilege, dynamic trust scoring, and automated network enforcement.",
    securityFeatures: [
      "Per-request device trust scoring",
      "NIST SP 800-207 Zero Trust policy enforcement",
      "AI-assisted anomaly and threat analysis",
      "Automated iptables response actions",
      "Real-time SOC dashboard and audit trail",
    ],
    challenges: [
      "Designing a trust model that updates without creating unnecessary access friction",
      "Connecting AI-assisted decisions to safe and explainable enforcement actions",
      "Maintaining auditability across distributed policy decisions",
    ],
    lessons: [
      "Zero Trust is an operating model rather than a single network product",
      "Security automation needs clear decision boundaries and audit records",
      "Fast containment is most useful when every action remains explainable",
    ],
    techStack: ["Python", "Flask", "Scapy", "iptables", "SQLite", "TLS 1.3", "Ollama", "NIST SP 800-207"],
    githubUrl: "https://github.com/anon-443/ZTNA-Self-Healing-Network-Architecture",
    category: "Network Security",
    featured: true,
    image: "/Portfolio/images/network_ids.png",
  },
  {
    id: "securepipeline",
    title: "SecurePipeline",
    tagline: "Enterprise DevSecOps deployment platform with security checks built into delivery",
    description:
      "A DevSecOps platform focused on bringing repeatable security checks into application delivery. The project demonstrates how secure build, deployment, and operational practices can be brought together in one workflow.",
    architecture:
      "Source Repository → Build Pipeline → Security Checks → Containerized Deployment → Monitoring and Audit",
    threatModel:
      "The platform addresses vulnerable dependencies, insecure build configuration, exposed secrets, and deployment drift through automated checks and controlled release workflows.",
    securityFeatures: [
      "Security checks integrated into delivery workflows",
      "Container-aware deployment approach",
      "Controlled configuration and secrets handling",
      "Repeatable deployment and audit practices",
    ],
    challenges: [
      "Balancing developer feedback speed with meaningful security gates",
      "Keeping deployment configuration consistent across environments",
    ],
    lessons: [
      "Security controls are easier to maintain when they are part of the delivery path",
      "Good DevSecOps design makes secure defaults practical for teams",
    ],
    techStack: ["Python", "DevSecOps", "Docker", "CI/CD"],
    githubUrl: "https://github.com/anon-443/SecurePipeline",
    category: "Web Security",
    featured: true,
    image: "/Portfolio/images/vulnerability_scanner.png",
  },
  {
    id: "cybershield-sme",
    title: "CyberShield SME",
    tagline: "Permission-first cybersecurity posture assessment for small businesses",
    description:
      "A responsive cybersecurity posture assessment application for small and medium-sized businesses. It performs passive HTTPS, DNS, and RDAP checks, turns the evidence into an A to F posture score, and provides AI-assisted remediation guidance.",
    architecture:
      "Authorized Domain → Passive HTTPS/DNS/RDAP Checks → Evidence Collection → Posture Scoring → Remediation Report",
    threatModel:
      "The product is designed for defensive assessment and avoids intrusive exploitation. It helps teams identify exposed security gaps while keeping scanning permission-first and evidence-based.",
    securityFeatures: [
      "Permission-first passive assessment workflow",
      "Evidence-led security posture scoring",
      "HTTPS, DNS, and RDAP checks",
      "AI-assisted remediation guidance",
      "Responsive reporting for non-specialist teams",
    ],
    challenges: [
      "Presenting technical evidence in a useful format for small business owners",
      "Keeping assessment results actionable without overstating risk",
    ],
    lessons: [
      "Security tooling is more useful when findings are connected to practical next steps",
      "Passive assessment can provide meaningful visibility with lower operational risk",
    ],
    techStack: ["TypeScript", "React", "Security Assessment", "DNS", "RDAP"],
    githubUrl: "https://github.com/anon-443/cybershield-sme",
    category: "Web Security",
    featured: true,
    image: "/Portfolio/images/vulnerability_scanner.png",
  }
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
    id: "infinity-wave-ai-data",
    role: "AI Data Annotation Intern",
    company: "Infinity Wave Inc",
    type: "Internship · Ongoing",
    period: "Sep 2026 – Present",
    description: "Supporting AI data quality workflows through structured annotation, review, and consistent labeling practices.",
    responsibilities: [
      "Reviewed and labeled data against defined quality guidelines",
      "Flagged ambiguous samples and maintained consistent annotation decisions",
      "Supported dataset quality checks for machine learning workflows",
    ],
    skills: ["Data Annotation", "Quality Review", "AI Workflows", "Documentation"],
  },
  {
    id: "ogdcl-cybersecurity",
    role: "Cybersecurity Intern",
    company: "Oil and Gas Development Company Ltd. Pakistan",
    type: "Internship",
    period: "Jul 2026 – Aug 2026",
    description: "Built practical blue team and network security foundations in a supervised lab environment.",
    responsibilities: [
      "Set up and reviewed Wazuh SIEM alerts in a supervised lab",
      "Studied threat detection, MITRE ATT&CK, and blue team controls",
      "Practiced VLANs, VTP, trunking, DHCP, NAT, ACLs, STP, EtherChannel, and port security",
      "Analyzed security events and documented defensive observations",
    ],
    skills: ["Wazuh", "SIEM", "MITRE ATT&CK", "VLANs", "Network Security"],
  },
  {
    id: "techskillhub-devops",
    role: "DevOps Engineer Intern",
    company: "TechSkillHub",
    type: "Internship",
    period: "Aug 2026 – Sep 2026",
    description: "Built SecurePipeline as an enterprise DevSecOps deployment platform focused on secure delivery and automation.",
    responsibilities: [
      "Built SecurePipeline for repeatable secure software delivery workflows",
      "Integrated deployment automation with security checks",
      "Applied controlled configuration and secrets handling practices",
      "Documented deployment and audit workflows",
    ],
    skills: ["DevSecOps", "Docker", "CI/CD", "Python", "SecurePipeline"],
  },
  {
    id: "arzens",
    role: "AI, Automation & Security Engineering Intern",
    company: "THE ARZENS",
    type: "Internship · Completed",
    period: "Jul 2026 – Sep 2026",
    description:
      "Building AI-assisted security pipelines and ML-based intrusion detection systems for real-time threat analysis and automated risk classification.",
    responsibilities: [
      "Built Python security pipelines using Ollama for threat analysis, anomaly detection, and risk classification",
      "Engineered intrusion detection models using Random Forest, XGBoost, and MLP on CICIDS2017-structured data",
      "Applied NIST AI RMF practices with risk assessments and drift detection workflows",
      "Delivered a versioned feature engineering pipeline for reproducible ML experiments",
    ],
    skills: ["Python", "Ollama", "Scikit-learn", "XGBoost", "NIST AI RMF", "Threat Detection"],
  },
  {
    id: "techbiz-soc",
    role: "SOC Analyst Intern",
    company: "Tech Biz Security",
    type: "Internship · Completed",
    period: "Aug 2026 – Sep 2026",
    description:
      "Monitoring security events, supporting incident triage, and automating repetitive SOC workflows with Python.",
    responsibilities: [
      "Monitored and correlated security events across SIEM dashboards",
      "Triaged and escalated incidents using structured runbooks",
      "Mapped observed attack patterns to MITRE ATT&CK techniques",
      "Automated repetitive SOC tasks with Python and prepared threat intelligence reports",
    ],
    skills: ["SIEM", "Incident Triage", "MITRE ATT&CK", "Python", "Threat Intelligence"],
  },
  {
    id: "cyberster",
    role: "Red Team Intern",
    company: "Cyberster",
    type: "Internship",
    period: "Jun 2026 – Sep 2026",
    description:
      "Performed adversary simulation, reconnaissance, controlled exploitation, and attack-path documentation in isolated lab environments.",
    responsibilities: [
      "Performed reconnaissance, vulnerability scanning, and controlled exploitation",
      "Simulated persistence techniques in authorized lab environments",
      "Documented complete attack paths and delivered remediation reports",
      "Applied MITRE ATT&CK techniques across network and web targets",
    ],
    skills: ["Kali Linux", "Nmap", "Metasploit", "OSINT", "MITRE ATT&CK", "Reporting"],
  },
  {
    id: "techbiz-ethical-hacking",
    role: "Ethical Hacking Intern",
    company: "Tech Biz Security",
    type: "Internship",
    period: "Jul 2026 – Aug 2026",
    description:
      "Performed full-cycle web application security testing and documented OWASP Top 10 aligned remediation guidance.",
    responsibilities: [
      "Tested web applications for SQL injection, XSS, authentication bypass, and IDOR",
      "Performed OSINT reconnaissance and structured vulnerability validation",
      "Used Burp Suite Professional to intercept and replay HTTP traffic",
      "Prepared remediation documentation for logging, session management, and input validation gaps",
    ],
    skills: ["Burp Suite", "OWASP Top 10", "SQL Injection", "XSS", "IDOR", "Kali Linux"],
  },
  {
    id: "techskillhub",
    role: "DevOps & Web Development Intern",
    company: "TechSkillHub",
    type: "Internship",
    period: "Aug 2026 – Sep 2026",
    description:
      "Worked on containerized web applications and secure backend features using modern full-stack technologies.",
    responsibilities: [
      "Deployed containerized applications with Docker",
      "Managed environment variables and secrets securely",
      "Built React and FastAPI features with PostgreSQL integrations",
      "Implemented JWT-based authentication and role-based access control",
    ],
    skills: ["Docker", "React", "FastAPI", "PostgreSQL", "JWT", "RBAC"],
  },
  {
    id: "sqrock",
    role: "Web Development Intern",
    company: "Sqrock IT Solutions",
    type: "Internship",
    period: "Aug 2026 – Sep 2026",
    description:
      "Developed responsive frontend components and REST API integrations with security-conscious access control.",
    responsibilities: [
      "Developed responsive frontend components for web applications",
      "Integrated REST APIs with clear loading and error states",
      "Implemented RBAC and OAuth flows",
      "Applied OWASP-aligned input handling practices",
    ],
    skills: ["React", "REST APIs", "OAuth", "RBAC", "OWASP", "Responsive UI"],
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
    title: "6 Cybersecurity and Software Internships",
    event: "Industry Experience",
    position: "THE ARZENS · Tech Biz Security · Cyberster · TechSkillHub · Sqrock IT Solutions",
    year: "2026",
    description:
      "Completed six internships spanning AI security engineering, SOC operations, red teaming, ethical hacking, DevOps, and web development.",
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

export type AccentColor = "red" | "cyan" | "purple";

export const accentColors: Record<AccentColor, { primary: string; glow: string; border: string; label: string }> = {
  red: { primary: "#e11d48", glow: "rgba(225,29,72,0.28)", border: "rgba(244,63,94,0.48)", label: "Crimson Red" },
  cyan: { primary: "#06b6d4", glow: "rgba(6,182,212,0.18)", border: "rgba(6,182,212,0.32)", label: "Cyan" },
  purple: { primary: "#4b2a68", glow: "rgba(75,42,104,0.24)", border: "rgba(110,69,142,0.42)", label: "Dark Purple" },
};
