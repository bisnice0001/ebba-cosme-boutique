export type Category =
  | "Paket Bundling"
  | "Hair Cutting & Styling"
  | "Hair Treatment"
  | "Smoothing & Coloring"
  | "Skin & Facial"
  | "Body & Spa"
  | "Lashes & Kewanitaan"
  | "Nails Treatment";

export const CATEGORIES: Category[] = [
  "Paket Bundling",
  "Hair Cutting & Styling",
  "Hair Treatment",
  "Smoothing & Coloring",
  "Skin & Facial",
  "Body & Spa",
  "Lashes & Kewanitaan",
  "Nails Treatment",
];

export interface BundlingPackage {
  id: string;
  name: string;
  tier: string;
  normalPrice: string;
  bundlePrice: string;
  savings: string;
  description: string;
  items: string[];
  benefits: string[];
  popular?: boolean;
}

export interface ServiceItem {
  name: string;
  price: string;
  category: Category;
  group?: string;
  description?: string;
  badge?: string;
  startFrom?: boolean;
}

export const BUNDLING_PACKAGES: BundlingPackage[] = [
  {
    id: "relaxing-touch",
    name: "Hayyin Relaxing Touch",
    tier: "Body Care Package",
    normalPrice: "Rp 170.000",
    bundlePrice: "Rp 155.000",
    savings: "Hemat Rp 15.000",
    description:
      "Perpaduan pijatan relaksasi dan stimulasi titik refleksi untuk mengembalikan keseimbangan tubuh, melancarkan peredaran darah, serta mengurangi ketegangan fisik dan pikiran.",
    items: ["Massage Full Body (60 Menit)", "Reflexiologi Kaki & Telapak"],
    benefits: [
      "Relaksasi Menyeluruh",
      "Melancarkan Sirkulasi Darah",
      "Mengembalikan Kesegaran Tubuh",
    ],
    popular: false,
  },
  {
    id: "smooth-and-glow",
    name: "Hayyin Smooth & Glow",
    tier: "Body Care Package",
    normalPrice: "Rp 220.000",
    bundlePrice: "Rp 205.000",
    savings: "Hemat Rp 15.000",
    description:
      "Perpaduan pijat relaksasi seluruh tubuh, lulur untuk mengangkat sel kulit mati, dan masker tubuh untuk membantu melembapkan serta merawat kelembutan kulit.",
    items: [
      "Hayyin Massage Full Body",
      "Lulur Tubuh (Eksfoliasi Sel Kulit Mati)",
      "Body Mask (Masker Melembapkan)",
    ],
    benefits: [
      "Kulit Lebih Halus & Bersih",
      "Kulit Lebih Lembap & Kenyal",
      "Relaksasi & Hilang Pegal",
    ],
    popular: true,
  },
  {
    id: "essential-package",
    name: "Hayyin Esential Package",
    tier: "Paket Bundling Premium",
    normalPrice: "Rp 480.000",
    bundlePrice: "Rp 470.000",
    savings: "Hemat Rp 10.000",
    description:
      "Perawatan lengkap dari kepala hingga kaki untuk relaksasi, kesegaran, dan tampilan yang lebih bersih terawat secara menyeluruh.",
    items: [
      "Essential Creambath (Rp 75.000)",
      "Facial Basic by Wardah (Rp 100.000)",
      "Hayyin Massage + Lulur (Rp 155.000)",
      "Manicure & Pedicure (Rp 150.000)",
    ],
    benefits: [
      "Rambut Lebih Sehat & Harum",
      "Wajah Lebih Segar & Bersih",
      "Tubuh Lebih Rileks & Ringan",
      "Kuku Tangan & Kaki Terawat",
    ],
    popular: true,
  },
  {
    id: "signature-package",
    name: "Hayyin Signature Package",
    tier: "Paket Bundling Signature",
    normalPrice: "Rp 795.000",
    bundlePrice: "Rp 785.000",
    savings: "Hemat Rp 10.000",
    description:
      "Perawatan lengkap dari ujung rambut hingga perawatan diri untuk relaksasi maksimal, kulit sehat bercahaya, dan tampilan yang lebih fresh glowing.",
    items: [
      "Signature Hair Spa (Rp 120.000)",
      "Korean Facial Treatment (Rp 175.000)",
      "Massage + Lulur + Masker + Sauna (Rp 200.000)",
      "Manicure & Pedicure (Rp 150.000)",
      "Lash Lift Natural (Rp 150.000)",
    ],
    benefits: [
      "Rambut Sehat & Berkilau",
      "Kulit Wajah Cerah & Glowing",
      "Tubuh Halus, Bersih & Detoks",
      "Tampilan Mata Lebih Segar Menawan",
      "Tangan & Kaki Bersih Terawat",
    ],
    popular: true,
  },
  {
    id: "premium-package",
    name: "Hayyin Premium Package",
    tier: "Paket Bundling Eksklusif",
    normalPrice: "Rp 855.000",
    bundlePrice: "Rp 845.000",
    savings: "Hemat Rp 10.000",
    description:
      "Perawatan eksklusif bintang lima dari ujung rambut hingga ujung kaki memadukan teknologi Galvanic Nu Skin, lulur bleaching sauna, dan lash lift tint.",
    items: [
      "Premium Hair Spa (Rp 120.000)",
      "Galvanic Spa by Nu Skin (Rp 250.000)",
      "Massage + Lulur + Bleaching + Body Mask + Sauna (Rp 250.000)",
      "Manicure & Pedicure (Rp 150.000)",
      "Lash Lift Tint (Rp 85.000)",
    ],
    benefits: [
      "Rambut Kuat, Halus & Berkilau",
      "Kulit Wajah Bersih, Cerah & Kencang",
      "Kulit Tubuh Halus, Cerah & Warna Merata",
      "Bulu Mata Lebih Lentik, Tebal & Natural",
      "Kuku Tangan & Kaki Rapi Menawan",
    ],
    popular: true,
  },
];

