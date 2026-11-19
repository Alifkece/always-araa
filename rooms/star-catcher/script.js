const GOAL = 10;                         // jumlah bintang yang harus ditangkap
const COLORS = ['#ffd84a', '#5ab8ff', '#ff8fc8'];
const scene = $('#scene');
const rnd = (a, b) => a + Math.random() * (b - a);
let caught = 0;
let stars = [];
let points = [];                         // posisi tiap bintang yang tertangkap (urut)
let running = true;
let spawnIn = 0;
let last = performance.now();

const updateCount = () => { $('#count').textContent = caught + ' / ' + GOAL; };

// Percikan kecil saat bintang tertangkap
function burst(x, y, color) {
  for (let i = 0; i < 9; i++) {
    const a = (Math.PI * 2 * i) / 9, d = rnd(30, 60);
    const sp = document.createElement('i');
    sp.className = 'spark';
    sp.style.cssText = `left:${x}px;top:${y}px;--c:${color};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
    scene.appendChild(sp);
    setTimeout(() => sp.remove(), 650);
  }
}

function spawn() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const el = document.createElement('div');
  el.className = 'star';
  el.style.setProperty('--c', color);
  el.innerHTML = '<div class="core">\u2605</div>';

  // Muncul dari atas atau sisi kiri, lalu melayang diagonal ke kanan-bawah
  const fromTop = Math.random() < 0.7;
  const s = {
    el, color,
    x: fromTop ? rnd(-60, scene.clientWidth * 0.75) : -40,
    y: fromTop ? -40 : rnd(0, scene.clientHeight * 0.4),
    vx: rnd(45, 75), vy: rnd(45, 70),
  };
  el.querySelector('.core').onpointerdown = (e) => {
    e.preventDefault();
    if (!running || el.classList.contains('pop')) return;
    el.classList.add('pop');
    burst(s.x, s.y, color);
    stars = stars.filter((x) => x !== s);
    setTimeout(() => el.remove(), 350);

    // Bintang tertangkap menetap sebagai titik putih
    const dot = document.createElement('i'); dot.className = 'dot';
    dot.style.left = s.x + 'px'; dot.style.top = s.y + 'px';
    scene.appendChild(dot); points.push({ x: s.x, y: s.y, dot });

    caught++; updateCount();
    $('#hint').classList.add('gone');
    const pill = $('.pill'); pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
    if (caught >= GOAL) finish();
  };
  scene.appendChild(el);
  stars.push(s);
}

function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (running) {
    spawnIn -= dt;
    if (spawnIn <= 0 && stars.length < 5) { spawn(); spawnIn = 1.0; }
    stars = stars.filter((s) => {
      s.x += s.vx * dt; s.y += s.vy * dt;
      s.el.style.left = s.x + 'px'; s.el.style.top = s.y + 'px';
      if (s.x > scene.clientWidth + 80 || s.y > scene.clientHeight + 80) { s.el.remove(); return false; }
      return true;
    });
  }
  requestAnimationFrame(loop);
}

// Selesai: langit meredup, titik-titik tersambung jadi konstelasi, muncul pesan
function finish() {
  running = false;
  stars.forEach((s) => s.el.remove());
  stars = [];
  scene.classList.add('complete');
  const pill = $('.pill');
  pill.classList.add('complete');
  pill.innerHTML = '<span>\u2728</span> <b>' + esc(t('catcher.complete', 'Complete')) + '</b>';

  const svg = $('#lines');
  svg.innerHTML = '';
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  line.setAttribute('points', points.map((p) => p.x + ',' + p.y).join(' '));
  svg.appendChild(line);
  const len = line.getTotalLength ? line.getTotalLength() : 2000;
  line.style.strokeDasharray = len;
  line.style.strokeDashoffset = len;
  line.style.transition = 'stroke-dashoffset 2.6s ease .5s';
  requestAnimationFrame(() => requestAnimationFrame(() => { line.style.strokeDashoffset = 0; }));

  setTimeout(() => { $('#again').style.display = 'block'; }, 4500);
}

function reset() {
  caught = 0; points.forEach((p) => p.dot.remove()); points = [];
  $('#lines').innerHTML = '';
  scene.classList.remove('complete');
  const pill = $('.pill'); pill.classList.remove('complete');
  pill.innerHTML = '<span>\u2728</span> <b id="count">0 / ' + GOAL + '</b>';
  $('#hint').classList.remove('gone');
  $('#again').style.display = 'none';
  running = true;
}
$('#again').onclick = reset;

requestAnimationFrame(loop);
