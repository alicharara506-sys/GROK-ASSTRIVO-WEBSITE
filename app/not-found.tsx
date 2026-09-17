import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-violet">404</p>
      <h1 className="font-display mt-3 text-4xl text-white">This node is off the map.</h1>
      <p className="mt-4 max-w-md text-muted">
        That fleet route does not exist. Return to the constellation and pick a specialist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-linear-to-r from-magenta to-violet px-5 py-3 text-sm font-semibold text-white"
      >
        Back to Astrivo
      </Link>
    </main>
  );
}
