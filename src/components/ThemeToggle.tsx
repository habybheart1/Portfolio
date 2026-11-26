"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";

    setIsDark(shouldUseDark);

    document.documentElement.classList.toggle(
      "dark",
      shouldUseDark
    );
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";

    setIsDark(!isDark);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );

    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:border-violet-600 dark:border-slate-600 dark:text-white"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}