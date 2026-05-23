export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-light md:flex-row md:px-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-lg text-heading">Ebba Cosme</span>
          <span className="text-[10px] tracking-[0.32em] uppercase">by Hayyin</span>
        </div>
        <p>© {new Date().getFullYear()} Ebba Cosme by Hayyin. Crafted with care in Malang.</p>
      </div>
    </footer>
  );
}
