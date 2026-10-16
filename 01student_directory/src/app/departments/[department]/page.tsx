import Link from "next/link";
import { notFound } from "next/navigation";

import { departments } from "@/types/departments/departmentData";
import { specializations } from "@/types/departments/specializationData";
import { students } from "@/types/students/studentData";

type DepartmentPageProps = {
  params: Promise<{
    department: string;
  }>;
};

export default async function DepartmentPage({
  params,
}: DepartmentPageProps) {
  const { department: departmentId } = await params;

  const department = departments.find(
    (item) => item.id === departmentId
  );

  if (!department) {
    notFound();
  }

  const departmentSpecializations = specializations.filter(
    (item) => item.departmentId === departmentId
  );

  const departmentStudents = students.filter(
    (student) => student.department === department.name
  );

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8">
      <div className="mb-6 text-sm text-slate-500">
        <Link
          href="/departments"
          className="hover:text-blue-600"
        >
          Departments
        </Link>

        <span className="mx-2">/</span>

        <span className="text-slate-900">
          {department.name}
        </span>
      </div>

      <Link
        href="/departments"
        className="text-sm text-blue-600 hover:text-blue-700"
      >
        ← Back to Departments
      </Link>

      <section className="mt-5 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {department.name}
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          {department.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-500">
          <p>
            {departmentSpecializations.length} Specializations
          </p>

          <p>
            {departmentStudents.length} Sample Students
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Specializations
        </h2>

        <div className="space-y-3">
          {departmentSpecializations.map((item) => (
            <div
              key={item.id}
              className="rounded-md border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {item.description}
              </p>

              <p className="mt-3 text-xs text-slate-500">
                {item.students.length} Sample Students
              </p>

              <Link
                href={`/departments/${departmentId}/${item.id}`}
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View specialization →
              </Link>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
}