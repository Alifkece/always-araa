ambient('dust');                                  // debu cahaya

// Isi surat dari config.js -> "message". Diketik otomatis; ketuk kartu untuk langsung menampilkan semuanya.
const text = CFG.message || t('message.empty', '');
const out = $('#text');
const note = $('#note');
let shown = 0;
let timer = null;

function finish() {
  clearInterval(timer);
  out.textContent = text;
  note.classList.add('finished');
}
setTimeout(() => { if (note.classList.contains('finished')) return; timer = setInterval(() => {
  shown++;
  out.textContent = text.slice(0, shown);
  note.scrollTop = note.scrollHeight;
  if (shown >= text.length) finish();
}, 45); }, 800);
note.onclick = finish;
