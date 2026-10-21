# 01 - Student Directory

A modern, responsive campus student and department directory web application built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

Part of the **[nextjs-app-router-projects](https://github.com/Kumar-Aditya-DEV/nextjs-app-router-projects)** collection demonstrating real-world Next.js patterns and architecture without external database dependencies.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository & navigate to project folder
```bash
git clone https://github.com/Kumar-Aditya-DEV/nextjs-app-router-projects.git
cd nextjs-app-router-projects/01student_directory
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
Visit [http://localhost:3000](http://localhost:3000) in your web browser. The root path (`/`) automatically redirects to `/students`.

---

## 🌟 Key Features

- **Dynamic Student Directory (`/students`)**:
  - Grid presentation of enrolled students with custom monogram avatars, student IDs, department badges, and academic standing.
  - Real-time client-side name search and department dropdown filtering.

- **Individual Student Profiles (`/students/[id]`)**:
  - Detailed student dossier with student ID badge, status indicator, email contact link, enrollment date, academic program overview, and biography.
  - Interactive breadcrumb navigation back to the student roster.

- **Department & Faculty Explorer (`/departments`)**:
  - Overview cards for academic departments (Computer Science, Design, Business) displaying student headcounts and available tracks.

- **Nested Dynamic Routing (`/departments/[department]` & `/departments/[department]/[specialization]`)**:
  - **Department Detail**: Dynamic route rendering faculty summary, available specializations, and enrolled student cohort.
  - **Specialization Roster**: Multi-segment nested route displaying specific tracks (e.g., Web Development, Data Science, Cloud Computing, Cybersecurity) and affiliated student records.

- **Custom 404 Not Found Handling (`/not-found.tsx`)**:
  - User-friendly error page with quick links to browse students or view departments when invalid IDs or routes are accessed.

- **About Information (`/about`)**:
  - Explanatory page detailing architecture, design patterns, and institutional directory goals.

---

## 🗺️ Route Architecture

| Route Pattern | Page Type | Example URL | Description |
|---|---|---|---|
| `/` | Redirect | `/` | Automatically redirects to `/students` |
| `/students` | Client Component | `/students` | Student cards with instant name search & department filter |
| `/students/[id]` | Server Component | `/students/std-001` | Dynamic individual student dossier with full academic info |
| `/departments` | Server Component | `/departments` | Academic faculties catalog with student and track counts |
| `/departments/[department]` | Server Component | `/departments/computer-science` | Dynamic faculty overview, specializations list, and cohort |
| `/departments/[department]/[specialization]` | Server Component | `/departments/computer-science/web-development` | Deeply nested route showing track description and enrolled students |
| `/about` | Server Component | `/about` | Directory overview, tech stack, and documentation |
| `not-found` | Server Component | `/non-existent-page` | Handled fallback for missing students or invalid routes |

---

## 📚 Next.js Concepts Demonstrated

- **App Router Architecture**: Route segment folders, `page.tsx`, `layout.tsx`, and `not-found.tsx`.
- **Dynamic Segments**: Parameter extraction from `[id]`, `[department]`, and nested `[specialization]`.
- **Server vs. Client Components**: Server-rendered data pages combined with focused client components (`'use client'`) for interactive search and filter state.
- **Programmatic Navigation**: Native `Link` components and `redirect()` for seamless client-side transitions.
- **Type-Safe Routing & Data**: Strongly-typed props, params, and datasets using TypeScript interfaces.

---

## 🧩 Project Structure

```text
01student_directory/
├── public/                                      # Static assets and SVG icons
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx                           # Global layout with navigation bar
│   │   ├── page.tsx                             # Root route redirect to /students
│   │   ├── not-found.tsx                        # Custom 404 page
│   │   ├── globals.css                          # Global styles and Tailwind imports
│   │   ├── about/
│   │   │   └── page.tsx                         # About page
│   │   ├── students/
│   │   │   ├── page.tsx                         # Students directory catalog
│   │   │   └── [id]/
│   │   │       └── page.tsx                     # Dynamic student profile dossier
│   │   └── departments/
│   │       ├── page.tsx                         # Departments catalog
│   │       └── [department]/
│   │           ├── page.tsx                     # Dynamic department details
│   │           └── [specialization]/
│   │               └── page.tsx                 # Nested specialization route
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx                       # Global top navigation bar with active route highlighting
│   │   ├── ui/
│   │   │   ├── Badge.tsx                        # Reusable status/attribute badge
│   │   │   └── Button.tsx                       # Reusable action button
│   │   ├── StudentCard.tsx                      # Individual student summary card
│   │   ├── StudentGrid.tsx                      # Search and filter state container
│   │   ├── StudentFilter.tsx                    # Search bar and department select filter
│   │   ├── DepartmentCard.tsx                   # Department summary card
│   │   └── DepartmentList.tsx                   # Department grid container
│   ├── constants/
│   │   └── navigation.ts                        # Navigation links and route configuration
│   └── types/
│       ├── students/
│       │   ├── studentType.ts                   # Student TypeScript models
│       │   └── studentData.ts                   # Mock student records
│       └── departments/
│           ├── departmetType.ts                 # Department & Specialization interfaces
│           ├── departmentData.ts                # Department definitions
│           └── specializationData.ts            # Specialization definitions
├── eslint.config.mjs                            # ESLint configuration
├── next.config.ts                               # Next.js configuration
├── package.json                                 # Project dependencies and scripts
├── package-lock.json                            # Locked dependency tree
├── tsconfig.json                                # TypeScript compiler configuration
└── README.md                                    # Project documentation
```

---

## 🛠️ Available Scripts

In the `01student_directory` directory, you can run:

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
