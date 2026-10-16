import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-6 border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900">About Student Directory</h1>
        <p className="mt-2 text-sm text-slate-500">
          A centralized academic directory for managing student profiles, faculties, and specializations.
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veniam aliquid, beatae repellat in nesciunt, voluptatibus cum rerum minima incidunt tenetur ipsa et perferendis. Dignissimos dolor mollitia voluptatum dicta nemo sequi quod aspernatur sed accusamus quam quo architecto nesciunt consequatur eveniet sapiente accusantium, et dolores, nisi corrupti maxime ratione modi?
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <h3 className="font-semibold text-slate-900 mb-2">🎓 Student Profiles</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, perferendis cumque dolorum quas consequuntur, id quia optio corrupti ad eveniet rem architecto, esse cupiditate nihil.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
            <h3 className="font-semibold text-slate-900 mb-2">🏛️ Department & Specialization Architecture</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut libero iste reiciendis neque iure optio quaerat molestias deleniti esse repellendus?
            </p>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-xs">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
            <li><strong>Next.js 16</strong> (App Router, dynamic routes, nested routes)</li>
            <li><strong>React 19</strong> (Server and Client Components)</li>
            <li><strong>Tailwind CSS 4</strong> (Utility-first responsive styling)</li>
            <li><strong>TypeScript 5</strong> (Type-safe data models and interfaces)</li>
          </ul>
        </section>

        <div className="pt-4 flex gap-4">
          <Link
            href="/students"
            className="rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition"
          >
            Explore Students →
          </Link>
          <Link
            href="/departments"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            View Departments
          </Link>
        </div>
      </div>
    </main>
  );
};
