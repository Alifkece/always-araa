# For You, Always — Arcade Edition (versi lokal)

## Menjalankan
VS Code -> File -> Open Folder -> pilih folder ini -> klik kanan `index.html` -> **Open with Live Server**.
Password: lihat `password` di `config.js`.

## Cara ganti FOTO / LAGU / COVER (tinggal timpa file)
Nama file harus sama persis. Foto memakai format **.jpg**, lagu **.mp3**.

| Yang diganti | Folder | Nama file |
|---|---|---|
| Foto halaman Moments | `assets/moments/` | `photo1.jpg` ... `photo5.jpg` |
| Foto lokasi di Atlas | `assets/atlas/` | `place1.jpg`, `place2.jpg`, `place3.jpg` |
| Lagu | `assets/music/` | `song1.mp3`, `song2.mp3` |
| Cover lagu (gambar bulat) | `assets/covers/` | `cover1.jpg`, `cover2.jpg` |
| Background ruangan (opsional) | `assets/rooms/` | `bg-moments`, `bg-music`, `bg-journey`, ... |

- `photo1.jpg` ... `photo5.jpg` sekarang berisi gambar sementara. Cukup timpa dengan fotomu.
- Atlas, lagu, dan cover memakai versi online dari `config.js` sampai kamu menaruh file-nya.
- Tambah foto/lagu baru: salin satu blok di `config.js` dan beri nama file baru (mis. `photo6`).
- Hapus satu foto: hapus satu blok di `"photos"` pada `config.js`.

## Cara ganti TEKS
Semuanya di `config.js`:
- **Cerita**: `recipient_name`, `message`, `quiz_questions`, `bucket_list`, `things_i_love`, `fortunes`,
  `atlas` (label dan catatan lokasi), `playlist` (judul dan artis), `photos` (caption).
- **Semua tun lain** (halaman password, label menu, tombol, judul tiap ruangan): bagian `"texts"` paling bawah.
  Ganti nilainya saja. `{n}` dan `{total}` jangan dihapus. Contoh: `"main.lock_title": "HADIAH TERKUNCI"`.

## Ketergantungan internet
Google Fonts, peta Atlas (OpenStreetMap), dan foto/lagu/cover yang belum kamu ganti dengan file lokal.

## Catatan
- Ruangan selain Music terkunci sampai tombol PLAY di Music ditekan (perilaku asli).
- Di console Live Server mungkin muncul 404 merah untuk file opsional yang belum ada. Itu normal.
