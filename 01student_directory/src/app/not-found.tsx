import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Error 404
        </p>

        <h1 className="mt-4 text-3xl font-bold ">
          Page not found
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Sorry, we couldn't find the page you're looking for.
          The page may have been moved or doesn't exist.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/students"
            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white"
          >
            Browse Students
          </Link>

          <Link
            href="/departments"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            View Departments
          </Link>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5">
          <p className="text-xs text-slate-400">
            Campus Directory · Page unavailable
          </p>
        </div>
      </div>
    </main>
  );
};