export type Specialization = {
  id: string;
  name: string;
  description: string;
  departmentId: string;
  students: string[];
};

export const specializations: Specialization[] = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Modern frontend architectures, full-stack frameworks, and distributed web APIs.",
    departmentId: "computer-science",
    students: ["STU-1042"],
  },
  {
    id: "data-science",
    name: "Data Science",
    description:
      "Data analysis, statistical methods, and machine learning.",
    departmentId: "computer-science",
    students: ["STU-1047"],
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description:
      "Cloud infrastructure, distributed systems, and scalable applications.",
    departmentId: "computer-science",
    students: ["STU-1044"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Network security, application security, and security fundamentals.",
    departmentId: "computer-science",
    students: ["STU-1046"],
  },
];