"use client";

import { motion } from "framer-motion";
import { Leaf, Sparkles, HandHeart } from "lucide-react";
import Image from "next/image";
const PILLARS = [
  {
    icon: Leaf,
    title: "Natural Beauty Rituals",
    body: "Menggunakan Wardah, SR12, NU Skin, dan brand Korea berkualitas untuk kilau kulit dan rambut yang sehat natural.",
  },
  {
    icon: Sparkles,
    title: "Signature Spa Treatments",
    body: "Japanese Hair Spa, Galvanic Skin, dan Korean Detox yang dirancang khusus oleh terapis profesional kami.",
  },
  {
    icon: HandHeart,
    title: "Private Women's Sanctuary",
    body: "Ruang perawatan khusus wanita (muslimah friendly) yang tenang, aman, dan menjaga privasi penuh.",
  },
];

export function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      
      {/* Background Soft Accents */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full opacity-40">
        <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute -right-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      {/* SEO HIDDEN BLOCK */}
      <div className="sr-only">
        <h2>Tentang Ebbacosme Salon & Spa By Hayyin</h2>
        <p>
          Ebbacosme adalah boutique salon dan spa khusus wanita di Karangploso, Malang. 
          Kami menawarkan ruang perawatan privasi tinggi (muslimah friendly) dengan layanan premium seperti 
          Japanese Spa, Galvanic Facial, dan Korean Detox. Menggunakan produk kecantikan berkualitas seperti Wardah, SR12, NU Skin, dan brand Korea, 
          kami memastikan setiap pelanggan mendapatkan perawatan rambut, wajah, dan tubuh terbaik dengan harga yang transparan.
        </p>
      </div>

      {/* 
        === MOBILE HEADER ===
        Bagian ini hanya muncul di HP (md:hidden) dan diletakkan di LUAR grid 
        agar posisinya selalu berada di atas gambar.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-10 flex max-w-7xl flex-col items-start px-6 md:hidden"
      >
        <p className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-6 bg-primary/40"></span>
          The House of Ebba
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-heading">
          Where neighborhood <br />
          meets <em className="font-serif italic text-primary">premium care.</em>
        </h2>
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-24 lg:px-12">
        
        {/* GAMBAR (Urutan ke-2 di HP, Urutan Kiri di Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[400px] md:max-w-none"
        >

          <div className="arch-frame relative z-10 aspect-[3/4] w-full bg-muted shadow-luxe lg:aspect-[4/5]">
            <Image
              src="/about.png"
              alt="Interior Aesthetic Ebbacosme Salon & Spa khusus wanita di Malang"
              className="object-cover transition-transform duration-700 hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Inner luxury border */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/20" />
          </div>
        </motion.div>

        {/* PENJELASAN (Urutan ke-3 di HP, Urutan Kanan di Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col items-start"
        >
          {/* 
            === DESKTOP HEADER ===
            Hanya muncul di layar menengah ke atas (hidden md:flex).
          */}
          <div className="hidden flex-col items-start md:flex">
            <p className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary/40"></span>
              The House of Ebba
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] text-heading md:text-5xl">
              Where neighborhood <br className="hidden lg:block" />
              meets <em className="font-serif italic text-primary">premium care.</em>
            </h2>
          </div>
          
          <p className="mt-0 font-sans text-base leading-relaxed text-body md:mt-6 md:text-lg">
            Tersembunyi di tengah tenangnya Karangploso, <strong className="font-medium text-heading">Ebbacosme</strong> menghadirkan ritual *urban-spa* eksklusif untuk para wanita Malang. Kami merancang ruang estetika ini dengan harga yang transparan, pelayanan tulus, dan privasi penuh.
          </p>

          {/* PILLARS / VALUES */}
          <div className="mt-10 flex flex-col gap-6 md:mt-12 lg:gap-8">
            {PILLARS.map(({ icon: Icon, title, body }, index) => (
              <motion.div 
                key={title} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="group flex items-start gap-5"
              >
                {/* Icon Wrapper with Hover Effect */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/20 transition-colors duration-300 group-hover:bg-primary/10">
                  <Icon size={22} className="relative z-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <div className="pt-1.5">
                  <h3 className="font-serif text-[1.15rem] font-medium text-heading transition-colors group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-body/90 md:text-base">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}