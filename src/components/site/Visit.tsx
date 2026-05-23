import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { generateWAUrl, WA_NUMBER } from "@/lib/services";

export function Visit() {
  return (
    <section id="visit" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-luxe"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.32em] text-primary">Visit Us</p>
              <h2 className="mt-3 font-serif text-3xl text-heading md:text-4xl">
                Reserve your moment.
              </h2>
              <p className="mt-4 text-body">
                Most treatments require booking ahead — message us on WhatsApp and our team
                will reserve the perfect slot for you.
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex gap-3 text-body">
                  <MapPin size={18} className="mt-0.5 text-primary" />
                  Karangploso, Malang, Jawa Timur
                </li>
                <li className="flex gap-3 text-body">
                  <Clock size={18} className="mt-0.5 text-primary" />
                  Open Daily · 09.00 – 21.00 WIB
                </li>
                <li className="flex gap-3 text-body">
                  <Phone size={18} className="mt-0.5 text-primary" />
                  +{WA_NUMBER}
                </li>
              </ul>

              <a
                href={generateWAUrl("Booking treatment")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] hover:bg-accent"
              >
                Chat us on WhatsApp
              </a>
            </div>

            <div
              className="relative min-h-[280px] bg-cover bg-center md:min-h-full"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
