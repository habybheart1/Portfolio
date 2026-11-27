import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Abibat Olamide Akintobi — Frontend Developer",
  description:
    "Frontend Developer building responsive, accessible, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Abibat Olamide Akintobi",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  openGraph: {
    title: "Abibat Olamide Akintobi — Frontend Developer",
    description:
      "Frontend Developer building responsive, accessible, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abibat Olamide Akintobi — Frontend Developer",
    description:
      "Frontend Developer building responsive, accessible, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS.",
  },
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = saved === "dark" || (saved === null && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
