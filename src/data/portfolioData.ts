export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  type: string;
  status: string;
  description: string;
  myContributions: string[];
  teamAspects?: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  achievementHighlight?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  type: 'Hackathon' | 'Leadership' | 'Club' | 'Workshop';
  badge: string;
  summary: string;
  keyPoints: string[];
  featured?: boolean;
}

export const PERSONAL_INFO = {
  fullName: 'Poorvi Hosamani',
  displayName: 'Poorvi',
  title: 'AI/ML & Full-Stack Developer',
  location: 'Bengaluru, India',
  college: 'BMS College of Engineering (BMSCE), Bengaluru',
  degree: 'B.E. Computer Science Engineering',
  batch: '2025 – 2029',
  yearOfStudy: 'Second Year',
  email: 'poorvihosamani02@gmail.com',
  photoUrl: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_10.23.36_PM_beeeeaef.jpeg',
  githubUrl: 'https://github.com/poorvihosamani02',
  linkedinUrl: 'https://www.linkedin.com/in/poorvi-hosamani-a46347384',
  heroIntro:
    'Second-year Computer Science Engineering student at BMS College of Engineering, Bengaluru. Passionate about building intelligent systems at the intersection of Artificial Intelligence, Machine Learning, and Full-Stack Development.',
  aboutBio:
    "I'm Poorvi Hosamani, a second-year Computer Science Engineering student at BMS College of Engineering, Bengaluru, passionate about building technology-driven solutions to real-world problems. My interests lie at the intersection of Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy exploring new technologies, transforming ideas into practical applications, and learning through hands-on projects. I'm continuously expanding my technical skills, experimenting with innovative approaches, and striving to create meaningful solutions that make a difference.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    categoryKey: 'programming',
    description: 'Foundational languages for systems, algorithms, and applications',
    skills: [
      { name: 'Python', tag: 'AI & Backend' },
      { name: 'Java', tag: 'Core & OOP' },
      { name: 'JavaScript', tag: 'Modern Web' },
      { name: 'C', tag: 'Low-Level & Logic' },
    ],
  },
  {
    title: 'Web Development',
    categoryKey: 'web',
    description: 'Frontend frameworks, responsive interfaces, and API services',
    skills: [
      { name: 'HTML', tag: 'Semantic Markup' },
      { name: 'CSS', tag: 'Modern Styling' },
      { name: 'React', tag: 'Component UI' },
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'REST Services' },
      { name: 'FastAPI', tag: 'High-perf Python' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    categoryKey: 'ai_ml',
    description: 'Applied machine learning, generative models, and contextual retrieval',
    skills: [
      { name: 'Artificial Intelligence & Machine Learning', tag: 'Core Models' },
      { name: 'Retrieval-Augmented Generation (RAG)', tag: 'Knowledge Vector' },
      { name: 'Gemini API', tag: 'Multimodal AI' },
    ],
  },
  {
    title: 'Databases',
    categoryKey: 'databases',
    description: 'Relational data modeling, querying, and persistent stores',
    skills: [
      { name: 'MySQL', tag: 'Relational' },
      { name: 'SQLite', tag: 'Embedded' },
    ],
  },
  {
    title: 'Developer Tools',
    categoryKey: 'tools',
    description: 'Version control, development environments, and cloud tooling',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'Google Colab', tag: 'ML Notebooks' },
      { name: 'Antigravity', tag: 'AI Dev Tooling' },
      { name: 'VS Code', tag: 'Primary IDE' },
    ],
  },
  {
    title: 'Core Fundamentals & Collaboration',
    categoryKey: 'other',
    description: 'Computer science fundamentals and engineering methodologies',
    skills: [
      { name: 'Data Structures & Algorithms', tag: 'Problem Solving' },
      { name: 'Object-Oriented Programming', tag: 'Architecture' },
      { name: 'API Integration', tag: 'Data Flow' },
      { name: 'Teamwork & Collaboration', tag: 'Hackathons & Clubs' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'adhikar-ai',
    name: 'AdhikarAI',
    tagline: 'AI-Powered Citizen Rights & Government Scheme Access Platform',
    role: 'Team Lead & Backend / AI-ML Developer',
    type: 'Team Project',
    status: 'Working Prototype',
    accentColor: '#06b6d4',
    description:
      'AdhikarAI is an AI-powered citizen assistance platform designed to help Indian citizens discover government schemes, understand eligibility, prepare documents, and identify potential scams. It aims to make government scheme information more accessible through personalized and multilingual assistance.',
    myContributions: [
      'Backend development and service architecture',
      'Dataset preparation and structured scheme curation',
      'RAG (Retrieval-Augmented Generation) pipeline integration for context-aware scheme discovery',
      'Government scheme eligibility matching engine',
      'Document Doctor feature for automated document verification guidance',
      'Scam Shield feature for fraud identification and citizen warning alerts',
      'Database development and scheme indexing using SQLite',
      'Frontend-backend integration across API endpoints',
    ],
    teamAspects: [
      'Led the team coordination, technical roadmap, and hackathon presentation',
      'Worked alongside team members on frontend UI layout and localized user testing',
    ],
    keyFeatures: [
      'Government scheme discovery across national and state programs',
      'Personalized eligibility matching based on citizen criteria',
      'Document analysis and readiness checks via Document Doctor',
      'Scam detection and fraudulent scheme alerts with Scam Shield',
      'Multilingual citizen assistance supporting regional languages',
      'Interactive AI chatbot for real-time natural language Q&A',
    ],
    techStack: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'FastAPI',
      'SQLite',
      'Gemini API',
      'RAG',
    ],
    githubUrl: 'https://github.com/poorvihosamani02/adhikarAI.git',
    liveDemoUrl: 'https://adhikarai-citizen-rights-government-scheme-access.ai.studio/',
    achievementHighlight:
      'Selected among 300 teams for the final round of the HACK4SDG Hackathon and secured a Top 10 position. The prototype was presented on stage before judges at PES University.',
  },
  {
    id: 'gridpoint',
    name: 'GridPoint',
    tagline: 'Warehouse Location Optimization & Logistics Intelligence Platform',
    role: 'Backend / Optimization Developer',
    type: 'Hackathon Project',
    status: 'Working Prototype',
    accentColor: '#14b8a6',
    description:
      'GridPoint is a warehouse location optimization platform that helps determine suitable warehouse locations for distribution networks. It considers neighborhood demand, delivery costs, distance, warehouse count, and operational constraints to support better logistics decisions.',
    myContributions: [
      'Engineered backend optimization logic evaluating demand, delivery cost, and distance trade-offs',
      'Built FastAPI REST endpoints to ingest neighborhood coordinates, customer orders, and fleet parameters',
      'Implemented customer-to-warehouse assignment routines balancing capacity limits with transit distances',
      'Developed data processing routines using NumPy, SciPy, and Pandas for spatial calculations',
      'Collaborated on front-end map visualization integration with Vite and React',
    ],
    teamAspects: [
      'Developed during a fast-paced hackathon sprint with optimization and frontend peers',
      'Focus strictly on algorithmic feasibility, trade-off analysis, and interactive reporting',
    ],
    keyFeatures: [
      'Neighborhood data entry and batch upload interface',
      'Interactive map-based visualization of locations and clusters',
      'Warehouse location optimization under real operational constraints',
      'Customer and neighborhood assignment to optimal fulfillment centers',
      'Delivery cost and distance trade-off comparison dashboards',
      'Multiple warehouse support with individual capacity bounds',
      'Maximum delivery radius and geographic boundaries enforcement',
      'Vehicle type and fuel cost calculation integration',
      'Traffic-dependent delivery time estimation',
      'Dynamic handling of changing customer demand profiles',
      'Infrastructure setup cost vs. operational delivery cost trade-off models',
    ],
    techStack: [
      'Vite',
      'React 18',
      'Python',
      'FastAPI',
      'Uvicorn',
      'REST APIs',
      'NumPy',
      'SciPy',
      'scikit-learn',
      'Pandas',
    ],
    githubUrl: 'https://github.com/poorvihosamani02/gridpoint.git',
    liveDemoUrl: 'https://gridpoint-bovl.onrender.com/',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'hack4sdg',
    title: 'HACK4SDG Hackathon — Top 10 Finalist',
    organization: 'PES University & HACK4SDG',
    type: 'Hackathon',
    badge: 'Top 10 of 300+ Teams',
    summary:
      'Selected among 300 competing teams across colleges for the final round with project AdhikarAI. Successfully secured a Top 10 finish and presented the prototype on stage before an expert jury at PES University.',
    keyPoints: [
      'Competed among 300+ collegiate developer teams',
      'Selected for final round and ranked in the prestigious Top 10',
      'Delivered live on-stage product pitch & live demo to judging panel at PES University',
      'Recognized for high social impact aligned with United Nations Sustainable Development Goals',
    ],
    featured: true,
  },
  {
    id: 'team-lead',
    title: 'Engineering Team Lead',
    organization: 'Hackathon Projects & Sprints',
    type: 'Leadership',
    badge: 'Leadership & Architecture',
    summary:
      'Led multidisciplinary project teams from concept ideation to deployment. Guided system architecture, sprint deadlines, backend-frontend integration, and jury stage presentations.',
    keyPoints: [
      'Coordinated technical delivery across frontend, AI pipelines, and backend APIs',
      'Facilitated clear communication and task ownership within project teams',
      'Managed live deployments and pitch decks under strict hackathon timeframes',
    ],
  },
  {
    id: 'acm-club',
    title: 'Member, ACM Student Chapter',
    organization: 'BMS College of Engineering (BMSCE)',
    type: 'Club',
    badge: 'Active Member',
    summary:
      'Active member of the Association for Computing Machinery (ACM) Student Chapter at BMSCE, participating in technical workshops, peer coding sessions, and tech conferences.',
    keyPoints: [
      'Engaged with peer developer network across computing domains',
      'Participated in technical talk sessions and problem-solving hack nights',
      'Collaborated on campus community technical initiatives',
    ],
  },
  {
    id: 'pentagram-club',
    title: 'Member, Pentagram Mathematical Society',
    organization: 'BMS College of Engineering (BMSCE)',
    type: 'Club',
    badge: 'Active Member',
    summary:
      'Active member of Pentagram, the mathematical and algorithmic society at BMSCE, exploring analytical reasoning, discrete mathematics, and algorithmic problem-solving.',
    keyPoints: [
      'Explored intersections of discrete mathematics and computer science',
      'Participated in algorithmic challenges and logic puzzles',
      'Cultivated analytical rigor applied directly to machine learning concepts',
    ],
  },
  {
    id: 'ai-workshops',
    title: 'Specialized AI & Antigravity Workshops',
    organization: 'Industry & Campus Tech Summits',
    type: 'Workshop',
    badge: 'Hands-on Training',
    summary:
      'Attended intensive, hands-on masterclasses and workshops covering Artificial Intelligence, Generative AI models, and modern development tooling including Build with Antigravity.',
    keyPoints: [
      'Hands-on exploration of Generative AI pipelines and prompt/agent architectures',
      'Workshop participation in Build with Antigravity AI development workflows',
      'Continuous adoption of emerging tools and industry best practices',
    ],
  },
];

