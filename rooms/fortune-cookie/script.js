ambient('petals');                                // kelopak sakura

// Kalimat dari config.js -> "fortunes"
const fortunes = (CFG.fortunes && CFG.fortunes.length) ? CFG.fortunes : [t('fortune.empty', '')];
const todayKey = 'fortune_' + new Date().toISOString().slice(0, 10);
let opened = store.get(todayKey, 0);
let lastIndex = -1;
let firstOpen = true;

const showCount = () => {
  $('#count').textContent = opened ? t('fortune.count', 'sudah dibuka {n}x hari ini', { n: opened }) : '';
};
showCount();

function confetti() {
  const box = $('#confetti');
  const colors = ['#f6c453', '#6fd36f', '#5ab8ff', '#ff8fc8', '#b48cff'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('i');
    const size = 5 + Math.random() * 8;
    p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${colors[i % colors.length]};` +
      `animation-duration:${2 + Math.random() * 2}s;animation-delay:${Math.random() * .5}s`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 4800);
  }
}

function openCookie() {
  const cookie = $('#cookie');
  cookie.classList.remove('crack'); void cookie.offsetWidth; cookie.classList.add('crack');

  setTimeout(() => {
    let n;
    do { n = Math.floor(Math.random() * fortunes.length); } while (fortunes.length > 1 && n === lastIndex);
    lastIndex = n;

    $('#idle').style.display = 'none';
    const paper = $('#paper');
    paper.style.display = 'block';
    paper.style.animation = 'none'; void paper.offsetWidth; paper.style.animation = '';
    $('#text').textContent = fortunes[n];

    if (firstOpen) { $('#open').textContent = t('fortune.again', 'BUKA LAGI \u25B8'); firstOpen = false; }
    opened++; store.set(todayKey, opened); showCount();
    confetti();
  }, 450);
}
$('#open').onclick = openCookie;
