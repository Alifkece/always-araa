/* =====================================================================
   CONFIG - SEMUA isi website diedit di file ini (tanpa database).

   [1] FOTO / LAGU  (tinggal timpa file, nama harus sama, foto pakai .jpg)
       assets/moments/photo1.jpg ... photo5.jpg   -> foto halaman Moments
       assets/atlas/place1.jpg ... place3.jpg     -> foto lokasi di Atlas
       assets/music/song1.mp3, song2.mp3          -> lagu
       assets/covers/cover1.jpg, cover2.jpg       -> cover lagu (gambar bulat)
       assets/rooms/bg-*.webp                     -> background tiap ruangan (opsional)
     Tiap item punya "local" (file di foldermu, dipakai duluan) dan "url" (cadangan online).

   [2] TEKS
       - Cerita: "recipient_name", "message", "quiz_questions", "bucket_list", "things_i_love",
         "fortunes", "atlas" (label + catatan tiap lokasi), "playlist" (judul + artis), "photos" (caption).
       - Semua tun lain di website (halaman password, menu, tombol, judul tiap ruangan)
         ada di bagian "texts" paling bawah. Ganti nilainya saja; {n} dan {total} jangan dihapus.

   [3] LAIN-LAIN
       "password", "password_hint", "anniversary_date" (YYYY-MM-DD).
       Tambah foto/lagu baru: salin satu blok, beri nama file baru (mis. photo6).
   ===================================================================== */
