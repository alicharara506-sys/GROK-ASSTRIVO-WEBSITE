import { CONTACT_EMAIL } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs tracking-[0.16em] text-muted/80 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Astrivo Agency</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-fog/80 transition hover:text-white"
        >
          Contact Astrivo
        </a>
      </div>
    </footer>
  );
}
