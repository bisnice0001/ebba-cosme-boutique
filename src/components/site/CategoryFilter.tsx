import { Scissors, Sparkles, Palette, Sun, Flower2, Eye, Hand, Heart } from "lucide-react";
import type { Category } from "@/lib/services";
import { CATEGORIES } from "@/lib/services";

const ICONS: Record<Category, React.ComponentType<{ size?: number }>> = {
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
    <div className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
      {CATEGORIES.map((cat) => {
        const Icon = ICONS[cat];
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`inline-flex h-12 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-all ${
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-heading hover:border-primary hover:text-primary"
            }`}
          >
            <Icon size={16} />
            {cat}
          </button>
        );
      })}
    </div>
  );
}
