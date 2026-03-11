import { Project, Experience, Skill } from './types';

export const PROFILE = {
  name: "Ayush Ipar",
  title: "BCA Student & Aspiring Developer",
  tagline: "Exploring the world of Application Deployment, Python, and GenAI.",
  about: "I am a student at MET Institute Of Management in Nashik, Maharashtra, currently pursuing a Bachelor of Computer Applications (BCA). My academic journey involves a deep dive into Computer Science fundamentals. I have a strong passion for Python programming, application deployment strategies, and building native Mac apps. Recently, I completed a Job Simulation at Tata focused on GenAI Powered Data Analytics, where I honed my skills in leveraging AI for data-driven insights.",
  social: {
    github: "https://github.com/ayushipar",
    linkedin: "https://linkedin.com/in/ayushipar",
    twitter: "https://twitter.com/ayushipar",
    email: "mailto:hello@ayushipar.dev"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: "edu-1",
    role: "Bachelor of Computer Applications",
    company: "MET Institute Of Management",
    period: "2024 - Present",
    description: [
      "Currently pursuing BCA at MET League of Colleges, Nashik.",
      "Studying core computer science subjects, programming paradigms, and software engineering.",
      "Working on academic projects involving application development."
    ]
  },
  {
    id: "cert-1",
    role: "GenAI Powered Data Analytics Job Simulation",
    company: "Tata",
    period: "2024",
    description: [
      "Completed a professional job simulation involving Data Analytics using Generative AI.",
      "Analyzed complex datasets and produced actionable insights using AI-driven tools.",
      "Demonstrated proficiency in data interpretation, visualization, and communication."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "App Development Project",
    description: "A comprehensive application development project undertaken during the 2024 academic year, focusing on deployment workflows.",
    tags: ["App Deployment", "Software Development"],
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: "proj-2",
    title: "Data Analytics with GenAI",
    description: "Leveraged Generative AI models to clean, analyze, and visualize complex datasets as part of the Tata certification program.",
    tags: ["GenAI", "Python", "Data Analytics"],
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: "proj-3",
    title: "Mac App Utilities",
    description: "Exploration of macOS application ecosystem, focusing on creating efficient and user-friendly native utilities.",
    tags: ["Mac Apps", "Python", "Automation"],
    image: "https://picsum.photos/600/400?random=12"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "C++", level: 80, category: "Backend" },
  { name: "C", level: 75, category: "Backend" },
  { name: "R", level: 70, category: "AI/Data" },
  { name: "MATLAB", level: 75, category: "AI/Data" },
  { name: "AWS", level: 85, category: "Cloud" },
  { name: "SQL", level: 90, category: "Backend" },
  { name: "Azure", level: 75, category: "Cloud" },
  { name: "Machine Learning", level: 80, category: "AI/Data" },
  { name: "Artificial Intelligence", level: 80, category: "AI/Data" },
  { name: "Cloud Computing", level: 85, category: "Cloud" },
  { name: "Data Analysis", level: 85, category: "AI/Data" },
  { name: "Database Design", level: 80, category: "Backend" }
];