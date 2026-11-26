
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Logo and identity */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          AA
        </a>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center text-sm">
          © 2026 Abibat Olamide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
