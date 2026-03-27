export const skills = [
  {
    category: "Development",
    icon: "fa-code",
    tags: ["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Python", "Flask", "Node.js", "REST APIs"],
  },
  {
    category: "Cloud, DevOps & Platforms",
    icon: "fa-cloud",
    tags: ["AWS", "Vercel", "Render", "Railway", "Cloudflare R2", "Linux", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    category: "Tools & Platforms",
    icon: "fa-tools",
    tags: ["Git", "GitHub", "Zoho Projects", "Zoho CRM", "Zoho Social", "Figma", "WordPress"],
  },
  {
    category: "Data, AI & Analytics",
    icon: "fa-database",
    tags: ["MongoDB", "MySQL", "OpenCV", "Generative AI", "RAG", "Streamlit", "Google Analytics (GA4)"],
  },
  {
    category: "SEO & Marketing Analytics",
    icon: "fa-chart-line",
    tags: ["Google Search Console", "SEMrush", "Meta Business Suite"],
  },
];

export const leadership = [
  {
    icon: "fas fa-users",
    title: "Tech Team Lead — 23 Interns",
    desc: "Currently leading and mentoring a team of 23 interns split across two groups — 11 working on-site and 12 remotely. Responsible for assigning projects, guiding development workflows, and ensuring smooth collaboration across both teams.",
    stats: [
      { value: "23", label: "Interns Managed" },
      { value: "11", label: "On-site (WFO)" },
      { value: "12", label: "Remote (WFH)" },
    ],
  },
  {
    icon: "fas fa-laptop-code",
    title: "LMS Project Ownership",
    desc: "The on-site team contributes directly to the Learning Management System (LMS) I am actively building. I oversee architecture decisions, feature planning, and code quality across the entire project.",
    stats: [
      { value: "LMS", label: "Core Project" },
      { value: "Full", label: "Stack Ownership" },
    ],
  },
  {
    icon: "fas fa-cogs",
    title: "Core Technical Responsibilities",
    desc: "Alongside team leadership, I continue to handle website development, backend implementation, and system architecture — ensuring efficient execution and on-time delivery of all ongoing projects.",
    stats: [
      { value: "Dev", label: "Frontend & Backend" },
      { value: "Arch", label: "System Design" },
    ],
  },
];

export const experience = [
  {
    date: "Dec 2025 – Present",
    title: "Associate Software Engineer",
    company: "Yaticorp India Pvt Ltd",
    desc: "Building responsive and reusable frontend components using React, HTML, CSS, and JavaScript, delivering clean and user-friendly interfaces. Design and implement RESTful APIs with Node.js and MongoDB to support scalable backend functionality. Perform code reviews, identify and fix production-level bugs, and continuously optimize application performance for reliability. Deploy and maintain applications on Railway, Render, and Vercel, ensuring stable, secure, and high-availability production environments while collaborating closely with cross-functional teams.",
  },
  {
    date: "May 2025 – Present",
    title: "Marketing Automation Engineer",
    company: "Yaticorp India Pvt Ltd",
    desc: "Managing social media platforms across Instagram, Facebook, LinkedIn, and YouTube, executing SEO strategies using Google Search Console and SEMrush, planning and optimizing paid ad campaigns, and generating performance reports using Google Analytics and Meta Business Suite. Contributing to client-facing and internal application development involving frontend development using React, HTML, and CSS, backend REST API integration using Node.js and MongoDB, supporting application deployments using Railway, fixing production issues, and assisting in maintaining stable and scalable production environments.",
  },
  {
    date: "Sept 2025 – Dec 2025",
    title: "Technical Coordinator",
    company: "Yaticorp India Pvt Ltd",
    desc: "Coordinating technical activities across company projects by assigning and tracking tasks using Zoho Projects, acting as a bridge between development, marketing, and operations teams, monitoring timelines and deliverables, and supporting issue resolution to ensure timely execution.",
  },
];

export const internships = [
  {
    date: "Nov 2026 – Ongoing",
    title: "AWS & DevOps + AI Intern",
    company: "MicroDegree",
    points: [
      "Worked with AWS cloud services including EC2, S3, and IAM for application deployment.",
      "Built and managed containerized applications using Docker.",
      "Learned Kubernetes basics for container orchestration and scaling.",
      "Implemented CI/CD pipelines using Jenkins for automated build and deployment.",
      "Practiced DevOps workflows including version control, deployment automation, and monitoring.",
    ],
  },
  {
    date: "Oct 2023 – Nov 2023",
    title: "MongoDB Backend Development Intern",
    company: "Qspiders Campus Connect",
    points: [
      "Developed a Library Management System using MongoDB for efficient data storage.",
      "Built backend services using Flask to manage authentication and data operations.",
      "Implemented modules for book inventory management, member records, and borrowing history.",
      "Designed responsive interfaces for managing library operations and data efficiently.",
    ],
  },
];

export const certifications = [
  {
    icon: "fab fa-aws",
    title: "AWS Solutions Architect",
    issuer: "MicroDegree | January 2026",
    tags: ["AWS EC2", "AWS S3", "IAM", "VPC", "RDS", "Auto Scaling", "CloudWatch", "Elastic Load Balancer"],
  },
  {
    icon: "fas fa-cogs",
    title: "DevOps Engineer Certification",
    issuer: "MicroDegree | March 2026",
    tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Linux", "Git", "Automation"],
  },
  {
    icon: "fas fa-cloud",
    title: "AWS & DevOps Internship Program",
    issuer: "MicroDegree | March 2026",
    tags: ["AWS Deployment", "Docker Containers", "Kubernetes Basics", "Jenkins CI/CD", "Infrastructure Automation"],
  },
];

export const projects = [
  {
    featured: true,
    image: "/assets/academy_pro.png",
    alt: "AcademyPro LMS Dashboard",
    badge: "🚀 Featured Project",
    badgeColor: "var(--primary)",
    title: "AcademyPro - Advanced LMS Platform",
    desc: "A high-performance Learning Management System designed for premium student experiences and powerful administrative control. Features a Parallel Universe Demo Mode for safe exploration without affecting production data.",
    features: [
      { icon: "fas fa-user-graduate", label: "Student Portal", detail: "Intelligent dashboard, hybrid video player, and daily streak tracking." },
      { icon: "fas fa-file-alt", label: "Test Engine", detail: "Standalone aptitude tests with auto-grading and anti-cheat enforcement." },
      { icon: "fas fa-user-shield", label: "Enterprise Security", detail: "2FA (TOTP), Inactivity Auto-Lock, and distinct Admin/Demo environments." },
      { icon: "fas fa-bell", label: "Automated Alerts", detail: "Email notifications via Brevo for welcome credentials and support updates." },
    ],
    demo: { label: "Student Demo Access:", creds: "Email: demo-student@academypro.com | Pass: student123 | Enrollment: DEMO-001" },
    adminNote: true,
    tech: ["React 19", "TypeScript", "Node.js", "MongoDB", "Redis", "Brevo API", "Render/Vercel"],
    links: [
      { href: "https://academypro-official.vercel.app/", icon: "fas fa-external-link-alt", title: "Live Demo" },
      { href: "https://github.com/Preethesh26/lms-platform", icon: "fab fa-github", title: "View Code" },
    ],
  },
  {
    featured: true,
    image: "/assets/flora_ai.png",
    alt: "FloraAI App",
    badge: "🌿 Featured Project",
    badgeColor: "#27ae60",
    title: "FloraAI - Medicinal Plant Identification",
    desc: "An AI-powered Android application that enables real-time identification of medicinal plants using deep learning. Bridges traditional medicinal knowledge with modern AI by integrating Computer Vision, NLP (RAG), and Cloud Technologies.",
    features: [
      { icon: "fas fa-mobile-alt", label: "Mobile Vision", detail: "Real-time capture and upload via native Android app.", color: "#2ecc71" },
      { icon: "fas fa-brain", label: "Deep Learning", detail: "CNN-based image classification for accurate species prediction.", color: "#2ecc71" },
      { icon: "fas fa-book-medical", label: "RAG Integration", detail: "Retrieval-Augmented Generation for trustworthy medicinal insights.", color: "#2ecc71" },
      { icon: "fas fa-server", label: "Cloud Backend", detail: "Scalable Flask REST APIs hosted on Render.", color: "#2ecc71" },
    ],
    architecture: ["📱 App Capture", "⚙️ REST API", "🧠 Model Inference", "📚 RAG Retrieval"],
    tech: ["Android (Java/Kotlin)", "Python", "Flask", "TensorFlow/Keras", "NLP/RAG", "Render"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/surveillance.png",
    alt: "AI Surveillance System",
    title: "AI Surveillance System",
    desc: "Real-time face recognition surveillance with cloud storage and SMS alerts via Twilio API.",
    tech: ["Python", "OpenCV", "Twilio", "MongoDB"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/travel.png",
    alt: "Travel Agency System",
    title: "Travel Agency System",
    desc: "End-to-end booking & management system with authentication and customer data handling.",
    tech: ["HTML", "PHP", "MySQL"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/amazon.png",
    alt: "Amazon Clone",
    title: "Amazon Homepage Clone",
    desc: "High-fidelity replica of Amazon's homepage focusing on responsive UI design and layout accuracy.",
    tech: ["HTML5", "CSS3"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/stock.png",
    alt: "Stock Prediction",
    title: "Stock Market Prediction",
    desc: "ML model analyzing historical stock data to predict future trends and market movements.",
    tech: ["Python", "Scikit-learn", "Jupyter"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/currency.png",
    alt: "Currency Convertor",
    title: "Currency Convertor API",
    desc: "Real-time currency conversion tool fetching live exchange rates via external APIs.",
    imgStyle: { transform: "scale(1.5)" },
    tech: ["JavaScript", "Node.js", "API"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/cnn.png",
    alt: "Image Classification CNN",
    title: "Image Classification (CNN)",
    desc: "Deep learning model trained to distinguish between images of cats and dogs with high accuracy.",
    imgStyle: { transform: "scale(1.3)" },
    tech: ["Python", "TensorFlow", "Keras"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
  {
    image: "/assets/tic tac toe.png",
    alt: "Tic Tac Toe Game",
    title: "Tic Tac Toe Game",
    desc: "Interactive, browser-based implementation of the classic game with a clean UI.",
    imgStyle: { transform: "scale(2.3)" },
    tech: ["JavaScript", "HTML", "CSS"],
    links: [{ href: "https://github.com/Preethesh26", icon: "fab fa-github", title: "View Code" }],
  },
];
