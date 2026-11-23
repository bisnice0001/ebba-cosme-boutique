"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Sparkle,
  Palette,
  Sun,
  Flower2,
  Eye,
  Hand,
} from "lucide-react";
import type { Category } from "@/lib/services";
import { CATEGORIES } from "@/lib/services";

const ICONS: Record<
  Category,
  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  "Paket Bundling": Sparkles,
  "Hair Cutting & Styling": Scissors,
  "Hair Treatment": Sparkle,
  "Smoothing & Coloring": Palette,
  "Skin & Facial": Sun,
  "Body & Spa": Flower2,
  "Lashes & Kewanitaan": Eye,
  "Nails Treatment": Hand,
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-elegant::-webkit-scrollbar { height: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-track { background: rgba(243, 230, 250, 0.4); border-radius: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-thumb { background: rgba(107, 23, 138, 0.3); border-radius: 4px; }
        .scrollbar-elegant::-webkit-scrollbar-thumb:hover { background: rgba(107, 23, 138, 0.7); }
      `,
        }}
      />

      <div
        className="scrollbar-elegant -mx-6 flex gap-2.5 overflow-x-auto px-6 pb-4 pt-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-2"
        role="tablist"
        aria-label="Filter kategori treatment salon"
      >
        {CATEGORIES.map((cat) => {
          const Icon = ICONS[cat];
          const isActive = active === cat;
          const isBundling = cat === "Paket Bundling";

          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              role="tab"
              aria-selected={isActive}
              className={`group relative inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-5 font-sans text-[0.88rem] font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 ${
                isActive
                  ? "border border-transparent text-white shadow-md shadow-primary/20"
                  : isBundling
                  ? "border border-[#D4AF37]/60 bg-[#FAF4DD]/50 text-heading hover:border-[#D4AF37] hover:bg-[#FAF4DD]"
                  : "border border-border/80 bg-card text-body hover:border-primary/40 hover:bg-secondary/40 hover:text-heading"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryFilter"
                  className={`absolute inset-0 z-0 rounded-full ${
                    isBundling
                      ? "bg-gradient-to-r from-primary via-[#8A1EA8] to-primary"
                      : "bg-primary"
                  }`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <Icon
                size={16}
                strokeWidth={isActive ? 2.2 : 1.7}
                className={`relative z-10 transition-transform duration-300 ${
                  isActive
                    ? isBundling
                      ? "text-[#FDE047] scale-110"
                      : "text-white scale-110"
                    : isBundling
                    ? "text-[#B45309] group-hover:scale-110"
                    : "text-primary group-hover:scale-110"
                }`}
              />

              <span className="relative z-10 tracking-wide">{cat}</span>

              {isBundling && !isActive && (
                <span className="relative z-10 rounded-full bg-[#D4AF37] px-1.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
                  Hemat
                </span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
