export const profile = {
  name: "Sivaraja Pratheep",
  role: "Computer Science Undergraduate · Aspiring Full-Stack Developer",
  location: "Jaffna, Sri Lanka",
  email: "sivarajapratheep175@gmail.com",
  github: "https://github.com/sivarajapratheep175",
  githubUser: "sivarajapratheep175",
  linkedin: "https://www.linkedin.com/in/sivarajapratheep175/",
  blog: "https://sivarajapratheep175.blogspot.com/",
};

export const techStack: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Languages", items: ["Java", "Python"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Cloud & Tools", items: ["Cloud fundamentals", "AWS basics", "Git & GitHub"] },
  { category: "AI", items: ["AI integration", "Voice-driven interfaces"] },
  { category: "Salesforce", items: ["Apex", "Lightning Web Components"] },
  { category: "Design", items: ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "Figma", "Canva"] },
];

export const stackCount = techStack.reduce((sum, group) => sum + group.items.length, 0);

export const projects = [
  {
    name: "FarmIntel AI",
    description:
      "An AI-powered farming assistant delivering real-time insights, crop-health analysis, and Tamil voice interaction in a single dashboard.",
    tags: ["JavaScript", "AI Integration", "Voice Recognition"],
    link: "https://github.com/sivarajapratheep175/farmintel-Ai-app",
    linkLabel: "View on GitHub",
    icon: "seedling",
  },
  {
    name: "Safe Walk App",
    description:
      "A mobile app aimed at pedestrian safety — real-time alerts and guidance for people navigating potentially risky situations.",
    tags: ["JavaScript", "AI Integration", "Voice Recognition"],
    link: "https://github.com/sivarajapratheep175/safewalk-app",
    linkLabel: "View on GitHub",
    icon: "walk",
  },
  {
    name: "Link-in-bio Hub",
    description:
      "A fast, single-page directory that pulls every social and professional profile into one clean landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://sivarajapratheep175.github.io/PersonalWebPresence/",
    linkLabel: "View live",
    icon: "globe",
  },
  {
    name: "Design Portfolio",
    description:
      "A running collection of graphic and layout work made in the Adobe suite — posters, logos, and social assets.",
    tags: ["Photoshop", "Illustrator", "InDesign"],
    link: "https://drive.google.com/drive/folders/1eHkSTsvYTT5zWBJ8rifmPmQX0lucWimt?usp=sharing",
    linkLabel: "View portfolio",
    icon: "swatch",
  },
];

export type JourneyItem = {
  period: string;
  title: string;
  place: string;
  detail: string;
  kind: "education" | "experience";
};

export const journey: JourneyItem[] = [
  {
    period: "Jan 2020 — Feb 2023",
    title: "Studied Mathematics",
    place: "Methodist Central College",
    detail: "Completed secondary education with a focus on Mathematics.",
    kind: "education",
  },
  {
    period: "Nov 2024 — 2028 (expected)",
    title: "B.Sc. Computer Science",
    place: "University of Jaffna",
    detail: "Undergraduate degree focused on programming, systems, and applied problem-solving.",
    kind: "education",
  },
  {
    period: "Dec 2025 — Present",
    title: "Advertisement & News Support Assistant (Part-time)",
    place: "Thinakkural Newspaper, Jaffna",
    detail:
      "Coordinated advertisement details and billing, edited ad and news content for accuracy and format, and supported the editorial team preparing material for print.",
    kind: "experience",
  },
];

export type Credential = {
  title: string;
  issuer?: string;
  link?: string;
};

export const credentials: Credential[] = [
  { title: "Java (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/ee518ca7fd75" },
  { title: "JavaScript (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/780c5743c20f" },
  { title: "CSS (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/4d4296ca4b46" },
  { title: "Google AI Certificate", issuer: "Google" },
  { title: "Apex & LWC Bootcamp — Cohort 01", issuer: "Copado" },
  { title: "Copado AI Certified", issuer: "Copado" },
  { title: "Ideas to Impact — Entrepreneurship Program", issuer: "" },
  { title: "Future Fest Aurudu — AI Image Generation Competition (Participant)", issuer: "" },
  { title: "UoJ Coders v5.0 — Certificate of Appreciation", issuer: "University of Jaffna" },
  { title: "YARLINSIGHT 3.0 — Summer School", issuer: "" },
  { title: "Leadership and Positive Attitude", issuer: "" },
];

export const elsewhere = [
  { label: "GitHub", url: "https://github.com/sivarajapratheep175" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sivarajapratheep175/" },
  { label: "HackerRank", url: "https://www.hackerrank.com/profile/pratheep175" },
  { label: "Trailblazer", url: "https://www.salesforce.com/trailblazer/sivarajapratheep175" },
  { label: "X / Twitter", url: "https://x.com/pratheep175" },
  { label: "Facebook", url: "https://www.facebook.com/pratheep.sivarajaa" },
  { label: "Threads", url: "https://www.threads.com/@sivarajapratheep175" },
  { label: "Bluesky", url: "https://bsky.app/profile/pratheep175.bsky.social" },
  { label: "Instagram", url: "https://www.instagram.com/sivarajapratheep175/" },
  { label: "Telegram", url: "https://web.telegram.org/k/#@sivarajapratheep175" },
  { label: "YouTube", url: "https://www.youtube.com/@edit_tune" },
];
