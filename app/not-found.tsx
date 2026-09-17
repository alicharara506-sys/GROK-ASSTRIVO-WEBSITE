import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 mx-auto flex min-h-[80svh] max-w-3xl flex-col justify-center px-5 py-32 sm:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">404</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-white sm:text-5xl">
        This node is off the map.
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        The page you asked for is not in the Astrivo constellation. Return to the
        fleet or the agency story.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-linear-to-r from-magenta to-violet px-5 py-3 text-sm font-semibold text-white"
        >
          Back to constellation
        </Link>
        <Link
          href="/#about"
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
        >
          About Astrivo
        </Link>
      </div>
    </main>
  );
}
