import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-900 dark:text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            My recent work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects<span className="text-violet-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Here are some of the projects I&apos;ve worked on, showcasing my
            ability to transform ideas into responsive, functional and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
