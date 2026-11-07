# FolioSpace — re-audit after fixes

## Ringkasan

FolioSpace adalah situs statis HTML/CSS/JavaScript untuk katalog layanan website portfolio. Tidak ada backend, database, login, API, pembayaran, atau upload; untuk alur saat ini backend tidak dibutuhkan. Build publik tersedia di `dist/` dan hanya berisi halaman, aset, dan demo.

## Temuan audit yang sudah diperbaiki

- **Preview ponsel memanjang:** konten layar ponsel sekarang berupa mockup statis berukuran jelas; tidak ada iframe yang memperluas tinggi perangkat.
- **Filter menghilangkan skala preview:** setelah setiap render/filter, iframe baru langsung di-fit. State filter dan ukuran preview memakai `aria-pressed`.
- **Kontras:** warna metadata/teks sekunder yang diuji sudah memenuhi WCAG AA untuk ukuran normal; separator profesional juga digelapkan.
- **Tautan artikel palsu:** contoh topik tulisan kini berupa teks statis, tanpa tautan kontak yang menyesatkan dan tanpa klaim waktu baca.
- **Copy demo:** teks yang terlalu generik diganti dengan contoh tugas, artefak, dan keputusan. Entri akademik ditandai contoh; tidak ada DOI, jurnal, atau metrik yang diklaim nyata.
- **Keyboard dan pembaca layar:** halaman utama/katalog/detail menyediakan skip link; menu ponsel tertutup dengan Escape dan mengembalikan fokus; menu, navigasi, filter, dan kontrol ukuran mengumumkan state.
- **Beban iframe homepage:** preview ponsel dan banner berupa komposisi statis; enam kartu unggulan dan satu preview desktop memakai iframe lazy-load. Semua dua belas demo tersedia di katalog penuh.
- **Source dan minifikasi drift:** halaman sekarang memuat satu source CSS/JS; file `.min` duplikat dihapus. `python3 build.py` memvalidasi link/anchor, sintaks JS, serta membangun output deployment yang mengecualikan arsip dan dokumen internal.
- **Akses arsip:** ZIP tersimpan pada source di `archive/`, tetapi tidak disalin ke `dist/` dan `/archive/` mengembalikan 404 pada preview build.
- **Foto remote dan klaim identitas:** foto eksternal diganti dengan empat ilustrasi SVG lokal original; delapan demo tambahan memakai layout/artwork CSS original. Alt dan caption menyebut persona sebagai contoh fiksi.
- **Preview banner:** contoh banner sekarang berupa komposisi statis yang lebih ringan. Label katalog menyatakan preview, bukan janji halaman penuh di dalam kartu.
- **Metadata share:** Open Graph dan canonical tersedia di halaman utama/katalog/detail; halaman detail memperbarui metadata berdasarkan slug.

## Verifikasi

- Build selesai: `python3 build.py` → `dist/` (15 halaman; tanpa `archive/`, `references/`, atau dokumen proyek).
- Browser automation: 130 kombinasi route/ukuran pada 320, 390, 768, 1024, dan 1440 px; tidak ada overflow horizontal, missing anchor, atau uncaught JS error.
- Empat kategori masing-masing memiliki tiga template; kelima filter menjaga preview tetap fit dan memilih satu state.
- Menu keyboard: Enter membuka, Escape menutup, fokus kembali ke tombol; skip link menerima fokus pertama.
- Empat ilustrasi lokal dimuat dan memiliki alt; delapan demo lain menggunakan artwork/layout CSS. Homepage memiliki 7 iframe (enam preview unggulan dan satu preview hero).
- Contrast sweep semua halaman tidak menemukan pasangan teks yang gagal ambang AA (teks kecil 4.5:1, teks besar 3:1).
- WhatsApp menghasilkan URL `wa.me` yang ter-encode; tidak ada pesan sungguhan dikirim saat tes.
- Folder `/archive/` tidak tersedia pada output publik (404).

## Batas yang tersisa

- Tidak ada backend yang diaudit atau dibuat; situs hanya mengarahkan calon klien ke WhatsApp.
- Google Fonts masih opsional dan memerlukan internet agar font merek tampil; sistem font fallback bekerja offline.
- Domain dan HTTPS GitHub Pages telah dikonfigurasi; hasil build terbaru harus dipush agar perubahan tampil live. Security headers, 404 hosting, Safari/Firefox, dan screen reader nyata belum diuji.
- Belum diuji di Safari/Firefox, perangkat fisik, atau screen reader nyata. Pemeriksaan kontras otomatis berbasis warna computed, bukan pengganti uji aksesibilitas manual.
- Konten/demo tetap contoh fiksi; ganti data dan konfigurasi kontak sebelum dipakai sebagai situs produksi.
