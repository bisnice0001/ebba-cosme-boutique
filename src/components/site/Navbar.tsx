import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { generateWAUrl } from "@/lib/services";

const NAV = [
  { href: "#treatments", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-xl text-heading md:text-2xl">Ebba Cosme</span>
          <span className="text-[10px] tracking-[0.32em] uppercase text-light">by Hayyin</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-body transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={generateWAUrl("Konsultasi treatment")}
          target="_blank"
          rel="noreferrer"
          className="hidden h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] hover:bg-accent md:inline-flex"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-heading md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border glass md:hidden">
          <div className="flex flex-col gap-2 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-body hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href={generateWAUrl("Konsultasi treatment")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground"
            >
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
