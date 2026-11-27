import SkillCard from "./SkillCard";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            What I work with
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Technical Skills
            <span className="text-violet-600">.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            My technical toolkit and the technologies I use to build responsive,
            scalable and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 rounded-2xl border border-violet-200 bg-violet-50 p-7 dark:border-violet-900 dark:bg-violet-950/30">
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            <span className="font-bold text-violet-700 dark:text-violet-400">
              Always learning.
            </span>{" "}
            I continuously explore new technologies, improve my development
            practices and strengthen my ability to build meaningful digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
