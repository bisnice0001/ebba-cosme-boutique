import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { generateWAUrl } from "@/lib/services";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* soft background flourish */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-secondary/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-primary">
            <Sparkles size={14} />
            Premium Salon · Karangploso
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-heading md:text-7xl">
            A quiet ritual
            <br />
            of <em className="text-primary">becoming</em>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
            Ebba Cosme by Hayyin is a feminine sanctuary for hair, skin, and body —
            blending Japanese spa rituals with Korean glow facials in our soft, arch-mirrored studio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={generateWAUrl("Konsultasi treatment")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground shadow-luxe transition-all hover:scale-[1.02] hover:bg-accent"
            >
              Book via WhatsApp
            </a>
            <a
              href="#treatments"
              className="inline-flex h-12 items-center rounded-md border border-primary px-7 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Treatments
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-light">
            <MapPin size={16} />
            Karangploso, Malang · Open Daily 09.00 – 21.00
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="arch-frame relative aspect-[3/4] w-full shadow-luxe">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
              alt="Client enjoying a luxury salon treatment at Ebba Cosme"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* secondary arched chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-8 -left-6 hidden w-48 rounded-2xl border border-border bg-card p-4 shadow-luxe sm:block"
          >
            <p className="font-serif text-2xl text-primary">8+</p>
            <p className="mt-1 text-xs leading-relaxed text-body">
              Signature treatment categories crafted for every woman.
            </p>
          </motion.div>

          <div className="absolute -top-6 -right-4 hidden h-24 w-24 rounded-full border border-accent-sage/40 bg-accent-sage/10 md:block" />
        </motion.div>
      </div>
    </section>
  );
}
