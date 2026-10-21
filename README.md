# Next.js App Router Projects

A curated collection of modern, production-grade frontend projects built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

Each project is self-contained with its own mock data layer, demonstrating core and advanced Next.js patterns—including nested dynamic routes, route groups, catch-all segments, streaming SSR, error boundaries, and component-driven layouts—all without requiring an external backend or database.

---

## 📁 Projects in this Repository

| Project Folder | Project Name | Key Routing & Architecture Patterns | Status |
|---|---|---|:---:|
| **[`01student_directory`](./01student_directory)** | **Student Directory** | Dynamic routes (`[id]`, `[department]`), nested dynamic routes (`[department]/[specialization]`), client-side filtering, custom 404 handling | ✅ Ready |
| **[`05recipe-explore`](./05recipe-explore)** | **Course Explorer (LearnSpace)** | Route Groups (`(catalog)`, `(learning)`), catch-all routes (`[...lessonSlug]`), optional catch-all (`[[...slug]]`), custom error boundaries & loading skeletons | ✅ Ready |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Kumar-Aditya-DEV/nextjs-app-router-projects.git
cd nextjs-app-router-projects
```

### 2. Choose and run a project

#### Option A: Run `01student_directory`
```bash
cd 01student_directory
npm install
npm run dev
```
Access at [http://localhost:3000](http://localhost:3000).

#### Option B: Run `05recipe-explore`
```bash
cd 05recipe-explore
npm install
npm run dev
```
Access at [http://localhost:3000](http://localhost:3000).

---

## 🧠 Concepts & Patterns Demonstrated

### 1. Advanced Routing Models
- **Dynamic Segments (`[id]`, `[department]`)**: Parametric routing resolved asynchronously.
- **Nested Dynamic Routes (`[department]/[specialization]`)**: Deep hierarchical route trees.
- **Route Groups (`(catalog)`, `(learning)`)**: Multiple visual layouts within the same application without altering URL paths.
- **Catch-All Segments (`[...lessonSlug]`)**: Handling multi-segment parameters dynamically.
- **Optional Catch-All Segments (`[[...slug]]`)**: Optional parameter matching for flexible taxonomy pages.

### 2. Layouts & Resilience
- **Nested Layouts**: Modular layouts preserving state and preventing redundant re-renders.
- **Error Boundaries (`error.tsx`)**: Client-side fallback boundaries for localized failure isolation.
- **Loading Skeletons (`loading.tsx`)**: Built-in React Suspense streaming states.
- **Not Found Pages (`not-found.tsx`)**: Graceful 404 recovery handling.

### 3. Server vs. Client Balance
- Server Components by default for optimal performance and SEO.
- Focused Client Components (`'use client'`) strictly where interactivity (search, filtering, interactive lesson players) is required.

---

## 🛠️ Global Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Linting**: [ESLint](https://eslint.org/)

---

## 📜 License

This repository is open-source and available under the [MIT License](LICENSE).
