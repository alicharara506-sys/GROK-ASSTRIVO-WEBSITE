export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-8 text-center text-xs tracking-[0.16em] text-muted/80 sm:px-8">
      © {new Date().getFullYear()} Astrivo Agency
    </footer>
  );
}
