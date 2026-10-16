# Student Directory

A modern, responsive campus student and department directory web application built with **Next.js (App Router)**, **React 19**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository & navigate to project folder
```bash
git clone https://github.com/Nitishkumar0517768/student_directory.git
cd student_directory
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
Visit [http://localhost:3000](http://localhost:3000) in your web browser. The root path automatically redirects to `/students`.

---

## 🌟 Key Features

- **Dynamic Student Directory (`/students`)**:
  - Grid presentation of enrolled students with custom monogram avatars, student IDs, department badges, and academic standing.
  - Real-time client-side name search and department dropdown filtering.

- **Individual Student Profiles (`/students/[id]`)**:
  - Detailed student dossier with student ID badge, status indicator, email contact link, enrollment date, academic program overview, and biography.
  - Interactive breadcrumb navigation back to student roster.

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

| Route Pattern | Page Name | Description |
|---|---|---|
| `/` | Root | Automatically redirects to `/students` |
| `/students` | Student Directory | Student cards with instant name search & department filter |
| `/students/[id]` | Student Profile | Dynamic individual student dossier with full academic info |
| `/departments` | Department Directory | Academic faculties catalog with student and track counts |
| `/departments/[department]` | Department Details | Dynamic faculty overview, specializations list, and cohort |
| `/departments/[department]/[specialization]` | Specialization Detail | Deeply nested route showing track description and enrolled students |
| `/about` | About Portal | Directory overview, tech stack, and documentation |
| `not-found` | 404 Error Page | Handled fallback for missing students or invalid routes |

---

## 🧩 Component Structure

```text
src/
├── app/
│   ├── layout.tsx                               # Global layout with navigation bar
│   ├── page.tsx                                 # Root route redirect
│   ├── not-found.tsx                            # Custom 404 page
│   ├── about/page.tsx                           # About page
│   ├── students/
│   │   ├── page.tsx                             # Students directory catalog
│   │   └── [id]/page.tsx                        # Dynamic student profile dossier
│   └── departments/
│       ├── page.tsx                             # Departments catalog
│       └── [department]/
│           ├── page.tsx                         # Dynamic department details
│           └── [specialization]/page.tsx        # Nested specialization route
├── components/
│   ├── layout/
│   │   └── Navbar.tsx                           # Global top navigation bar with active route highlighting
│   ├── ui/
│   │   ├── Badge.tsx                            # Reusable status/attribute badge
│   │   └── Button.tsx                           # Reusable action button
│   ├── StudentCard.tsx                          # Individual student summary card
│   ├── StudentGrid.tsx                          # Search and filter state container
│   ├── StudentFilter.tsx                        # Search bar and department select filter
│   ├── DepartmentCard.tsx                       # Department summary card
│   └── DepartmentList.tsx                       # Department grid container
├── constants/
│   └── navigation.ts                            # Navigation links and route configuration
└── types/
    ├── students/                                # Student TypeScript models and mock dataset
    └── departments/                             # Department & Specialization models and datasets
```

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment Ready**: Optimized for Vercel, Node.js, and containerized hosts
