import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/components/ui/Badge";
import { students } from "@/types/students/studentData";

type StudentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentProfilePage({
  params,
}: StudentPageProps) {
  const { id } = await params;

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-slate-500">
        <Link
          href="/students"
          className="hover:text-blue-600"
        >
          Students 
        </Link>


        <span className="text-slate-800"> / 
           {student.name}
        </span>
      </div>

      <Link
        href="/students"
        className="mb-6 inline-block text-sm text-blue-600 hover:text-blue-700"
      >
        ← Back to students
      </Link>

      <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
        
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100 text-lg font-semibold text-blue-700">
            {student.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {student.name}
            </h1>

            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>{student.id}</Badge>

              <Badge>Active Student</Badge>
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-200 py-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Department
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {student.department}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Study Year
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {student.year} Year Undergraduate
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </p>

            <a
              href={`mailto:${student.email}`}
              className="mt-1 inline-block text-sm text-blue-600 hover:underline"
            >
              {student.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Enrolled
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {student.enrolled}
            </p>
          </div>
        </div>

        {/* About */}
        <section className="border-b border-slate-200 py-6">
          <h2 className="font-semibold text-slate-900">
            About
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {student.about}
          </p>
        </section>

        {/* Academic Details */}
        <section className="pt-6">
          <h2 className="font-semibold text-slate-900">
            Academic Details
          </h2>

          <div className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            <div className="flex flex-wrap justify-between gap-2 py-3 text-sm">
              <span className="text-slate-500">
                Department
              </span>

              <span className="font-medium text-slate-900">
                {student.department}
              </span>
            </div>

            <div className="flex flex-wrap justify-between gap-2 py-3 text-sm">
              <span className="text-slate-500">
                Specialization
              </span>

              <span className="font-medium text-slate-900">
                {student.specialization}
              </span>
            </div>

            <div className="flex flex-wrap justify-between gap-2 py-3 text-sm">
              <span className="text-slate-500">
                Current Academic Standing
              </span>

              <span className="font-medium text-slate-900">
                {student.year} Year Undergraduate
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};