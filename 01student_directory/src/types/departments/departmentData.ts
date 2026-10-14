import type { Department } from './departmetType'

export const departments: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    totalStudents: 320,
  },
  {
    id: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    totalStudents: 185,
  },
  {
    id: "business",
    name: "Business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    totalStudents: 240,
  },
];