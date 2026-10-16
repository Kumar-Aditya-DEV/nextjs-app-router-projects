import Link from "next/link";

import type { Department } from "../types/departments/departmetType";

type DepartmentCardProps = {
  department: Department;
};

export default function DepartmentCard({department}: DepartmentCardProps) {
  return (
    <div className="border-b border-slate-200 p-5 last:border-b-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {department.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {department.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
            <span>
              {department.specializations} Specializations
            </span>

            <span>
              {department.totalStudents} Enrolled Students
            </span>
          </div>
        </div>

        <Link
          href={`/departments/${department.id}`}
          className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View students →
        </Link>
      </div>
    </div>
  );
};