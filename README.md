# Abibat Olamide Akintobi — Frontend Developer Portfolio

Personal portfolio and CV built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Responsive single-page portfolio with Hero, About, Technical Skills, Featured Projects, and Contact sections
- Flash-free light/dark theme toggle with `prefers-color-scheme` support and `localStorage` persistence
- Scroll-aware active section highlighting in the navigation bar
- Optimized typography via `next/font/google` (`Geist`) and responsive images via `next/image`
- Accessible landmarks, heading hierarchy, ARIA attributes, and `prefers-reduced-motion` support

## Project Structure

```text
src/
├── app/          # Root layout, metadata, global styles, and home page
├── components/   # UI sections and interactive components
├── data/         # Centralized portfolio content (skills, projects, links)
└── types/        # Shared TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run start` — Serve the production build
- `npm run lint` — Run ESLint
