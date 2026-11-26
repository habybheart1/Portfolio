
const contactLinks = [
  {
    label: "Email",
    value: "akintobiabibat@yahoo.com",
    href: "mailto:akintobiabibat@yahoo.com",
  },
  {
    label: "GitHub",
    value: "Your GitHub profile",
    href: "https://github.com/habybheart1",
  },
  {
    label: "LinkedIn",
    value: "Your LinkedIn profile",
    href: "https://linkedin.com/in/abibatakintobi",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white md:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        {/* Left side */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Let's connect
          </p>

          <h2 className="mb-6 max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Have a project in mind? Let's make it happen.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I'm always open to discussing new projects, creative ideas,
            collaborations and opportunities to grow as a frontend developer.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-violet-700"
          >
            Send Me an Email
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Right side */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
          <h3 className="mb-8 text-2xl font-bold">
            Contact Information
          </h3>

          <div className="space-y-7">
            {contactLinks.map((link) => (
              <div key={link.label}>
                <p className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {link.label}
                </p>

                <a
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="break-all font-semibold text-slate-800 transition hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400"
                >
                  {link.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
              Based in Nigeria · Open to remote opportunities and collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
