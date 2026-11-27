import type SkillCardProps from "@/types/skillCard";

export default function SkillCard({
  number,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800">
      {number && (
        <span className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400">
          {number}
        </span>
      )}

      {/* Category Title */}
      <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
        <span
          className="pr-3 text-2xl font-bold text-violet-600 dark:text-violet-400"
          aria-hidden="true"
        >
          •
        </span>
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {/* Skills List */}
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 transition-colors group-hover:bg-violet-100 dark:bg-violet-950/50 dark:text-violet-300 dark:group-hover:bg-violet-950"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