window.STANDALONE_CONFIG = {
  "id": "arcade-test",
  "recipient_name": "Dede Araa",
  "photos": [
    {
      "local": "assets/moments/photo1",
      "url": "https://arcade-assets.for-you-always.my.id/1773179015146-sklffd.jpg",
      "caption": "That day, when we are preparing. And getting ready for yet another adventures."
    },
    {
      "local": "assets/moments/photo2",
      "url": "https://arcade-assets.for-you-always.my.id/1773179015567-5rpj1.jpg",
      "caption": "You suprising me at the airport."
    },
    {
      "local": "assets/moments/photo3",
      "url": "https://arcade-assets.for-you-always.my.id/1773179015985-xywypt.jpg",
      "caption": "We're celebrating your birhtday."
    },
    {
      "local": "assets/moments/photo4",
      "url": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773265604859-5pj1pf.png",
      "caption": "Our favs places."
    },
    {
      "local": "assets/moments/photo5",
      "url": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773558256666-os0knr.jpg",
      "caption": "Our adventures at berlin."
    }
  ],
  "playlist": [
    {
      "type": "mp3",
      "local": "assets/music/song1",
      "url": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773434144347-dh35kf.mp3",
      "name": "Always With Me - Spirited Away (Piano) (1).mp3",
      "coverLocal": "assets/covers/cover1",
      "coverUrl": "https://arcade-assets.for-you-always.my.id/1773193985159-wlvvvb.jpg",
      "title": "Masa ini, nanti, dan masa indah lainnya",
      "artist": "Nuca"
    },
    {
      "type": "mp3",
      "local": "assets/music/song2",
      "url": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773558431055-47k3d.mp3",
      "name": "Baby I'm Yours - Arctic Monkeys.mp3",
      "coverLocal": "assets/covers/cover2",
      "coverUrl": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773558496799-57zl4b.png",
      "title": "Bercinta lewat kata",
      "artist": "donne maula"
    }
  ],
  "message": "alooo sayanggg, happy anniversary yaaa hihii, wahhh udah lama banget yaa kita bareng bareng, abanggg seneng banget bisa sama dedee sampe sejauh ini, abanggg bersyukur  bisa dapetin dedee, jangann pernah adaa kepikiran buat pergi yaa? , tenang ajaa abangg akan selalu usahain dedee selagi abanggg mampu, dan abangg gaa akan pernah nyerah atas semua yang kita perjuangin dalam hubungan ini, abangg harap kita bisa bertahan lama bahkan selamanya, izinin abanggg jadi sandaran hidup kamu selamanya yaa? abangg janji bakalan bahagian dedee, dan dedee berhak dapetin itu semua, abangg tau kok dedee itu baik, cantikk, lucuu, imutt, gemoyy, bikin abangg nyaman juga, jadi abangg bakalan serius sama dedee hihii, eumm meskipun abanggg gagal dalam segala hal buat dedee, maapin abangg yahh klo abangg belum bisa jadi contoh yang baik buat dedee, abangg harus belajar lagi buat jadi yang baik buat dedee, makasiii udaa mau nerima abanggg yahh sayanggg abangg harap dedee bisa terus sama abangg hihii, sekali lagi happy anniversary cantikkkk🤍🤍",
  "anniversary_date": "2024-08-20",
  "bucket_list": [
    {
      "text": "Liburan ke korea bareng",
      "completed": false
    },
    {
      "text": "Pergi ke Rinjani bareng",
      "completed": true
    },
    {
      "text": "Nikah hihi!!",
      "completed": false
    },
    {
      "text": "Pergi nightride tanpa arah tujuan",
      "completed": false
    }
  ],
  "quiz_questions": [
    {
      "question": "Apa makanan favorites aku?",
      "options": [
        "sushi",
        "sate taichan",
        "Mie Ayam",
        "Indomie Goreng"
      ],
      "answer": 0
    },
    {
      "question": "Aku pintar",
      "options": [
        "1",
        "2",
        "4",
        "3"
      ],
      "answer": 0
    }
  ],
  "things_i_love": [
    "Aku suka bagaimana cara kamu bisa tenangin aku ketika aku lagi panik",
    "Aku suka ketika kamu berani tunjukin sifat takut kamu ke aku. ",
    "Aku suka ketika kamu lagi serius mikirin sesuatu hal. kamu keliatan lebih cool :DD"
  ],
  "atlas": {
    "pins": [
      {
        "label": "Our first dates ever.",
        "coords": [
          -6.1702144,
          106.725376
        ],
        "photoLocal": "assets/atlas/place1",
        "photo": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773515913759-s0r4mr.jpg",
        "note": "Date pertama kita, kamu wangi banget dan aku masih ingat semua scene2 di sore itu.."
      },
      {
        "label": "Rooftop dates.",
        "coords": [
          -6.8244669,
          107.4356811
        ],
        "photoLocal": "assets/atlas/place2",
        "photo": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773516942647-q9nc2l.jpg",
        "note": "Kita deeptalk di atas rooftop sambil ngeliatin sibuk-nya kota dari atas."
      },
      {
        "label": "Our first trip ever.",
        "coords": [
          -6.3227654,
          106.9718338
        ],
        "photoLocal": "assets/atlas/place3",
        "photo": "https://arcade-edition.aldoramadhan16.workers.dev/files/1773517501534-xt77ea.jpg",
        "note": "Our first trip ever, and we're dancing while the sun rises on us."
      }
    ]
  },
  "active_apps": {
    "music": true,
    "journey": true,
    "moments": true,
    "bucket_list": true,
    "quiz": true,
    "message": true,
    "my_word": true,
    "my-word": true,
    "things_i_love": true,
    "atlas": true,
    "stargazing": true,
    "catcher": true,
    "fortune_cookie": true,
    "fortune-cookie": true,
    "star-catcher": true
  },
  "password": "2008",
  "password_hint": "Dimana kita pertama bertemu?",
  "studioPassword": "2008",
  "submitted_at": "2026-03-15T08:10:56.227Z",
  "fortunes": [
    "Hari ini tidak harus sempurna untuk menjadi hari yang baik buat kalian.",
    "Hal paling berani yang bisa kamu lakukan adalah jujur tentang apa yang kamu rasakan.",
    "Hari ini akan ada kabar baik yang datang tanpa diduga.",
    "Seseorang sedang memikirkanmu sambil tersenyum.",
    "Hal kecil yang kamu lakukan hari ini berarti besar untuk orang lain.",
    "Petualangan berikutnya sudah dekat. Siapkan koper."
  ],
  "journey": [],
  "texts": {
    "main.page_title": "For You, Always. — Arcade Edition",
    "main.loading_for": "For ",
    "main.loading_suffix": ", Always.",
    "main.lock_title": "This gift is locked",
    "main.lock_subtitle": "Enter the secret code to open it",
    "main.lock_placeholder": "· · · · · · ·",
    "main.lock_button": "OPEN GIFT",
    "main.hint_label": "Hint:",
    "main.wrong_password": "Wrong password. Try again 💔",
    "main.no_gift": "No gift ID found. Please check your link.",
    "menu.sign_prefix": "For ",
    "menu.sign_suffix": ", Always",
    "menu.music": "MUSIC",
    "menu.journey": "JOURNEY",
    "menu.moments": "MOMENTS",
    "menu.quiz": "QUIZ",
    "menu.atlas": "ATLAS",
    "menu.catcher": "CATCHER",
    "menu.fortune": "FORTUNE",
    "menu.things": "THINGS",
    "menu.bucket": "BUCKET",
    "menu.message": "MESSAGE",
    "menu.my_word": "MY WORD",
    "moments.empty": "Belum ada foto yang bisa dimuat. Cek \"photos\" di config.js atau taruh file di assets/photos/.",
    "music.play": "PLAY",
    "music.pause": "PAUSE",
    "music.missing": "file lagu belum ada di assets/music/",
    "music.empty": "Belum ada lagu. Isi \"playlist\" di config.js",
    "music.now_playing": "NOW PLAYING",
    "journey.title": "Our Journey",
    "journey.years": "Years",
    "journey.months": "Months",
    "journey.days": "Days",
    "journey.caption": "of shared memories",
    "journey.empty": "Isi \"anniversary_date\" di config.js (format YYYY-MM-DD)",
    "quiz.score_label": "SKOR",
    "quiz.question_label": "PERTANYAAN",
    "quiz.counter_label": "SOAL",
    "quiz.empty": "Isi \"quiz_questions\" di config.js",
    "atlas.window_title": "ATLAS OF US",
    "atlas.places": "PLACES",
    "atlas.km": "KM",
    "atlas.location": "Location {n} of {total}",
    "atlas.prev": "PREV",
    "atlas.next": "NEXT",
    "atlas.needs_internet": "Peta butuh internet (OpenStreetMap)",
    "catcher.again": "MAIN LAGI",
    "fortune.title_jp": "運命のクッキー",
    "fortune.title": "FORTUNE COOKIE",
    "fortune.again": "BUKA LAGI ▸",
    "fortune.count": "sudah dibuka {n}x hari ini",
    "fortune.empty": "Isi \"fortunes\" di config.js",
    "things.title": "THINGS I LOVE ABOUT YOU",
    "things.tap": "TAP UNTUK MEMBUKA ✦",
    "things.empty": "Isi \"things_i_love\" di config.js",
    "bucket.small": "our little",
    "bucket.title": "Bucket List",
    "bucket.empty": "Isi \"bucket_list\" di config.js",
    "message.empty": "Isi \"message\" di config.js",
    "quiz.next": "NEXT ▸",
    "quiz.results": "RESULTS ▸",
    "quiz.final_score": "FINAL SCORE",
    "quiz.correct": "/ {total} CORRECT",
    "quiz.rank": "{r} RANK",
    "quiz.play_again": "↺ PLAY AGAIN",
    "quiz.t_s": "PERFECT!",
    "quiz.t_a": "GREAT!",
    "quiz.t_b": "GOOD!",
    "quiz.t_c": "OK",
    "quiz.t_d": "TRY AGAIN",
    "atlas.loading": "Preparing your journey...",
    "atlas.almost": "Almost there...",
    "catcher.hint": "Catch the falling stars...",
    "catcher.complete": "Complete",
    "catcher.message": "You are my brightest star.",
    "fortune.press": "PRESS THE BUTTON",
    "fortune.open": "OPEN COOKIE",
    "quiz.title_s": "PERFECT!",
    "quiz.title_a": "GREAT!",
    "quiz.title_b": "GOOD!",
    "quiz.title_c": "OK",
    "quiz.title_d": "TRY AGAIN"
  }
};
