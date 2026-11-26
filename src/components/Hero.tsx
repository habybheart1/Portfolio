import Image from "next/image"

const heading = "Building digital experiences that make a difference.";

function AnimatedHeading() {
  return (
    <h1
      aria-label={heading}
      className="mt-6 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
    >
      <span aria-hidden="true">
        {Array.from(heading).map((letter, index) => (
          <span
            key={index}
            className="letter-reveal inline-block"
            style={{
              animationDelay: `${index * 0.045}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-slate-50 px-6 py-12 text-slate-900 dark:bg-slate-950 dark:text-white md:px-10 lg:py-18"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE - INTRODUCTION */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-900 dark:bg-violet-950/50 dark:text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Frontend Developer
          </div>

          <AnimatedHeading />

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Hello, I'm Abibat. I create responsive, accessible and
            user-friendly web experiences with modern frontend
            technologies. I enjoy turning ideas into functional,
            beautiful digital products.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-violet-600 hover:text-violet-600 dark:border-slate-700 dark:text-white dark:hover:border-violet-500 dark:hover:text-violet-400"
            >
              Let's Connect
            </a>
          </div>

          {/* TECHNOLOGIES */}
          <div className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

       
      {/* RIGHT SIDE - PROFILE IMAGE CARD */}

      <div className="relative mx-auto w-full max-w-lg animate-[fadeIn_1s_ease-out_both]">

        {/* Decorative background */}
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"></div>

        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Main Editor Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">

          {/* Editor Header */}
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">

            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
            </div>

            <span className="text-xs text-slate-500">
              abibat-portfolio.tsx
            </span>

            <span className="text-xs text-green-500">
              ● Available
            </span>

          </div>

          {/* Profile Image */}
          <div className="relative aspect-4/5 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">

            <Image
              src="/images/abibat-headshot.png"
              alt="Abibat Olamide Akintobi - Frontend Developer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium text-white/80">
                Hello, I'm
              </p>

              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Abibat Olamide
              </h2>

              <p className="mt-1 text-sm text-white/80">
                Frontend Developer
              </p>
            </div>

          </div>

          {/* Editor Footer */}
          <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3 text-xs text-slate-400 dark:border-slate-800">

            <span>TypeScript JSX</span>

            <span>UTF-8 · LF</span>

          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-7 -right-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:-right-6">

          <p className="text-xs text-slate-500 dark:text-slate-400">
            My approach
          </p>

          <p className="text-sm font-bold text-violet-600 dark:text-violet-400">
            Design. Develop. Deliver.
          </p>

        </div>

      </div>

      </div>
    </section>
  );
}
