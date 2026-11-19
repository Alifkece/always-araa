ambient('pixels');                      // butiran piksel warna-warni di perpustakaan

// Pertanyaan dari config.js -> "quiz_questions" ("answer" = nomor pilihan benar, mulai dari 0)
const questions = CFG.quiz_questions || [];
let index = 0;
let score = 0;
let results = [];              // true/false per pertanyaan

function updateHud() {
  $('#score').textContent = String(score).padStart(3, '0');
  $('#counter').textContent = Math.min(index + 1, questions.length) + '/' + questions.length;
  $('#dots').innerHTML = questions.map((q, i) =>
    `<i class="${results[i] === true ? 'good' : results[i] === false ? 'bad' : i === index ? 'on' : ''}"></i>`).join('');
}

// Peringkat dari persentase benar
function rankOf(pct) {
  if (pct >= 1) return { rank: 'S', title: t('quiz.title_s', 'PERFECT!'), color: '#f0c05a' };
  if (pct >= 0.8) return { rank: 'A', title: t('quiz.title_a', 'GREAT!'), color: '#5fd37a' };
  if (pct >= 0.6) return { rank: 'B', title: t('quiz.title_b', 'GOOD!'), color: '#5ab8ff' };
  if (pct >= 0.4) return { rank: 'C', title: t('quiz.title_c', 'OK'), color: '#ff6a7a' };
  return { rank: 'D', title: t('quiz.title_d', 'TRY AGAIN'), color: '#c44a4a' };
}

function render() {
  const stage = $('#stage');
  if (!questions.length) { stage.innerHTML = `<p class="empty-note">${esc(t('quiz.empty', ''))}</p>`; return; }

  if (index >= questions.length) {          // layar hasil
    const r = rankOf(score / questions.length);
    stage.innerHTML = `
      <div class="result">
        <div class="rtitle" style="color:${r.color}">${esc(r.title)}</div>
        <div class="scorebox">
          <small>${esc(t('quiz.final_score', 'FINAL SCORE'))}</small>
          <b>${score}</b>
          <small>${esc(t('quiz.correct', '/ {total} CORRECT', { total: questions.length }))}</small>
        </div>
        <div class="rank">&#9650; ${esc(t('quiz.rank', '{r} RANK', { r: r.rank }))} &#9650;</div>
        <button class="gold wide" id="retry">${esc(t('quiz.play_again', '\u21BA PLAY AGAIN'))}</button>
      </div>`;
    $('#retry').onclick = () => { index = 0; score = 0; results = []; render(); };
    updateHud();
    return;
  }

  const q = questions[index];
  stage.innerHTML = `
    <div class="qbox" id="qbox"><div class="qinner">
      <div class="qlabel">&#9656; ${esc(t('quiz.question_label', 'PERTANYAAN'))}</div>
      <div class="qtext">${esc(q.question)}</div>
    </div></div>
    <div class="options">${q.options.map((o, i) => `<button class="opt" data-i="${i}"><b>${'ABCD'[i] || i + 1}</b>${esc(o)}</button>`).join('')}</div>
    <div class="nextwrap"><button class="gold" id="next" style="display:none"></button></div>`;
  updateHud();

  stage.querySelectorAll('.opt').forEach((btn) => {
    btn.onclick = () => {
      const picked = Number(btn.dataset.i);
      const ok = picked === q.answer;
      stage.querySelectorAll('.opt').forEach((b) => {
        b.disabled = true;
        if (Number(b.dataset.i) === q.answer) b.classList.add('correct');
      });
      if (!ok) btn.classList.add('wrong');
      $('#qbox').classList.add(ok ? 'good' : 'bad');
      if (ok) score++;
      results[index] = ok;
      updateHud();
      const last = index === questions.length - 1;
      const next = $('#next');
      next.textContent = last ? t('quiz.results', 'RESULTS \u25B8') : t('quiz.next', 'NEXT \u25B8');
      next.style.display = 'inline-block';
      next.onclick = () => { index++; render(); };
    };
  });
}
render();
