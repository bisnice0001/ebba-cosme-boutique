"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Star } from "lucide-react";
import { generateWAUrl } from "@/lib/services";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] w-full items-center py-24 md:py-32">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
        <div className="absolute -right-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-secondary/30 blur-[120px]" />
        <div className="absolute -left-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* SEO HIDDEN BLOCK */}
      <div className="sr-only">
        <h1>Hayyin Muslimah Salon & Spa - Salon Kecantikan Terbaik Malang</h1>
        <p>
          Hayyin Muslimah Salon & Spa adalah salon wanita dan spa kecantikan terbaik di Karangploso, Malang. 
          Melayani berbagai beauty treatment premium: hair treatment, hair spa, creambath, smoothing, rebonding, hair coloring (balayage, ombre, highlight), hingga perawatan rambut rontok dan rusak. 
          Nikmati body spa wanita, relaksasi massage, facial glowing, manicure, pedicure, dan nail art terdekat di area Malang Barat, Batu, Dau, Singosari, dan Universitas Brawijaya. 
          Salon aesthetic modern, murah, populer, dan recommended untuk wanita dan muslimah.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-16 lg:px-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          /* FIX: items-center text-center untuk HP
            md:items-start md:text-left untuk Desktop 
          */
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* SEO & Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <h2 className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FDE047]">
              <Sparkles size={14} className="text-[#FDE047]" />
              Cantik · Sehat · Berkah
            </h2>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm shadow-xs">
              <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              4.5 / 5 <span className="text-purple-200/70">(Google Reviews)</span>
            </div>
          </div>

          {/* H1 Heading */}
          <h2 className="mt-8 font-serif text-5xl leading-[1.15] text-white md:text-6xl lg:text-7xl">
            A quiet ritual <br />
            of <em className="font-serif italic text-[#FDE047]">becoming.</em>
          </h2>

          {/* Deskripsi */}
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-body md:text-lg">
            Selamat datang di <strong className="font-medium text-white">Hayyin Muslimah Salon & Spa</strong>, sanctuary kecantikan khusus wanita di Karangploso, Malang. Nikmati ritual unggulan <strong className="font-medium text-white">Japanese Head Spa</strong>, <strong className="font-medium text-white">Korean Facial</strong>, perawatan rambut, lulur spa, dan <strong className="font-medium text-white">Paket Bundling Hemat</strong> dalam suasana privat yang tenang dan nyaman.
          </p>

          {/* Call to Actions */}
          {/* FIX: justify-center untuk HP, md:justify-start untuk Desktop */}
          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:justify-start">
            <a
              href={generateWAUrl("Halo admin Hayyin Muslimah Salon & Spa, saya ingin reservasi/konsultasi treatment.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-8 font-sans text-sm font-bold text-[#1E042B] shadow-luxe transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] sm:w-auto md:h-14"
            >
              Book via WhatsApp
            </a>
            <a
              href="#treatments"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-white/20 bg-white/5 px-8 font-sans text-sm font-medium text-white transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-white/10 hover:text-[#FDE047] focus:outline-none sm:w-auto md:h-14"
            >
              Explore Treatments
            </a>
          </div>

          {/* Location / Local SEO Signal */}
          <div className="mt-10 flex flex-col items-center gap-3 font-sans text-sm text-body/80 sm:flex-row md:items-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#FDE047] border border-white/10">
              <MapPin size={16} />
            </div>
            <address className="text-center not-italic md:text-left">
              Karangploso, Malang <span className="hidden sm:inline mx-1.5">·</span> <br className="sm:hidden" /> Open Daily 09.00 – 20.00
            </address>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[450px]"
        >
          {/* Main Frame with refined architectural curvature */}
          <div className="group relative z-10 aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-[28px] sm:rounded-t-[180px] sm:rounded-b-[28px] border-2 border-white/80 ring-1 ring-[#D4AF37]/40 bg-card shadow-luxe">
            <Image
              src="/hero.jpeg"
              alt="Hayyin Muslimah Salon & Spa - Salon Kecantikan Wanita, Hair Treatment, dan Spa di Karangploso Malang"
              className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Inner border yang memberikan kesan luxury */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/30" />
            {/* Bottom gradient on mobile to enhance floating badge readability */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#150320]/80 via-transparent to-transparent sm:hidden" />
          </div>

          {/* Floating Aesthetic Chip - Fully responsive for mobile & desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute -bottom-4 left-3 right-3 z-20 flex items-center justify-between rounded-2xl border border-purple-500/30 bg-[#220731]/95 px-4 py-3 shadow-luxe backdrop-blur-md sm:-bottom-6 sm:-left-6 sm:right-auto sm:w-64 sm:flex-col sm:items-start sm:p-5"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
              <span className="font-sans text-[10px] font-bold tracking-widest text-[#FDE047] uppercase">
                100% Khusus Wanita
              </span>
            </div>
            <p className="font-serif text-sm font-semibold text-white sm:mt-1 sm:text-base leading-snug">
              Private Sanctuary
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}