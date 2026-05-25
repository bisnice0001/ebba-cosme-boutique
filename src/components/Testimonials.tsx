"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Alya N.",
    review: "Tempatnya sangat nyaman dan estetik. Treatment hair spanya bikin rileks banget, apalagi ada area khusus wanita jadi makin tenang.",
  },
  {
    name: "Rina S.",
    review: "Pelayanannya juara! Terapisnya ramah dan sangat profesional. Hasil smoothingnya natural dan rambut jadi gampang diatur.",
  },
  {
    name: "Dinda M.",
    review: "Korean glow facialnya beneran bikin kulit lebih cerah. Suka banget sama suasananya yang tenang, cocok buat me time.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      
      {/* Soft Background Flourishes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute -right-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-accent-sage/10 blur-[80px]" />
      </div>

      {/* SEO HIDDEN BLOCK */}
      <div className="sr-only">
        <h2>Review dan Testimoni Pelanggan Ebbacosme Salon & Spa</h2>
        <p>
          Baca ulasan asli dan testimoni pelanggan Ebbacosme Salon di Karangploso Malang. 
          Pelanggan kami sangat merekomendasikan layanan salon wanita dan spa kami, 
          mulai dari hasil smoothing rambut yang natural, pelayanan kapster dan terapis profesional, 
          Korean Glow Facial yang mencerahkan, hingga Hair Spa yang merelaksasi. 
          Salon kami diakui sebagai tempat me-time yang nyaman, estetik, dan muslimah friendly dengan rating Google 4.5 Stars.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-6 bg-primary/40"></span>
            Testimonials
            <span className="h-px w-6 bg-primary/40"></span>
          </p>
          <h2 className="mt-4 font-serif text-3xl text-heading md:text-5xl">
            Words from our <em className="font-serif italic text-primary">muses.</em>
          </h2>
        </motion.div>

        {/* REVIEWS GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {REVIEWS.map((item, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-[16px] border border-border bg-card/60 p-8 shadow-soft backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-card hover:shadow-luxe"
            >
              {/* Decorative Background Quote Icon */}
              <div className="absolute right-6 top-6 text-secondary/10 transition-colors duration-500 group-hover:text-secondary/20">
                <Quote size={64} className="rotate-180" />
              </div>

              {/* Star Rating */}
              <div className="relative z-10 mb-6 flex gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="relative z-10 flex-1">
                <p className="font-sans text-[0.95rem] italic leading-relaxed text-body/90 md:text-base">
                  "{item.review}"
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
                {/* Initial Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/30 font-serif text-sm font-semibold text-primary">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <cite className="font-serif text-lg font-medium not-italic text-heading">
                    {item.name}
                  </cite>
                  <p className="font-sans text-xs text-body/70">Verified Client</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        
      </div>
    </section>
  );
}