// Updated based on revisi 1.jpeg
export const JAPANESE_HEAD_SPA = {
  name: "Japanese Head Spa",
  subtitle: "Perawatan Spa Kepala & Rambut Premium",
  price: "Rp 350.000",
  tagline: "Rambut Sehat, Pikiran Tenang, Tubuh Lebih Rileks",
  description:
    "Perpaduan perawatan kulit kepala, pijatan menyeluruh, dan terapi aromaterapi untuk relaksasi tubuh dan pikiran.",
  steps: [
    {
      num: 1,
      title: "Rendaman Kaki",
      desc: "Merendam kaki dengan air hangat & sea salt untuk memberikan relaksasi, mengurangi ketegangan, dan melancarkan sirkulasi darah.",
    },
    {
      num: 2,
      title: "Massage Full Body (60 Menit)",
      desc: "Pijat relaksasi seluruh tubuh selama 60 menit untuk mengendurkan otot-otot, melancarkan peredaran darah, dan memberikan rasa nyaman menyeluruh.",
    },
    {
      num: 3,
      title: "Keramas",
      desc: "Membersihkan rambut dan kulit kepala secara optimal dari kotoran, minyak berlebih, dan sisa produk rambut.",
    },
    {
      num: 4,
      title: "Creambath",
      desc: "Perawatan rambut dengan krim nutrisi khusus untuk menutrisi, melembutkan, memperkuat akar rambut, serta menjaga kesehatan dan kilau alami rambut.",
    },
    {
      num: 5,
      title: "Steam Ozon",
      desc: "Uap hangat ozon membantu membuka kutikula rambut, melancarkan penyerapan nutrisi creambath, dan menyehatkan kulit kepala.",
    },
    {
      num: 6,
      title: "Facial",
      desc: "Perawatan wajah untuk membersihkan, menutrisi, melembapkan, dan membuat kulit wajah terasa lebih segar, bersih, serta bercahaya.",
    },
    {
      num: 7,
      title: "Double Korean Water Healing",
      desc: "Terapi aliran air khas Korea dengan teknologi water healing untuk memberikan rasa rileks yang mendalam, menyegarkan kulit kepala, dan menutrisi hingga ke akar rambut.",
    },
    {
      num: 8,
      title: "Hair Tonic, Serum & Hair Dryer",
      desc: "Perawatan akhir dengan hair tonic & serum untuk menutrisi kulit kepala, menguatkan akar rambut, dan mengurangi kerontokan, dilanjutkan pengeringan (hair dryer) agar rambut lebih rapi, lembut, dan berkilau.",
    },
  ],
  benefits: [
    "Menutrisi Kulit Kepala",
    "Menguatkan Akar Rambut",
    "Mengurangi Kerontokan",
    "Relaksasi Menyeluruh",
  ],
};

