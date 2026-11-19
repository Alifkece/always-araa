ambient('petals');                                // kelopak bunga jatuh pelan


// Foto/video dari config.js -> "photos". Hapus satu blok di config untuk membuang satu foto saja.
// Foto yang file-nya gagal dimuat dilewati otomatis, yang lain tetap tampil.
const items = CFG.photos || [];
let slides = [];
let index = 0;

function probe(item) {
  return new Promise((resolve) => {
    const isVideo = !!item.video;
    const el = document.createElement(isVideo ? 'video' : 'img');
    let done = false;
    const finish = (v) => { if (!done) { done = true; resolve(v); } };

    el.onload = el.onloadedmetadata = () => finish({ item, isVideo, src: el.currentSrc || el.src });
    if (isVideo) el.preload = 'metadata';
    // File lokal (local) diprioritaskan, kalau tidak ada pakai URL asli (url)
    loadMedia(el, isVideo ? item.video : item.local, isVideo ? null : item.url, isVideo ? 'vid' : 'img', () => finish(null));
    setTimeout(() => finish(null), 8000);
  });
}

function show() {
  const slide = slides[index];
  const media = $('#media');
  media.innerHTML = '';
  const el = document.createElement(slide.isVideo ? 'video' : 'img');
  el.src = slide.src;
  if (slide.isVideo) { el.controls = true; el.playsInline = true; } else { el.alt = slide.item.caption || ''; }
  media.appendChild(el);

  $('#caption').textContent = slide.item.caption || '';
  $('#count').textContent = (index + 1) + ' / ' + slides.length;
  $('#prev').hidden = index === 0;
  $('#next').hidden = index === slides.length - 1;
}
function go(step) {
  const n = index + step;
  if (n >= 0 && n < slides.length) { index = n; show(); }
}

Promise.all(items.map(probe)).then((results) => {
  slides = results.filter(Boolean);
  if (!slides.length) {
    document.querySelector('.frame').style.display = 'none';
    document.querySelector('.plate').style.display = 'none';
    document.querySelector('.pager').style.display = 'none';
    $('#empty').style.display = 'block';
    return;
  }
  show();
});

$('#prev').onclick = () => go(-1);
$('#next').onclick = () => go(1);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'ArrowRight') go(1);
});
let touchX = null;                                   // geser di layar sentuh
document.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => {
  if (touchX == null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  touchX = null;
});
