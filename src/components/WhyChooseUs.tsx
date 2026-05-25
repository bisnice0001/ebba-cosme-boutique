"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Premium & Halal Products",
    description: "Kami secara eksklusif menggunakan produk berkualitas tinggi, tersertifikasi, dan aman seperti Wardah, SR12, NU Skin, dan brand Korea yang terjamin kehalalan serta kebaikannya untuk memastikan kilau alami dan kesehatan kulit serta rambut Anda.",
  },
  {
    icon: HeartHandshake,
    title: "Trained Professionals",
    description: "Dari hair treatment premium, pijat relaksasi, hingga perawatan tubuh, tim terapis profesional kami didedikasikan untuk memberikan hasil terbaik yang disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: Sparkles,
    title: "Muslimah Friendly & Private",
    description: "Sebuah ruang sanctuary khusus wanita. Didesain dengan estetika arch yang menenangkan dan jaminan privasi penuh agar Anda bisa benar-benar bersantai.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      
      {/* Soft Background Flourishes */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[600px] w-[1000px] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      {/* SEO HIDDEN BLOCK */}
      <div className="sr-only">
        <h2>Keunggulan Ebbacosme Salon & Spa Karangploso</h2>
        <p>
          Mengapa memilih Ebbacosme Salon di Malang? Kami adalah salon wanita dan muslimah friendly terbaik yang menawarkan privasi penuh. 
          Menggunakan produk premium dan halal untuk hair treatment, smoothing, pewarnaan rambut, dan facial. 
          Ditangani langsung oleh kapster dan terapis spa berpengalaman di area Malang, Batu, dan sekitarnya. 
          Kami menjamin kenyamanan, keamanan, dan hasil yang memuaskan dengan harga terjangkau.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-6 bg-primary/40"></span>
            Why Ebbacosme
            <span className="h-px w-6 bg-primary/40"></span>
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-heading md:text-5xl">
            A sanctuary designed <br className="hidden sm:block" />
            around <em className="font-serif italic text-primary">you.</em>
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-body md:text-lg">
            Lebih dari sekadar salon kecantikan. Kami memadukan kemewahan, kenyamanan lokal, dan keahlian untuk membuat Anda merasa luar biasa dari luar dan dalam.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center rounded-[16px] border border-border bg-card/50 p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-card hover:shadow-luxe"
              >
                {/* Decorative top border on hover */}
                <div className="absolute inset-x-0 top-0 h-1 w-full scale-x-0 rounded-t-[16px] bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-xl font-medium text-heading">
                  {reason.title}
                </h3>
                
                <p className="mt-4 font-sans text-sm leading-relaxed text-body/90 md:text-base">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}