
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ACApulse",
    category: "Education Platform",
    description:
      "A complete operational system for secondary schools. Streamline daily attendance, keep parents informed when students miss class, and secure your college records forever.",
    technologies: ["Next.js App Router","React 19", "TypeScript", "Tailwind CSS", ],
    githubUrl: "https://github.com/iotb-tech/acapulse-frontend",
    image: "/images/acapulse.png",
    liveUrl: "https://acapulse-vv1.vercel.app/"
  },
  {
    title: "BookIt",
    category: "Booking Platform",
    description:
      "A simple way to discover mentors, join study groups and book learning sessions that help you grow.",
    technologies: ["Next.js 16 App Router", "React 19", "Supabase", "Tailwind CSS", "TypeScript"],
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
    liveUrl: "wash-mate-practice.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 dark:bg-slate-900 dark:text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            My recent work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects<span className="text-violet-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Here are some of the projects I've worked on,
            showcasing my ability to transform ideas into
            responsive, functional and user-friendly digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
