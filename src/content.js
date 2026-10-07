export const personalInfo = {
  name: "Zabih Ullah",
  logoText: "Zabih Ullah",
  role: "AI Engineer & Backend Developer",
  tagline: "AI Engineer crafting agentic systems, production RAG pipelines, multi-modal voice agents, and high-performance REST backends. Driven to build scalable, intelligent software that solves real-world problems.",
  email: "zabihullah0166@gmail.com",
  phone: "+92 342 7195176",
  location: "Timergara, Pakistan",
  availability: "Open to Opportunities",
  resumePdf: "/assets/Zabih_Ullah_CV.pdf",
  profileImg: "/assets/profile.png",
  chessImg: "/assets/Photo1.jpeg",
  swimImg: "/assets/Photo2.jpeg",
  socials: {
    github: "https://github.com/zabihullah0166",
    linkedin: "https://www.linkedin.com/in/zabihullah0166",
    instagram: "https://www.instagram.com/zabihullah1926/",
    facebook: "https://www.facebook.com/zabih.ullah.33115/",
  },
  typewriterWords: [
    "AI & Agentic Systems Engineer",
    ".NET & C# Developer",
    "Python & FastAPI Developer",
    "RAG & Vector Search Specialist",
    "Multi-Modal Voice Agent Builder",
    "AI Developer",
  ],
  bio: [
    "Long before writing my first line of code, I developed a passion for tackling complex technical challenges under pressure. As an AI Engineer, discipline, precision, and continuous learning dictate every system I architect.",
    "Today, as a Full-Stack AI Engineer, I specialize in designing sub-250ms RAG search architectures, agentic workflows with LangChain & LangGraph, and multi-modal voice AI assistants. I don't just call model APIs — I build the underlying data pipelines, vector retrieval layers, and Dockerized microservices that make AI reliable in production.",
    "Beyond code, I am committed to technical leadership and team collaboration, translating complex AI concepts into intuitive, real-world applications that deliver measurable value.",
    "When I’m not building agentic systems or backend microservices, you’ll find me exploring emerging AI research and sharpening my software engineering craft.",
  ],
};

export const skillsCategories = [
  { id: "ai", label: "AI / LLM" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "devops", label: "DevOps" },
  { id: "tools", label: "Tools" },
  { id: "all", label: "All Skills" },
];

export const skillsData = [
  // AI / LLM
  { name: "LangGraph / DeepAgents", category: "ai", icon: "fas fa-diagram-project", level: 95 },
  { name: "LangChain", category: "ai", icon: "fas fa-brain", level: 92 },
  { name: "RAG & Vector Search", category: "ai", icon: "fas fa-network-wired", level: 94 },
  { name: "Pinecone / FAISS / pgvector", category: "ai", icon: "fas fa-database", level: 72 },
  { name: "OpenAI / Gemini 2.5", category: "ai", icon: "fas fa-robot", level: 76 },
  { name: "Groq & LLaMA 3.1", category: "ai", icon: "fas fa-bolt", level: 95 },
  { name: "Voice AI (Cartesia / ElevenLabs)", category: "ai", icon: "fas fa-microphone", level: 80 },
  { name: "Computer Vision (YOLO / OpenCV)", category: "ai", icon: "fas fa-eye", level: 58 },

  // Backend
  { name: "Python", category: "backend", icon: "fab fa-python", level: 98 },
  { name: "FastAPI", category: "backend", icon: "fas fa-bolt", level: 92 },
  { name: "C# & .NET Core", category: "backend", icon: "fas fa-code", level: 75 },
  { name: "ASP.NET Core MVC", category: "backend", icon: "fas fa-layer-group", level: 72 },
  { name: "Entity Framework Core", category: "backend", icon: "fas fa-database", level: 70 },
  { name: "SQL Server", category: "backend", icon: "fas fa-database", level: 72 },
  { name: "Asyncio", category: "backend", icon: "fas fa-sync", level: 88 },
  { name: "Pydantic", category: "backend", icon: "fas fa-check-double", level: 90 },
  { name: "SQL / PostgreSQL", category: "backend", icon: "fas fa-database", level: 75 },
  { name: "RESTful APIs", category: "backend", icon: "fas fa-server", level: 75 },

  // Frontend
  { name: "TypeScript", category: "frontend", icon: "fas fa-code", level: 40 },
  { name: "React (Vite)", category: "frontend", icon: "fab fa-react", level: 40 },
  { name: "JavaScript (ES6+)", category: "frontend", icon: "fab fa-js", level: 50 },
  { name: "HTML5 & CSS3", category: "frontend", icon: "fab fa-html5", level: 40 },
  { name: "Tailwind CSS", category: "frontend", icon: "fas fa-paint-brush", level: 25 },

  // DevOps
  { name: "Docker", category: "devops", icon: "fab fa-docker", level: 50 },
  { name: "GitHub Actions / CI-CD", category: "devops", icon: "fab fa-github", level: 90 },
  { name: "Linux / Bash", category: "devops", icon: "fab fa-linux", level: 25 },

  // Tools
  { name: "Git & GitHub", category: "tools", icon: "fab fa-git-alt", level: 92 },
  { name: "Tavily Web Search API", category: "tools", icon: "fas fa-search", level: 90 },
  { name: "VS Code", category: "tools", icon: "fas fa-terminal", level: 95 },
];

