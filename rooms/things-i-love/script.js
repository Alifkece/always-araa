// Daftar dari config.js -> "things_i_love". Ketuk satu baris untuk membuka.
const things = CFG.things_i_love || [];
const list = $('#list');

if (!things.length) list.innerHTML = `<p class="empty">${esc(t('things.empty', ''))}</p>`;

things.forEach((text, i) => {
  const row = document.createElement('button');
  row.className = 'row';
  row.innerHTML = `<span class="num">${i + 1}</span><span class="label">${esc(t('things.tap', 'TAP UNTUK MEMBUKA \u2726'))}</span>`;
  row.onclick = () => {
    const open = row.classList.toggle('open');
    row.querySelector('.label').textContent = open ? text : t('things.tap', 'TAP UNTUK MEMBUKA \u2726');
  };
  list.appendChild(row);
});
