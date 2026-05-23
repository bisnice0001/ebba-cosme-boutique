import { motion } from "framer-motion";
import { Leaf, Sparkles, HandHeart } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    title: "Natural Ritual",
    body: "Wardah, SR12 and clean-beauty staples for a glow that lasts.",
  },
  {
    icon: Sparkles,
    title: "Signature Spa",
    body: "Japanese Spa, Galvanic Skin, and Korean Detox crafted in-house.",
  },
  {
    icon: HandHeart,
    title: "Quiet Care",
    body: "A private women's area where you can simply exhale.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="arch-frame aspect-[3/4] w-full shadow-luxe">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
              alt="Soft, feminine interior of Ebba Cosme salon"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-primary">The House of Ebba</p>
          <h2 className="mt-4 font-serif text-4xl text-heading md:text-5xl">
            Where neighborhood<br />meets <em className="text-primary">haute soin</em>.
          </h2>
          <p className="mt-5 max-w-lg text-body">
            Tucked into Karangploso, our boutique salon brings urban-spa rituals to the
            women of Malang — transparent pricing, intentional service, and arched mirrors
            that catch the afternoon light.
          </p>

          <div className="mt-10 space-y-5">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/40 text-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-medium text-heading">{title}</p>
                  <p className="mt-0.5 text-sm text-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