export const experienceData = [
  {
    role: ".NET Intern",
    company: "Augit Technologies | PCSIR Lahore",
    date: "Present",
    description:
      "Learning and gaining practical experience in professional .NET web development. Building web applications using C#, ASP.NET Core MVC, Razor Views, and MVC architecture, alongside EF Core, SQL Server, and REST APIs.",
    bullets: [
      "Learning and developing web applications using C#, ASP.NET Core MVC, Razor Views, and the MVC architecture, with practical experience in controllers, models, routing, repositories, interfaces, data passing, and building dynamic web pages.",
      "Developing foundational skills in .NET backend development, REST APIs, JSON-based data handling, Entity Framework Core, SQL/database integration, debugging, and writing structured, maintainable code as part of my progression toward becoming a professional .NET developer."
    ],
    skills: [
      "C#",
      "ASP.NET Core MVC",
      "Razor Views",
      "MVC Architecture",
      "REST APIs",
      "JSON",
      "Routing",
      "Repository Pattern",
      "Interfaces",
      "Entity Framework Core",
      "SQL Server",
      "Debugging & Problem Solving"
    ],
    highlightStats: ["C# & .NET Core", "ASP.NET Core MVC", "EF Core & SQL Server"],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Revnix (SMC-PVT) LTD",
    date: "November 2025 – July 2026",
    description:
      "Architected intelligent multi-modal agents including WhatsApp AI assistants, legal document risk analyzers (ContractLens), real-time campus surveillance violation systems, and e-commerce voice assistants.",
    highlightStats: ["Multi-Modal Voice AI", "Computer Vision (YOLO)", "Legal NLP Agents"],
    skills: ["Python", "FastAPI", "LangChain / LangGraph", "YOLO / OpenCV", "RAG & Vector Search", "Cartesia / ElevenLabs"]
  },
];

export const educationData = [
  {
    degree: "Bachelor of Science in Artificial Intelligence (BSAI)",
    institution: "The University of Haripur",
    date: "2022 - 2026",
    icon: "fas fa-graduation-cap",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and Distributed Software Architectures.",
  },
  {
    degree: "FSc Pre-Medical",
    institution: "Islamabad Model College, Balambat",
    date: "2020 - 2022",
    icon: "fas fa-laptop-code",
    description:
      "Biology, Chemistry, Physics, English, Urdu, Islamyat",
  },
  {
    degree: "Matriculation",
    institution: "Government Higher Secondary School, Malakand",
    date: "2018 - 2019",
    icon: "fab fa-python",
    description:
      "English, Urdu, Islamyat, Mathematics, Biology, Physics, Chemistry",
  },
];

