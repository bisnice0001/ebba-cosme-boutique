export type Service = {
  category: Category;
  name: string;
  price: string;
  group?: string;
  badge?: "Natural" | "Best Seller";
};

export type Category =
  | "Hair"
  | "Smoothing"
  | "Coloring"
  | "Skin"
  | "Body"
  | "Lashes"
  | "Nails"
  | "Women Area";

export const CATEGORIES: Category[] = [
  "Hair",
  "Smoothing",
  "Coloring",
  "Skin",
  "Body",
  "Lashes",
  "Nails",
  "Women Area",
];

export const SERVICES: Service[] = [
  // HAIR — Basic
  { category: "Hair", group: "Basic Hair Service", name: "Keramas", price: "25K – 35K" },
  { category: "Hair", group: "Basic Hair Service", name: "Keramas Potong", price: "Start from 35K" },
  { category: "Hair", group: "Basic Hair Service", name: "Keramas Cuci Potong Catok", price: "55K – 80K", badge: "Best Seller" },
  { category: "Hair", group: "Basic Hair Service", name: "Catok", price: "20K – 35K" },
  // Cuci Potong Catok Masuk
  { category: "Hair", group: "Cuci Potong Catok Masuk", name: "Pendek", price: "35K – 40K" },
  { category: "Hair", group: "Cuci Potong Catok Masuk", name: "Sedang", price: "40K – 50K" },
  { category: "Hair", group: "Cuci Potong Catok Masuk", name: "Panjang", price: "50K – 80K" },
  // Cuci Potong Curly
  { category: "Hair", group: "Cuci Potong Curly", name: "Pendek", price: "40K – 45K" },
  { category: "Hair", group: "Cuci Potong Curly", name: "Sedang", price: "45K – 50K" },
  { category: "Hair", group: "Cuci Potong Curly", name: "Panjang", price: "50K – 80K" },
  // Hair Treatment Lainnya
  { category: "Hair", group: "Hair Treatment Lainnya", name: "Creambath Makarizo", price: "Start from 80K" },
  { category: "Hair", group: "Hair Treatment Lainnya", name: "Hairmask Makarizo", price: "Start from 75K" },
  { category: "Hair", group: "Hair Treatment Lainnya", name: "Creambath Aroma", price: "Start from 70K" },
  { category: "Hair", group: "Hair Treatment Lainnya", name: "Treatment Ketombe", price: "80K – 150K" },
  { category: "Hair", group: "Hair Treatment Lainnya", name: "Treatment Kutu", price: "85K – 180K" },

  // SMOOTHING
  { category: "Smoothing", group: "Smoothing Keratin Matrix", name: "Pendek", price: "250K – 350K" },
  { category: "Smoothing", group: "Smoothing Keratin Matrix", name: "Sedang", price: "350K – 450K", badge: "Best Seller" },
  { category: "Smoothing", group: "Smoothing Keratin Matrix", name: "Panjang", price: "450K – 600K" },
  { category: "Smoothing", group: "Keratin Treatment", name: "Pendek", price: "300K – 400K" },
  { category: "Smoothing", group: "Keratin Treatment", name: "Sedang", price: "400K – 500K" },
  { category: "Smoothing", group: "Keratin Treatment", name: "Panjang", price: "500K – 700K" },

  // COLORING
  { category: "Coloring", group: "Coloring", name: "Colour Full No Bleach", price: "Start from 200K" },
  { category: "Coloring", group: "Coloring", name: "Colour Full Bleach", price: "Start from 250K" },
  { category: "Coloring", group: "Coloring", name: "Colour Ombre (Bleach Spruh)", price: "Start from 250K" },
  { category: "Coloring", group: "Coloring", name: "Colour Peek A Boo (Bleach Spruh)", price: "Start from 250K" },
  { category: "Coloring", group: "Coloring", name: "Colour Highlight", price: "Start from 300K" },
  { category: "Coloring", group: "Coloring", name: "Colour Balayage", price: "Start from 350K", badge: "Best Seller" },

  // SKIN
  { category: "Skin", name: "Facial Natural Wardah", price: "100K", badge: "Natural" },
  { category: "Skin", name: "Facial Natural Glow SR12", price: "130K", badge: "Natural" },
  { category: "Skin", name: "Facial Detox Soda Korea", price: "150K" },
  { category: "Skin", name: "Galvanic Spa + Totok Wajah", price: "250K", badge: "Best Seller" },
  { category: "Skin", name: "Meso Diamond Skin", price: "150K" },
  { category: "Skin", name: "Facial Hydrapeel", price: "110K" },
  { category: "Skin", name: "Facial Oxigenio", price: "200K" },
  { category: "Skin", name: "Eye Treatment", price: "75K" },
  { category: "Skin", name: "Lip Treatment", price: "50K" },
  { category: "Skin", name: "Waxing Ketiak + Laser", price: "85K" },
  { category: "Skin", name: "Waxing Kaki + Laser", price: "100K" },
  { category: "Skin", name: "Ear Candle", price: "50K" },

  // BODY — Slimming
  { category: "Body", group: "Body Slimming", name: "Area Perut", price: "250K" },
  { category: "Body", group: "Body Slimming", name: "Area Tangan Kanan/Kiri", price: "125K" },
  { category: "Body", group: "Body Slimming", name: "Area Paha Luar/Dalam", price: "125K" },
  { category: "Body", group: "Body Slimming", name: "Area Betis", price: "100K" },
  // Body Treatment Lainnya
  { category: "Body", group: "Body Treatment", name: "Massage Full Body", price: "100K" },
  { category: "Body", group: "Body Treatment", name: "Massage + Lulur", price: "150K" },
  { category: "Body", group: "Body Treatment", name: "Massage + Lulur + Sauna", price: "190K", badge: "Best Seller" },
  { category: "Body", group: "Body Treatment", name: "Massage + Lulur + Bleaching + Sauna", price: "210K" },
  { category: "Body", group: "Body Treatment", name: "Massage + Masker", price: "135K" },
  { category: "Body", group: "Body Treatment", name: "Totok Punggung + Infra Red", price: "130K" },
  { category: "Body", group: "Body Treatment", name: "Refleksi", price: "80K" },
  { category: "Body", group: "Body Treatment", name: "Japanese Spa", price: "250K", badge: "Best Seller" },

  // LASHES
  { category: "Lashes", name: "Lash Lift Basic", price: "70K" },
  { category: "Lashes", name: "Lash Lift Tint", price: "80K" },

  // NAILS — Basic
  { category: "Nails", group: "Basic Nails", name: "Manicure", price: "60K" },
  { category: "Nails", group: "Basic Nails", name: "Pedicure", price: "90K" },
  { category: "Nails", group: "Basic Nails", name: "Manicure & Pedicure", price: "150K", badge: "Best Seller" },
  { category: "Nails", group: "Basic Nails", name: "Foot Spa", price: "60K" },
  // Gel & Fake
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Nail Gel Polos", price: "50K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Nail Gel Cat Eye", price: "80K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Nail Gel French Nail", price: "90K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Nail Gel Motif", price: "from 100K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Fake Nail Polos", price: "90K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Fake Nail Cat Eye", price: "120K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Fake Nail French Nail", price: "150K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Nail Gel Kaki Polos", price: "from 100K" },
  { category: "Nails", group: "Nail Gel & Fake Nail", name: "Remove Nail", price: "40K" },

  // WOMEN AREA
  { category: "Women Area", name: "Ratus", price: "50K" },
  { category: "Women Area", name: "Payudara Treatment", price: "75K" },
];

export const WA_NUMBER = "6285273723113";

export function generateWAUrl(serviceName: string): string {
  const text = `Halo Ebba Cosme, saya tertarik untuk booking treatment: ${serviceName}. Untuk jadwal hari [Tanggal] jam [Jam] apakah tersedia?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
