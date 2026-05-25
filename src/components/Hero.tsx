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
        <h1>Ebbacosme Salon & Spa By Hayyin - Salon Kecantikan Terbaik Malang</h1>
        <p>
          Ebbacosme Salon & Spa By Hayyin adalah salon wanita dan spa kecantikan terbaik di Karangploso, Malang. 
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
            <h2 className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles size={14} />
              Ebbacosme Salon & Spa By Hayyin
            </h2>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-heading backdrop-blur-sm">
              <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              4.5 / 5 <span className="text-body/70">(Google Reviews)</span>
            </div>
          </div>

          {/* H1 Heading */}
          <h2 className="mt-8 font-serif text-5xl leading-[1.15] text-heading md:text-6xl lg:text-7xl">
            A quiet ritual <br />
            of <em className="font-serif italic text-primary">becoming.</em>
          </h2>

          {/* Deskripsi */}
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-body md:text-lg">
            Selamat datang di <strong className="font-medium text-heading">Ebbacosme</strong>, salon wanita dan spa premium di Karangploso. Nikmati perpaduan <strong className="font-medium text-heading">Japanese Hair Spa</strong> dan <strong className="font-medium text-heading">Korean Facial Treatment</strong> di ruang estetika kami yang tenang dan nyaman.
          </p>

          {/* Call to Actions */}
          {/* FIX: justify-center untuk HP, md:justify-start untuk Desktop */}
          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:justify-start">
            <a
              href={generateWAUrl("Halo admin Ebbacosme, saya ingin reservasi/konsultasi treatment.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-primary px-8 font-sans text-sm font-medium text-primary-foreground shadow-luxe transition-all duration-300 hover:scale-[1.02] hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary sm:w-auto md:h-14"
            >
              Book via WhatsApp
            </a>
            <a
              href="#treatments"
              className="inline-flex h-12 w-full items-center justify-center rounded-[8px] border border-border bg-transparent px-8 font-sans text-sm font-medium text-heading transition-colors duration-300 hover:border-primary hover:text-primary focus:outline-none sm:w-auto md:h-14"
            >
              Explore Treatments
            </a>
          </div>

          {/* Location / Local SEO Signal */}
          <div className="mt-10 flex flex-col items-center gap-3 font-sans text-sm text-body/70 sm:flex-row md:items-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-primary">
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
          className="relative mx-auto w-full max-w-[380px] lg:max-w-[460px]"
        >
          {/* Main Arch Frame */}
          <div className="arch-frame group relative z-10 aspect-[3/4] w-full overflow-hidden bg-muted shadow-luxe">
            <Image
              src="/hero.jpeg"
              alt="Ebbacosme Salon & Spa By Hayyin - Salon Kecantikan Wanita, Hair Treatment, dan Spa di Karangploso Malang"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Inner border yang memberikan kesan luxury (tidak polos) */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/20" />
          </div>

          {/* Floating Aesthetic Chip (Tetap disembunyikan di HP terkecil agar tidak menutupi gambar) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="glass absolute -bottom-6 -left-8 z-20 hidden w-64 flex-col gap-2 rounded-[16px] border border-white/40 p-5 shadow-luxe sm:flex"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-accent-sage" />
              <span className="font-sans text-[10px] font-bold tracking-widest text-primary uppercase">
                Signature Treatment
              </span>
            </div>
            <p className="font-serif text-lg leading-snug text-heading">
              Premium Head Spa & <br /> Holistic Beauty
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}