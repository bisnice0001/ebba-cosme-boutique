import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CategoryFilter } from "@/components/site/CategoryFilter";
import { TreatmentList } from "@/components/site/TreatmentList";
import { About } from "@/components/site/About";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SERVICES, type Category } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebba Cosme by Hayyin · Luxury Salon in Karangploso, Malang" },
      {
        name: "description",
        content:
          "Premium feminine salon in Karangploso, Malang. Hair, smoothing, coloring, skin, body, nails, and women's-area treatments — book instantly via WhatsApp.",
      },
      { property: "og:title", content: "Ebba Cosme by Hayyin · Luxury Salon" },
      {
        property: "og:description",
        content: "A quiet ritual of becoming. Discover signature treatments at Ebba Cosme by Hayyin.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Category>("Hair");

  const filtered = useMemo(
    () => SERVICES.filter((s) => s.category === active),
    [active],
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

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

      <About />
      <Visit />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
