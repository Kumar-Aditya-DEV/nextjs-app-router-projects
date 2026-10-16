import DepartmentList from "@/components/DepartmentList";

export default function DepartmentsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold ">
            Departments
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, corporis.
          </p>
        </div>

        <p className="text-sm text-slate-600">
          <span className="font-semibold text-blue-600">●</span>{" "}
          {3} Active Academic Faculties
        </p>
      </div>

      <DepartmentList />

      <div className="mt-5 flex flex-col justify-between gap-2 text-xs text-slate-500 sm:flex-row">
        <p>Curriculum Year 2024–2025</p>

        <p>Updated daily via Campus Records API</p>
      </div>
    </main>
  );
};