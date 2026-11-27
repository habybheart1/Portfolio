import Image from "next/image";
import type ProjectCardProps from "@/types/projectCard";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  category,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
      {/* Project Image / Preview */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
        {image ? (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-violet-100 via-slate-100 to-blue-100 dark:from-violet-950 dark:via-slate-900 dark:to-blue-950">
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-violet-700 dark:text-violet-300">
                {title}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Project Preview
              </p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 backdrop-blur dark:bg-slate-900/90 dark:text-violet-300">
          {category}
        </span>
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(githubUrl || liveUrl) && (
          <div className="mt-auto flex items-center gap-5 border-t border-slate-100 pt-5 dark:border-slate-800">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-semibold text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
              >
                GitHub
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
