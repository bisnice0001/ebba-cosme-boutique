"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs").then((mod) => mod.WhyChooseUs));
const CategoryFilter = dynamic(() => import("@/components/CategoryFilter").then((mod) => mod.CategoryFilter));
const TreatmentList = dynamic(() => import("@/components/TreatmentList").then((mod) => mod.TreatmentList));
const HowToBook = dynamic(() => import("@/components/HowToBook").then((mod) => mod.HowToBook));
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
const Visit = dynamic(() => import("@/components/Visit").then((mod) => mod.Visit));
const CTA = dynamic(() => import("@/components/CTA").then((mod) => mod.CTA));
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat").then((mod) => mod.WhatsAppFloat), { ssr: false });
import { SERVICES, type Category } from "@/lib/services";

export default function Page() {
  const [active, setActive] = useState<Category>("Hair");

  const filtered = useMemo(
    () => SERVICES.filter((s) => s.category === active),
    [active],
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />

      <section id="treatments" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-primary">Our Treatments</p>
            <h2 className="mt-4 font-serif text-4xl text-heading md:text-6xl">
              Crafted for every<br /><em className="text-primary">version of you</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-body">
              From a quick keramas to a full Japanese Spa ritual — choose a category and
              tap any treatment to book instantly via WhatsApp.
            </p>
          </motion.div>

          <div className="mt-12">
            <CategoryFilter active={active} onChange={setActive} />
          </div>

          <TreatmentList services={filtered} />
        </div>
      </section>

      <HowToBook />
      <Testimonials />
      <FAQ />
      <Visit />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
