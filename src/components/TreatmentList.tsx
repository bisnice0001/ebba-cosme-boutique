"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Crown,
} from "lucide-react";
import {
  type Category,
  type ServiceItem,
  SERVICES,
  BUNDLING_PACKAGES,
  JAPANESE_HEAD_SPA,
  generateWAUrl,
} from "@/lib/services";

export function TreatmentList({ activeCategory }: { activeCategory: Category }) {
  // Filter standard services for current category
  const currentServices = useMemo(() => {
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Group services by group field
  const groups = useMemo(() => {
    const acc: Record<string, ServiceItem[]> = {};
    for (const s of currentServices) {
      const g = s.group || "Layanan Lainnya";
      if (!acc[g]) acc[g] = [];
      acc[g].push(s);
    }
    return acc;
  }, [currentServices]);

  // SEO Schema.org (JSON-LD)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      ...BUNDLING_PACKAGES.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Offer",
          name: b.name,
          description: b.description,
          price: (parseInt(b.bundlePrice.replace(/[^0-9]/g, "")) || 0) * 1000,
          priceCurrency: "IDR",
        },
      })),
      ...SERVICES.map((s, idx) => ({
        "@type": "ListItem",
        position: BUNDLING_PACKAGES.length + idx + 1,
        item: {
          "@type": "Service",
          name: s.name,
          description: `${s.name} - Hayyin Muslimah Salon & Spa Karangploso.`,
          offers: {
            "@type": "Offer",
            priceCurrency: "IDR",
            price: (parseInt(s.price.replace(/[^0-9]/g, "")) || 0) * 1000,
          },
        },
      })),
    ],
  };

  return (
    <div className="relative w-full">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ============================================================== */}
      {/* 1. VIEW: PAKET BUNDLING                                        */}
      {/* ============================================================== */}
      {activeCategory === "Paket Bundling" && (
        <div className="mt-8 flex flex-col gap-8 md:gap-10">
          {/* Header Banner - High Contrast Royal Purple & Gold */}
          <div className="relative overflow-hidden rounded-[24px] border-2 border-[#D4AF37]/50 bg-gradient-to-br from-[#38074E] via-[#52106E] to-[#2B043D] p-6 text-center shadow-luxe md:p-10">
            {/* Ambient Gold Glows */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/70 bg-[#D4AF37]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FDE047] shadow-xs">
                <Crown size={14} className="text-[#FDE047]" />
                Pilihan Terbaik & Paling Hemat
              </span>
              
              {/* Note: Explicitly styled with !text-white to prevent base layer heading override */}
              <h3 className="mt-4 font-serif text-3xl font-bold !text-white drop-shadow-md md:text-4xl lg:text-5xl">
                Paket Bundling Perawatan
              </h3>

              <div className="my-3.5 h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              <p className="max-w-xl text-sm leading-relaxed text-purple-100/95 md:text-base">
                Kombinasi ritual perawatan komprehensif dari ujung rambut hingga ujung kaki dengan harga lebih hemat dan manfaat maksimal.
              </p>
            </div>
          </div>

          {/* Grid Bundling Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {BUNDLING_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-[24px] border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe md:p-7 ${
                  pkg.popular
                    ? "border-[#D4AF37]/80 ring-1 ring-[#D4AF37]/50"
                    : "border-border/80 hover:border-primary/40"
                }`}
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#2A063B] shadow-sm">
                    Favorit Pelanggan
                  </div>
                )}

                <div>
                  {/* Tier & Savings Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-wider text-purple-200">
                      {pkg.tier}
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 font-sans text-[0.7rem] font-bold text-emerald-400">
                      {pkg.savings}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-serif text-2xl font-semibold leading-tight text-white">
                    {pkg.name}
                  </h4>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-body md:text-sm">
                    {pkg.description}
                  </p>

                  {/* Items Included */}
                  <div className="mt-5 rounded-xl border border-purple-500/20 bg-[#180324] p-4">
                    <p className="font-sans text-[0.72rem] font-bold uppercase tracking-wider text-[#FDE047]">
                      Rangkaian Perawatan:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs text-purple-100 md:text-[0.85rem]">
                      {pkg.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span className="font-medium">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pkg.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-500/25 bg-secondary/60 px-2.5 py-1 text-[0.68rem] font-medium text-purple-200"
                      >
                        ✓ {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA Section */}
                <div className="mt-7 border-t border-border/60 pt-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="block text-[0.72rem] text-body/60 line-through">
                        {pkg.normalPrice}
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#FDE047] md:text-3xl">
                        {pkg.bundlePrice}
                      </span>
                    </div>
                    <span className="rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/15 px-2.5 py-1 text-[0.7rem] font-bold text-[#FDE047]">
                      {pkg.savings}
                    </span>
                  </div>

                  <a
                    href={generateWAUrl(
                      `Halo admin Hayyin Muslimah Salon & Spa, saya ingin reservasi ${pkg.name} (${pkg.bundlePrice}). Untuk jadwal apakah tersedia?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] font-sans text-sm font-bold text-[#1E042B] shadow-luxe transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <MessageCircle size={18} />
                    <span>Booking Paket Ini</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. SPECIAL SPOTLIGHT: JAPANESE HEAD SPA (Updated revisi 1)     */}
      {/* ============================================================== */}
      {activeCategory === "Body & Spa" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 overflow-hidden rounded-[28px] border-2 border-[#D4AF37]/50 bg-gradient-to-br from-[#360550] via-[#4D0D67] to-[#28033E] p-6 text-white shadow-luxe md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#FDE047]">
                  <Sparkles size={13} />
                  Signature Perawatan Unggulan
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-purple-200">
                  8 Tahapan Relaksasi
                </span>
              </div>

              <h3 className="mt-4 font-serif text-3xl font-bold !text-white drop-shadow-md md:text-5xl">
                {JAPANESE_HEAD_SPA.name}
              </h3>
              <p className="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-[#FDE047] md:text-sm">
                {JAPANESE_HEAD_SPA.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-purple-100/95 md:text-base">
                {JAPANESE_HEAD_SPA.description}
              </p>

              {/* 8 Tahapan Grid (Updated with revisi 1.jpeg) */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {JAPANESE_HEAD_SPA.steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-2.5 rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#2B0342]">
                      {step.num}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white">{step.title}</p>
                      <p className="mt-0.5 text-[0.72rem] text-purple-200/90 leading-snug line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / CTA Box */}
            <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md lg:w-72">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
                Harga Treatment
              </span>
              <span className="mt-2 font-serif text-4xl font-bold text-[#FDE047] drop-shadow-sm">
                {JAPANESE_HEAD_SPA.price}
              </span>
              <p className="mt-2 text-xs italic text-purple-100/90">
                "{JAPANESE_HEAD_SPA.tagline}"
              </p>

              <a
                href={generateWAUrl(
                  `Halo admin Hayyin Muslimah Salon & Spa, saya ingin reservasi treatment Japanese Head Spa (${JAPANESE_HEAD_SPA.price}). Apakah slot tersedia?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] font-sans text-sm font-bold text-[#2A063B] shadow-luxe transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>Reservasi Sekarang</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* ============================================================== */}
      {/* 3. VIEW: REGULAR SERVICE GROUPS (for non-bundling categories)    */}
      {/* ============================================================== */}
      {activeCategory !== "Paket Bundling" && (
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-10">
          {Object.entries(groups).map(([groupName, items], gi) => (
            <motion.div
              key={groupName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[24px] border border-border/80 bg-card p-6 shadow-soft transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-luxe md:p-8"
            >
              {/* Header Grup dengan aksen ungu & emas */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-6 w-1 rounded-full bg-[#D4AF37]" />
                <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                  {groupName}
                </h3>
                <div className="h-px flex-1 bg-border/60" />
              </div>

              {/* Items List */}
              <div className="flex flex-col divide-y divide-border/50">
                {items.map((s, i) => (
                  <div
                    key={`${s.name}-${i}`}
                    className="group/item flex flex-wrap items-center justify-between gap-3 -mx-3 rounded-[14px] px-3 py-3.5 transition-colors hover:bg-secondary/40"
                  >
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-sans text-[0.95rem] font-semibold text-white transition-colors group-hover/item:text-[#FDE047]">
                          {s.name}
                        </p>

                        {/* Badges */}
                        {s.badge && (
                          <span className="rounded-full border border-primary/30 bg-primary/20 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-[#D8B4FE]">
                            {s.badge}
                          </span>
                        )}
                      </div>

                      {/* Description if available */}
                      {s.description && (
                        <p className="text-xs leading-relaxed text-body/90 line-clamp-2">
                          {s.description}
                        </p>
                      )}

                      {/* Price Tag Styled like Catalog Pill */}
                      <div className="mt-1 flex items-center gap-1.5">
                        {s.startFrom && (
                          <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-body/70">
                            Mulai
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full border border-[#D4AF37]/60 bg-[#160221] px-3 py-0.5 font-sans text-xs font-bold text-[#FDE047] shadow-xs">
                          {s.price}
                        </span>
                      </div>
                    </div>

                    <a
                      href={generateWAUrl(
                        `Halo admin Hayyin Muslimah Salon & Spa, saya ingin reservasi treatment: ${s.name} (${s.price}). Apakah slot tersedia?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3.5 text-xs font-semibold text-[#FDE047] shadow-xs transition-all duration-300 hover:border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F59E0B] hover:text-[#1E042B] focus:outline-none"
                      aria-label={`Booking ${s.name} via WhatsApp`}
                      title={`Booking ${s.name}`}
                    >
                      <MessageCircle size={14} />
                      <span>Book</span>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
