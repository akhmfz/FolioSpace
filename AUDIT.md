# FolioSpace — re-audit after fixes

## Ringkasan

FolioSpace adalah situs statis HTML/CSS/JavaScript untuk katalog layanan website portfolio. Tidak ada backend, database, login, API, pembayaran, atau upload; untuk alur saat ini backend tidak dibutuhkan. Build publik tersedia di `dist/` dan hanya berisi halaman, aset, dan demo.

## Temuan audit yang sudah diperbaiki

- **Preview ponsel memanjang:** konten layar ponsel sekarang berupa mockup statis berukuran jelas; tidak ada iframe yang memperluas tinggi perangkat.
- **Filter menghilangkan skala preview:** setelah setiap render/filter, iframe baru langsung di-fit. State filter dan ukuran preview memakai `aria-pressed`.
- **Kontras:** warna metadata/teks sekunder yang diuji sudah memenuhi WCAG AA untuk ukuran normal; separator profesional juga digelapkan.
- **Tautan artikel palsu:** contoh topik tulisan kini berupa teks statis, tanpa tautan kontak yang menyesatkan dan tanpa klaim waktu baca.
- **Keyboard dan pembaca layar:** halaman utama/katalog/detail menyediakan skip link; menu ponsel tertutup dengan Escape dan mengembalikan fokus; menu, navigasi, filter, dan kontrol ukuran mengumumkan state.
- **Beban iframe homepage:** dikurangi dari 8 menjadi 5. Preview ponsel dan banner diganti komposisi statis; empat kartu live dan satu preview desktop tetap memakai iframe lazy-load.
- **Source dan minifikasi drift:** halaman sekarang memuat satu source CSS/JS; file `.min` duplikat dihapus. `python3 build.py` memvalidasi link/anchor, sintaks JS, serta membangun output deployment yang mengecualikan arsip dan dokumen internal.
- **Akses arsip:** ZIP tersimpan pada source di `archive/`, tetapi tidak disalin ke `dist/` dan `/archive/` mengembalikan 404 pada preview build.
- **Foto remote dan klaim identitas:** foto eksternal diganti dengan empat ilustrasi SVG lokal original; alt menyebutnya ilustrasi untuk persona fiksi.
- **Preview banner:** contoh banner sekarang berupa komposisi statis yang lebih ringan. Label katalog menyatakan preview, bukan janji halaman penuh di dalam kartu.
- **Metadata share:** Open Graph tersedia di halaman utama/katalog/detail dan diperbarui per template di halaman detail. Canonical sengaja belum diisi karena domain produksi belum diberikan.

## Verifikasi

- Build selesai: `python3 build.py` → `dist/` (7 halaman; tanpa `archive/`, `references/`, atau dokumen proyek).
- Browser automation: 35 kombinasi halaman/ukuran pada 320, 390, 768, 1024, dan 1440 px; tidak ada overflow horizontal, broken local image, missing anchor, atau uncaught JS error.
- Semua empat filter menjaga preview tetap fit dan memilih satu state; desktop/tablet/mobile mengumumkan state pilihan.
- Menu keyboard: Enter membuka, Escape menutup, fokus kembali ke tombol; skip link menerima fokus pertama.
- Semua empat ilustrasi demo lokal dimuat dan memiliki alt. Homepage memiliki 5 iframe (sebelumnya 8).
- Contrast sweep semua halaman tidak menemukan pasangan teks yang gagal ambang AA (teks kecil 4.5:1, teks besar 3:1).
- WhatsApp menghasilkan URL `wa.me` yang ter-encode; tidak ada pesan sungguhan dikirim saat tes.
- Folder `/archive/` tidak tersedia pada output publik (404).

## Batas yang tersisa

- Tidak ada backend yang diaudit atau dibuat; situs hanya mengarahkan calon klien ke WhatsApp.
- Google Fonts masih opsional dan memerlukan internet agar font merek tampil; sistem font fallback bekerja offline.
- Domain produksi belum diketahui, jadi canonical URL, HTTPS, security headers, 404 hosting, dan konfigurasi deploy final belum diuji.
- Belum diuji di Safari/Firefox, perangkat fisik, atau screen reader nyata. Pemeriksaan kontras otomatis berbasis warna computed, bukan pengganti uji aksesibilitas manual.
- Konten/demo tetap contoh fiksi; ganti data dan konfigurasi kontak sebelum dipakai sebagai situs produksi.
