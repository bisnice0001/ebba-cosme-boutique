"use client";

import { motion } from "framer-motion";
import { MousePointerClick, MessageSquareText, Sparkles } from "lucide-react";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "1. Choose Your Ritual",
    description: "Explore our menu—from Japanese Hair Spa to Korean Glow Facials—and find your perfect match.",
  },
  {
    icon: MessageSquareText,
    title: "2. Book via WhatsApp",
    description: "Tap the WhatsApp button to secure your slot and consult directly with our friendly admin.",
  },
  {
    icon: Sparkles,
    title: "3. Enjoy Your Me-Time",
    description: "Arrive at our Karangploso sanctuary, exhale, and let our experts pamper you.",
  },
];

export function HowToBook() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      
      {/* SEO HIDDEN BLOCK */}
      <div className="sr-only">
        <h2>Cara Reservasi dan Booking di Ebbacosme Salon & Spa</h2>
        <p>
          Booking perawatan salon dan spa di Karangploso, Malang kini sangat mudah. 
          Pertama, pilih menu treatment pilihan Anda, mulai dari hair treatment, smoothing, hingga perawatan wajah. 
          Kedua, klik tombol kontak untuk reservasi jadwal langsung melalui admin WhatsApp kami. 
          Ketiga, kunjungi lokasi salon terdekat kami di area Malang untuk menikmati layanan kecantikan premium khusus wanita dengan tenang dan nyaman.
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
            <span className="h-px w-4 bg-primary/40"></span>
            Simple Process
            <span className="h-px w-4 bg-primary/40"></span>
          </p>
          <h2 className="mt-4 font-serif text-3xl text-heading md:text-5xl">
            How to <em className="font-serif italic text-primary">Book.</em>
          </h2>
        </motion.div>

        {/* STEPS GRID */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connecting Line for desktop (Dibuat dashed/putus-putus agar lebih manis) */}
                {idx !== STEPS.length - 1 && (
                  <div className="absolute left-1/2 top-8 z-0 hidden w-full border-t border-dashed border-primary/30 md:block" />
                )}
                
                {/* Step Icon */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-transform duration-500 hover:scale-110 hover:bg-secondary/10">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Step Text */}
                <h3 className="font-serif text-xl font-medium text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[280px] font-sans text-sm leading-relaxed text-body/90 md:text-base">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}