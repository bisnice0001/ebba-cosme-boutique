"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Apakah Ebbacosme Salon khusus untuk wanita (Muslimah friendly)?",
    answer: "Ya, Ebbacosme Salon & Spa memiliki area perawatan yang 100% dikhususkan dan tertutup untuk wanita. Kami menjamin privasi penuh (muslimah friendly), sehingga Anda bisa me-time dengan tenang dan nyaman.",
  },
  {
    question: "Bagaimana cara reservasi treatment di salon ini?",
    answer: "Sangat disarankan untuk melakukan booking jadwal terlebih dahulu via WhatsApp. Hal ini memastikan Anda mendapatkan slot untuk hair treatment, spa, atau facial dari terapis kami tanpa perlu mengantre lama di lokasi.",
  },
  {
    question: "Apakah produk yang digunakan aman dan halal?",
    answer: "Tentu. Kami hanya menggunakan produk premium, bersertifikat BPOM, dan halal seperti Wardah, SR12, NU Skin, dan brand Korea yang terjamin kehalalan serta kebaikannya yang disesuaikan secara khusus dengan kondisi kulit dan rambut Anda.",
  },
  {
    question: "Di mana lokasi detail salon Ebbacosme?",
    answer: "Sanctuary kami berlokasi di Ruko Kartanegara, Jl. Raya Karangploso kav 22, RT.7/RW.2, Karangploso, Girimoyo, Kec. Karang Ploso, Kabupaten Malang, Jawa Timur 65152. Detail alamat lengkap beserta titik presisi Google Maps juga akan langsung kami kirimkan sesaat setelah Anda melakukan konfirmasi booking via WhatsApp.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate Schema Markup untuk SEO Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-24 md:py-32">
      
      {/* Inject SEO Schema ke dalam DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-6 bg-primary/40"></span>
            Got Questions?
            <span className="h-px w-6 bg-primary/40"></span>
          </p>
          <h2 className="mt-4 font-serif text-3xl text-heading md:text-5xl">
            Frequently Asked <em className="font-serif italic text-primary">Questions</em>
          </h2>
        </motion.div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden rounded-[16px] border bg-card shadow-soft transition-colors duration-500 ${
                  isOpen ? "border-primary/40" : "border-border hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[1.1rem] font-medium leading-snug text-heading pr-4 md:text-lg">
                    {faq.question}
                  </span>
                  
                  {/* Animasi Plus ke X yang memberikan kesan Luxury/Editorial */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                      isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border text-primary"
                    }`}
                  >
                    <Plus size={18} strokeWidth={2} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 pt-2 font-sans text-sm leading-relaxed text-body/90 md:px-8 md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}