export const LINKS = {
  email: "parthrahultotla@gmail.com",
  linkedin: "https://www.linkedin.com/in/parthtotla1310?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Parthtotla",
} as const;
export const isPlaceholder = (v: string) => v.startsWith("YOUR_");

export interface NavItem { label: string; href: string }
export const NAV: NavItem[] = [
  { label: "About", href: "#about" }, { label: "Work", href: "#work" }, { label: "How I Build", href: "#how-i-build" }, { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" }, { label: "Contact", href: "#contact" },
];

export const PILLARS = [
  { n: "01", title: "Business", note: "Strategy, marketing, positioning" },
  { n: "02", title: "Product", note: "Problems first, then solutions" },
  { n: "03", title: "Technology", note: "Building with SwiftUI and Firebase" },
  { n: "04", title: "AI", note: "Exploring what it changes" },
];

export const FLOW = ["Timetable", "Subject", "Chapter", "Lecture", "Notes"] as const;
export const ELVARAS_TAGS = ["SwiftUI", "Swift", "SwiftData", "Firebase", "AI", "Product Design"];

export interface Project { n: string; category: string; title: string; description: string; tags: string[]; href?: string }
export const PROJECTS: Project[] = [
  { n: "01", category: "Product", title: "Elvaras", description: "A student productivity platform that connects timetables with notes. Built hands-on, AI-assisted.", tags: ["Product Design", "UI/UX", "AI-assisted build"], href: "/work/elvaras" },
  { n: "02", category: "Business + AI", title: "AI Business Challenge", description: "A business and AI strategy project.", tags: ["Business Strategy", "AI"] },
];

export interface Skill { name: string; level: "Exploring" | "Working with" | "Building with" }
export const SKILLS: Record<string, Skill[]> = {
  AI: [{ name: "AI-assisted development", level: "Building with" }, { name: "AI workflows", level: "Building with" }, { name: "Prompt engineering", level: "Working with" }, { name: "AI research", level: "Working with" }, { name: "AI-powered problem solving", level: "Building with" }, { name: "Generative AI", level: "Exploring" }],
  Product: [{ name: "Product thinking", level: "Building with" }, { name: "Idea validation", level: "Working with" }, { name: "User flows", level: "Building with" }, { name: "Feature planning", level: "Working with" }, { name: "Product development", level: "Building with" }, { name: "Prototyping", level: "Working with" }],
  Business: [{ name: "Business strategy", level: "Working with" }, { name: "Marketing", level: "Working with" }, { name: "Market research", level: "Working with" }, { name: "Entrepreneurship", level: "Exploring" }, { name: "Business communication", level: "Working with" }],
  Design: [{ name: "UI/UX thinking", level: "Building with" }, { name: "Interface design", level: "Working with" }, { name: "Product experience", level: "Working with" }, { name: "Visual communication", level: "Working with" }],
  Build: [{ name: "Websites", level: "Building with" }, { name: "Applications", level: "Building with" }, { name: "Prototypes", level: "Building with" }, { name: "AI-powered products", level: "Exploring" }, { name: "Rapid experimentation", level: "Building with" }],
};

export const TIMELINE = [
  { year: "2023", title: "10th" },
  { year: "2025", title: "12th" },
  { year: "2025–26", title: "Engineering" },
  { year: "2026–Present", title: "BBA with AI", current: true },
];

export const HOW_STEPS = [
  ["Idea", "Start from a real problem."], ["Research", "Question assumptions, learn the space."], ["Product thinking", "Decide what it is, and what it isn't."], ["Design", "Flows and interface before code."],
  ["AI-assisted build", "Write and understand code with AI."], ["Debug", "Find out why, not just what."], ["Iterate", "Compare approaches, improve."], ["Ship", "Make it real."],
] as const;

export const EXPLORING = ["AI", "Product Building", "Entrepreneurship", "Business Strategy", "Marketing", "Product Design", "Generative AI", "Startups", "AI-powered Products"];

export const ELVARAS = {
  problem: "Students often manage timetables, notes and lectures separately. This makes it harder to connect what they learned in class with where the information belongs.",
  idea: "What if the timetable itself became the structure for organizing notes?",
  features: ["Timetable-based organization", "Subject management", "Chapter organization", "Lecture-based notes", "Authentication", "Student dashboard", "Future AI features"],
  tech: ["SwiftUI", "Swift", "SwiftData", "Firebase"],
  role: ["Product ideation", "UI/UX", "Product structure", "Development", "Business model", "Marketing strategy"],
  pricing: [{ plan: "Pro monthly", price: "₹59/month" }, { plan: "Pro yearly", price: "₹499/year" }],
  roadmap: ["iOS", "Android", "Windows", "Web", "AI-powered study features", "Cloud synchronization", "Advanced student productivity tools"],
};
