"use client";
import ThemeToggle from "./ThemeToggle";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/90 px-6 py-5 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 md:px-16">
    {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          AA
        </Link>
    <nav className="className=hidden items-center gap-8 md:flex">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

        {/* Desktop Links */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors" ${
                  isActive
                    ? "text-violet-900"
                    : "text-slate-600 hover:text-violet-600 dark:text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="hidden md:flex"><ThemeToggle /></div>
      


      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 md:hidden block w-full">
          <div className="flex flex-col gap-1 ">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    isActive
                    ? "text-violet-900"
                    : "text-slate-600 hover:text-violet-600 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
    </header>
  );
}
