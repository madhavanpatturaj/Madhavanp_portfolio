// ---------------------------------------------------------------------------
// Portfolio content — Madhavan P
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Madhavan P',
  role: 'Data Science · Machine Learning · AI',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'madhavanpatturaj2708@gmail.com',
  phone: '+91 93453 27880',
  github: 'https://github.com/madhavanpatturaj',
  githubLabel: 'github.com/madhavanpatturaj',
  linkedin: 'https://linkedin.com/in/madhavan-p027',
  linkedinLabel: 'linkedin.com/in/madhavan-p027',
  hackerrank: 'https://www.hackerrank.com/profile/madhavanpattura1',
  hackerrankLabel: 'hackerrank.com/profile/madhavanpattura1',
  photo: '/images/madhavan.jpeg',
  resume: '/madhavan-resume.pdf',
  tagline: 'I turn raw, messy data into models and products people actually use.',
  summary:
    'Final-year M.Sc. Software Systems student at KG College of Arts and Science, Coimbatore, specializing in Data Science, Machine Learning and Artificial Intelligence. I enjoy taking messy datasets, building accurate models or dashboards from them, and using AI tools to improve the quality of the result.',
}

export const stats = [
  { value: '3', label: 'Internships', hint: 'Data Science · ML · Analytics' },
  { value: '5+', label: 'Hackathons', hint: 'National, 24–48 hour builds' },
  { value: '1st', label: 'Hackmarathon 2k26', hint: 'Smart Healthcare track' },
  { value: '22+', label: 'Certifications', hint: 'Coursera · AWS · College' },
]

export const about = {
  intro:
    "I'm Madhavan, a final-year M.Sc. Software Systems student at KG College of Arts and Science in Coimbatore, with an unwavering enthusiasm for Data Science, Machine Learning and Artificial Intelligence. I enjoy solving difficult project problems through repeated iterations until the result is accurate, useful and ready to apply.",
  paragraphs: [
    'My three internships built that foundation from different directions. Devtown introduced me to Python, SQL, NumPy, Pandas, Machine Learning and Deep Learning through hands-on projects. At KG Genius Labs, I collected and cleaned web data using Instant Data Scraper, Apollo.io, LinkedIn Scraper and ParseHub, then turned it into useful Excel reports. At Postulate Info Tech, I wrote research on super-early retinopathy and colour-blindness detection and completed more than forty projects across Classification, Regression, Decision Making, Clustering and Image Processing.',
    'Beyond internships, I have built and competed with Eclipse Syndicate in national hackathons: weDonate won first prize, WeRespond won second place, WeHere explored SDG 17 partnerships, and our CRDT-based OLTP engine reached the finalist stage at Scaler\'s Anvil Hackathon among 20,000+ teams. I also reached the final 50 teams in the AWS DeepRacer 3.0 League after training reinforcement-learning models with PPO.',
    "I care about the full pipeline: gathering and cleaning data, training and evaluating models, and wrapping that work in an interface people can use. I use AI tools deliberately to improve accuracy and iteration speed, while keeping the engineering decisions understandable and accountable.",
  ],
}

export const quote = {
  text: 'Data tells you what happened. Good engineering decides what happens next.',
}

// ---------------------------------------------------------------------------
// Toolkit — the only place icons/brand marks appear.
// ---------------------------------------------------------------------------

export const toolWebsites: Record<string, string> = {
  python: 'https://www.python.org/',
  sql: 'https://www.mysql.com/',
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  react: 'https://react.dev/',
  reactnative: 'https://reactnative.dev/',
  nodejs: 'https://nodejs.org/',
  vite: 'https://vite.dev/',
  supabase: 'https://supabase.com/',
  docker: 'https://www.docker.com/',
  ml: 'https://en.wikipedia.org/wiki/Machine_learning',
  dl: 'https://en.wikipedia.org/wiki/Deep_learning',
  pandas: 'https://pandas.pydata.org/',
  numpy: 'https://numpy.org/',
  scikitlearn: 'https://scikit-learn.org/',
  tensorflow: 'https://www.tensorflow.org/',
  jupyter: 'https://jupyter.org/',
  huggingface: 'https://huggingface.co/',
  openenv: 'https://huggingface.github.io/OpenEnv/index.html',
  aitools: 'https://openai.com/chatgpt/',
  kaggle: 'https://www.kaggle.com/',
  apollo: 'https://www.apollo.io/',
  parsehub: 'https://www.parsehub.com/',
  instantscraper:
    'https://chromewebstore.google.com/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah',
  scholar: 'https://scholar.google.com/',
  googlemaps: 'https://developers.google.com/maps',
  websockets: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  git: 'https://git-scm.com/',
  github: 'https://github.com/',
  vscode: 'https://code.visualstudio.com/',
  word: 'https://www.microsoft.com/microsoft-365/word',
  excel: 'https://www.microsoft.com/microsoft-365/excel',
  colab: 'https://colab.research.google.com/',
  aws: 'https://aws.amazon.com/',
}

