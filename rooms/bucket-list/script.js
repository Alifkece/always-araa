ambient('dust');

// Daftar dari config.js -> "bucket_list" ("completed": true/false = status awal)
const items = CFG.bucket_list || [];
const list = $('#list');

// Status centang disimpan di browser; kalau jumlah item berubah, pakai status dari config
const saved = store.get('bucket', null);
const checked = items.map((it, i) => (saved && saved.length === items.length ? saved[i] : !!it.completed));

function render() {
  if (!items.length) { list.innerHTML = `<p class="empty">${esc(t('bucket.empty', ''))}</p>`; return; }
  list.innerHTML = items.map((it, i) => `
    <div class="item ${checked[i] ? 'done' : ''}" data-i="${i}">
      <span class="box">${checked[i] ? '\u2713' : ''}</span>
      <div><span class="idx">${String(i + 1).padStart(2, '0')}</span><span class="txt">${esc(it.text)}</span></div>
    </div>`).join('');
}
list.onclick = (e) => {
  const row = e.target.closest('.item');
  if (!row) return;
  const i = Number(row.dataset.i);
  checked[i] = !checked[i];
  store.set('bucket', checked);
  render();
};
render();