export const EDUCATION_DATA = {
  institution: 'BMS College of Engineering (BMSCE)',
  city: 'Bengaluru, India',
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Computer Science and Engineering',
  duration: '2025 – 2029',
  currentYear: 'Second Year Undergraduate',
  description:
    'Pursuing undergraduate studies in Computer Science with a strong emphasis on core computing fundamentals, algorithmic problem solving, software engineering, and artificial intelligence.',
  relevantCoursework: [
    {
      title: 'Data Structures & Algorithms',
      description: 'Arrays, linked lists, trees, graphs, dynamic programming, and complexity analysis',
    },
    {
      title: 'Database Management Systems',
      description: 'Relational algebra, SQL, schema design, normalization, ACID transactions, and indexing',
    },
    {
      title: 'Object-Oriented Programming',
      description: 'Polymorphism, inheritance, encapsulation, abstraction, and design patterns in Java & C++',
    },
  ],
};

export const LEARNING_PILLARS = [
  {
    title: 'Hands-on AI & GenAI Systems',
    focus: 'Applied Engineering',
    summary:
      'Building production prototypes utilizing Retrieval-Augmented Generation (RAG), the Gemini API, and vector retrieval to create reliable, context-grounded AI solutions rather than toy prompts.',
  },
  {
    title: 'Workshops & Ecosystem Immersion',
    focus: 'Continuous Learning',
    summary:
      'Actively attending immersive technical workshops on AI, Generative AI, and Build with Antigravity to stay at the cutting edge of developer tools and modern frameworks.',
  },
  {
    title: 'Full-Stack Architecture & Data',
    focus: 'End-to-End Craft',
    summary:
      'Connecting Python & Node.js backends, REST APIs, and relational databases with responsive, accessible React interfaces built for high visual and performance standards.',
  },
  {
    title: 'Algorithmic Problem Solving',
    focus: 'Foundational Rigor',
    summary:
      'Deepening understanding of Data Structures, complexity trade-offs, and optimization strategies through coursework and collegiate club engagements at BMSCE.',
  },
];
