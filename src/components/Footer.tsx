import { MapPin, Instagram, MessageCircle } from "lucide-react";
import { generateWAUrl } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-28 md:py-16">
      
      {/* SEO Hidden Data untuk Local Business Profile */}
      <div className="sr-only" itemScope itemType="https://schema.org/BeautySalon">
        <span itemProp="name">Ebbacosme Salon & Spa By Hayyin</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">Ruko Kartanegara, Jl. Raya Karangploso kav 22, RT.7/RW.2, Girimoyo, Kec. Karang Ploso</span>, 
          <span itemProp="addressLocality">Karangploso, Kabupaten Malang</span>, 
          <span itemProp="addressRegion">Jawa Timur</span>, 
          <span itemProp="postalCode">65152</span>, 
          <span itemProp="addressCountry">Indonesia</span>
        </div>
        <span itemProp="telephone">WhatsApp Booking Ebbacosme</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#top" className="group flex flex-col leading-none focus:outline-none">
              <span className="font-serif text-2xl text-heading transition-colors group-hover:text-primary">
                Ebbacosme
              </span>
              <span className="mt-1.5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.35em] text-primary">
                by Hayyin
              </span>
            </a>
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-body/90">
              A premium sanctuary for hair, skin, and body. Blending modern care with quiet luxury in Karangploso, Malang.
            </p>
          </div>

          {/* LOCATION COLUMN */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-serif text-lg font-medium text-heading">Visit Us</h3>
            <div className="mt-5 flex flex-col items-center gap-3 md:items-start">
              <div className="flex items-start gap-3 text-sm text-body">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  Ruko Kartanegara, <br />
                  Jl. Raya Karangploso kav 22, RT.7/RW.2,<br />
                  Karangploso, Girimoyo, Kec. Karang Ploso, <br />
                  Kabupaten Malang, Jawa Timur 65152
                </span>
              </div>
            </div>
          </div>

          {/* CONNECT / SOCIAL COLUMN */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="font-serif text-lg font-medium text-heading">Connect</h3>
            <div className="mt-5 flex flex-col gap-4">
              <a 
                href={generateWAUrl("Halo admin Ebbacosme, saya ingin konsultasi/reservasi treatment.")}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 font-sans text-sm text-body transition-colors hover:text-primary focus:outline-none"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-primary/10">
                  <MessageCircle size={16} className="text-primary" />
                </div>
                <span>Book via WhatsApp</span>
              </a>
              <a 
                href="https://www.instagram.com/ebbacosme_byhayyin?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 font-sans text-sm text-body transition-colors hover:text-primary focus:outline-none"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-primary/10">
                  <Instagram size={16} className="text-primary" />
                </div>
                <span>@ebbacosme_byhayyin</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-center md:flex-row md:text-left">
          <p className="font-sans text-xs text-body/70">
            © {new Date().getFullYear()} Ebbacosme Salon & Spa By Hayyin. All rights reserved.
          </p>
          <p className="font-sans text-xs text-body/70">
            Crafted with care in Malang.
          </p>
        </div>
      </div>
    </footer>
  );
}