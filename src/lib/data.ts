export const AVATAR_SRC = "/avatar.jpg";

export const profile = {
  name: "Ram Avtar",
  firstName: "Ram",
  lastName: "Avtar",
  initials: "RA",
  role: "Software Developer",
  headline: "Flutter · Next.js · AI-Integrated Applications",
  summary:
    "Software developer with 2+ years of experience building cross-platform mobile apps (Flutter/Firebase) and full-stack web applications (Next.js, Node.js). I ship live products end-to-end — frontend, backend, custom CMS — and integrate LLMs like Google Gemini and Groq into real applications.",
  location: "Greater Noida, Uttar Pradesh — 201310",
  email: "ramavtarmjr@gmail.com",
  phone: "+91 6306437801",
  github: "https://github.com/ramavtarmjr885301",
  linkedin: "https://linkedin.com/in/ram-avtar-a34812343",
  site: "https://ram-dev-ochre.vercel.app/",
};

export const stats = [
  { value: "2+", label: "Years" },
  { value: "7", label: "Live Products" },
  { value: "2", label: "AI Projects" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    icon: "📱",
    items: [
      "Flutter", "Dart", "BLoC", "Provider", "SQLite",
      "Firebase (Firestore, Auth, FCM)", "Phaser 3", "Capacitor",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    items: [
      "Next.js", "React.js", "TypeScript", "Tailwind CSS",
      "WordPress (Headless CMS / GraphQL)",
    ],
  },
  {
    title: "Backend & Databases",
    icon: "🗄️",
    items: [
      "Node.js", "Express.js", "MongoDB (Mongoose)", "PostgreSQL",
      "Prisma ORM", "Supabase", "REST APIs", "JWT Authentication",
    ],
  },
  {
    title: "AI / LLM & Generative AI",
    icon: "🤖",
    items: [
      "Google Gemini API", "Groq API", "OpenAI API", "Prompt Engineering",
      "RAG", "Vector Databases (Pinecone, ChromaDB, FAISS)", "LangChain",
      "Hugging Face Transformers", "LoRA / QLoRA (Conceptual)",
      "Model Quantization (Conceptual)",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    items: ["Git", "GitHub", "Vercel", "Azure DevOps", "Postman", "VS Code"],
  },
];

export interface Experience {
  date: string;
  role: string;
  company: string;
  badge: string;
  points: string[];
  highlights?: { name: string; href: string; note: string }[];
}

export const experience: Experience[] = [
  {
    date: "MAY 2025 — PRESENT",
    role: "Software Developer (Flutter)",
    company: "Efextra Esolutions Pvt. Ltd.",
    badge: "Current Role",
    points: [
      "Developing and maintaining production-grade cross-platform mobile applications using Flutter and Firebase.",
      "Contributed to UI development of Traqfy, a live field-workforce management app.",
      "Independently designed, built, and published Critter Concert, a live mobile music game.",
    ],
    highlights: [
      {
        name: "Traqfy",
        href: "https://play.google.com/store/apps/details?id=com.efextra.traqfy",
        note: "Team project · Live on Google Play",
      },
      {
        name: "Critter Concert",
        href: "https://play.google.com/store/apps/details?id=com.efextra.critterconcert",
        note: "Solo project · Live on Google Play",
      },
    ],
  },
  {
    date: "AUG 2024 — JAN 2025",
    role: "Computer Science Trainer",
    company: "Global Institute of Technology, Mahoba",
    badge: "Teaching",
    points: [
      "Delivered structured Computer Science training, strengthening programming fundamentals and application development concepts.",
    ],
  },
  {
    date: "SEP 2023 — JUL 2024",
    role: "IT Trainer",
    company: "SSPEJKS, Mahoba (Under UPSDM)",
    badge: "Training",
    points: [
      "Conducted IT skills training under a government-backed skill development mission, mentoring learners in foundational and applied computing.",
    ],
  },
  {
    date: "FEB 2023 — AUG 2023",
    role: "Software Developer (Flutter)",
    company: "Insbytech Solutions Pvt. Ltd.",
    badge: "Development",
    points: [
      "Built and shipped Flutter-based mobile applications with Firebase integration, contributing to end-to-end feature development.",
    ],
  },
];

export type ProjectCategory = "ai" | "freelance" | "company" | "personal";

export interface Project {
  id: string;
  title: string;
  emoji: string;
  category: ProjectCategory;
  status: string;
  description: string;
  features: string[];
  tags: string[];
  link?: { href: string; label: string };
}

export const categoryMeta: Record<ProjectCategory, { title: string; blurb: string }> = {
  ai: { title: "AI Projects", blurb: "Applications powered by LLMs" },
  freelance: { title: "Freelance Projects", blurb: "Live client work, end-to-end" },
  company: { title: "Company Apps", blurb: "Shipped at Efextra Esolutions" },
  personal: { title: "Personal Projects", blurb: "Built for learning and fun" },
};

export const projects: Project[] = [
  {
    id: "justjob",
    title: "JustJob",
    emoji: "💼",
    category: "ai",
    status: "Live",
    description:
      "AI-assisted job platform with Candidate, Employer, Trainer and Admin portals, backed by Auspicious Eduservices Pvt. Ltd. under a government-linked skill-development initiative (DDU-GKY).",
    features: [
      "AI-assisted candidate profiling using Google Gemini and Groq LLMs",
      "REST API on Prisma ORM + PostgreSQL (Supabase) with secure file storage",
      "JWT auth and role-based access across four portals, Zod validation",
    ],
    tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Supabase", "Gemini", "Groq"],
    link: { href: "https://www.aepljobs.in/", label: "Visit aepljobs.in" },
  },
  {
    id: "moodmend",
    title: "MoodMend",
    emoji: "🧠",
    category: "ai",
    status: "Personal",
    description:
      "AI-powered mental wellness cross-platform app integrating Google Gemini for real-time CBT support and mood tracking.",
    features: [
      "Conversational CBT support via Google Gemini with tuned prompts",
      "Secure Cloud Firestore backend for private journals",
      "Local notifications and interactive breathing exercises",
    ],
    tags: ["Flutter", "Firebase", "Gemini API", "Provider", "Firestore"],
  },
  {
    id: "numrexo",
    title: "Numrexo",
    emoji: "🧮",
    category: "freelance",
    status: "Live",
    description:
      "Free online calculator platform covering health, finance, tax and everyday math — 100+ tools, zero sign-up.",
    features: [
      "100+ calculators, all computed client-side for speed and privacy",
      "Headless WordPress CMS via GraphQL powering the blog",
      "SEO automation: sitemap, RSS and automated search-engine indexing",
    ],
    tags: ["Next.js", "React", "Tailwind", "SWR", "WordPress", "GraphQL"],
    link: { href: "https://numrexo.com/", label: "Visit numrexo.com" },
  },
  {
    id: "kuhu",
    title: "Kuhu Builders & Colonizers",
    emoji: "🏗️",
    category: "freelance",
    status: "Live",
    description:
      "Full-stack website for a real estate developer with a custom-built CMS and admin panel.",
    features: [
      "Project listings, inquiries and testimonials",
      "Custom CMS + admin panel (Node/Express/MongoDB) to manage blog content",
      "Secure JWT authentication and file uploads via Multer",
    ],
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    link: { href: "https://kuhubuilders.com/", label: "Visit kuhubuilders.com" },
  },
  {
    id: "kkborewell",
    title: "KK Borewell and Pumps",
    emoji: "💧",
    category: "freelance",
    status: "Live",
    description:
      "Fast, mobile-first marketing website for a local borewell and pump service business.",
    features: [
      "WhatsApp-based lead capture",
      "Built on Next.js 16 / React 19 with a clean modern UI",
    ],
    tags: ["Next.js 16", "React 19", "Tailwind CSS"],
    link: { href: "https://kkborewell.com/", label: "Visit kkborewell.com" },
  },
  {
    id: "codingwork",
    title: "Coding Work Solutions",
    emoji: "🏢",
    category: "freelance",
    status: "Live",
    description:
      "Corporate website for a Noida-based software development and digital marketing company, presenting its services, industries served and client work.",
    features: [
      "Multi-page site: Home, Services, About, Clients and Contact",
      "Dedicated landing page for each software and marketing service",
      "SEO-ready with meta tags and Open Graph data, plus WhatsApp and call lead capture",
    ],
    tags: ["Company Website", "Multi-page", "SEO", "Lead Generation"],
    link: { href: "https://www.codingwork.in/", label: "Visit codingwork.in" },
  },
  {
    id: "traqfy",
    title: "Traqfy",
    emoji: "📍",
    category: "company",
    status: "Live on Play Store",
    description:
      "B2B field workforce management platform: live GPS tracking, task assignment, attendance and expense management for field teams.",
    features: [
      "Live GPS tracking of field staff",
      "Task assignment, attendance and expense management",
      "My contribution: UI development (team project)",
    ],
    tags: ["Flutter", "BLoC", "Firebase", "Google Maps", "Geolocator"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.efextra.traqfy",
      label: "View on Google Play",
    },
  },
  {
    id: "critter",
    title: "Critter Concert",
    emoji: "🎵",
    category: "company",
    status: "Live · Built solo",
    description:
      "A charming music game where players build an animal orchestra, collect critters and compose melodies across vibrant habitats.",
    features: [
      "Drag-and-drop melody composition, unique instrument per critter",
      "Phaser 3 game engine packaged natively with Capacitor (Android/iOS)",
      "Haptics, filesystem and music-sharing integrations",
    ],
    tags: ["Phaser 3", "Capacitor", "Vite", "JavaScript"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.efextra.critterconcert",
      label: "View on Google Play",
    },
  },
  {
    id: "goalmesh",
    title: "GoalMesh",
    emoji: "✅",
    category: "personal",
    status: "Personal",
    description:
      "Feature-rich cross-platform task manager with real-time sync, Google OAuth, smart filtering and reliable background notifications.",
    features: [
      "Google OAuth and real-time Firestore synchronization",
      "WorkManager background engine for reliable alarms",
      "Multi-level filtering (Priority, Status, Due Date) via Firestore composite indexes",
    ],
    tags: ["Flutter", "Firebase", "WorkManager", "FCM", "Google OAuth"],
  },
];

export interface Education {
  level: string;
  degree: string;
  institute: string;
  year: string;
  score: string;
}

export const education: Education[] = [
  {
    level: "Undergraduate",
    degree: "Bachelor of Computer Applications",
    institute: "Mangalmay Institute of Management & Technology, Greater Noida (CCSU Meerut)",
    year: "2019 – 2022",
    score: "65%",
  },
  {
    level: "Senior Secondary (XII)",
    degree: "Physics, Chemistry & Mathematics",
    institute: "Govt. MLT Inter College, Mahoba (UP Board)",
    year: "2017",
    score: "68%",
  },
  {
    level: "Higher Secondary (X)",
    degree: "Science",
    institute: "St. Joseph's High School, Mahoba (UP Board)",
    year: "2015",
    score: "84%",
  },
];

export const certifications = [
  { name: "'O' Level — Information Technology", issuer: "NIELIT" },
  { name: "Flutter Development", issuer: "Ducat India" },
];

export const languages = ["Hindi (Native)", "English (Full Professional)"];
