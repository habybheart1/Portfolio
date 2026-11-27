import Link from "next/link";
import { footerLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo and identity */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          AA
        </Link>

        {/* Navigation links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base transition hover:text-violet-600 dark:hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center text-base">
          © 2026 Abibat Olamide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
