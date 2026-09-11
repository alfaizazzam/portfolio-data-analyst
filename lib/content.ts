// =====================================================================
// SEMUA TEKS & DATA PORTOFOLIO ADA DI FILE INI.
// Edit nilai-nilai di bawah untuk mengganti dengan data kamu sendiri.
// Tidak perlu menyentuh file komponen di folder /components sama sekali.
// =====================================================================

export const profile = {
  name: "Al-Faiz Azzam Aryaputra",
  role: "Data Analyst",
  tagline: "Mengubah data mentah menjadi sebuah insight",
  summary:
    "Fresh Graduate Sistem Informasi dengan minat pada Data Analytics yang memiliki pengalaman dalam menangani proyek analisis data menggunakan Python, Ms. Excel, dan Power BI melalui proyek akademik, studi Independen, serta berbagai pelatihan.",
  // Ganti dengan foto kamu sendiri (ganti file yang direferensikan di
  // path di bawah, rasio potret mis. 800x1000px hasilnya paling rapi).
  // Ada gambar dekoratif (public/images/profile-bg.jpg) yang otomatis
  // terpasang sebagai BACKGROUND di belakang foto ini (diatur di
  // components/Hero.tsx). Kalau foto kamu format PNG dengan bagian
  // transparan (foto orang yang sudah di-cutout), background dekoratif
  // itu akan terlihat di baliknya. Kalau foto kamu JPG/PNG biasa (tanpa
  // transparan), background ini otomatis tertutup penuh dan tidak
  // kelihatan — jadi aman dipasang untuk kedua jenis foto.
  photo: "/images/profile_Faiz.png",
  location: "Surabaya, Jawa Timur",
  email: "alfaizazam@gmail.com",
  phone: "0821-3914-8162",
  resumeUrl: "https://drive.google.com/file/d/1FalU1C5BOeIADZUpOyj2ppnDAGs2r3Ze/view?usp=sharing",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/al-faiz-azzam-aryaputra" },
    { label: "GitHub", url: "https://github.com/alfaizazzam" },
    { label: "Instagram", url: "https://instagram.com/al_faizazm/" },
  ],
};

export const stats = [
  { value: 3, suffix: ".85", label: "IPK" },
  { value: 3, suffix: "", label: "Project Data" },
  { value: 1, suffix: "", label: "Penghargaan" },
  { value: 3, suffix: ".8", label: "Tahun Kuliah" },
];

export type Training = {
  title: string;
  organizer: string;
  period: string;
  description?: string;
  url?: string
};

export const trainings: Training[] = [
  {
    title: "Bootcamp Data Analyst",
    organizer: "KarirNex",
    period: "Sep 2026 - Sep 2026",
    description:
      "Pelatihan intensif dengan Ms. Excel, SQL, Python, dan Power BI dari tahap data mentah hingga menjadi visualisasi dashboard interaktif.",
    url: "https://drive.google.com/file/d/1t_U9A1SFXCeGoer0YxyvepLqo4d-aWGD/view?usp=sharing",
  },
  {
    title: "Short Course of Data Analyst",
    organizer: "Syntaxnesia",
    period: "Mar 2026 - Mar 2026",
    description:
      "Pelatihan sertifikasi Data Analyst yang berfokus pada pengumpulan data hingga penyusunan laporan bisnis menggunakan Ms. Excel, Pivot Table, dan Power BI.",
    url: "https://drive.google.com/file/d/1E_6I2KtwHWoweeHZc0UaINBs65PqwLGt/view?usp=sharing",
  },
  // Contoh menambah pelatihan baru — salin blok di bawah, isi datanya,
  // hapus tanda komentar ini, lalu taruh di dalam array trainings di atas.
  // {
  //   title: "Nama Pelatihan",
  //   organizer: "Nama Penyelenggara",
  //   period: "2026",
  //   description: "Deskripsi singkat pelatihan (opsional).",
  // },
];

