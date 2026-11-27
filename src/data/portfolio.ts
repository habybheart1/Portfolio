import type ProjectCardProps from "@/types/projectCard";
import type SkillCardProps from "@/types/skillCard";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const coreTechnologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
] as const;

export const strengths = [
  {
    number: "01",
    title: "Problem Solving",
    description:
      "Breaking down challenges and developing practical, user-focused solutions.",
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Exploring modern technologies and continuously improving my development skills.",
  },
  {
    number: "03",
    title: "Attention to Detail",
    description:
      "Creating clean, consistent and accessible user interfaces.",
  },
] as const;

export const skillCategories: SkillCardProps[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and user-friendly interfaces for modern web applications.",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    description:
      "Developing modern web applications using component-based architecture and reusable UI elements.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Programming & Languages",
    description:
      "Working with programming languages and type systems to build structured and maintainable applications.",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Using modern development tools for version control, collaboration and efficient development workflows.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const projects: ProjectCardProps[] = [
  {
    title: "ACApulse",
    category: "Education Platform",
    description:
      "A complete operational system for secondary schools. Streamline daily attendance, keep parents informed when students miss class, and secure your college records forever.",
    technologies: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/iotb-tech/acapulse-frontend",
    image: "/images/acapulse.png",
    liveUrl: "https://acapulse-vv1.vercel.app/",
  },
  {
    title: "BookIt",
    category: "Booking Platform",
    description:
      "A simple way to discover mentors, join study groups and book learning sessions that help you grow.",
    technologies: [
      "Next.js 16 App Router",
      "React 19",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubUrl: "https://github.com/iotb-tech/bookit",
    image: "/images/bookit.png",
    liveUrl: "https://bookit-nets3.vercel.app/",
  },
  {
    title: "Estate360 Hub",
    category: "Real Estate Platform",
    description:
      "The digital operating platform for modern residential estates. It brings residents, security teams, and estate management together in one secure platform — making everyday estate operations simpler, smarter, and more connected.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: "/images/estatehub.png",
    githubUrl: "https://github.com/EstateHub-360/estatehub360-frontend",
  },
  {
    title: "WashMate",
    category: "Laundry Service",
    description:
      "The landing page showcases laundry services, pricing, customer testimonials, and a booking page where customers can request laundry pickup.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/washmate.png",
    githubUrl: "https://github.com/habybheart1/WashMate",
    liveUrl: "https://washmatepractice.netlify.app/",
  },
];

export const contactEmail = "akintobiabibat@yahoo.com";

export const contactLinks = [
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    label: "GitHub",
    value: "github.com/habybheart1",
    href: "https://github.com/habybheart1",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abibatakintobi",
    href: "https://linkedin.com/in/abibatakintobi",
  },
] as const;
