
// Playlist dari config.js -> "playlist"
const songs = (CFG.playlist || []).filter((s) => s.url || s.local || s.title);
const audio = $('#audio');
let current = 0;
let shuffle = false;
let repeat = 'off';            // 'off' | 'all' | 'one'

const pad = (n) => String(n).padStart(2, '0');
const formatTime = (sec) => {
  sec = Math.floor(sec || 0);
  return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
};

// Beri tahu menu utama bahwa musik dimulai (membuka kunci ruangan lain)
function unlockRooms() {
  try { parent.postMessage({ type: 'MUSIC_STARTED' }, '*'); } catch (e) {}
}

function setPlayingUI(playing) {
  $('#ic-play').style.display = playing ? 'none' : '';
  $('#ic-pause').style.display = playing ? '' : 'none';
  $('#badge').style.display = playing ? '' : 'none';
}

function loadSong(index, autoplay) {
  current = (index + songs.length) % songs.length;
  const song = songs[current];

  $('#counter').textContent = pad(current + 1) + ' / ' + pad(songs.length);
  $('#song-title').textContent = song.title || song.name || '-';
  $('#song-artist').textContent = song.artist || '';

  const cover = $('#cover');
  cover.style.visibility = 'hidden';
  cover.onload = () => { cover.style.visibility = 'visible'; };
  loadMedia(cover, song.coverLocal, song.coverUrl, 'img');

  audio._autoplay = !!autoplay;
  audio.oncanplay = () => {
    if (audio._autoplay) { audio._autoplay = false; audio.play().catch(() => {}); }
  };
  loadMedia(audio, song.local, song.url, 'aud', () => {
    $('#song-artist').textContent = (song.artist || '') + ' - ' + t('music.missing', 'file lagu belum ada');
  });
}

function nextIndex(step) {
  if (shuffle && songs.length > 1) {
    let n; do { n = Math.floor(Math.random() * songs.length); } while (n === current);
    return n;
  }
  return current + step;
}

if (!songs.length) {
  $('#player').style.display = 'none';
  $('#empty').style.display = 'block';
} else {
  $('#btn-play').onclick = () => {
    unlockRooms();
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  };
  $('#btn-next').onclick = () => loadSong(nextIndex(1), true);
  $('#btn-prev').onclick = () => loadSong(nextIndex(-1), true);
  $('#btn-shuffle').onclick = (e) => { shuffle = !shuffle; e.currentTarget.classList.toggle('on', shuffle); };
  $('#btn-repeat').onclick = (e) => {
    repeat = repeat === 'off' ? 'all' : repeat === 'all' ? 'one' : 'off';
    e.currentTarget.classList.toggle('on', repeat !== 'off');
    e.currentTarget.style.opacity = repeat === 'one' ? '1' : '';
    e.currentTarget.title = 'Ulangi: ' + repeat;
  };

  audio.onplay = () => { setPlayingUI(true); unlockRooms(); };
  audio.onpause = () => setPlayingUI(false);
  audio.onended = () => {
    if (repeat === 'one') { audio.currentTime = 0; audio.play().catch(() => {}); return; }
    const last = current === songs.length - 1;
    if (last && repeat === 'off' && !shuffle) { setPlayingUI(false); return; }
    loadSong(nextIndex(1), true);
  };
  audio.ontimeupdate = () => {
    const pct = audio.duration ? audio.currentTime / audio.duration * 100 : 0;
    $('#bar-fill').style.width = pct + '%';
    $('#bar-knob').style.left = pct + '%';
    $('#t-now').textContent = formatTime(audio.currentTime);
    $('#t-total').textContent = formatTime(audio.duration);
  };
  audio.onloadedmetadata = () => { $('#t-total').textContent = formatTime(audio.duration); };
  $('#bar').onclick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (audio.duration) audio.currentTime = (e.clientX - rect.left) / rect.width * audio.duration;
  };

  loadSong(0, false);
}
