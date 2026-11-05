// =====================================================================
// SEMUA TEKS & DATA PORTOFOLIO ADA DI FILE INI.
// Edit nilai-nilai di bawah untuk mengganti dengan data kamu sendiri.
// Tidak perlu menyentuh file komponen di folder /components sama sekali.
// =====================================================================

export const profile = {
  name: "Al-Faiz Azzam Aryaputra",
  role: "Data Analytics",
  tagline: "Mengubah data mentah menjadi sebuah insight",
  summary:
    "Fresh Graduate Sistem Informasi UPN “Veteran” Jawa Timur dengan minat pada Data Analytics yang memiliki pengalaman dalam menangani proyek analisis data menggunakan Ms. Excel, SQL, dan Python, serta divisualisasikan menggunakan Power BI, Tableau, dan Data Studio (Looker Studio) melalui proyek akademik, studi Independen, serta berbagai pelatihan.",
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
  phone: "082139148162",
  resumeUrl: "https://drive.google.com/file/d/1iZyGd0TpT3mzTJD7LaY1uKQrZAV6zsRH/view?usp=sharing",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/al-faiz-azzam-aryaputra" },
    { label: "GitHub", url: "https://github.com/alfaizazzam" },
    { label: "Instagram", url: "https://instagram.com/al_faizazm/" },
  ],
};

