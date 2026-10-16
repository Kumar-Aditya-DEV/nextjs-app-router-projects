import Link from "next/link";
import { notFound } from "next/navigation";

import { departments } from "@/types/departments/departmentData";
import { specializations } from "@/types/departments/specializationData";
import { students } from "@/types/students/studentData";

type SpecializationPageProps = {
  params: Promise<{
    department: string;
    specialization: string;
  }>;
};

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  const { department: departmentId, specialization: specializationId } =
    await params;

  const department = departments.find(
    (item) => item.id === departmentId
  );

  const specialization = specializations.find(
    (item) =>
      item.id === specializationId &&
      item.departmentId === departmentId
  );

  if (!department || !specialization) {
    notFound();
  }

  const specializationStudents = students.filter(
    (student) =>
      student.department === department.name &&
      student.specialization === specialization.name
  );

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-5 text-sm text-slate-500">
        <Link href="/departments" className="hover:text-blue-600">
          Departments
        </Link>

        <span className="mx-2">/</span>

        <Link
          href={`/departments/${departmentId}`}
          className="hover:text-blue-600"
        >
          {department.name}
        </Link>

        <span className="mx-2">/</span>

        <span className="text-slate-900">
          {specialization.name}
        </span>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/departments/${departmentId}`}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          ← Return to {department.name} Department
        </Link>

        <Link
          href="/students"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          View all students →
        </Link>
      </div>

      {/* Specialization Details */}
      <section className="rounded-md border border-slate-200 bg-white p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {specialization.name}
            </h1>

            <p className="mt-2 text-xs text-slate-500">
              Specialization under {department.name}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {specialization.description}
            </p>
          </div>

          <div className="shrink-0">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Department
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {department.name}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-5">
          <p className="text-sm text-slate-500">
            Total Enrolled Students
          </p>

          <p className="mt-1 text-xl font-semibold text-slate-900">
            {specializationStudents.length}
          </p>
        </div>
      </section>

      {/* Student List */}
      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">
            Students in this Specialization
          </h2>

          <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
            {specializationStudents.length} Students
          </span>
        </div>

        {specializationStudents.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specializationStudents.map((student) => (
              <div
                key={student.id}
                className="rounded-md border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-100 text-sm font-semibold text-blue-700">
                    {student.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-slate-900">
                      {student.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {student.id}
                    </p>
                  </div>

                  <span className="text-xs text-slate-500">
                    Year {student.year}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-500">
                    {specialization.name}
                  </p>

                  <Link
                    href={`/students/${student.id}`}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    View profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-slate-200 bg-white p-8 text-center">
            <h3 className="font-medium text-slate-900">
              No students found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              No sample students are currently assigned to this specialization.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};