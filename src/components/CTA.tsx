"use client";

import { motion } from "framer-motion";
import { generateWAUrl } from "@/lib/services";
import { CalendarHeart } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      
      {/* SEO HIDDEN BLOCK - Intensi Transaksional */}
      <div className="sr-only">
        <h2>Booking dan Reservasi Hayyin Muslimah Salon & Spa Karangploso</h2>
        <p>
          Segera amankan jadwal perawatan Anda di Hayyin Muslimah Salon & Spa. 
          Kami menerima reservasi untuk hair treatment, smoothing keratin, pewarnaan rambut, 
          dan korean glow facial. Hubungi admin kami via WhatsApp untuk mendapatkan 
          jadwal me-time terbaik di salon wanita terdekat area Karangploso dan Malang. 
          Dapatkan pelayanan premium dengan harga terjangkau sekarang juga.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[24px] border-2 border-[#D4AF37]/40 bg-gradient-to-br from-[#38074E] via-[#4D0D67] to-[#2B0342] px-8 py-16 text-center shadow-luxe md:px-20 md:py-24 lg:rounded-[32px]"
        >
          {/* Inner Border for Luxury Card Effect */}
          <div className="pointer-events-none absolute inset-4 rounded-[inherit] border border-white/10 md:inset-6" />

          {/* Elegant Ambient Gradients */}
          <div className="absolute -right-[10%] -top-[20%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/15 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] h-[300px] w-[300px] rounded-full bg-[#38074E]/40 blur-[100px]" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#FDE047] backdrop-blur-sm"
            >
              <CalendarHeart size={28} strokeWidth={1.5} />
            </motion.div>

            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#FDE047]">
              Reserve Your Time
            </p>
            
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Your quiet retreat <br className="hidden sm:block" />
              <em className="font-serif italic text-[#FDE047]">awaits.</em>
            </h2>
            
            <p className="mt-6 font-sans text-base leading-relaxed text-purple-100/90 md:text-lg">
              Amankan jadwal Anda hari ini. Izinkan kami memanjakan Anda dengan 
              <strong className="font-medium text-white"> Japanese Head Spa </strong> 
              dan rangkaian <strong className="font-medium text-white"> Paket Bundling Hemat </strong> 
              terbaik di Karangploso.
            </p>
            
            <div className="mt-10 md:mt-12">
              <a
                href={generateWAUrl("Halo admin Hayyin Muslimah Salon & Spa, saya ingin booking jadwal untuk me-time / treatment.")}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-[12px] bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#D4AF37] px-10 font-sans text-sm font-bold text-[#2A063B] shadow-luxe transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Appointment
                </span>
              </a>
            </div>

            <p className="mt-6 font-sans text-xs text-purple-200/60">
              *Jadwal dapat berubah sewaktu-waktu. Konsultasikan kebutuhan Anda secara gratis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}