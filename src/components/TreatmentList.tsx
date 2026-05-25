"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Service } from "@/lib/services"; // Pastikan path ini benar
import { generateWAUrl } from "@/lib/services";

export function TreatmentList({ services }: { services: Service[] }) {
  // Kelompokkan berdasarkan `group`, jika tidak ada gunakan "Treatments"
  const groups = services.reduce<Record<string, Service[]>>((acc, s) => {
    const k = s.group ?? "Treatments";
    (acc[k] ??= []).push(s);
    return acc;
  }, {});

  // Generate SEO Schema.org (JSON-LD) untuk List Treatment
  // Ini sangat krusial agar menu salonmu terbaca terstruktur oleh Google
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: `Treatment ${s.name} premium di Ebbacosme Salon & Spa Karangploso.`,
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          // Ambil angka pertama dari string harga sebagai referensi SEO (misal "25K" -> "25000")
          price: (parseInt(s.price.replace(/[^0-9]/g, "")) || 0) * 1000,
        },
      },
    })),
  };

  return (
    <div className="relative w-full">
      {/* Inject Data SEO Tersembunyi ke dalam DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
        {Object.entries(groups).map(([groupName, items], gi) => (
          <motion.div
            key={groupName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-[20px] border border-border/60 bg-card p-6 shadow-soft transition-all duration-500 hover:shadow-luxe md:p-8"
          >
            {/* Header Grup dengan aksen garis pinggir */}
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-serif text-2xl font-medium text-heading md:text-3xl">
                {groupName}
              </h3>
              <div className="h-px flex-1 bg-border/60" />
            </div>

            <div className="flex flex-col divide-y divide-border/40">
              {items.map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  className="group/item flex flex-wrap items-center justify-between gap-4 -mx-3 px-3 py-4 rounded-[12px] transition-colors hover:bg-secondary/10"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <p className="font-sans text-[0.95rem] font-medium text-heading transition-colors group-hover/item:text-primary">
                        {s.name}
                      </p>
                      
                      {/* Stylized Badges */}
                      {s.badge && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest ${
                            s.badge === "Natural"
                              ? "bg-accent-sage/20 text-[#6B754B]"
                              : "bg-[#F59E0B]/15 text-[#D97706]"
                          }`}
                        >
                          {s.badge}
                        </span>
                      )}
                    </div>
                    
                    {/* Harga menggunakan Serif agar terlihat lebih elegan/klasik */}
                    {(s.category === "Hair" || s.category === "Smoothing" || s.category === "Coloring" || s.price.startsWith("Start from ")) ? (
                      <span className="flex flex-col leading-tight">
                        <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-body/60">Start from</span>
                        <span className="font-serif text-sm font-medium text-primary md:text-base">{s.price.replace("Start from ", "")}</span>
                      </span>
                    ) : (
                      <p className="font-serif text-sm font-medium text-primary md:text-base">
                        {s.price}
                      </p>
                    )}
                  </div>

                  <a
                    href={generateWAUrl(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-[8px] border border-primary/30 bg-transparent px-4 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label={`Booking ${s.name} via WhatsApp`}
                    title={`Booking ${s.name}`}
                  >
                    <MessageCircle size={16} />
                    <span className="hidden sm:inline">Book</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}