ambient(['twinkle', 'shooting', 'fireflies']);   // latar: bintang berkelip, bintang jatuh, kunang-kunang

// Tanggal jadian dari config.js -> "anniversary_date" (YYYY-MM-DD)
const start = CFG.anniversary_date ? new Date(CFG.anniversary_date + 'T00:00:00') : null;
const pad2 = (n) => String(n).padStart(2, '0');

// Selisih tahun / bulan / hari secara kalender
function calendarDiff(from, to) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) { months--; days += new Date(to.getFullYear(), to.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}

function tick() {
  const now = new Date();
  const d = calendarDiff(start, now);
  $('#y').textContent = d.years;
  $('#m').textContent = d.months;
  $('#d').textContent = d.days;
  $('#hh').textContent = pad2(now.getHours());
  $('#mm').textContent = pad2(now.getMinutes());
  $('#ss').textContent = pad2(now.getSeconds());
}

if (!start || isNaN(start)) {
  document.querySelector('.counters').style.display = 'none';
  document.querySelector('.clock').style.display = 'none';
  $('#empty').style.display = 'block';
} else {
  tick();
  setInterval(tick, 1000);
}
