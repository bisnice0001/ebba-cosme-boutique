import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Service } from "@/lib/services";
import { generateWAUrl } from "@/lib/services";

export function TreatmentList({ services }: { services: Service[] }) {
  // group by `group`, fall back to "Treatments"
  const groups = services.reduce<Record<string, Service[]>>((acc, s) => {
    const k = s.group ?? "Treatments";
    (acc[k] ??= []).push(s);
    return acc;
  }, {});

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {Object.entries(groups).map(([groupName, items], gi) => (
        <motion.div
          key={groupName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: gi * 0.05 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
        >
          <h3 className="font-serif text-xl text-heading">{groupName}</h3>
          <div className="mt-5 divide-y divide-border">
            {items.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="flex flex-wrap items-center justify-between gap-3 py-4"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-heading">{s.name}</p>
                    {s.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                          s.badge === "Natural"
                            ? "bg-accent-sage/15 text-accent-sage"
                            : "bg-secondary/40 text-primary"
                        }`}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-light">Mulai dari {s.price}</p>
                </div>

                <a
                  href={generateWAUrl(s.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-primary px-4 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle size={14} />
                  Book
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
