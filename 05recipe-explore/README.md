# 05 - Course Explorer (LearnSpace)

A disciplined, academic minimalist curriculum engine and interactive learning platform built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

Part of the **[nextjs-app-router-projects](https://github.com/Kumar-Aditya-DEV/nextjs-app-router-projects)** collection demonstrating advanced Next.js App Router patterns—including Route Groups, Catch-All segments, Optional Catch-All segments, nested layouts, and streaming error/loading boundaries.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository & navigate to project folder
```bash
git clone https://github.com/Kumar-Aditya-DEV/nextjs-app-router-projects.git
cd nextjs-app-router-projects/05recipe-explore
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open the application
Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🌟 Key Features

- **Course Directory & Explorer (`/`, `/courses`)**:
  - Interactive course cards with thumbnails, ratings, hours, lesson counts, instructor details, and pricing badges.
  - Category filtering tabs (Web Development, Data Science & AI, UI/UX Design, Cloud & DevOps).
  - Metrics summary bar displaying real-time catalogue counts and analytics.

- **Dynamic Course Dossier (`/courses/[id]`)**:
  - In-depth course view featuring syllabus breakdown, skills covered, course requirements, and instructor credentials.
  - Interactive curriculum modules with expandable lesson items and free preview flags.
  - Direct "Start Learning" deep link leading into the interactive player.

- **Optional Catch-All Topic Browser (`/topics/[[...slug]]`)**:
  - Flexible multi-level taxonomy browsing supporting 0 to N segments (e.g., `/topics`, `/topics/frontend`, `/topics/frontend/nextjs`).
  - Dynamic breadcrumb generation and automatic topic filtering.

- **Distraction-Free Learning Player (`/learn/[id]/[...lessonSlug]`)**:
  - Immersive lesson workspace using a separate layout (`(learning)`) that removes header and footer chrome.
  - Catch-all lesson routing matching multi-segment paths like `/learn/nextjs-app-router-fundamentals/module-1/les-01`.
  - Next/Previous lesson navigation, progress indicators, and interactive completion toggle.

- **Resilient Fallbacks & Boundaries**:
  - Custom `error.tsx` client recovery boundaries with retry actions for graceful error recovery.
  - Custom `loading.tsx` skeleton states for instant feedback during navigation.
  - Custom `not-found.tsx` views for non-existent courses, missing lessons, or invalid parameters.

- **About Information (`/about`)**:
  - Deep-dive architectural breakdown of routing models, static vs. dynamic rendering, and design philosophy.

---

## 🗺️ Route Architecture

| Route Pattern | Route Group | Page Type | Example URL | Description |
|---|---|---|---|---|
| `/` | Root | Server Component | `/` | Home page with directory overview and course explorer |
| `/courses` | `(catalog)` | Server Component | `/courses` | Full course catalogue with category filters and search |
| `/courses/[id]` | `(catalog)` | Server Component | `/courses/nextjs-app-router-fundamentals` | Dynamic course dossier with curriculum and instructor info |
| `/topics/[[...slug]]` | `(catalog)` | Server Component | `/topics/web-development/frontend` | Optional catch-all segment for multi-level category navigation |
| `/learn/[id]/[...lessonSlug]` | `(learning)` | Client Component | `/learn/nextjs-app-router-fundamentals/module-1/les-01` | Immersive catch-all lesson player with sidebar curriculum |
| `/about` | Root | Server Component | `/about` | Architectural breakdown and platform documentation |
| `not-found` | Root / Group | Server Component | `/courses/invalid-id` | Custom 404 pages with recovery suggestions |

---

## 📚 Next.js Concepts Demonstrated

- **Route Groups `(catalog)` and `(learning)`**:
  - Organizes routes into visual and functional hierarchies without affecting URL paths.
  - `(catalog)` provides a shared header and footer for browsing.
  - `(learning)` provides a dedicated full-height, sidebar-driven distraction-free layout for active study.
- **Dynamic Segments (`[id]`)**:
  - Resolves parametric routes on demand with async `params`.
- **Catch-All Segments (`[...lessonSlug]`)**:
  - Handles variable multi-segment paths such as `module-id/lesson-id`.
- **Optional Catch-All Segments (`[[...slug]]`)**:
  - Matches both root index `/topics` and nested children like `/topics/a/b/c`.
- **Streaming SSR & Suspense**:
  - Segment-level `loading.tsx` implementations for immediate visual feedback.
- **Fail-Soft Error Handling**:
  - Segment-scoped `error.tsx` client boundaries preventing full-page crashes.
- **Dynamic SEO Metadata**:
  - Dynamic `generateMetadata` implementation based on route parameters.

---

## 🧩 Project Structure

```text
05recipe-explore/
├── public/                                      # Static public assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── (catalog)/                           # Catalog route group (standard layout)
│   │   │   ├── layout.tsx                       # Catalog layout with Navbar and Footer
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx                     # Courses list catalog
│   │   │   │   ├── loading.tsx                  # Catalog loading skeleton
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx                 # Dynamic course details page
│   │   │   │       ├── layout.tsx               # Course layout wrapper
│   │   │   │       ├── loading.tsx              # Course detail loading UI
│   │   │   │       ├── error.tsx                # Course detail error boundary
│   │   │   │       └── not-found.tsx            # Course not found view
│   │   │   └── topics/
│   │   │       └── [[...slug]]/
│   │   │           └── page.tsx                 # Optional catch-all topic explorer
│   │   ├── (learning)/                          # Learning route group (distraction-free layout)
│   │   │   ├── layout.tsx                       # Minimal full-screen learning layout
│   │   │   └── learn/[id]/[...lessonSlug]/
│   │   │       ├── page.tsx                     # Interactive catch-all lesson player
│   │   │       └── loading.tsx                  # Lesson player loading skeleton
│   │   ├── about/
│   │   │   └── page.tsx                         # Architectural documentation page
│   │   ├── error.tsx                            # Root error boundary
│   │   ├── favicon.ico                          # Site favicon
│   │   ├── globals.css                          # Global styles and Tailwind imports
│   │   ├── layout.tsx                           # Root HTML and body layout
│   │   ├── loading.tsx                          # Root loading skeleton
│   │   ├── not-found.tsx                        # Root 404 fallback page
│   │   └── page.tsx                             # Home page / Curriculum directory
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx                       # Global header navigation
│   │   │   ├── Footer.tsx                       # Global footer with link columns
│   │   │   └── LessonNotFound.tsx               # Reusable missing lesson/course card
│   │   ├── courses/
│   │   │   ├── CourseCard.tsx                   # Course preview card
│   │   │   ├── CourseExplorer.tsx               # Tabbed filter and course grid wrapper
│   │   │   ├── CourseGrid.tsx                   # Responsive grid layout for cards
│   │   │   ├── CourseTabs.tsx                   # Category selector tabs
│   │   │   └── MetricsBar.tsx                   # Summary statistics bar
│   │   └── topics/
│   │       └── TopicExplorer.tsx                # Multi-level topic tag browser
│   ├── data/
│   │   ├── categories.ts                        # Course category definitions
│   │   ├── courses.ts                           # Comprehensive mock course dataset
│   │   └── instructors.ts                       # Instructor profiles and stats
│   ├── lib/
│   │   ├── courses.ts                           # Data querying helper functions
│   │   └── utils.ts                             # Styling utility (cn) & currency formatter
│   └── types/
│       ├── category.ts                          # Category TypeScript interface
│       ├── course.ts                            # Course, Section, and Lesson models
│       └── instructor.ts                        # Instructor model
├── eslint.config.mjs                            # ESLint configuration
├── next.config.ts                               # Next.js configuration
├── package.json                                 # Project dependencies and scripts
├── package-lock.json                            # Locked dependency tree
├── tsconfig.json                                # TypeScript configuration
└── README.md                                    # Project documentation
```

---

## 🛠️ Available Scripts

In the `05recipe-explore` directory, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Runs the app in development mode on [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Builds the production bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)