export const SERVICES: ServiceItem[] = [
  // ==========================================
  // 1. HAIR CUTTING & STYLING (Updated with revisi 3.jpeg)
  // ==========================================
  {
    category: "Hair Cutting & Styling",
    group: "Potong Rambut (Hair Cutting)",
    name: "Haircut Short",
    price: "Rp 35.000",
    description: "Potongan rambut pendek yang praktis, ringan, dan memberi kesan segar.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Potong Rambut (Hair Cutting)",
    name: "Haircut Medium",
    price: "Rp 37.000",
    description: "Potongan rambut sebahu yang rapi, lembut, dan mudah distyling.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Potong Rambut (Hair Cutting)",
    name: "Haircut Long",
    price: "Rp 40.000",
    description: "Potongan rambut panjang yang tetap rapi, sehat, dan terlihat lebih anggun.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Potong Rambut (Hair Cutting)",
    name: "Bangs Trim (Potong Poni)",
    price: "Rp 15.000",
    description: "Merapikan atau membentuk poni agar tampilan lebih segar dan proporsional.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Catok (Styling)",
    price: "Rp 35.000",
    startFrom: true,
    description: "Menata rambut dengan catok untuk hasil lebih rapi, lurus, dan tahan lama.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Curly (Styling)",
    price: "Rp 45.000",
    startFrom: true,
    description: "Membentuk gelombang rambut yang lembut, bervolume, dan feminin.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Cuci & Catok",
    price: "Rp 50.000",
    startFrom: true,
    description: "Cuci rambut + styling catok dengan hasil rapi dan natural.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Cuci & Catok Curly",
    price: "Rp 60.000",
    startFrom: true,
    description: "Cuci rambut + styling curly untuk hasil gelombang yang lebih bervolume, natural, dan tahan lama.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Cuci & Potong",
    price: "Rp 50.000",
    startFrom: true,
    badge: "Populer",
    description: "Cuci rambut + potong sesuai model yang diinginkan, untuk tampilan lebih rapi, segar, dan stylish.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Cuci & Potong Poni",
    price: "Rp 60.000",
    startFrom: true,
    description: "Cuci rambut + potong poni (sesuai bentuk wajah) untuk tampilan lebih fresh dan proporsional.",
  },
  {
    category: "Hair Cutting & Styling",
    group: "Catok & Styling Rambut",
    name: "Cuci, Potong & Catok",
    price: "Rp 70.000",
    startFrom: true,
    badge: "Paket Combo",
    description: "Cuci rambut + potong + styling catok untuk hasil rapi, modern, dan menawan.",
  },

  // ==========================================
  // 2. HAIR TREATMENT (Updated with revisi 2.jpeg)
  // ==========================================
  {
    category: "Hair Treatment",
    group: "Scalp & Hair Care Treatment",
    name: "Scalp Care Treatment",
    price: "Rp 110.000",
    startFrom: true,
    description: "Perawatan khusus kulit kepala untuk membersihkan kotoran, minyak berlebih, menenangkan kulit kepala, dan menjaga kesehatan akar rambut.",
  },
  {
    category: "Hair Treatment",
    group: "Scalp & Hair Care Treatment",
    name: "Treatment Ketombe (Dandruff Care)",
    price: "Rp 350.000",
    startFrom: true,
    badge: "Intensif",
    description: "Perawatan intensif untuk mengatasi ketombe, menyeimbangkan produksi minyak, meredakan rasa gatal, serta menjaga kulit kepala tetap bersih dan sehat.",
  },
  {
    category: "Hair Treatment",
    group: "Scalp & Hair Care Treatment",
    name: "Keratin Filler Treatment",
    price: "Rp 130.000",
    startFrom: true,
    badge: "Keratin Filler",
    description: "Perawatan keratin dengan teknologi filler untuk mengisi dan memperbaiki struktur rambut yang rusak, membuat rambut lebih kuat, halus, lembut, berkilau, dan mudah diatur.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Spa Treatment",
    name: "Hair Spa Essential",
    price: "Rp 79.000",
    description: "Perawatan intensif kulit kepala dan rambut untuk detoksifikasi, menutrisi, serta menjaga kesehatan rambut.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Spa Treatment",
    name: "Hair Spa Signature (Makarizo)",
    price: "Rp 95.000",
    badge: "Makarizo",
    description: "Perawatan hair spa dengan rangkaian produk Makarizo, memberikan nutrisi, kekuatan, dan kilau alami rambut.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Spa Treatment",
    name: "Hair Spa Luxury (L'Oreal)",
    price: "Rp 120.000",
    badge: "L'Oreal",
    description: "Perawatan hair spa premium dengan L'Oreal, membantu memperbaiki struktur rambut, menutrisi lebih dalam, dan menjaga kelembutan tahan lama.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Mask Treatment",
    name: "Hairmask Essential",
    price: "Rp 65.000",
    description: "Perawatan dasar menutrisi rambut, membantu melembutkan dan menjaga kelembapan rambut.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Mask Treatment",
    name: "Hairmask Signature",
    price: "Rp 85.000",
    description: "Perawatan intensif dengan nutrisi lebih lengkap untuk memperbaiki rambut kering dan rusak ringan.",
  },
  {
    category: "Hair Treatment",
    group: "Hair Mask Treatment",
    name: "Hairmask Keratin",
    price: "Rp 130.000",
    badge: "Keratin Deep Care",
    description: "Perawatan deep care dengan keratin untuk menguatkan, melembutkan, dan membuat rambut lebih sehat, halus, dan berkilau.",
  },
  {
    category: "Hair Treatment",
    group: "Creambath Treatment",
    name: "Creambath Essential",
    price: "Rp 75.000",
    description: "Perawatan relaksasi kulit kepala dengan pijatan lembut dan nutrisi untuk rambut lebih sehat.",
  },
  {
    category: "Hair Treatment",
    group: "Creambath Treatment",
    name: "Creambath Signature (Makarizo)",
    price: "Rp 95.000",
    badge: "Makarizo",
    description: "Perawatan creambath dengan produk Makarizo yang membantu menutrisi, melembutkan, dan menjaga kesehatan rambut.",
  },
  {
    category: "Hair Treatment",
    group: "Creambath Treatment",
    name: "Luxury Creambath (SDB)",
    price: "Rp 120.000",
    badge: "Luxury SDB",
    description: "Perawatan premium untuk menutrisi rambut secara maksimal, memberikan kelembutan, kilau alami, dan kesegaran lebih lama.",
  },

  // ==========================================
  // 3. SMOOTHING & COLORING
  // ==========================================
  {
    category: "Smoothing & Coloring",
    group: "Smoothing & Pelurusan",
    name: "Smoothing Standar",
    price: "Rp 200.000",
    startFrom: true,
    description: "Meluruskan rambut, membuat lebih rapi, halus, dan mudah diatur.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Smoothing & Pelurusan",
    name: "Smoothing Keratin",
    price: "Rp 250.000",
    startFrom: true,
    badge: "Keratin Plus",
    description: "Meluruskan sekaligus menutrisi rambut dengan keratin, untuk hasil lebih halus, sehat, dan berkilau.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Smoothing & Pelurusan",
    name: "Keratin Treatment",
    price: "Rp 200.000",
    startFrom: true,
    description: "Perawatan intensif dengan keratin untuk memperbaiki, menguatkan, dan menghaluskan rambut rusak.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Smoothing & Pelurusan",
    name: "Smoothing Colour",
    price: "Rp 300.000",
    startFrom: true,
    badge: "2-in-1",
    description: "Meluruskan rambut sekaligus memberikan warna sesuai pilihan, untuk tampilan lebih halus, sehat, dan berkilau.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Full No Bleach",
    price: "Rp 200.000",
    startFrom: true,
    description: "Pewarnaan rambut memberikan warna natural, berkilau, dan aman tanpa bleaching.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Full Bleach",
    price: "Rp 250.000",
    startFrom: true,
    description: "Pewarnaan rambut untuk hasil warna lebih terang, tajam, dan maksimal.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Ombre (Bleach Spray)",
    price: "Rp 250.000",
    startFrom: true,
    description: "Gradasi warna lembut (ombre) dengan teknik bleaching spray, menghasilkan warna natural dan modern.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Peek A Boo (Bleach Spray)",
    price: "Rp 250.000",
    startFrom: true,
    description: "Pewarnaan tersembunyi (peek a boo) dengan teknik bleaching spray, memberikan aksen warna stylish.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Highlight",
    price: "Rp 300.000",
    startFrom: true,
    description: "Pewarnaan sebagian helai rambut (highlight) untuk tampilan lebih dimensi, cerah, dan bervolume.",
  },
  {
    category: "Smoothing & Coloring",
    group: "Coloring / Pewarnaan Rambut",
    name: "Colour Balayage",
    price: "Rp 350.000",
    startFrom: true,
    badge: "Trend Balayage",
    description: "Teknik pewarnaan gradasi natural dengan efek terang lembut dari atas ke bawah untuk tampilan yang lebih elegan.",
  },

  // ==========================================
  // 4. SKIN & FACIAL
  // ==========================================
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Facial Basic by Wardah",
    price: "Rp 100.000",
    badge: "Wardah Halal",
    description: "Perawatan wajah dasar menggunakan rangkaian produk Wardah untuk membersihkan, menyegarkan, dan menjaga kelembapan kulit.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Facial Basic SR 12",
    price: "Rp 135.000",
    badge: "SR 12 Herbal",
    description: "Perawatan wajah dasar dengan rangkaian produk SR 12 untuk membersihkan, menutrisi, serta menjaga kesehatan dan kecerahan kulit.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Facial Meso Non Needle + Totok Wajah",
    price: "Rp 230.000",
    badge: "Meso Non-Needle",
    description: "Terapi meso tanpa jarum (electroporation) untuk membantu penyerapan serum lebih dalam, mencerahkan, melembapkan, serta totok wajah relaksasi.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Detox Facial (Satuan)",
    price: "Rp 80.000",
    description: "Detoksifikasi kulit untuk mengangkat racun, minyak berlebih, dan sisa kotoran sehingga kulit lebih bersih, segar, dan sehat.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Facial RF (Radio Frequency)",
    price: "Rp 210.000",
    badge: "Anti-Aging Kolagen",
    description: "Perawatan dengan gelombang RF untuk merangsang produksi kolagen, mengencangkan kulit, menyamarkan garis halus, dan elastisitas kulit.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Korean Glass Skin Facial",
    price: "Rp 200.000",
    badge: "Korean Glow",
    description: "Perawatan intensif untuk mendapatkan kulit yang tampak bersih, halus, lembap, kenyal, dan bercahaya ala 'glass skin' Korea.",
  },
  {
    category: "Skin & Facial",
    group: "Facial Treatment",
    name: "Galvanic by Nu Skin Premium Treatment",
    price: "Rp 250.000",
    badge: "Nu Skin Premium",
    description: "Perawatan intensif teknologi Galvanic Nu Skin membantu penyerapan nutrisi ke lapisan kulit terdalam, kulit lebih cerah, kencang, dan sehat. (Include Totok Wajah + RF)",
  },
  {
    category: "Skin & Facial",
    group: "Face Care & Add-On",
    name: "Totok Wajah",
    price: "Rp 50.000",
    description: "Pijat refleksi wajah untuk melancarkan sirkulasi darah, merelaksasi otot wajah, mengurangi ketegangan, dan wajah tampak segar alami.",
  },
  {
    category: "Skin & Facial",
    group: "Face Care & Add-On",
    name: "Eye Treatment",
    price: "Rp 50.000",
    description: "Perawatan khusus area mata untuk membantu mengurangi mata panda, kantung mata, garis halus, dan membuat area mata terlihat segar.",
  },
  {
    category: "Skin & Facial",
    group: "Face Care & Add-On",
    name: "Bio Light Therapy (Add On)",
    price: "Rp 50.000",
    badge: "Add-On",
    description: "Terapi cahaya LED dengan spektrum tertentu untuk membantu regenerasi kulit, mengurangi jerawat, dan mencerahkan wajah.",
  },
  {
    category: "Skin & Facial",
    group: "Face Care & Add-On",
    name: "RF Tanpa Facial (Add On)",
    price: "Rp 150.000",
    badge: "Add-On",
    description: "Perawatan RF fokus untuk mengencangkan kulit, merangsang kolagen, dan menjaga elastisitas wajah.",
  },

  // ==========================================
  // 5. BODY & SPA
  // ==========================================
  {
    category: "Body & Spa",
    group: "Signature Head Spa",
    name: "Japanese Head Spa",
    price: "Rp 350.000",
    badge: "Signature 8-Tahap",
    description: "Perawatan Spa Kepala & Rambut Premium 8 Tahap: Rendaman Kaki, Massage Full Body 60m, Keramas, Creambath, Steam Ozon, Facial, Double Korean Water Healing, Hair Tonic Serum & Dryer.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Hayyin Massage Full Body (60 menit)",
    price: "Rp 105.000",
    description: "Pijat relaksasi seluruh tubuh 60 menit untuk mengurangi ketegangan, pegal-pegal, dan membuat tubuh lebih rileks.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Hayyin Massage Full Body (120 menit)",
    price: "Rp 195.000",
    description: "Pijat relaksasi mendalam selama 2 jam penuh untuk pemulihan stamina dan kesegaran maksimal.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Hayyin Totok Punggung",
    price: "Rp 150.000",
    description: "Pijat fokus area punggung untuk meredakan pegal, kaku otot, dan melancarkan sirkulasi energi punggung.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Hayyin Topung Massage (Massage + Totok Punggung)",
    price: "Rp 250.000",
    badge: "Terapi Kombinasi",
    description: "Kombinasi pijat relaksasi seluruh tubuh dan totok punggung untuk membantu mengurai sumbatan, melancarkan peredaran darah, serta mendukung pemulihan keluhan.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Reflexiologi",
    price: "Rp 65.000",
    description: "Pijat titik-titik refleksi pada telapak kaki untuk melancarkan peredaran darah, meredakan pegal, dan membuat tubuh relaks.",
  },
  {
    category: "Body & Spa",
    group: "Body Relaxation & Massage",
    name: "Body Mask",
    price: "Rp 65.000",
    description: "Perawatan masker tubuh tanpa pijat untuk menutrisi, melembapkan, dan menjaga elastisitas kulit.",
  },
  {
    category: "Body & Spa",
    group: "Body Scrub & Care",
    name: "Hayyin Lulur (Tanpa Massage)",
    price: "Rp 60.000",
    description: "Eksfoliasi seluruh tubuh untuk mengangkat sel kulit mati, menjadikan kulit lebih halus, cerah, dan bersih.",
  },
  {
    category: "Body & Spa",
    group: "Body Scrub & Care",
    name: "Hayyin Bleaching Body",
    price: "Rp 65.000",
    description: "Perawatan mencerahkan dan meratakan warna kulit tubuh dengan formula lembut dan aman.",
  },
  {
    category: "Body & Spa",
    group: "Body Scrub & Care",
    name: "Hayyin Massage + Lulur",
    price: "Rp 155.000",
    description: "Pijat relaksasi dan lulur untuk mengangkat sel kulit mati, menjadikan kulit lebih halus, segar, dan cerah.",
  },
  {
    category: "Body & Spa",
    group: "Body Scrub & Care",
    name: "Hayyin Massage + Lulur + Sauna",
    price: "Rp 200.000",
    description: "Rangkaian pijat relaksasi, lulur, dan sauna untuk detoksifikasi, mengeluarkan racun keringat, dan menyegarkan tubuh.",
  },
  {
    category: "Body & Spa",
    group: "Body Scrub & Care",
    name: "Hayyin Massage + Lulur + Bleaching + Masker + Sauna",
    price: "Rp 250.000",
    badge: "All-in-One Luxury",
    description: "Perawatan lengkap untuk relaksasi total, mencerahkan, menutrisi, mengangkat sel kulit mati, dan meratakan warna kulit tubuh.",
  },
  {
    category: "Body & Spa",
    group: "Waxing (IPL)",
    name: "Waxing Ketiak",
    price: "Rp 50.000",
    description: "Perawatan penghilangan bulu ketiak dengan hasil lebih bersih, halus, dan tahan lama.",
  },
  {
    category: "Body & Spa",
    group: "Waxing (IPL)",
    name: "Waxing Kaki Setengah",
    price: "Rp 65.000",
    description: "Penghilangan bulu setengah kaki rapi, halus, dan nyaman.",
  },
  {
    category: "Body & Spa",
    group: "Waxing (IPL)",
    name: "Waxing Kaki Full",
    price: "Rp 120.000",
    description: "Penghilangan bulu seluruh kaki dengan hasil bersih, mulus, dan bebas bulu tahan lama.",
  },

  // ==========================================
  // 6. LASHES & KEWANITAAN
  // ==========================================
  {
    category: "Lashes & Kewanitaan",
    group: "Lashes Treatment (Bulu Mata)",
    name: "Lash Lift Basic",
    price: "Rp 70.000",
    description: "Perawatan pelentik bulu mata untuk tampilan lebih lentik, terangkat, dan natural tahan lama.",
  },
  {
    category: "Lashes & Kewanitaan",
    group: "Lashes Treatment (Bulu Mata)",
    name: "Lash Lift Tint",
    price: "Rp 80.000",
    badge: "Tinting",
    description: "Perawatan lash lift dengan pewarnaan (tint) untuk bulu mata yang lebih lentik, jelas, dan tampak lebih tebal.",
  },
  {
    category: "Lashes & Kewanitaan",
    group: "Terapi Relaksasi & Area Kewanitaan",
    name: "Ear Candle",
    price: "Rp 50.000",
    description: "Perawatan telinga metode pembersihan alami dengan lilin khusus, menenangkan pikiran, meredakan rasa penuh dan sakit kepala ringan.",
  },
  {
    category: "Lashes & Kewanitaan",
    group: "Terapi Relaksasi & Area Kewanitaan",
    name: "Ratus Treatment",
    price: "Rp 50.000",
    badge: "Herbal Alami",
    description: "Perawatan tradisional modern dengan uap herbal alami untuk menjaga kebersihan, kesegaran, dan kesehatan area kewanitaan.",
  },
  {
    category: "Lashes & Kewanitaan",
    group: "Terapi Relaksasi & Area Kewanitaan",
    name: "Payudara Treatment (Breast Care)",
    price: "Rp 75.000",
    badge: "Breast Care",
    description: "Perawatan area payudara untuk menjaga kekencangan, elastisitas, melancarkan sirkulasi darah, dan kesehatan kulit payudara.",
  },

  // ==========================================
  // 7. NAILS TREATMENT
  // ==========================================
  {
    category: "Nails Treatment",
    group: "Manicure & Pedicure",
    name: "Manicure",
    price: "Rp 60.000",
    description: "Perawatan kuku dan tangan untuk membersihkan, merapikan, dan menutrisi kuku agar sehat dan cantik.",
  },
  {
    category: "Nails Treatment",
    group: "Manicure & Pedicure",
    name: "Pedicure",
    price: "Rp 90.000",
    description: "Perawatan kuku dan kaki untuk membersihkan, merapikan, dan menjaga kesehatan kuku kaki.",
  },
  {
    category: "Nails Treatment",
    group: "Manicure & Pedicure",
    name: "Manicure & Pedicure",
    price: "Rp 150.000",
    badge: "Paket Hemat",
    description: "Paket perawatan lengkap kuku tangan dan kaki untuk hasil yang lebih bersih, sehat, dan rapi.",
  },
  {
    category: "Nails Treatment",
    group: "Manicure & Pedicure",
    name: "Foot Spa",
    price: "Rp 60.000",
    description: "Perawatan relaksasi kaki dengan rendam air hangat, scrub, pijat lembut, dan pelembap untuk kaki halus dan segar.",
  },
  {
    category: "Nails Treatment",
    group: "Nail Gel (Kuku Asli)",
    name: "Nail Gel Polos",
    price: "Rp 50.000",
    description: "Perawatan kuku dengan gel warna polos yang rapi, mengkilap, dan tahan lama.",
  },
  {
    category: "Nails Treatment",
    group: "Nail Gel (Kuku Asli)",
    name: "Nail Gel Cat Eye",
    price: "Rp 80.000",
    badge: "Cat Eye Magnetic",
    description: "Nail gel dengan efek kilau magnetik (cat eye) yang elegan dan mewah.",
  },
  {
    category: "Nails Treatment",
    group: "Nail Gel (Kuku Asli)",
    name: "Nail Gel French Nail",
    price: "Rp 90.000",
    description: "Nail gel dengan ujung kuku putih (French look) untuk tampilan yang bersih, rapi, dan klasik.",
  },
  {
    category: "Nails Treatment",
    group: "Nail Gel (Kuku Asli)",
    name: "Nail Gel Motif",
    price: "Rp 100.000",
    description: "Nail gel dengan berbagai variasi motif (simple, elegant, atau custom) sesuai keinginan.",
  },
  {
    category: "Nails Treatment",
    group: "Fake Nail & Nail Kaki",
    name: "Fake Nail Polos",
    price: "Rp 90.000",
    description: "Pemasangan kuku palsu (fake nail) dengan warna polos yang rapi dan elegan.",
  },
  {
    category: "Nails Treatment",
    group: "Fake Nail & Nail Kaki",
    name: "Fake Nail Cat Eye",
    price: "Rp 120.000",
    badge: "Cat Eye",
    description: "Pemasangan kuku palsu dengan efek kilau magnetik (cat eye) yang mewah dan stylish.",
  },
  {
    category: "Nails Treatment",
    group: "Fake Nail & Nail Kaki",
    name: "Fake Nail French Nail",
    price: "Rp 150.000",
    description: "Pemasangan kuku palsu dengan ujung putih (French look) untuk tampilan klasik dan bersih.",
  },
  {
    category: "Nails Treatment",
    group: "Fake Nail & Nail Kaki",
    name: "Nail Gel Kaki Polos",
    price: "Rp 100.000",
    startFrom: true,
    description: "Perawatan dan pewarnaan kuku kaki dengan gel warna polos yang rapi, bersih, dan tahan lama.",
  },
  {
    category: "Nails Treatment",
    group: "Fake Nail & Nail Kaki",
    name: "Remove Nail",
    price: "Rp 40.000",
    description: "Proses pelepasan kuku palsu/gel secara aman tanpa merusak kuku asli.",
  },
];

export const WA_NUMBER = "6285273723113";

export function generateWAUrl(serviceNameOrMessage?: string): string {
  if (!serviceNameOrMessage) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      "Halo admin Hayyin Muslimah Salon & Spa, saya ingin konsultasi dan reservasi treatment."
    )}`;
  }
  if (serviceNameOrMessage.startsWith("Halo")) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      serviceNameOrMessage
    )}`;
  }
  const text = `Halo Hayyin Muslimah Salon & Spa, saya tertarik untuk booking: ${serviceNameOrMessage}. Untuk jadwal hari [Tanggal] jam [Jam] apakah tersedia?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