export const stats = [
  { value: 3, suffix: ".85", label: "IPK" },
  { value: 3, suffix: ".8", label: "Tahun Kuliah" },
  { value: 9, suffix: "", label: "Project Data" },
  { value: 2, suffix: "", label: "Surat Rekomendasi" },
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
    title: "Exclusive Bootcamp Data Visualization : Power BI, Tableau, and Google Looker Studio",
    organizer: "KarirNex",
    period: "Okt 2026",
    description:
      "Pelatihan visualisasi data dan business intelligence yang meliputi dashboard KPI di Power BI, analisis dan data storytelling di Tableau, serta pelaporan interaktif di Google Looker Studio dengan studi kasus data penjualan FMCG 2025.",
    url: "https://drive.google.com/file/d/14jPUltjQIG7BkBIqhEVaUa6Av83_Nqh3/view?usp=sharing",
  },
  {
    title: "Membuat Data Dashboard dengan Power BI",
    organizer: "ITBOX",
    period: "Sep 2026 - Okt 2026",
    description:
      "Pelatihan pembuatan visualisasi di Power BI yang dilanjutkan dengan pengenalan bahasa R, pembersihan data, dan machine learning dasar di R Studio (train-test, logistic regression, K-Means clustering, time series), serta fundamental keamanan data.",
    url: "https://drive.google.com/file/d/14HDYfTey9fGoXHWE4s9rI0IvvUyfG4iy/view?usp=drive_link",
  },
  {
    title: "Basic Pengolahan Data dengan SQL & Excel",
    organizer: "ITBOX",
    period: "Sep 2026 - Okt 2026",
    description:
      "Pelatihan pengolahan data dengan SQL dan Excel yang meliputi uji statistik (T-Test, regresi, korelasi), Pivot Table, serta query SQL (fungsi agregat, JOIN, UNION).",
    url: "https://drive.google.com/file/d/1oM_JoZYAL7aS7rgAKgetmdnVghnZhfYd/view?usp=sharing",
  },
  {
    title: "Short Class Power BI Dashboard Specialist",
    organizer: "KarirNex",
    period: "Sep 2026",
    description:
      "Pelatihan Power BI yang meliputi Power Query, data model, DAX, dan desain dashboard di Power BI dengan studi kasus data penjualan bioskop.",
    url: "https://drive.google.com/file/d/1HFqokmen9QwNVt3-JR2CSR0kob-FQbq2/view?usp=drive_link",
  },
  {
    title: "Pelatihan Dasar Admin Perkantoran: Menguasai Excel untuk Mengelola Inventaris dan Fasilitas Kantor",
    organizer: "Talenesia",
    period: "Sep 2026",
    description:
      "Pelatihan Excel untuk admin perkantoran (SUM, AVERAGE, IF, SUMIF, VLOOKUP, HLOOKUP) dengan studi kasus pengelolaan stok inventaris, fasilitas, dan masa kedaluwarsa barang.",
    url: "https://drive.google.com/file/d/1I3qMgoEB36-7iJN6JJZVTchMBBkYJ4lw/view?usp=sharing",
  },
  {
    title: "Bootcamp Kilat (BooKil) Microsoft Excel",
    organizer: "Harisenin.com",
    period: "Sep 2026",
    description:
      "Pelatihan rumus logika dan Lookup Excel (IF, COUNTIF, VLOOKUP, XLOOKUP) untuk menyusun kondisi bertingkat serta mengategorikan data secara otomatis berdasarkan nilai ambang batas.",
    url: "https://drive.google.com/file/d/1n-QAUPhU_P4tRhevxNc9nd2HAjOw8NCA/view?usp=sharing",
  },
  {
    title: "Master Lookup Microsoft Excel",
    organizer: "AmanExcel",
    period: "Sep 2026",
    description:
      "Pelatihan penerapan fungsi lookup dan validasi data (VLOOKUP, HLOOKUP, INDEX+MATCH, XLOOKUP, IF, IFERROR) di Excel untuk pengolahan data.",
    url: "https://drive.google.com/file/d/13SlTv1iALU-lz7RSWjWIKSlbC9qVFmef/view?usp=sharing",
  },
  {
    title: "Microsoft Excel Basic Formula",
    organizer: "MySkill",
    period: "Sep 2026",
    description:
      "Pelatihan formatting data serta rumus Excel (SUM, AVERAGE, PROPER, VLOOKUP, CONCAT) dan teknik filtering-sorting untuk mengolah, mencocokkan, dan merapikan data secara lebih cepat dan akurat.",
    url: "https://drive.google.com/file/d/1YHNA9-pmxpMdpwI98SQj3crmXnAQAZqs/view?usp=sharing",
  },
  {
    title: "Bootcamp Data Analyst",
    organizer: "KarirNex",
    period: "Sep 2026",
    description:
      "Pelatihan intensif dengan Ms. Excel, SQL, Python, dan Power BI dari tahap data mentah hingga menjadi visualisasi dashboard interaktif.",
    url: "https://drive.google.com/file/d/1t_U9A1SFXCeGoer0YxyvepLqo4d-aWGD/view?usp=sharing",
  },
  {
    title: "Short Course of Data Analyst",
    organizer: "Syntaxnesia",
    period: "Mar 2026",
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
    items: ["SQL", "Python", "R"],
  },
  {
    category: "Bahasa",
    items: ["Indonesia (Fasih)", "Inggris (Menengah)"],
  },
  {
    category: "Tools",
    items: ["Microsoft Excel (PivotTable, XLOOKUP, VLOOKUP, HLOOKUP, INDEX+MATCH, SUM, AVERAGE, MAX, MIN, IF, SUMIF, COUNTIF)", "Google Sheets", "Google Colab", "Google Big Query", "Power BI", "Tableau", "Google Looker Studio (Data Studio)"],
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
    slug: "dashboard-penjualan-fmcg-looker-studio",
    title: "Dashboard Penjualan FMCG 2025: Dashboard Interaktif dan Analisis Lima Pertanyaan Bisnis di Looker Studio",
    period: "2026",
    tags: ["Ms. Excel", "Looker Studio", "Data Visualization"],
    problem:
      "Pada studi kasus bootcamp dengan data penjualan FMCG dummy (20.000 transaksi Januari sampai Desember 2025, 3 kategori, 10 produk, 15 kota, dan 3 channel), selain dashboard ringkasan diberikan lima pertanyaan bisnis dari tim berbeda: kota mana yang paling berkontribusi untuk ekspansi gudang, bagaimana sebaran rating pelanggan, kategori mana yang paling banyak terjual unitnya, produk mana yang paling sering dibeli, dan apakah diskon benar-benar berhubungan dengan penjualan.",
    approach:
      "Dataset Excel dihubungkan ke Looker Studio dan disusun menjadi laporan dengan halaman Ringkasan serta Order & Wilayah. Halaman ringkasan memuat enam kartu KPI (Total Penjualan, Penjualan Sukses, Total Order, Quantity Terjual, Rata-rata Nilai Order, dan Rata-rata Rating), tren penjualan bulanan per channel, komposisi status order, penjualan per produk, kontribusi kategori, dan penjualan per channel, dengan filter tanggal, channel, kategori, nama produk, kota, dan status. Setiap pertanyaan bisnis dijawab dengan jenis visual yang sesuai: peta dan tabel kontribusi untuk kota, grafik batang untuk distribusi rating, kombinasi batang dan garis untuk membandingkan nilai penjualan dengan unit per kategori, ranking batang horizontal untuk produk, serta scatter plot dengan garis tren untuk hubungan diskon dan penjualan, masing-masing disertai insight tertulis.",
    impact:
      "Menghasilkan dashboard interaktif dan lima jawaban analisis yang menunjukkan bahwa penjualan tersebar merata antar kota, produk, dan rating, bahwa diskon belum terbukti meningkatkan penjualan, serta bahwa hanya seperempat nilai penjualan yang berstatus Success.",
    results: [
      "Dari 20.000 order dengan total penjualan Rp875,6 juta (39.935 unit), hanya Rp222,0 juta (25,4%) yang berstatus Success karena status order terbagi hampir rata: Failed 25,4%, Success 25,2%, Returned 25,0%, dan Pending 24,3%",
      "Total penjualan per kota menyesatkan karena memuat ongkos kirim: Samarinda tertinggi (Rp73,35 juta) tetapi Rp38,88 juta di antaranya ongkir. Setelah ongkir dikeluarkan, Yogyakarta terbesar (Rp36,98 juta atau 6,92%), disusul Bali (Rp36,90 juta) dan Makassar (Rp36,62 juta), dengan kontribusi antar kota sangat merata (6,3% sampai 6,9%)",
      "Pembersih menjadi kategori dengan unit terjual terbanyak (15.904 unit), melampaui Makanan (12.084 unit) yang unggul pada nilai penjualan (Rp334,2 juta) karena harga satuannya lebih tinggi. Sabun Mandi paling sering dibeli (2.076 order) dengan selisih hanya 136 order dari Shampo, dan rating tersebar merata sekitar 20% di setiap bintang",
      "Diskon belum terbukti meningkatkan penjualan: korelasi diskon dan total penjualan hanya -0,058, unit per order hampir sama (1,995 vs 1,997), order per hari relatif sama (53,5 vs 54,9), dan rata-rata nilai order pada order berdiskon justru lebih rendah (Rp39.707 vs Rp44.060)",
    ],
    image: "/images/projects/karirnex_looker_1.png",
    gallery: [
      "/images/projects/karirnex_looker_2.png",
      "/images/projects/karirnex_looker_3.png",
      "/images/projects/karirnex_looker_4.png",
      "/images/projects/karirnex_looker_5.png",
    ],
  },
  {
    slug: "karirnex-mart-sales-dashboard-tableau",
    title: "KarirNex Mart Sales Dashboard: Analisis Revenue dan Profit Penjualan FMCG 2025 dengan Data Storytelling",
    period: "2026",
    tags: ["Ms. Excel", "Tableau", "Calculated Fields", "Data Storytelling", "Data Visualization"],
    problem:
      "Melanjutkan studi kasus KarirNex Mart, sebuah distributor FMCG (bootcamp dengan data dummy), data transaksi 2025 yang sudah bersih (20.012 order, 10 produk, 15 kota, dan 3 channel) perlu dibaca lebih dalam dari sisi profitabilitas, wilayah, dan channel, lalu disajikan sebagai cerita data yang mudah dipahami dan ditindaklanjuti.",
    approach:
      "Data satu tabel Sales dari Excel dimuat ke Tableau, lalu dibuat lima calculated field: Revenue, Profit, Profit Ratio, Success Flag, dan Success Rate. Delapan worksheet disusun menjadi satu dashboard berisi empat kartu KPI dan empat grafik: Revenue per Bulan per Channel, Revenue per Kota, Revenue per Produk dengan warna berdasarkan rata-rata rating, serta scatter plot Revenue vs Profit Ratio per Produk, dilengkapi filter Category. Temuan kemudian diceritakan lewat Story Tableau berjudul Revenue Tinggi, Margin Tipis dengan tiga story point: Konteks, Konflik, dan Resolusi.",
    impact:
      "Menghasilkan dashboard dan story Tableau yang menunjukkan bahwa revenue besar tidak selalu sejalan dengan profit besar, lengkap dengan rekomendasi yang dapat ditindaklanjuti.",
    results: [
      "Revenue 2025 mencapai Rp773,03 juta dengan profit Rp237,95 juta (profit ratio 30,8%) dan success rate 85,5%",
      "Channel Offline menjadi kontributor terbesar (59,9% revenue), sementara Toko Oren (21,8%) dan Toko Hijau (18,3%) tumbuh bertahap sepanjang tahun. Jakarta memimpin dengan revenue Rp124,86 juta (16,2%), disusul Surabaya dan Bandung",
      "Minyak Goreng 1L menghasilkan revenue Rp119,88 juta, nyaris setara produk teratas, tetapi profit rasionya hanya 17,1% dan menjadi yang terendah, sementara produk lain berada di kisaran 26,5% sampai 38,8%",
      "Rekomendasi: meninjau ulang harga jual dan diskon Minyak Goreng 1L agar profit rasio naik bertahap sambil memantau dampaknya pada revenue, karena selisih harga jual dan biaya hanya menyisakan margin dasar sekitar 19% dengan rata-rata diskon 2,7% yang setara produk lain",
    ],
    image: "/images/projects/karirnex_tableau_1.png",
    gallery: [
      "/images/projects/karirnex_tableau_2.png",
      "/images/projects/karirnex_tableau_3.png",
      "/images/projects/karirnex_tableau_4.png",
    ],
  },
  {
    slug: "karirnex-mart-sales-kpi-dashboard",
    title: "Sales KPI Dashboard: Target dan Performa Penjualan KarirNex Mart 2025",
    period: "2026",
    tags: ["Ms. Excel", "Power BI", "Power Query", "DAX", "Data Modeling"],
    problem:
      "Sebagai Data Analyst baru pada KarirNex Mart, sebuah distributor FMCG (studi kasus bootcamp dengan data dummy), diberikan transaksi mentah tahun 2025 sebanyak 20.162 baris, data 10 produk, dan target revenue per bulan. Head of Sales meminta satu dashboard untuk menjawab tiga pertanyaan: apakah target 2025 tercapai, channel mana yang bermasalah, dan produk mana yang perlu diperhatikan. Data transaksi masih kotor, antara lain order ganda serta penulisan status dan nama kota yang tidak seragam, sehingga harus dibersihkan terlebih dahulu.",
    approach:
      "Data dari tiga tabel Excel (Sales, Products, Bulan_Target) disiapkan dengan Power Query: mengubah tipe data, menyeragamkan kolom status dan city memakai Capitalize Each Word dan Trim, menghapus duplikat berdasarkan order_id sehingga tersisa 20.012 order, lalu menambah kolom net_sales dari quantity dikali unit_price dikali satu dikurangi discount_pct. Pada data model, tabel Sales dihubungkan secara many-to-one ke Products lewat product_id dan ke Bulan_Target lewat month. Perhitungan KPI dibuat dengan tujuh measure DAX: Total Order, Order Success, Revenue (net_sales dari order berstatus Success), Success Rate, Avg Rating, Target Revenue, dan Achievement %. Dashboard memuat empat kartu KPI, grafik Revenue vs Target per bulan (batang dan garis), Revenue per Produk, serta Success Rate per Channel, dilengkapi slicer channel, category, dan month name agar seluruh visual berubah mengikuti pilihan pengguna.",
    impact:
      "Menghasilkan satu dashboard interaktif yang menjawab tiga pertanyaan Head of Sales sekaligus, yaitu pencapaian target, channel yang bermasalah, dan produk yang perlu diperhatikan, lengkap dengan tiga insight yang dapat ditindaklanjuti.",
    results: [
      "Setelah dibersihkan, 20.012 order dianalisis dengan revenue Rp773,03 juta dari order berstatus Success, success rate keseluruhan 85,5%, dan rata-rata rating 4,03",
      "Revenue mencapai 99,9% dari target Rp774 juta, tetapi hanya 5 dari 12 bulan yang mencapai target. Maret tertinggi (109,1%) dan April terendah (91,4%), yang diduga terkait periode Ramadan dan Lebaran",
      "Toko Hijau perlu dicek: failed rate naik dari sekitar 9% sampai 10% pada kuartal 1 sampai 3 menjadi 15,1% di kuartal 4, sementara Toko Oren stabil di kisaran 9% dan channel Offline tidak mencatat order Failed. Success rate per channel: Offline 97,2%, Toko Oren 78,6%, Toko Hijau 76,3%",
      "Pembersih Wajah 100g menjadi produk dengan revenue tertinggi (Rp124,26 juta), tetapi memiliki rating terendah (3,46) dan return rate tertinggi (8,1%), sedangkan produk lain berating 3,91 sampai 4,20 dengan return rate 4,7% sampai 6,4%",
    ],
    image: "/images/projects/karirnex_powerbi_1.png",
    gallery: [
      "/images/projects/karirnex_powerbi_2.png",
      "/images/projects/karirnex_powerbi_3.png",
    ],
  },
  {
    slug: "movie-sales-analytics-dashboard",
    title: "Movie Sales Analytics: Dashboard Interaktif Penjualan Tiket Bioskop 2025",
    period: "2026",
    tags: ["Ms. Excel", "Power BI", "Power Query", "DAX", "Data Modeling"],
    problem:
      "Sebagai Data Analyst pada sebuah perusahaan bioskop, diberikan data transaksi dari enam studio yang tersimpan di file terpisah beserta data master film, seluruhnya masih berupa raw data. Management membutuhkan dashboard interaktif untuk memahami pendapatan, transaksi, penjualan tiket, performa film, serta perilaku transaksi (channel, metode pembayaran, dan status), tetapi data harus dibersihkan dan digabungkan terlebih dahulu agar siap dianalisis.",
    approach:
      "Pengerjaan dalam dua tahap. Tahap pertama, menyiapkan data dengan Power Query: menggabungkan 6 file studio memakai Get Data from Folder, menstandarkan tipe data, membuat kolom customer_name, Movie ID dengan format MV-XXX, dan seat_number, memisahkan kolom judul|genre dan melakukan Unpivot rating pada Movie Master, lalu merge Left Outer berdasarkan movie_id dan memvalidasi hasilnya lewat 8 pertanyaan validasi data. Tahap kedua, membangun data model di Power BI melalui relasi dengan tabel Channel Mapping dan Payment Mapping serta measure DAX untuk Total Revenue, Total Transaction, Total Tickets Sold, Average Transaction Value, Completed Transaction, Completion Rate, kemudian menyusun dashboard dengan alur KPI, tren, breakdown, hingga detail transaksi, dilengkapi 7 slicer dan seluruh status transaksi agar completion rate bisa dihitung.",
    impact:
      "Menghasilkan pipeline data yang mengubah 6 file mentah menjadi satu dataset siap analisis, serta dashboard interaktif yang membantu management memantau pendapatan, tiket, performa film, channel, metode pembayaran, dan status transaksi secara mandiri lewat filter, tanpa mengolah data mentah secara manual.",
    results: [
      "Dari 20.000 transaksi pendapatan Rp3,84 miliar dengan rata-rata Rp192.164 per transaksi dan completion rate 93,47%; setelah divalidasi di Power Query, 18.694 transaksi Paid menyumbang penjualan Rp3,59 miliar, sementara 1.306 transaksi (6,53%) berstatus cancelled atau refund",
      "Pendapatan antar film sangat merata: Speed Beyond Limit (genre Aksi) menjadi film terlaris dengan Rp395,27 juta, dan kelima film teratas hanya berada pada rentang Rp384,81 juta hingga Rp395,27 juta (sekitar 51% dari total pendapatan), sehingga pendapatan tidak bergantung pada satu film saja",
      "Channel Online (Aplikasi/Website Karirnex) menyumbang Rp2,22 miliar atau 61,9% dari penjualan Paid, jauh di atas Box Office offline sebesar Rp1,37 miliar (38,1%). Untuk pembayaran non-tunai mendominasi dengan dipimpin QRIS (3.407 transaksi), Kartu Debit/Kredit (3.364), dan GoPay (3.335), sedangkan Tunai hanya sekitar 6% (1.191 transaksi)",
      "Pendapatan harian relatif stabil sepanjang periode, dengan lonjakan di awal dan penurunan di akhir",
    ],
    image: "/images/projects/dashboard_cinema.png",
    gallery: [
      "/images/projects/dashboard_mobil_data_model.png",
      "/images/projects/dashboard_mobil_merge.png",
    ],
  },
  {
    slug: "automotive-sales-analytics-dashboard",
    title: "Automotive Sales Dashboard: Performa Penjualan Mobil 2025",
    period: "2026",
    tags: ["Ms. Excel", "Power BI", "Power Query", "DAX", "Data Visualization"],
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
    tags: ["Ms. Excel", "Pivot Table", "Power Query", "Power BI"],
    problem:
      "Dari data transaksi penjualan elektronik, Surabaya tercatat sebagai kota dengan kinerja penjualan tertinggi di Jawa Timur pada 2025 dan terus meningkat dibanding tahun sebelumnya. Tetapi belum ada analisis mendalam soal pola transaksi, profitabilitas, dan faktor pendorong performa tersebut, sehingga insight-nya belum bisa dimanfaatkan untuk menyusun strategi penjualan yang lebih tepat.",
    approach:
      "Menyaring data transaksi penjualan berisi lebih dari 15 ribu data dalam rentang 2023 hingga 2025 untuk fokus pada Kota Surabaya sebagai studi kasus, diolah menggunakan pivot table di Excel untuk eksplorasi awal, lalu dibangun jadi dashboard interaktif di Power BI yang bisa difilter per tahun, kota, dan provinsi. Dashboard mencakup tren penjualan bulanan, perbandingan performa antar kota, kontribusi tiap kategori & sub kategori produk, segmentasi pelanggan, serta metode pembayaran dan pengiriman.",
    impact:
      "Membangun dashboard interaktif berisi visualisasi performa penjualan Kota Surabaya 2025 yang merupakan kota dengan kontribusi penjualan tertinggi di Jawa Timur. Dashboard ini untuk mendapatkan insight dan menyusun rekomendasi strategi penjualan yang bisa langsung ditindaklanjuti tim bisnis.",
    results: [
      "Surabaya tercatat sebagai kontributor penjualan terbesar di Jawa Timur (66,7% dari total penjualan wilayah), dengan total penjualan Rp7,74 miliar dan profit margin 12,61% sepanjang 2025",
      "Penjualan menunjukkan pola musiman yang konsisten selama 3 tahun terakhir. Terdapat pola penjualan melemah di awal tahun (Januari sampai Maret) dan melonjak signifikan menjelang akhir tahun, dengan puncaknya di bulan November",
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
    tags: ["Ms. Excel", "Python", "Google Colab", "NLP", "IndoBERT", "IndoRoBERTa", "Emotion Analysis", "Sentiment Analysis", "Flask"],
    problem:
      "Ulasan pengguna pada aplikasi kedai kopi kerap membahas lebih dari satu aspek layanan sekaligus dan memuat lebih dari satu emosi dalam satu teks, kondisi ini tidak bisa ditangani analisis sentimen konvensional yang hanya memberi satu label per ulasan, sehingga opini dan emosi pelanggan terhadap tiap aspek layanan belum bisa dipahami secara lebih jelas",
    approach:
      "Menggunakan kerangka CRISP-DM dengan lebih dari 15.000 ulasan dari lima aplikasi kedai kopi terpopuler di Indonesia (Kopi Kenangan, Fore Coffee, Starbucks Indonesia, Jiwa+, TOMORO COFFEE) di Google Play Store periode Juli 2022 sampai Oktober 2025. Aspek diekstraksi dari teks menggunakan Latent Dirichlet Allocation (LDA) dan diinterpretasikan menjadi tiga aspek: Order and Fulfillment Process, Product Quality and Outlet Experience, dan Customer Digital Experience. Label emosi dan sentimen berbasis NRC Emotion Lexicon  per aspek ditentukan lewat majority voting dari sembilan anotator, dengan Krippendorff's Alpha untuk mengukur kesepakatan antar anotator. Model IndoBERT dan IndoRoBERTa kemudian dilatih dan dibandingkan untuk klasifikasi emosi multi-label dan sentimen berbasis aspek, dievaluasi dengan k-fold cross validation dan data uji, lengkap dengan class weighting/focal loss untuk menangani label yang tidak seimbang. Model terbaik diimplementasikan ke sistem berbasis web menggunakan Flask.",
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
    slug: "analisis-sentimen-dealer-honda-calista",
    title: "Analisis Sentimen Dealer Honda Calista Abadi 2: Ulasan Google Maps dan IndoBERT untuk Strategi CRM",
    period: "2025",
    tags: ["Ms. Excel", "Python", "Google Colab", "Web Scraping", "NLP", "IndoBERT", "Sentiment Analysis"],
    problem:
      "Ulasan di Google Maps sangat memengaruhi citra dealer, tetapi rating bintang saja tidak cukup untuk memahami persepsi pelanggan. Dealer Honda Calista Abadi 2 Cerme Gresik, dealer resmi motor Honda dengan penjualan tunai dan kredit serta bengkel purna jual, membutuhkan pemahaman sentimen dan keluhan pelanggan yang tersembunyi di balik rating agar dapat meningkatkan kepuasan dan membangun hubungan yang lebih baik dengan pelanggan.",
    approach:
      "Proyek yang dikerjakan secara tim (3 orang) dengan pendekatan Analytical CRM. Ulasan pelanggan di Google Maps dikumpulkan lewat web scraping menggunakan Apify, lalu disimpan otomatis ke Google Sheets dengan automasi Make.com, menghasilkan 1.100 data awal yang disaring menjadi 387 ulasan karena hanya data tersebut yang memiliki teks lengkap. Data dibersihkan (menghapus ulasan kosong atau hanya berisi simbol, menghapus karakter khusus, dan menyeragamkan huruf kecil), lalu diproses dengan tokenisasi, stopword removal, dan stemming. Sentimen (positif, netral, negatif) dianalisis dengan pendekatan transfer learning memakai model IndoBERT, kemudian divisualisasikan dalam diagram distribusi, perbandingan rating dan hasil analisis teks, wordcloud, serta frekuensi kata pada ulasan negatif. Keluhan utama dikelompokkan menjadi tema dan diterjemahkan menjadi usulan strategi CRM.",
    impact:
      "Menghasilkan peta persepsi pelanggan dealer beserta empat usulan strategi CRM yang dapat ditindaklanjuti, sekaligus menunjukkan bahwa rating bintang tidak selalu mencerminkan isi ulasan.",
    results: [
      "Dari 387 ulasan yang dianalisis, sentimen didominasi positif (66,4% atau 257 ulasan), diikuti netral 22,5% (87 ulasan) dan negatif 11,1% (43 ulasan)",
      "Berdasarkan rating bintang, 87,3% ulasan tampak positif, tetapi setelah teksnya dianalisis proporsi positif turun menjadi 66,4%, sehingga banyak ulasan netral dan negatif tersembunyi di balik rating tinggi",
      "Pada ulasan negatif, kata yang paling sering muncul adalah tidak, servis, jam, menunggu, dan belum, dengan keluhan utama berupa masalah yang berulang setelah servis, waktu tunggu yang lama, komunikasi yang tidak responsif, janji pengiriman unit dan STNK yang meleset, biaya yang dianggap tidak sesuai kualitas, serta ruang tunggu yang kurang nyaman",
      "Merumuskan empat usulan strategi CRM: sistem booking online dengan pelacakan servis real-time, tindak lanjut ulasan negatif dan netral lewat form umpan balik, program loyalitas untuk pelanggan positif, dan peningkatan kenyamanan ruang tunggu",
    ],
    image: "/images/projects/calista_sentimen_1.png",
    gallery: [
      "/images/projects/calista_sentimen_2.png",
      "/images/projects/calista_sentimen_3.png",
      "/images/projects/calista_sentimen_4.png",
      "/images/projects/calista_sentimen_5.png",
    ],
  },
  {
    slug: "suara-jatim-analisis-sentimen",
    title: "Suara Jatim : Analisis Sentimen Pilkada Jatim 2024",
    period: "2024",
    tags: ["Ms. Excel", "Python", "Google Colab", "Web Scraping", "NLP", "Sentiment Analysis"],
    problem:
      "Opini publik soal Pilkada Jawa Timur 2024 tersebar luas di ratusan berita daring dan media sosial, tapi belum ada cara sistematis untuk membaca kecenderungan sentimen masyarakat terhadap tiap pasangan calon dari data sebanyak itu.",
    approach:
      "Mengumpulkan lebih dari 8,000 data seputar Pilkada Jatim 2024 dari berita daring (scraping menggunakan Selenium & BeautifulSoup) dan Twitter (Tweepy), lalu dilakukan data cleaning, preprocessing, dan exploratory data analysis serta label per pasangan calon dengan data bersih lebih dari 2.000 data. Proses dilanjutkan lewat tokenizing, stopword removal, dan stemming menggunakan Sastrawi, kemudian dianalisis sentimennya (positif/negatif/netral) menggunakan VADER yang ditambah leksikon Bahasa Indonesia. Untuk klasifikasi otomatis, data yang tidak seimbang ditangani dengan SMOTE sebelum dilatih ke model Random Forest yang telah di-tuning.",
    impact:
      "Menghasilkan gambaran tren dan sentimen pemberitaan tiap pasangan calon selama masa Pilkada 2024 yang didominasi sentimen netral dengan lonjakan tajam menjelang hari pemilihan.",
    results: [
      "Mengumpulkan lebih dari 8.000 data berita daring dan cuitan Twitter terkait Pilkada Jatim 2024, lalu memilah dan melabeli lebih dari 2.000 data bersih per pasangan calon",
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
      "Mengumpulkan 8.000+ data berita dan media sosial lewat web scraping, lalu melakukan data cleansing dan exploratory data analysis (EDA) menggunakan Python untuk mengidentifikasi pola sentimen publik.",
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
    period: "2022 - 2026",
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

export type RecommendationLetter = {
  // Nama pemberi rekomendasi.
  name: string;
  // Jabatan pemberi rekomendasi & institusinya, mis. "Manager, MIKTI"
  // atau "Dosen Pembimbing Skripsi, UPN Veteran Jawa Timur".
  role: string;
  // Kapan surat ini dikeluarkan, mis. "Des 2024".
  period: string;
  // Opsional: cuplikan singkat isi surat (1-2 kalimat), ditampilkan
  // miring seperti kutipan. Hapus baris ini kalau tidak ingin
  // menampilkan cuplikan.
  excerpt?: string;
  // Opsional: link ke file surat asli (PDF/scan). Taruh file di
  // public/recommendations/nama-file.pdf lalu isi url dengan
  // "/recommendations/nama-file.pdf", atau pakai link Google Drive
  // seperti pada trainings/certifications. Hapus baris ini kalau
  // belum ada file suratnya.
  url?: string;
};

// Section ini otomatis tersembunyi dari halaman utama selama array di
// bawah masih kosong. Begitu kamu isi minimal 1 data, section "Surat
// Rekomendasi" akan langsung muncul di halaman utama tanpa perlu ubah
// apa pun di file komponen.
export const recommendationLetters: RecommendationLetter[] = [
  {
    name: "Nugroho Hardiyanto, S.E., M.Si., CPM (Asia)",
    role: "Direktur PT. Ebiz Karisma Internasional",
    period: "Sep 2026",
    excerpt: "Surat Rekomendasi Kerja Keahlian Data Analyst",
    url: "https://drive.google.com/file/d/1SWV2Q2eJgIi4xEZhWwYSpMIGE5LVsID2/view?usp=sharing",
  },
   {
    name: "Nugroho Hardiyanto, S.E., M.Si., CPM (Asia)",
    role: "Direktur PT. Ebiz Karisma Internasional",
    period: "Okt 2026",
    excerpt: "Surat Rekomendasi Kerja Keahlian Data Analyst Power BI",
    url: "https://drive.google.com/file/d/1e_cWovhrqsPrkk1aLnxSJNCEADjLG64a/view?usp=sharing",
  },
];