export const projectsData = [
  {
    title: "Meta WhatsApp AI Agent",
    description:
      "An intelligent, multi-modal WhatsApp AI assistant powered by FastAPI, LangGraph / DeepAgents, Google Gemini 2.5, Tavily Web Search, and Cartesia TTS. Handles both text and voice interactions directly over WhatsApp.",
    category: "ai",
    image: "/assets/meta_whatsapp_agent.png",
    tags: ["Python", "FastAPI", "LangGraph", "Gemini 2.5", "Cartesia TTS", "WhatsApp API"],
    github: "https://github.com/zabihullah0166/Meta-Whatsapp-Agent",
  },
  {
    title: "ContractLens",
    description:
      "AI-powered multi-agent legal document analyzer for contracts and agreements. Upload PDF, DOCX, or TXT files to extract key clauses, evaluate clause-level risk scores, write plain-English executive summaries, and track analysis history.",
    category: "ai",
    image: "/assets/contractlens.png",
    tags: ["TypeScript", "React", "AI Agents", "LangChain", "NLP", "Risk Scoring"],
    github: "https://github.com/zabihullah0166/ContractLens",
  },
  {
    title: "Campus Surveillance & Violation System",
    description:
      "AI-powered real-time campus monitoring system built with FastAPI, YOLO, OpenCV, Facial Recognition, and React (Vite). Detects security violations (weapons, smoking, fights), identifies enrolled students, captures evidence snapshots, and issues automated fine challans.",
    category: "ai",
    image: "/assets/campus_surveillance.png",
    tags: ["Python", "YOLO", "OpenCV", "Face Recognition", "FastAPI", "React"],
    github: "https://github.com/zabihullah0166/Campus-Surveillance-System",
  },
  {
    title: "LuxStore Voice AI",
    description:
      "E-Commerce FastAPI application integrated with an interactive AI Voice Assistant for real-time voice product search, conversational recommendations, and voice-assisted checkout.",
    category: "web",
    image: "/assets/luxstore_voice_ai.png",
    tags: ["Python", "FastAPI", "AI Voice Agent", "Speech-to-Text", "E-Commerce"],
    github: "https://github.com/zabihullah0166/luxstore-voice-ai",
  },
  {
    title: "YouTube RAG Assistant",
    description:
      "RAG-powered YouTube Q&A assistant retrieving video transcripts and answering complex questions using LangChain, Groq LLaMA models, Cohere Embeddings, and FAISS vector stores with hyperlinked video timestamps.",
    category: "ai",
    image: "/assets/youtube_rag.png",
    tags: ["Python", "LangChain", "Groq", "Cohere Embeddings", "FAISS", "RAG"],
    github: "https://github.com/zabihullah0166/youtube-rag-assistant",
  },
  {
    title: "The Carnivore AI Restaurant Agent",
    description:
      "AI-powered restaurant concierge for The Carnivore — built with LangChain, LLaMA 3.1, Pinecone RAG, ElevenLabs voice input, and FastAPI for automated voice orders, menu Q&A, and table reservations.",
    category: "ai",
    image: "/assets/restaurant_agent.png",
    tags: ["Python", "LangChain", "LLaMA 3.1", "Pinecone RAG", "ElevenLabs", "FastAPI"],
    github: "https://github.com/zabihullah0166/restaurant-agent",
  },
  {
    title: "AI Task Manager",
    description:
      "AI-powered task management system supporting natural language commands, automated LangChain workflow agents, and CSV/PostgreSQL database persistence.",
    category: "web",
    image: "/assets/task_manager.png",
    tags: ["Python", "LangChain", "PostgreSQL", "NLP", "AI Agents"],
    github: "https://github.com/zabihullah0166/Task-Manager",
  },
];

export const testimonialsData = [
  {
    quote:
      "It was a pleasure having Zabih Ullah as part of our AI team. We appreciate his dedication, learning attitude, and contributions throughout his internship. Wishing him success in all his future endeavors.",
    author: "Revnix (SMC-Private) Limited",
    role: "AI Internship Program",
    initials: "RX",
    stars: 5,
  },
];

export const contactEndpoint = "https://formsubmit.co/ajax/zabihtik@gmail.com";

export const aiPlaygroundQuestions = [
  {
    id: "rag",
    question: "What is Zabih's experience with RAG and Vector Databases?",
    answer: "Zabih has engineered sub-250ms RAG search pipelines using Pinecone, FAISS, and pgvector. Projects like the 'YouTube RAG Assistant' and 'The Carnivore Restaurant Agent' leverage Groq LLaMA 3.1 and Cohere Embeddings with context-aware semantic retrieval.",
    category: "RAG & Vector Search"
  },
  {
    id: "agents",
    question: "How does Zabih build Agentic Workflows?",
    answer: "Zabih builds autonomous multi-agent graphs using LangGraph, DeepAgents, and LangChain. His 'Meta WhatsApp AI Agent' handles multi-modal text and voice inputs with tool calling (Tavily search, Cartesia TTS) and dynamic state orchestration.",
    category: "Agentic AI"
  },
  {
    id: "cv-voice",
    question: "What Voice AI & Computer Vision systems has Zabih built?",
    answer: "Zabih built real-time campus surveillance systems combining YOLO, OpenCV, and facial recognition with FastAPI. For voice AI, he built LuxStore Voice AI & WhatsApp Voice Bot integrating Cartesia, ElevenLabs, and STT/TTS models.",
    category: "Voice & Vision"
  },
  {
    id: "backend",
    question: "What backend stack does Zabih prefer?",
    answer: "Zabih specializes in Python, FastAPI, Asyncio, and Pydantic for ultra-fast async REST microservices, integrated with PostgreSQL, Docker containers, and GitHub Actions CI/CD pipelines.",
    category: "Backend Stack"
  }
];
