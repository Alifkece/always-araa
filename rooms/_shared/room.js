/* Helper bersama semua room. Biasanya tidak perlu diedit. */

// Data website (dari config.js)
const CFG = window.STANDALONE_CONFIG || (() => {
  try { return JSON.parse(sessionStorage.getItem('arcadeConfig')) || {}; }
  catch (e) { return {}; }
})();

const $ = (selector, root = document) => root.querySelector(selector);

// Amankan teks sebelum dimasukkan ke HTML
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

// Simpan progres kecil di browser (mis. centang bucket list)
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem('arcade_' + key);
      return v == null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('arcade_' + key, JSON.stringify(value)); } catch (e) {}
  },
};

/* ---------- TEKS ----------
   Semua kata-kata bisa diganti di config.js pada bagian "texts".
   t('quiz.retry', 'ULANGI')  -> pakai teks dari config, kalau kosong pakai default.
   {n} dst. diganti lewat parameter ketiga. */
function t(key, fallback, vars) {
  const custom = (CFG.texts && CFG.texts[key] != null) ? CFG.texts[key] : fallback;
  return String(custom).replace(/\{(\w+)\}/g, (m, name) => (vars && name in vars ? vars[name] : m));
}

// Elemen dengan atribut data-t="kunci" otomatis memakai teks dari config.js
function applyTexts() {
  document.querySelectorAll('[data-t]').forEach((el) => {
    const key = el.dataset.t;
    el.textContent = t(key, el.textContent);
  });
}
document.addEventListener('DOMContentLoaded', applyTexts);

/* ---------- MEDIA (drag & drop) ----------
   Path tanpa ekstensi (mis. assets/photos/photo1) dicoba dengan ekstensi umum satu per satu. */
const EXT = {
  img: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  aud: ['mp3', 'm4a', 'wav', 'ogg'],
  vid: ['mp4', 'webm', 'mov'],
};

function tryLoad(el, base, kind, onFail) {
  if (!base) { if (onFail) onFail(); return; }
  // Path di config relatif ke root situs, sedangkan room ada di rooms/<nama>/
  if (!/^(https?:|\/|data:|blob:|\.\.\/)/i.test(base)) base = '../../' + base;

  if (/\.[a-z0-9]{2,4}$/i.test(base)) {   // sudah ada ekstensi
    el.onerror = () => onFail && onFail();
    el.src = base;
    return;
  }
  let i = 0;
  const next = () => {
    if (i >= EXT[kind].length) { if (onFail) onFail(); return; }
    el.src = base + '.' + EXT[kind][i++];
  };
  el.onerror = next;
  next();
}

/* Coba file lokal dulu (mis. assets/photos/photo1); kalau tidak ada, pakai URL asli dari config. */
function loadMedia(el, local, remote, kind, onFail) {
  if (!local) { tryLoad(el, remote, kind, onFail); return; }
  tryLoad(el, local, kind, () => {
    if (remote) tryLoad(el, remote, kind, onFail);
    else if (onFail) onFail();
  });
}

/* ---------- BACKGROUND ----------
   Taruh gambar di assets/rooms/bg-<nama>.(jpg/png/webp) untuk mengganti background room.
   <body data-bg="music"> menentukan nama; data-fallback = gambar cadangan; data-overlay = lapisan warna. */
function setRoomBg() {
  const name = document.body.dataset.bg || 'default';
  const overlay = document.body.dataset.overlay || '';
  const fallback = document.body.dataset.fallback || '';
  const paint = (url) => {
    document.body.style.background = (overlay ? overlay + ',' : '') + `url("${url}") center / cover no-repeat fixed`;
  };
  if (fallback) paint(fallback);
  const probe = new Image();
  probe.onload = () => paint(probe.src);
  tryLoad(probe, 'assets/rooms/bg-' + name, 'img', () => {});
}
document.addEventListener('DOMContentLoaded', setRoomBg);

/* ---------- ANIMASI LATAR ----------
   ambient(['twinkle','fireflies','shooting','petals','dust'])  -> efek ringan di belakang konten. */
function ambient(types, opts = {}) {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  types = [].concat(types);
  const layer = document.createElement('div');
  layer.className = 'ambient';
  document.body.prepend(layer);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const add = (cls, css, life) => {
    const el = document.createElement('i');
    el.className = cls; el.style.cssText = css; layer.appendChild(el);
    if (life) setTimeout(() => el.remove(), life);
  };

  if (types.includes('twinkle')) for (let i = 0; i < (opts.stars || 50); i++) {
    const s = rnd(1.5, 3.2);
    add('tw', `left:${rnd(0, 100)}%;top:${rnd(0, 62)}%;width:${s}px;height:${s}px;--d:${rnd(2, 5)}s;animation-delay:${rnd(0, 4)}s`);
  }
  if (types.includes('fireflies')) for (let i = 0; i < 16; i++) {
    add('ff', `left:${rnd(0, 100)}%;top:${rnd(55, 95)}%;--dx:${rnd(-60, 60)}px;--dy:${rnd(-50, 30)}px;--d:${rnd(5, 10)}s;animation-delay:${rnd(0, 6)}s`);
  }
  if (types.includes('dust')) for (let i = 0; i < 22; i++) {
    add('dust', `left:${rnd(0, 100)}%;top:${rnd(30, 100)}%;--dx:${rnd(-40, 40)}px;--d:${rnd(9, 16)}s;animation-delay:-${rnd(0, 12)}s`);
  }
  if (types.includes('pixels')) for (let i = 0; i < 26; i++) {
    const c = ['#f0c05a', '#6fd36f', '#5ab8ff', '#ff8fc8'][i % 4];
    add('pix', `left:${rnd(0, 100)}%;top:${rnd(20, 100)}%;background:${c};--dx:${rnd(-30, 30)}px;--d:${rnd(10, 18)}s;animation-delay:-${rnd(0, 14)}s`);
  }
  if (types.includes('petals')) {
    const spawn = () => add('petal', `left:${rnd(0, 100)}%;--s:${rnd(7, 12)}px;--dx:${rnd(-90, 90)}px;--d:${rnd(7, 12)}s`, 13000);
    for (let i = 0; i < 8; i++) setTimeout(spawn, i * 700);
    setInterval(spawn, 1300);
  }
  if (types.includes('pixels')) for (let i = 0; i < 16; i++) {
    const c = ['#f0c05a', '#5fd37a', '#5ab8ff', '#ff8fc8'][i % 4];
    add('pxl', `left:${rnd(0, 100)}%;top:${rnd(10, 100)}%;background:${c};--dx:${rnd(-30, 30)}px;--d:${rnd(10, 18)}s;animation-delay:-${rnd(0, 14)}s`);
  }
  if (types.includes('shooting')) {
    const shoot = () => { add('shoot', `left:${rnd(10, 70)}%;top:${rnd(2, 30)}%`, 1600); setTimeout(shoot, rnd(4000, 9000)); };
    setTimeout(shoot, 1500);
  }
}

/* ---------- FADE MASUK ----------
   <body data-fade="#fff"> -> layar diawali warna itu lalu memudar menampilkan ruangan. */
document.addEventListener('DOMContentLoaded', () => {
  const color = document.body.dataset.fade;
  if (!color) return;
  const o = document.createElement('div');
  o.style.cssText = `position:fixed;inset:0;z-index:99;background:${color};opacity:1;transition:opacity .9s ease;pointer-events:none`;
  document.body.appendChild(o);
  requestAnimationFrame(() => requestAnimationFrame(() => { o.style.opacity = '0'; }));
  setTimeout(() => o.remove(), 1300);
});