export type Tool = { id: string; name: string }
export type ToolCategory = { id: string; title: string; tag: string; tools: Tool[] }

export const toolCategories: ToolCategory[] = [
  {
    id: 'languages',
    title: 'Languages & Data',
    tag: 'core',
    tools: [
      { id: 'python', name: 'Python' },
      { id: 'sql', name: 'SQL' },
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Runtime',
    tag: 'build',
    tools: [
      { id: 'react', name: 'React' },
      { id: 'reactnative', name: 'React Native' },
      { id: 'nodejs', name: 'Node.js' },
      { id: 'vite', name: 'Vite' },
      { id: 'supabase', name: 'Supabase' },
      { id: 'docker', name: 'Docker' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Data Science, ML & AI',
    tag: 'ml / ai',
    tools: [
      { id: 'ml', name: 'Machine Learning' },
      { id: 'dl', name: 'Deep Learning' },
      { id: 'pandas', name: 'pandas' },
      { id: 'numpy', name: 'NumPy' },
      { id: 'scikitlearn', name: 'scikit-learn' },
      { id: 'tensorflow', name: 'TensorFlow' },
      { id: 'jupyter', name: 'Jupyter / Colab' },
      { id: 'huggingface', name: 'Hugging Face' },
      { id: 'openenv', name: 'OpenEnv' },
      { id: 'aitools', name: 'AI Tools (LLMs)' },
      { id: 'kaggle', name: 'Kaggle' },
    ],
  },
  {
    id: 'data-collection',
    title: 'Data Collection & Scraping',
    tag: 'scrape',
    tools: [
      { id: 'apollo', name: 'Apollo.io' },
      { id: 'parsehub', name: 'ParseHub' },
      { id: 'instantscraper', name: 'Instant Data Scraper' },
      { id: 'scholar', name: 'Google Scholar' },
    ],
  },
  {
    id: 'apis-infra',
    title: 'APIs & Infrastructure',
    tag: 'infra',
    tools: [
      { id: 'googlemaps', name: 'Google Maps API' },
      { id: 'websockets', name: 'WebSockets' },
      { id: 'git', name: 'Git' },
      { id: 'github', name: 'GitHub' },
      { id: 'aws', name: 'AWS' },
    ],
  },
  {
    id: 'tools-productivity',
    title: 'Tools & Productivity',
    tag: 'stack',
    tools: [
      { id: 'vscode', name: 'VS Code' },
      { id: 'colab', name: 'Google Colab' },
      { id: 'word', name: 'Word' },
      { id: 'excel', name: 'Excel' },
    ],
  },
]

export const softSkills = ['Problem Solving', 'Teamwork & Collaboration', 'Result-Driven']

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type ToolUse = { id: string; why: string }
export type Proof = { title: string; image: string; file: string }

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type Experience = {
  slug: string
  company: string
  role: string
  period: string
  mode: string
  summary: string
  points: string[]
  toolsUsed: ToolUse[]
  proofs: Proof[]
}

export const experience: Experience[] = [
  {
    slug: 'postulate-info-tech',
    company: 'Postulate Info Tech Pvt Ltd',
    role: 'Data Scientist — Machine Learning & AI',
    period: 'Oct 2025 - Dec 2025',
    mode: 'On-site',
    summary:
      'My most transformative internship — the one that turned academic machine-learning knowledge into shipped, defensible work under a fast-moving, on-site team.',
    points: [
      'Worked as a Data Science Intern on research and applied machine-learning tasks, turning repeated experiments and mistakes into stronger, more reliable results with guidance from my manager.',
      'Took part in daily group discussions and handled real-time tasks under deadline pressure, sharpening how I communicate technical trade-offs and stay composed while working under pressure.',
      'Built more than forty analysis and prediction projects across Classification, Regression, Decision Making, Clustering and Image Processing, using datasets from Kaggle and Dataset.com, and versioned every experiment with Git.',
      'Authored a full research paper on the super-early detection of retinopathy-related colour blindness, using Google Scholar for references, classification and regression models for the analysis, and pivot tables in Word and Excel to structure the final submission delivered to the client.',
      'Created high-accuracy models in Jupyter, Google Colab and VS Code, visualizing datasets with PyLab so findings were easy for both technical and non-technical stakeholders to interpret.',
    ],
    toolsUsed: [
      { id: 'kaggle', why: 'Sourced clean, well-documented datasets for every analysis and prediction project.' },
      { id: 'git', why: 'Versioned every experiment and model iteration for a defensible history behind the research paper.' },
      { id: 'jupyter', why: 'Prototyped and debugged classification and regression models interactively before hardening the code.' },
      { id: 'vscode', why: 'Turned notebook experiments into structured, reusable Python scripts and modules.' },
      { id: 'python', why: 'The core language behind every model, from data cleaning to training pipelines.' },
      { id: 'ml', why: 'Applied classification and regression techniques across forty-plus Kaggle prediction models and the research paper.' },
      { id: 'excel', why: 'Built pivot tables and charts to structure and validate the research paper findings.' },
    ],
    proofs: [],
  },
  {
    slug: 'kg-genius-labs',
    company: 'KG Genius Labs',
    role: 'Data Analyst',
    period: 'Nov 2024 – Apr 2025',
    mode: 'On-site',
    summary:
      'Six months at KG Genius Labs, Coimbatore, was my first real exposure to production data workflows — where good analysis starts with disciplined, well-sourced data collection.',
    points: [
      'Scraped data at scale using Web Scraper, Apollo.io, Instant Data Scraper, LinkedIn Scraper and ParseHub, then cleaned and organized it so the wider team could skip hours of manual work.',
      'Analyzed large datasets in Excel — online and offline — using formulas, pivot tables, dynamic tables and lightweight automation to produce fast, reliable, recurring reports.',
      'Improved documentation throughput with Briskine, generating full report paragraphs from short keyword prompts and speeding up write-ups and data entry.',
    ],
    toolsUsed: [
      { id: 'apollo', why: 'Sourced structured contact and company data at scale for lead lists and outreach datasets.' },
      { id: 'parsehub', why: 'Built visual scraping recipes to pull structured data out of pages with no public API.' },
      { id: 'instantscraper', why: 'Used for quick, low-effort table extraction straight out of the browser.' },
      { id: 'excel', why: 'Cleaned, pivoted and automated recurring reports for the operations team.' },
    ],
    proofs: [
      { title: 'KG Genius Labs — Internship Certificate', image: '/proofs/kg-genius-labs-internship.jpg', file: '/proofs/kg-genius-labs-internship.pdf' },
    ],
  },
  {
    slug: 'devtown',
    company: 'Devtown',
    role: 'Data Scientist — Machine Learning & AI',
    period: 'May 2024 – Jul 2024',
    mode: 'Online',
    summary:
      'My foundational internship — where I moved from classroom theory into applied, hands-on machine-learning practice for the first time.',
    points: [
      'Built the foundation of my data-science career during this online program, learning Python, NumPy, pandas, SQL, Machine Learning and Deep Learning through structured, project-based modules.',
      'Built hands-on projects applying pandas for data wrangling alongside machine-learning and deep-learning techniques on real datasets.',
      'Converted theoretical coursework into practical, applied problem-solving skills that I still carry into every project today.',
    ],
    toolsUsed: [
      { id: 'python', why: 'The foundational language for every module, from wrangling scripts to first ML models.' },
      { id: 'pandas', why: 'Learned to wrangle, clean and reshape real datasets before feeding them into models.' },
      { id: 'sql', why: 'Practiced structured querying as part of the core data-science toolchain.' },
      { id: 'ml', why: 'Built first hands-on classification and prediction projects on real datasets.' },
      { id: 'dl', why: 'Introduced to early deep-learning techniques extending the core ML modules.' },
    ],
    proofs: [],
  },
]

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type TeamInfo = { name: string; role: string; members: { name: string; role: string }[] }

export type Project = {
  slug: string
  title: string
  blurb: string
  detail: string
  tags: string[]
  category: 'ML / AI' | 'Engine' | 'Full-Stack'
  toolkit: ToolUse[]
  team?: TeamInfo
  liveUrl?: string
  gallery?: string[]
  proofs: Proof[]
}

export const projects: Project[] = [
  {
    slug: 'wedonate-blood-donation-platform',
    title: 'weDonate — Blood Donation Platform',
    blurb:
      'A unified web and mobile platform that intelligently connects donors, patients and hospitals in real time — winner, Hackmarathon 2k26.',
    detail:
      'weDonate moves beyond a simple donor database to actively coordinate emergency blood donation in real time. I built the front end with Vite + React, leveraging fast builds and hot module replacement to prototype responsive interfaces quickly, and wrote the SQL queries handling emergency requests, donor availability, and a value-based repayment system. I integrated the Google Maps API for a live donor map and distance-based matching, used WebSockets for real-time status updates, and worked with the team on AI-powered document verification for donor eligibility, offline SMS/IVR alerts for low-connectivity scenarios, and gamified rewards to keep donors engaged. The platform also runs an ethical, sustainable fund model — resource-based aid instead of cash, backed by value-based repayment — to prevent misuse while staying genuinely useful in an emergency.',
    tags: ['Vite + React', 'SQL', 'Google Maps API', 'WebSockets'],
    category: 'Full-Stack',
    toolkit: [
      { id: 'react', why: 'Built the responsive front end donors and hospitals use to coordinate in real time.' },
      { id: 'vite', why: 'Fast builds and hot module replacement let me prototype interfaces quickly under the 24-hour clock.' },
      { id: 'sql', why: 'Wrote the queries handling emergency requests, donor availability, and repayment records.' },
      { id: 'googlemaps', why: 'Powered the live donor map and distance-based donor-to-request matching.' },
      { id: 'websockets', why: 'Delivered real-time status updates and instant notifications across the platform.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: 'Core member',
      members: [
        { name: 'Sanjay R', role: 'Team Leader' },
        { name: 'Madhan S', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — frontend & data' },
      ],
    },
    proofs: [{ title: 'Hackmarathon 2k26 — 1st Place Certificate', image: '/certificates/hackmarathon.jpeg', file: '/certificates/hackmarathon.jpeg' }],
  },
  {
    slug: 'crdt-relational-engine-anvil',
    title: 'CRDT Relational Engine — Anvil',
    blurb:
      'An embeddable, local-first OLTP database engine, internally CRDT-based, built at Ascent — Scaler School of Technology\u2019s Builders TechFest.',
    detail:
      "The engine externally mimics SQLite — tables, secondary indexes, joins, foreign-key cascades, uniqueness constraints — while internally representing every write as a CRDT, so multiple writers can mutate locally without coordination and merges still converge deterministically. The core challenge was classifying which relational invariants are natively CRDT-expressible (set membership, last-writer-wins fields, monotonic counters), which need lattice-respecting encoding (multi-value registers for conflicting cell writes, observed-remove sets for concurrent insert/delete), and which fundamentally need a coordination protocol — uniqueness constraints via an escrow/reservation protocol, and foreign-key existence under deletion. I built a pairwise gossip-synchronization layer across three simulated nodes with Merkle-hash verified convergence, bitemporal time travel across logical clock ticks, a sub-millisecond telemetry reconstruction engine, and a PCAM precision-prediction agent with live metrics — all while avoiding anti-patterns like server-authoritative conflict resolution and unbounded metadata growth. We tested it by disconnecting two peers over an unreliable network — one inserting rows, the other updating different columns of the same row, one deleting a parent row while the other inserted a child — and reconnecting to a convergent, invariant-preserving state.",
    tags: ['CRDT', 'Local-first', 'OLTP', 'Distributed Systems'],
    category: 'Engine',
    toolkit: [
      { id: 'sql', why: 'Built the query surface — schema definition and row management — sitting on the CRDT storage layer.' },
      { id: 'nodejs', why: 'Powered the simulated-node runtime and the gossip-synchronization layer between test nodes.' },
      { id: 'git', why: 'Versioned every subsystem — sync layer, time travel, telemetry engine — as they were built under the clock.' },
      { id: 'vscode', why: 'Main editor for building and debugging the engine, from the CRDT core to the prediction agent.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: 'Finalist — top 2,000 of 20,000+ teams',
      members: [
        { name: 'Madhan S', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — engine design' },
        { name: 'Sanjay R', role: 'Teammate' },
      ],
    },
    gallery: [
      '/projects/crdt-anvil/shot-1-sql-schema.jpg',
      '/projects/crdt-anvil/shot-2-topology.jpg',
      '/projects/crdt-anvil/shot-3-time-travel.jpg',
      '/projects/crdt-anvil/shot-4-context-engine.jpg',
      '/projects/crdt-anvil/shot-5-context-reconstruction.jpg',
      '/projects/crdt-anvil/shot-6-pcam-metrics.jpg',
    ],
    proofs: [{ title: "Scaler's Anvil Hackathon — Finalist Certificate", image: '/certificates/anvil-hackathon.jpeg', file: '/certificates/anvil-hackathon.jpeg' }],
  },
  {
    slug: 'werespond-emergency-response-app',
    title: 'WeRespond — Emergency Response App',
    blurb:
      'A real-time, community-powered emergency rescue platform with AI-driven triage — 2nd place, SRCAS Hackathon 2.0.',
    detail:
      'WeRespond bridges the gap before official help arrives by letting citizens act as first responders. AI-powered triage instantly categorizes SOS alerts by severity (High, Medium, Low), and smart geo-matching notifies only the closest available volunteers — covering incidents from women\u2019s safety and elderly care to accidents, fires and medical emergencies. I built the responsive web interface with React.js and Vite, worked on the React Native mobile app (one-click SOS reporting, live location sharing, real-time alerts), collaborated on the Supabase (PostgreSQL) database design, integrated the Google Maps API for real-time tracking and volunteer matching, and implemented WebSockets for instant two-way notifications. The backend runs on Node.js, with Python, scikit-learn and TensorFlow powering the AI severity analysis.',
    tags: ['React Native', 'Node.js', 'AI Triage', 'Live'],
    category: 'Full-Stack',
    toolkit: [
      { id: 'reactnative', why: 'Built the cross-platform mobile app people in an emergency actually open and use.' },
      { id: 'nodejs', why: 'Powered the backend API matching emergencies to the nearest available responders in real time.' },
      { id: 'supabase', why: 'Modeled user profiles, incident records and volunteer information with real-time capabilities.' },
      { id: 'googlemaps', why: 'Handled real-time location tracking and distance-based volunteer matching.' },
      { id: 'tensorflow', why: "Powered the AI-driven severity analysis that automatically ranks incoming incidents." },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: '2nd Place',
      members: [
        { name: 'Madhan S', role: 'Team Leader' },
        { name: 'Sanjay R', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — web, mobile & maps' },
      ],
    },
    liveUrl: 'https://werespond108.vercel.app/',
    proofs: [{ title: 'SRCAS Hackathon 2.0 — 2nd Place Certificate', image: '/certificates/srcas2-0.jpeg', file: '/certificates/srcas2-0.jpeg' }],
  },
  {
    slug: 'aml-detection-system',
    title: 'AML Detection System',
    blurb:
      'An anti-money-laundering pipeline combining OpenEnv reinforcement-learning environments with Hugging Face models to flag suspicious transactions.',
    detail:
      'The system simulates a real-world financial-monitoring task where an AI agent learns to detect illicit transactions through a standard step()/reset()/state() API, implementing a full OpenEnv specification with typed Pydantic models for Observation, Action and Reward, plus a validated openenv.yaml. I designed three progressive tasks — easy, medium, hard — each with programmatic graders scoring agent performance from 0.0 to 1.0, with the hard task genuinely challenging frontier models on subtle anomaly patterns. The reward function scores partial progress (correctly flagging suspicious transactions while minimizing false positives) and penalizes undesirable behavior like infinite loops. I used pandas and scikit-learn for feature engineering, XGBoost for classification, and Hugging Face Transformers to analyze transaction narratives and generate explainable decisions. The whole pipeline is containerized with Docker and deployed to Hugging Face Spaces behind a responsive API endpoint, validated with reproducible baseline scores across all three tasks.',
    tags: ['OpenEnv', 'Hugging Face', 'Reinforcement Learning', 'Docker'],
    category: 'ML / AI',
    toolkit: [
      { id: 'openenv', why: 'Defined reinforcement-learning environments simulating transaction streams and reward signals.' },
      { id: 'huggingface', why: 'Pulled and fine-tuned models on transaction-pattern data to classify suspicious activity.' },
      { id: 'python', why: 'The language behind the whole detection pipeline, from data prep to model inference.' },
      { id: 'scikitlearn', why: 'Handled feature engineering and anomaly-detection algorithms ahead of classification.' },
      { id: 'docker', why: 'Containerized the full solution for reproducible deployment to Hugging Face Spaces.' },
    ],
    team: {
      name: 'Independent project',
      role: 'Solo build',
      members: [{ name: 'Madhavan P', role: 'Design, build & validation' }],
    },
    proofs: [],
  },
]

export const projectCategories = ['All', 'Full-Stack', 'Engine', 'ML / AI'] as const

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export type Achievement = {
  slug: string
  title: string
  place: string
  date: string
  detail: string
  elaboration: string
  toolsUsed: ToolUse[]
  team?: TeamInfo
  proofs: Proof[]
  relatedProject?: string
}

export const achievements: Achievement[] = [
  {
    slug: 'hackmarathon-2k26',
    title: 'Hackmarathon 2k26',
    place: '1st Place — Smart Healthcare Track',
    date: 'Feb 2026',
    detail:
      'Won the Smart Healthcare Solutions track at a national 24-hour hackathon hosted by the School of Computational Sciences & Cyber Club at Nehru Arts and Science College, with weDonate — a real-time blood donation coordination platform.',
    elaboration:
      'My team, Eclipse Syndicate, designed and shipped weDonate from a blank repository to a working, judged demo inside 24 hours. First place recognized both the technical execution and the real-world usefulness of the idea — connecting donors, patients and hospitals through a live donor map, offline SMS/IVR alerts, AI-powered eligibility checks, and an ethical, resource-based fund model.',
    toolsUsed: [
      { id: 'react', why: 'Built the responsive web front end donors and recipients used to coordinate in real time.' },
      { id: 'sql', why: 'Backed the emergency-request and donor-availability data model.' },
      { id: 'googlemaps', why: 'Powered the live donor map and distance-based matching.' },
      { id: 'git', why: 'Kept the team shipping in parallel without stepping on each other during the 24-hour build.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: '1st Place',
      members: [
        { name: 'Sanjay R', role: 'Team Leader' },
        { name: 'Madhan S', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — frontend & data' },
      ],
    },
    proofs: [{ title: 'Hackmarathon 2k26 — 1st Place Certificate', image: '/certificates/hackmarathon.jpeg', file: '/certificates/hackmarathon.jpeg' }],
    relatedProject: 'wedonate-blood-donation-platform',
  },
  {
    slug: 'srcas-hackathon-2',
    title: 'SRCAS Hackathon 2.0',
    place: '2nd Place · Runner Up',
    date: 'Dec 2025',
    detail:
      'Built WeRespond, an AI-powered emergency response app using React Native and Node.js, and placed 2nd in this national 24-hour hackathon organized by the Programming Club of Sri Ramakrishna College of Arts & Science.',
    elaboration:
      "Placing 2nd overall validated both the product idea and the team's ability to execute a full mobile-and-backend build in a single day. The published build is live and linked from the project page.",
    toolsUsed: [
      { id: 'reactnative', why: 'Built the mobile app used by people reporting and responding to emergencies.' },
      { id: 'nodejs', why: 'Powered the backend that matched emergencies to the nearest responders.' },
      { id: 'googlemaps', why: 'Used for location lookups when routing a request to the closest responder.' },
      { id: 'tensorflow', why: 'Helped triage and prioritize incoming requests by severity under time pressure.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: '2nd Place',
      members: [
        { name: 'Madhan S', role: 'Team Leader' },
        { name: 'Sanjay R', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — web, mobile & maps' },
      ],
    },
    proofs: [{ title: 'SRCAS Hackathon 2.0 — 2nd Place Certificate', image: '/certificates/srcas2-0.jpeg', file: '/certificates/srcas2-0.jpeg' }],
    relatedProject: 'werespond-emergency-response-app',
  },
  {
    slug: 'srcas-hackathon-3',
    title: 'SRCAS Hackathon 3.0',
    place: 'Participant',
    date: 'Aug 2026',
    detail:
      'Built WeHere, a community collaboration platform for SDG 17, during the 24-hour SRCAS Hackathon 3.0, jointly organized by the Programming Club, iGenius and Microsoft at Sri Ramakrishna College of Arts & Science.',
    elaboration:
      'WeHere unites people, professionals, volunteers, mentors, NGOs, donors and institutions in one ecosystem for SDG 17 partnerships. The platform combines React and React Native, Node.js, MySQL, SQLite with CRDT-based offline-first synchronization, IPFS with Pinata for decentralized media, Google Nearby Connections and BLE for offline emergency communication, LangChain and LangGraph for agentic workflows, multilingual Llama 3 or Mistral assistance through FastAPI, FAISS semantic search, Redis Pub/Sub with WebSockets, and Google Maps for nearby support. Its standout features include an SOS ambulance alert system, offline emergency messaging, camera-proctored expert verification, device-bounded AI permissions, real-time translation, and a credits-based reward system designed for reliable use in rural, urban and disaster-hit areas.',
    toolsUsed: [
      { id: 'react', why: 'Prototyped the responsive web front end within the 24-hour build window.' },
      { id: 'reactnative', why: 'Built the cross-platform mobile experience alongside the web app.' },
      { id: 'nodejs', why: 'Backed the API layer connecting the prototype to live data.' },
      { id: 'aitools', why: 'Powered the agentic AI workflows and multilingual assistant.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: 'Core member',
      members: [
        { name: 'Sanjay R', role: 'Team Leader' },
        { name: 'Madhan S', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate' },
      ],
    },
    proofs: [{ title: 'SRCAS Hackathon 3.0 — Participation Certificate', image: '/certificates/srcas3-0.jpeg', file: '/certificates/srcas3-0.jpeg' }],
  },
  {
    slug: 'scaler-anvil-hackathon',
    title: "Scaler's Anvil Hackathon",
    place: 'Finalist — top 2,000 of 20,000+ teams',
    date: 'May 2026',
    detail:
      "Represented at Ascent, Scaler School of Technology's annual Builders TechFest, in Bengaluru — my first out-of-state hackathon, and the most demanding technical challenge I've taken on.",
    elaboration:
      'I designed and built a CRDT-based embeddable OLTP database engine — the CRDT Relational Engine project — under an on-spot problem statement with strict benchmarks. Reaching the finals came down to systems thinking, distributed-systems knowledge and delivering a working engine before the deadline.',
    toolsUsed: [
      { id: 'sql', why: 'Designed the query surface for the CRDT-based embeddable database engine.' },
      { id: 'nodejs', why: 'Ran the simulated multi-node runtime used to demo real-time sync convergence.' },
      { id: 'git', why: 'Versioned every engine subsystem as it was built out live during the finals.' },
      { id: 'vscode', why: 'Primary environment for building and debugging the engine under time pressure.' },
    ],
    team: {
      name: 'Eclipse Syndicate',
      role: 'Finalist',
      members: [
        { name: 'Madhan S', role: 'Teammate' },
        { name: 'Madhavan P', role: 'Teammate — engine design' },
        { name: 'Sanjay R', role: 'Teammate' },
      ],
    },
    proofs: [{ title: "Scaler's Anvil Hackathon — Finalist Certificate", image: '/certificates/anvil-hackathon.jpeg', file: '/certificates/anvil-hackathon.jpeg' }],
    relatedProject: 'crdt-relational-engine-anvil',
  },
  {
    slug: 'aws-deepracer',
    title: 'AWS DeepRacer 3.0 League',
    place: 'Finalist — top 50 of 1,000+ teams',
    date: 'Aug 2024',
    detail:
      'A 48-hour AWS DeepRacer 3.0 League bootcamp organized by KGiSL Educational Institutions in partnership with AWS Academy, held at KG College of Arts and Science.',
    elaboration:
      "My team, TechMakerz, completed the Coursera DeepRacer certificate with a 100% score before the event, then trained reinforcement-learning models — tuning hyperparameters and reward functions using the Proximal Policy Optimization (PPO) algorithm — on virtual tracks with AWS credits and deployed them to physical autonomous cars for real-track racing. We were shortlisted from over 1,000 teams into the final 50, and our trained models were deployed globally on the AWS DeepRacer League leaderboard.",
    toolsUsed: [
      { id: 'ml', why: 'Applied core reinforcement-learning concepts to train the autonomous racing model.' },
      { id: 'dl', why: 'Used reward-shaping and policy tuning concepts rooted in deep reinforcement learning.' },
      { id: 'python', why: 'Wrote the reward functions that shaped how the model learned to race.' },
      { id: 'aws', why: 'Trained models on virtual tracks with AWS credits and raced them on physical DeepRacer cars.' },
    ],
    team: {
      name: 'TechMakerz',
      role: 'Finalist',
      members: [
        { name: 'Madhavan P', role: 'Team Leader' },
        { name: 'Sanjay R', role: 'Teammate' },
        { name: 'Madhan S', role: 'Teammate' },
      ],
    },
    proofs: [
      { title: 'AWS DeepRacer 3.0 League — Certificate', image: '/certificates/deepracer.jpeg', file: '/certificates/deepracer.jpeg' },
      { title: 'Coursera — AWS DeepRacer', image: '/proofs/coursera-coursera-deepracer.jpg', file: '/proofs/coursera-coursera-deepracer.pdf' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Certificates & proofs library (internships + coursework + workshops)
// ---------------------------------------------------------------------------

export type CertEntry = { title: string; issuer: string; date: string; category: string; image: string; file: string }

export const certificateLibrary: CertEntry[] = [
  {
    title: 'Data Analyst Internship',
    issuer: 'KG Genius Labs, Coimbatore',
    date: 'Nov 2024 – Apr 2025',
    category: 'Internship',
    image: '/proofs/kg-genius-labs-internship.jpg',
    file: '/proofs/kg-genius-labs-internship.pdf',
  },
  {
    title: 'Data Scientist Internship',
    issuer: 'Postulate Info Tech Pvt Ltd',
    date: 'Oct 2025 – Dec 2025',
    category: 'Internship',
    image: '/proofs/postulate-internship-1.jpg',
    file: '/proofs/postulate-internship-1.pdf',
  },
  {
    title: 'Data Scientist Internship — Completion',
    issuer: 'Postulate Info Tech Pvt Ltd',
    date: 'Oct 2025 – Dec 2025',
    category: 'Internship',
    image: '/proofs/postulate-internship-2.jpg',
    file: '/proofs/postulate-internship-2.pdf',
  },
  {
    title: 'IoT using Arduino and NodeMCU',
    issuer: 'KG College of Arts and Science × NoviTech R&D Pvt. Ltd.',
    date: 'Aug 2023',
    category: 'Workshop',
    image: '/certificates/novitech.jpeg',
    file: '/certificates/novitech.jpeg',
  },
  {
    title: 'AWS DeepRacer',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-coursera-deepracer.jpg',
    file: '/proofs/coursera-coursera-deepracer.pdf',
  },
  {
    title: 'Data Science — Completion Certificate',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-data-science-completion-certificate.jpg',
    file: '/proofs/coursera-data-science-completion-certificate.pdf',
  },
  {
    title: 'Basic Statistics in Python (Correlation & t-Tests)',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-basic-statistic-in-python-collelation-and-t-tests.jpg',
    file: '/proofs/coursera-basic-statistic-in-python-collelation-and-t-tests.pdf',
  },
  {
    title: 'Statistics for Data Science',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-statistics-for-data-science.jpg',
    file: '/proofs/coursera-statistics-for-data-science.pdf',
  },
  {
    title: 'Programming Fundamentals with JS, CSS & HTML',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-programming-fundamentals-with-js-css-html.jpg',
    file: '/proofs/coursera-programming-fundamentals-with-js-css-html.pdf',
  },
  {
    title: 'Intro to Python Functions',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-intro-to-python-functions.jpg',
    file: '/proofs/coursera-intro-to-python-functions.pdf',
  },
  {
    title: 'Data Analysis in Python using pandas DataFrames',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-data-analyst-in-python-using-pandas-dataframe.jpg',
    file: '/proofs/coursera-data-analyst-in-python-using-pandas-dataframe.pdf',
  },
  {
    title: 'From Excel to Power BI',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-from-excel-to-power-bi-coursera.jpg',
    file: '/proofs/coursera-from-excel-to-power-bi-coursera.pdf',
  },
  {
    title: 'Python Packages for Data Science',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-python-packages-for-data-science.jpg',
    file: '/proofs/coursera-python-packages-for-data-science.pdf',
  },
  {
    title: 'Working with Subqueries in SQL',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-working-with-subquery-in-sql.jpg',
    file: '/proofs/coursera-working-with-subquery-in-sql.pdf',
  },
  {
    title: 'Intro to HTML',
    issuer: 'Coursera',
    date: '2023',
    category: 'Coursera',
    image: '/proofs/coursera-intro-to-html.jpg',
    file: '/proofs/coursera-intro-to-html.pdf',
  },
  {
    title: 'Intro to Python Fundamentals',
    issuer: 'Coursera',
    date: '2023',
    category: 'Coursera',
    image: '/proofs/coursera-intro-to-python-fundamentals-corsera.jpg',
    file: '/proofs/coursera-intro-to-python-fundamentals-corsera.pdf',
  },
  {
    title: 'SQL Mathematical Functions',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-sql-mathematical-fyunction.jpg',
    file: '/proofs/coursera-sql-mathematical-fyunction.pdf',
  },
  {
    title: 'Building a Single-Page Website — HTML, CSS',
    issuer: 'Coursera',
    date: '2023',
    category: 'Coursera',
    image: '/proofs/coursera-building-a-single-page-website-html-css.jpg',
    file: '/proofs/coursera-building-a-single-page-website-html-css.pdf',
  },
  {
    title: 'React Native',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-react-native.jpg',
    file: '/proofs/coursera-react-native.pdf',
  },
  {
    title: 'Generative AI — Introduction and Application',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-generative-ai-intro-and-application.jpg',
    file: '/proofs/coursera-generative-ai-intro-and-application.pdf',
  },
  {
    title: 'Building an AI-Powered Chatbot Without Programming',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-building-ai-powered-chatbot-without-programing.jpg',
    file: '/proofs/coursera-building-ai-powered-chatbot-without-programing.pdf',
  },
  {
    title: 'Generative AI — Prompt Engineering Basics',
    issuer: 'Coursera',
    date: '2025',
    category: 'Coursera',
    image: '/proofs/coursera-generative-ai-prompt-engineer-basics.jpg',
    file: '/proofs/coursera-generative-ai-prompt-engineer-basics.pdf',
  },
  {
    title: 'Introduction to AI',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-intro-to-ai.jpg',
    file: '/proofs/coursera-intro-to-ai.pdf',
  },
  {
    title: 'Titanic Survival Prediction using ML',
    issuer: 'Coursera',
    date: '2024',
    category: 'Coursera',
    image: '/proofs/coursera-titanic-suvival-predict-using-ml.jpg',
    file: '/proofs/coursera-titanic-suvival-predict-using-ml.pdf',
  },
]

export const certificateCategories = ['All', 'Internship', 'Coursera', 'Workshop'] as const

export const education = {
  degree: 'M.Sc. Software Systems',
  school: 'Bharathiar University · KG College of Arts and Science',
  period: 'Aug 2022 – May 2027',
  note: 'Final-year, specializing in Data Science, Machine Learning and AI alongside core software-systems coursework.',
}
