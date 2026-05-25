"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { generateWAUrl } from "@/lib/services";
import Image from "next/image";

const NAV = [
  { href: "#treatments", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Handle scroll effect for glassmorphism only (tidak mengubah ukuran)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass border-b border-border/50 shadow-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Container ini ukurannya tetap, tidak terpengaruh state scroll */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        
        {/* LOGO AREA (SEO Optimized) */}
        <a 
          href="#top" 
          className="group flex items-center gap-3 rounded-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-4"
          aria-label="Ebbacosme Salon & Spa Homepage"
        >
          <Image
            src="/logo.webp"
            alt="Logo"
            width={80}
            height={80}
            sizes="80px"
            quality={60}
            priority
            className="h-10 w-auto md:h-12"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif text-[1.35rem] leading-none text-heading md:text-[1.5rem]">
              Ebbacosme
            </span>
            <span className="mt-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.35em] text-primary">
              by Hayyin
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main Navigation">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative py-2 font-sans text-sm font-medium text-body transition-colors hover:text-heading focus:outline-none"
            >
              {n.label}
              {/* Animated Underline Effect */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary/60 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href={generateWAUrl("Halo admin Ebbacosme, saya ingin reservasi treatment.")}
          target="_blank"
          rel="noreferrer"
          className="hidden h-11 items-center justify-center rounded-[8px] bg-primary px-7 font-sans text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-[1.02] hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary md:inline-flex"
        >
          Book Now
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-heading transition-colors hover:bg-secondary/20 focus:outline-none md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/50 glass md:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 pb-6 pt-4" aria-label="Mobile Navigation">
              {NAV.map((n, idx) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="rounded-[8px] px-4 py-3 font-serif text-lg font-medium text-heading transition-colors hover:bg-secondary/10"
                >
                  {n.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-4"
              >
                <a
                  href={generateWAUrl("Halo admin Ebbacosme, saya ingin reservasi treatment.")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-primary font-sans text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-accent"
                >
                  Book Now via WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}