import { departments } from '../types/departments/departmentData';

import DepartmentCard from "./DepartmentCard";

export default function DepartmentList() {
  return (
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white">
      {departments.map((department) => (
        <DepartmentCard
          key={department.id}
          department={department}
        />
      ))}
    </div>
  );
};