export const skillGroups = [
  {
    category: "Bahasa Pemrograman",
    items: ["SQL", "Python"],
  },
  {
    category: "Bahasa",
    items: ["Indonesia (Fasih)", "Inggris (Menengah)"],
  },
  {
    category: "Tools",
    items: ["Microsoft Excel", "Google Sheets", "Google Colab", "Google Big Query", "Power BI"],
  },
  {
    category: "Soft Skill",
    items: ["Analisis Data", "Exploratory Data Analyst (EDA)", "Problem Solving", "Critical Thinking", "Teamwork","Team Leadership"],
  },
];

export type Project = {
  // Dipakai untuk URL halaman detail, contoh: /proyek/dashboard-retensi-pelanggan
  // Isi dengan huruf kecil dan tanda "-" saja, tanpa spasi.
  slug: string;
  title: string;
  period: string;
  tags: string[];
  problem: string;
  approach: string;
  impact: string;
  // Poin-poin hasil/dampak yang lebih rinci, ditampilkan di halaman detail
  // proyek. Opsional — hapus kalau belum ada datanya.
  results?: string[];
  // Link eksternal opsional (mis. dashboard live, repo, atau artikel).
  // Hapus baris ini kalau belum ada linknya.
  link?: string;
  // Path gambar/screenshot proyek. Taruh file di public/images/projects/
  // lalu ubah path-nya. Rasio 4:3 atau 16:10 hasilnya paling rapi.
  image: string;
  // Opsional: gambar tambahan untuk galeri di halaman detail proyek.
  // Taruh file di public/images/projects/ lalu isi array-nya, contoh:
  // gallery: ["/images/projects/customer-retention-2.jpg"]
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "automotive-sales-analytics-dashboard",
    title: "Automotive Sales Dashboard: Performa Penjualan Mobil 2025",
    period: "2026",
    tags: ["Ms. Excel", "Power BI", "Data Visualization"],
    problem:
      "Sebagai Data Analyst pada sebuah perusahaan otomotif, diberikan raw data transaksi penjualan kendaraan skala nasional sepanjang tahun 2025. Management membutuhkan dashboard penjualan interaktif untuk memahami performa penjualan, transaksi, produk, cabang, metode pembayaran, dan status transaksi, serta bisa melakukan analisis mendalam secara mandiri menggunakan filter/slicer tanpa bergantung pada laporan manual.",
    approach:
      "Membangun dashboard interaktif di Power BI dari data transaksi penjualan kendaraan nasional 2025, dilengkapi filter Period, Branch, Category, Brand, Payment Type, dan Status agar seluruh KPI dan visual berubah secara dinamis mengikuti pilihan pengguna. Dashboard mencakup ringkasan KPI dengan perbandingan periode sebelumnya (Total Sales, Total Transaction, Total Quantity, Completion Rate), tren penjualan bulanan, distribusi penjualan per kategori dan cabang, Top 5 produk terlaris, distribusi metode pembayaran, status transaksi (completed/cancelled/refund), serta tabel detail transaksi.",
    impact:
      "Menghasilkan dashboard interaktif yang membantu management memantau performa penjualan mobil secara keseluruhan maupun per cabang tanpa mengolah data mentah secara manual, sekaligus mengungkap risiko konsentrasi produk pada kategori SUV, ketergantungan tinggi pada skema pembiayaan kredit, dan potensi kebocoran pendapatan dari transaksi yang gagal, untuk mendukung pengambilan keputusan management berbasis data.",
    results: [
      "Mencatat performa penjualan mobil tahun 2025 sebesar Rp3,09 triliun dari 10.000 transaksi dengan 10.433 unit terjual dan completion rate 89,66% di mana cabang Malang mencatatkan performa tertinggi (Rp324,67 miliar)",
      "Kategori SUV mendominasi 54% dari total revenue (Rp1,68 triliun), unggul 68% dari MPV di posisi kedua (Rp997,20 miliar) baik dari sisi nilai maupun volume transaksi (4.565 vs 3.915 transaksi) saat dibandingkan menggunakan slicer, dengan seluruh Top 5 Products berasal dari kategori ini, dipimpin Honda CR-V 1.5 Turbo RS",
      "Metode pembayaran Kredit mendominasi 50,4% nilai penjualan (naik jadi 63,5% jika digabung dengan skema Kredit + Trade In), sementara 10,34% transaksi gagal terealisasi (542 cancelled, 492 refund) yang berpotensi jadi kebocoran pendapatan cukup besar mengingat nilai transaksi otomotif per unit yang tinggi",
      "Merumuskan 3 key insights untuk management diantaranya risiko konsentrasi revenue pada kategori SUV, ketergantungan tinggi terhadap skema pembiayaan kredit yang rentan terhadap kebijakan suku bunga eksternal, dan potensi kehilangan pendapatan dari transaksi yang gagal terealisasi yang perlu ditelusuri penyebabnya",
    ],
    image: "/images/projects/dasboard_mobil.png",
    gallery: [
    ],
  },
  {
    slug: "dashboard-penjualan-elektronik",
    title: "Dashboard Penjualan Elektronik: Analisis Performa Kota Surabaya 2025",
    period: "2026",
    tags: ["Ms. Excel", "Pivot Table", "Power BI"],
    problem:
      "Dari data transaksi penjualan elektronik, Surabaya tercatat sebagai kota dengan kinerja penjualan tertinggi di Jawa Timur pada 2025 dan terus meningkat dibanding tahun sebelumnya. Tetapi belum ada analisis mendalam soal pola transaksi, profitabilitas, dan faktor pendorong performa tersebut, sehingga insight-nya belum bisa dimanfaatkan untuk menyusun strategi penjualan yang lebih tepat.",
    approach:
      "Menyaring data transaksi penjualan berisi lebih dari 15 ribu data dalam rentang 2023 hingga 2025 untuk fokus pada Kota Surabaya sebagai studi kasus, diolah menggunakan pivot table di Excel untuk eksplorasi awal, lalu dibangun jadi dashboard interaktif di Power BI yang bisa difilter per tahun, kota, dan provinsi. Dashboard mencakup tren penjualan bulanan, perbandingan performa antar kota, kontribusi tiap kategori & sub kategori produk, segmentasi pelanggan, serta metode pembayaran dan pengiriman.",
    impact:
      "Membangun dashboard interaktif berisi visualisasi performa penjualan Kota Surabaya 2025 yang merupakan kota dengan kontribusi penjualan tertinggi di Jawa Timur. Dashboard ini untuk mendapatkan insight dan menyusun rekomendasi strategi penjualan yang bisa langsung ditindaklanjuti tim bisnis.",
    results: [
      "Surabaya tercatat sebagai kontributor penjualan terbesar di Jawa Timur (66,7% dari total penjualan wilayah), dengan total penjualan Rp7,74 miliar dan profit margin 12,61% sepanjang 2025",
      "Penjualan menunjukkan pola musiman yang konsisten selama 3 tahun terakhir. Terdapat pola penjualan melemah di awal tahun (Januari–Maret) dan melonjak signifikan menjelang akhir tahun, dengan puncaknya di bulan November",
      "Produk seperti Smart TV, smartphone dan motor listrik jadi pendorong utama penjualan dengan kontribusi yang tersebar merata antar produk unggulan, sehingga penjualan tidak bergantung pada satu produk saja",
      "Memberikan rekomendasi bisnis berbasis hasil temuan diantaranya agresif promosi produk unggulan menjelang akhir tahun untuk memanfaatkan puncak musiman, diskon di awal tahun untuk menahan penurunan permintaan, dan penguatan segmen Corporate lewat penawaran khusus karena jadi penyumbang transaksi terbesar",
    ],
    image: "/images/projects/dashboard_penjualan_1.png",
    gallery: [
      "/images/projects/dashboard_penjualan_2.png",
      "/images/projects/dashboard_penjualan_3.png",
      "/images/projects/dashboard_penjualan_4.png",
      "/images/projects/dashboard_penjualan_5.png",
    ],
  },
  {
    slug: "kesan-kedai-kopi",
    title: "KESAN Kedai Kopi : Sistem Klasifikasi Emosi dan Sentimen Berbasis Aspek Ulasan (Skripsi)",
    period: "2026",
    tags: ["Python", "Google Colab", "NLP", "IndoBERT", "IndoRoBERTa", "Flask"],
    problem:
      "Ulasan pengguna pada aplikasi kedai kopi kerap membahas lebih dari satu aspek layanan sekaligus dan memuat lebih dari satu emosi dalam satu teks, kondisi ini tidak bisa ditangani analisis sentimen konvensional yang hanya memberi satu label per ulasan, sehingga opini dan emosi pelanggan terhadap tiap aspek layanan belum bisa dipahami secara lebih jelas",
    approach:
      "Menggunakan kerangka CRISP-DM dengan lebih dari 15.000 ulasan dari lima aplikasi kedai kopi terpopuler di Indonesia (Kopi Kenangan, Fore Coffee, Starbucks Indonesia, Jiwa+, TOMORO COFFEE) di Google Play Store periode Juli 2022–Oktober 2025. Aspek diekstraksi dari teks menggunakan Latent Dirichlet Allocation (LDA) dan diinterpretasikan menjadi tiga aspek: Order and Fulfillment Process, Product Quality and Outlet Experience, dan Customer Digital Experience. Label emosi dan sentimen berbasis NRC Emotion Lexicon  per aspek ditentukan lewat majority voting dari sembilan anotator, dengan Krippendorff's Alpha untuk mengukur kesepakatan antar anotator. Model IndoBERT dan IndoRoBERTa kemudian dilatih dan dibandingkan untuk klasifikasi emosi multi-label dan sentimen berbasis aspek, dievaluasi dengan k-fold cross validation dan data uji, lengkap dengan class weighting/focal loss untuk menangani label yang tidak seimbang. Model terbaik diimplementasikan ke sistem berbasis web menggunakan Flask.",
    impact:
      "Menghasilkan sistem web KESAN (Klasifikasi Emosi dan Sentimen berbasis Aspek ulasan) yang dapat membantu pelaku usaha kedai kopi memahami opini dan emosi pelanggan secara lebih jelas per aspek layanan dilengkapi dengan visualisasi",
    results: [
      "Ekstraksi topik dengan LDA menghasilkan 3 aspek utama dengan coherence score 0,4612 diantaranya Order and Fulfillment Process, Product Quality and Outlet Experience, dan Customer Digital Experience",
      "Model IndoBERT dengan class weighting dan pembagian data 70:30 terpilih sebagai model terbaik dengan macro F1-score 0,7334 (precision 0,7254, recall 0,7860, akurasi 0,6096), unggul tipis dibanding IndoRoBERTa (F1-score 0,7289)",
      "Model terbaik diimplementasikan menjadi sistem web berbasis Flask dengan 4 fitur utama: prediksi satu ulasan (teks), prediksi file (upload CSV), dashboard analisis visual per aspek, dan halaman informasi sistem",
    ],
    image: "/images/projects/kesan_1.png",
    gallery: [
      "/images/projects/kesan_2.png",
      "/images/projects/kesan_3.png",
      "/images/projects/kesan_4.png",
      "/images/projects/kesan_5.png",
    ],
  },
  {
    slug: "suara-jatim-analisis-sentimen",
    title: "Suara Jatim : Analisis Sentimen Pilkada Jatim 2024",
    period: "2024",
    tags: ["Python", "Google Colab", "Web Scraping", "NLP", "Sentiment Analysis"],
    problem:
      "Opini publik soal Pilkada Jawa Timur 2024 tersebar luas di ratusan berita daring dan media sosial, tapi belum ada cara sistematis untuk membaca kecenderungan sentimen masyarakat terhadap tiap pasangan calon dari data sebanyak itu.",
    approach:
      "Mengumpulkan lebih dari 8,000 data seputar Pilkada Jatim 2024 dari berita daring (scraping menggunakan Selenium & BeautifulSoup) dan Twitter (Tweepy), lalu dilakukan data cleaning, preprocessing, dan exploratory data analysis serta label per pasangan calon dengan data bersih lebih dari 2.000 data. Proses dilanjutkan lewat tokenizing, stopword removal, dan stemming menggunakan Sastrawi, kemudian dianalisis sentimennya (positif/negatif/netral) menggunakan VADER yang ditambah leksikon Bahasa Indonesia. Untuk klasifikasi otomatis, data yang tidak seimbang ditangani dengan SMOTE sebelum dilatih ke model Random Forest yang telah di-tuning.",
    impact:
      "Menghasilkan gambaran tren dan sentimen pemberitaan tiap pasangan calon selama masa Pilkada 2024 yang didominasi sentimen netral dengan lonjakan tajam menjelang hari pemilihan.",
    results: [
      "Mengumpulkan dan melabeli otomatis lebih dari 8.000 data berita daring dan cuitan Twitter terkait Pilkada Jatim 2024 yang dikelompokkan per pasangan calon",
      "Sentimen publik didominasi netral (70,6%), diikuti positif (27,6%) dan negatif hanya 1,75% yang menunjukkan pemberitaan lebih banyak bersifat informatif ketimbang provokatif, dengan lonjakan volume tertinggi di bulan November menjelang hari pemilihan",
      "Satu pasangan calon menguasai lebih dari separuh (53,9%) total pemberitaan dan tetap unggul di semua kategori sentimen, menunjukkan eksposur media yang jauh lebih besar dibanding dua paslon lainnya",
    ],
    image: "/images/projects/suara_jatim_1.png",
    gallery: [
      "/images/projects/suara_jatim_2.png",
      "/images/projects/suara_jatim_3.png",
      "/images/projects/suara_jatim_4.png",
      "/images/projects/suara_jatim_5.png",
    ],
  },
  // Contoh cara menambah proyek ke-4 — salin blok di bawah, isi datanya,
  // hapus tanda komentar ini, lalu taruh di dalam array projects di atas.
  // {
  //   slug: "nama-proyek-keempat",
  //   title: "Judul Proyek Keempat",
  //   period: "2026",
  //   tags: ["Tool A", "Tool B"],
  //   problem: "Deskripsi masalah yang dihadapi.",
  //   approach: "Deskripsi pendekatan/metode yang dipakai.",
  //   impact: "Deskripsi dampak singkat (ditampilkan di kartu ringkasan).",
  //   results: ["Poin hasil 1", "Poin hasil 2"],
  //   image: "/images/projects/nama-file-gambar.jpg",
  // },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst With Artificial Intelligence (AI) Expertise",
    company: "MIKTI",
    period: "Sep 2024 — Des 2024",
    location: "Internship - Studi Independen MSIB Program",
    bullets: [
      "Merumuskan problem statement dan objective terukur melalui analisis root cause, kemudian menyusun hypothesis prioritization beserta rekomendasi untuk mendukung pengambilan keputusan berbasis data.",
      "Melakukan data wrangling dan data cleansing menggunakan Python, dilanjutkan exploratory data analysis melalui visualisasi untuk mengidentifikasi pola dan korelasi antar variabel.",
      "Memimpin tim beranggotakan 6 orang dalam capstone project, membagi tugas sesuai kompetensi masing-masing anggota mulai dari pengumpulan data hingga presentasi insight kepada mentor program.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  // Opsional: tampil sebagai baris tambahan di bawah periode, mis. IPK.
  gpa?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Sarjana Sistem Informasi",
    institution: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    period: "2022 — 2026",
    gpa: "IPK 3.85/4.00",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  // Opsional: link ke sertifikat asli supaya bisa dilihat orang lain.
  // Bisa berupa link verifikasi (mis. Credly), atau file PDF/gambar yang
  // kamu taruh sendiri di public/certificates/nama-file.pdf lalu isi
  // url dengan "/certificates/nama-file.pdf". Hapus baris url kalau
  // belum ada link untuk sertifikat tersebut.
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Data Analyst",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    url: "https://drive.google.com/file/d/1di5iU8W7H206mSNCjja9RROftF-A2tkE/view?usp=sharing",
  },
  {
    name: "English Proficiency Test - 450",
    issuer: "UPA Bahasa UPN 'Veteran' Jawa Timur",
    year: "2026",
    url: "https://drive.google.com/file/d/1og60ZBY1ri87M8oPaJ91F_6VSZ97PCuC/view?usp=sharing",
  },
    {
    name: "Best Student - Studi Independen MIKTI Batch 7",
    issuer: "MIKTI",
    year: "2024",
    url: "https://drive.google.com/file/d/1nMy7fzuZyLhApjqcpa7FgO1cAm4V-7oM/view?usp=sharing",
  },
];
