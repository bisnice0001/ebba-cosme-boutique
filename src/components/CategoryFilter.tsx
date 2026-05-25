"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, Sun, Flower2, Eye, Hand, Heart } from "lucide-react";
import type { Category } from "@/lib/services";
import { CATEGORIES } from "@/lib/services";

const ICONS: Record<Category, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Hair: Scissors,
  Smoothing: Sparkles,
  Coloring: Palette,
  Skin: Sun,
  Body: Flower2,
  Lashes: Eye,
  Nails: Hand,
  "Women Area": Heart,
};

export function CategoryFilter({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <>
      {/* Custom CSS untuk Scrollbar Elegan 
        Kita taruh di sini agar langsung aktif hanya untuk komponen ini
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-elegant::-webkit-scrollbar { height: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-track { background: rgba(216, 167, 197, 0.2); border-radius: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-thumb { background: rgba(139, 92, 135, 0.4); border-radius: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 135, 0.8); }
      `}} />

      <div 
        /* Mengganti hide-scrollbar dengan scrollbar-elegant */
        className="scrollbar-elegant -mx-6 flex gap-3 overflow-x-auto px-6 pb-4 pt-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-2"
        role="tablist"
        aria-label="Filter kategori treatment salon"
      >
        {CATEGORIES.map((cat) => {
          const Icon = ICONS[cat];
          const isActive = active === cat;
          
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              role="tab"
              aria-selected={isActive}
              className={`group relative inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full px-6 font-sans text-[0.95rem] font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 ${
                isActive
                  ? "border border-transparent text-primary-foreground shadow-soft"
                  : "border border-border/70 bg-card text-body hover:border-primary/40 hover:bg-secondary/10 hover:text-primary"
              }`}
            >
              {/* FIX BUG: Mengubah z-index dari -z-10 menjadi z-0 
                agar background tidak tembus/hilang ke belakang di mode mobile
              */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryFilter"
                  className="absolute inset-0 z-0 rounded-full bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              {/* FIX BUG: Menambahkan relative z-10 agar ikon dan teks selalu di atas background */}
              <Icon
                size={18} 
                strokeWidth={isActive ? 2 : 1.5}
                className={`relative z-10 transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`} 
              />
              
              <span className="relative z-10 tracking-wide">{cat}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}