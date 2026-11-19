// Pin dari config.js -> atlas.pins  (coords: [latitude, longitude])
const pins = (CFG.atlas && CFG.atlas.pins) || [];
const total = pins.length;
let current = 0;                // 0 = tampilan semua lokasi, 1..n = lokasi ke-n
let map = null;
let markers = [];

// Total jarak antar pin berurutan (km)
function haversine(a, b) {
  const rad = (x) => x * Math.PI / 180, R = 6371;
  const dLat = rad(b[0] - a[0]), dLon = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
let totalKm = 0;
for (let i = 1; i < total; i++) totalKm += haversine(pins[i - 1].coords, pins[i].coords);
$('#places').textContent = total;
$('#km').textContent = Math.round(totalKm);

function markActive() {
  markers.forEach((m, i) => { const el = m.getElement(); if (el) el.classList.toggle('active', i === current - 1); });
}

function showDialog(p) {
  $('#dlg-title').textContent = '\u2191 ' + t('atlas.location', 'Location {n} of {total}', { n: current, total });
  $('#dlg-label').textContent = p.label;
  $('#dlg-note').textContent = p.note;
  const img = $('#dlg-photo');
  img.style.display = '';
  loadMedia(img, p.photoLocal, p.photo, 'img', () => { img.style.display = 'none'; });
  const dlg = $('#dialog');
  dlg.classList.remove('hide', 'pop'); void dlg.offsetWidth; dlg.classList.add('pop');
}

// Pindah lokasi: 0 = lihat semua, 1..n = lokasi tertentu (peta terbang ke sana, lalu dialog muncul)
let dialogTimer = null;
function go(n) {
  if (!total) return;
  current = ((n % (total + 1)) + (total + 1)) % (total + 1);
  $('#page').textContent = current + ' / ' + total;
  clearTimeout(dialogTimer);
  $('#dialog').classList.add('hide');
  markActive();

  if (current === 0) {
    if (map) map.flyToBounds(pins.map((p) => p.coords), { padding: [50, 50], duration: 1.2 });
    return;
  }
  const p = pins[current - 1];
  if (map) map.flyTo(p.coords, 12, { duration: 1.2 });
  dialogTimer = setTimeout(() => showDialog(p), map ? 1300 : 0);
}

$('#prev').onclick = () => go(current - 1);
$('#next').onclick = () => go(current + 1);
$('#dlg-close').onclick = () => go(0);

/* ---------- Loading + peta (Leaflet/OpenStreetMap, butuh internet) ---------- */
let leafletReady = false, leafletFailed = false, progress = 0;
const loading = $('#loading');
const loadTimer = setInterval(() => {
  const cap = (leafletReady || leafletFailed) ? 100 : 88;       // tahan di 88% sampai peta siap
  progress = Math.min(cap, progress + 3 + Math.random() * 4);
  const pct = Math.floor(progress);
  $('#lfill').style.width = pct + '%';
  $('#lpct').textContent = pct + '%';
  $('#load-text').textContent = pct >= 50 ? t('atlas.almost', 'Almost there...') : t('atlas.loading', 'Preparing your journey...');
  if (pct >= 100) {
    clearInterval(loadTimer);
    setTimeout(() => loading.classList.add('done'), 300);
    if (leafletReady) go(0);
  }
}, 90);

const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
document.head.appendChild(css);

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
script.onerror = () => {
  leafletFailed = true;
  $('#map').innerHTML = `<div class="map-note">${esc(t('atlas.needs_internet', 'Peta butuh internet'))}</div>`;
};
script.onload = () => {
  if (!total) { leafletFailed = true; return; }
  map = L.map('map', { zoomControl: false });
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
  map.fitBounds(pins.map((p) => p.coords), { padding: [50, 50] });

  // Garis rute putus-putus merah antar lokasi
  if (total > 1) {
    L.polyline(pins.map((p) => p.coords), { color: '#d9302a', weight: 3, opacity: .9, dashArray: '8 7', className: 'route' }).addTo(map);
  }
  // Pin bernomor (yang dipilih berubah biru)
  pins.forEach((p, i) => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="pin-wrap"><div class="pin-marker"><b>${i + 1}</b></div></div>`,
      iconSize: [26, 32], iconAnchor: [13, 30],
    });
    markers.push(L.marker(p.coords, { icon }).addTo(map).on('click', () => go(i + 1)));
  });
  leafletReady = true;
};
document.body.appendChild(script);

$('#page').textContent = '0 / ' + total;
