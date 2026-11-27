import { coreTechnologies, strengths } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 text-slate-900 dark:bg-slate-900 dark:text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Me<span className="text-violet-600">.</span>
          </h2>
        </div>

        {/* Main About Content */}
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Biography */}
          <div className="space-y-6 lg:col-span-3">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
              I&apos;m a Frontend Developer passionate about creating
              responsive, accessible and intuitive digital experiences. I enjoy
              transforming ideas into functional web applications that solve
              problems and make everyday interactions easier.
            </p>

            <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
              I believe great development goes beyond writing code. It involves
              understanding people&apos;s needs, thinking critically and
              creating experiences that are both useful and enjoyable.
            </p>

            <p className="text-base font-bold leading-8 text-slate-800 dark:text-slate-200">
              Open to frontend internships &amp; entry-level roles
            </p>
          </div>

          {/* Right: Professional Profile Card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-9">
              <div className="mb-8 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                  aria-hidden="true"
                >
                  A.
                </div>

                <div>
                  <h3 className="font-bold">My Profile</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Professional Overview
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Current Focus
                  </p>
                  <p className="font-semibold">Frontend Development</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800" />

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Technical Interests
                  </p>
                  <p className="font-semibold">Web Development</p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800" />

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    My Development Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {coreTechnologies.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Strengths */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              What I bring
            </p>

            <h3 className="text-3xl font-bold">How I Approach My Work</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((strength) => (
              <div
                key={strength.number}
                className="rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-lg dark:border-slate-800 dark:hover:border-violet-800"
              >
                <span className="text-sm font-bold text-violet-600 dark:text-violet-400">
                  {strength.number}
                </span>

                <h4 className="mt-5 text-xl font-bold">{strength.title}</h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
