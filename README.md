# Portofolio — Data Analyst

Website portofolio satu halaman, tema gelap dengan aksen oranye, dibangun
dengan Next.js + TypeScript + Tailwind CSS, siap di-deploy ke Vercel.

## Struktur isi

- **Hero** — nama, peran, tagline, foto profil, dan strip ringkasan angka
  (tahun pengalaman, jumlah proyek, dst.)
- **Keahlian** — dikelompokkan per kategori (analisis, bahasa/query,
  visualisasi, infrastruktur data)
- **Proyek** — studi kasus format Masalah → Pendekatan → Dampak, dengan
  foto/screenshot per proyek (bisa diklik untuk diperbesar), filter
  berdasarkan tools yang dipakai, dan tombol "Lihat selengkapnya" yang
  membuka **halaman detail tersendiri** untuk tiap proyek
- **Pengalaman** — riwayat kerja dalam bentuk timeline
- **Pelatihan** — daftar pelatihan/kursus yang pernah diikuti
- **Pendidikan & Sertifikasi** — nama sertifikat bisa ditautkan ke bukti
  sertifikat asli
- **Kontak** — email, telepon, lokasi, tautan sosial

## 1. Edit isi portofolio kamu

Hampir semua teks dan data ada di **satu file**:

```
lib/content.ts
```

Ganti nama, ringkasan, angka statistik, daftar keahlian, proyek,
pengalaman kerja, pelatihan, pendidikan, sertifikasi, dan info kontak di
file itu.
Kamu tidak perlu menyentuh file di folder `components/` sama sekali
kecuali ingin mengubah tata letak.

### Foto profil

Ganti file yang direferensikan di `profile.photo` pada `lib/content.ts`
(saat ini `public/images/profile_Faiz.png`) dengan foto kamu sendiri.
Rasio potret (mis. 800x1000px) memberi hasil paling rapi.

Ada gambar dekoratif `public/images/profile-bg.jpg` (gradasi gelap +
garis aksen oranye, tanpa ikon/teks) yang otomatis dipasang sebagai
**background di belakang foto** lewat `components/Hero.tsx`. Ini
berguna kalau foto kamu berformat **PNG dengan latar transparan**
(foto yang sudah di-cutout dari background aslinya) — bagian
transparan itu akan menampilkan gradasi dekoratif ini, bukan kotak
kosong. Kalau foto kamu JPG/PNG biasa (background penuh, tidak
transparan), gambar dekoratif ini otomatis tertutup rapat oleh foto
dan tidak akan terlihat — jadi aman dipasang untuk kedua jenis foto,
tidak perlu diutak-atik.

### Foto / screenshot proyek & halaman detail

Ganti file di `public/images/projects/` (mis.
`customer-retention.jpg`) dengan screenshot dashboard, chart, atau
mockup dari proyek asli kamu. Rasio mendekati 4:3 hasilnya paling rapi
untuk gambar sampul, dan 16:9 untuk gambar utama di halaman detail.

Setiap proyek di `lib/content.ts` sekarang otomatis punya halaman
detail sendiri di alamat `/proyek/<slug>` (mis.
`/proyek/dashboard-retensi-pelanggan`), berisi gambar lebih besar,
narasi Masalah/Pendekatan/Dampak, dan daftar poin `results` (hasil
utama). Field yang bisa diisi per proyek:
- `slug` — dipakai untuk alamat URL, huruf kecil + tanda "-"
- `results` — array poin hasil, tampil di halaman detail (opsional)
- `gallery` — array path gambar tambahan untuk galeri di halaman
  detail (opsional)
- `link` — link eksternal (demo/dashboard live, repo), muncul sebagai
  tombol "Lihat proyek asli" di halaman detail (opsional)

### Menambah proyek ke-4 (atau lebih)

Di `lib/content.ts`, cari komentar **"Contoh cara menambah proyek
ke-4"** di bagian bawah array `projects`. Salin blok contohnya, isi
datanya, lalu taruh sebagai objek baru di dalam array `projects`.
Halaman utama, filter tag, dan halaman detail proyek akan otomatis
menyesuaikan — tidak perlu mengubah kode apa pun di `components/`
maupun di `app/proyek/[slug]/page.tsx`.

### Tautan sertifikat

Di `lib/content.ts`, tiap item pada `certifications` punya field
opsional `url`. Isi dengan:
- link verifikasi publik (mis. halaman Credly kamu), atau
- file sertifikat sendiri: taruh PDF/gambar di folder baru
  `public/certificates/`, lalu isi `url` dengan mis.
  `/certificates/nama-file.pdf`.

Hapus baris `url` pada sertifikat yang belum punya tautan — nama
sertifikat akan tampil sebagai teks biasa (tidak bisa diklik).

Tambahkan juga file CV kamu sebagai `public/resume.pdf` (nama file
harus persis sama) supaya tombol "Unduh CV" berfungsi.

## 2. Jalankan di komputer sendiri

Perlu Node.js versi 18 ke atas.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

Untuk memastikan tidak ada error sebelum deploy:

```bash
npm run build
```

## 3. Deploy ke Vercel

**Cara termudah — lewat GitHub:**

1. Buat repository baru di GitHub, lalu push folder proyek ini ke sana:
   ```bash
   git init
   git add .
   git commit -m "Portofolio pertama"
   git branch -M main
   git remote add origin <url-repo-github-kamu>
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com), login (bisa pakai akun
   GitHub), lalu klik **Add New → Project**.
3. Pilih repository yang baru kamu push. Vercel otomatis mendeteksi
   ini proyek Next.js — biarkan semua pengaturan default, klik
   **Deploy**.
4. Setelah build selesai (biasanya 1-2 menit), kamu akan dapat URL
   publik seperti `nama-proyek.vercel.app`. Domain kustom bisa
   ditambahkan lewat tab **Settings → Domains**.

**Alternatif — lewat Vercel CLI** (tanpa GitHub):

```bash
npm install -g vercel
vercel login
vercel        # deploy versi preview
vercel --prod # deploy ke production
```

## 4. Ubah warna atau font (opsional)

Token desain (warna, radius, dll.) ada di `tailwind.config.ts`. Palet
saat ini bertema gelap dengan aksen oranye:
- `bg` / `surface` — latar belakang gelap utama & permukaan kartu
- `ink` / `ink-soft` / `ink-faint` — hierarki warna teks (terang)
- `accent` / `accent-strong` / `accent-bright` / `accent-deep` — aksen
  oranye, dipakai di tombol, gradasi, dan garis timeline
- `navy` / `navy-soft` — warna paling gelap, dipakai di footer & strip
  statistik

Ganti nilai hex di situ untuk menyesuaikan intensitas warna. Font
diatur di `app/layout.tsx` (saat ini memakai Fraunces untuk judul dan
Inter untuk teks isi, dimuat lewat Google Fonts).

## Catatan

- Bagian Kontak memakai tombol `mailto:` langsung ke email kamu —
  tidak butuh backend atau layanan pihak ketiga.
- Jika ingin form kontak yang benar-benar mengirim pesan, kamu bisa
  menambahkan layanan seperti Formspree atau Resend di bagian
  `components/Contact.tsx`.
