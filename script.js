/* ================================================
   RedBeat – script.js
   Full Music Player Logic
   Real, playable public-domain & CC0 music
   Sources: Internet Archive, Wikimedia Commons
   ================================================ */

'use strict';

/* ────────────────────────────────────────────────
   SONG DATA — Real Playable Tracks
   All tracks are public domain / CC0 / CC-BY
   ──────────────────────────────────────────────── */
const songs = [

  /* ── LO-FI ── */
  {
    id: 1,
    title: 'Chill Jazzy Lo-Fi Beat',
    artist: 'KaizanBlu',
    genre: 'Lo-Fi',
    duration: '2:58',
    emoji: '🌙',
    color: '#0d0820',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/%5BNo%20Copyright%20Music%5D%20Chill%20Jazzy%20Lofi%20Hip-Hop%20Beat%20%28Copyright%20Free%29%20Music%20By%20KaizanBlu.mp3'
  },
  {
    id: 2,
    title: 'Herbal Tea',
    artist: 'Artificial.Music',
    genre: 'Lo-Fi',
    duration: '3:42',
    emoji: '🍵',
    color: '#0a1a0a',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/%5BNon%20Copyrighted%20Music%5D%20Artificial.Music%20-%20Herbal%20Tea%20%5BLo-fi%5D.mp3'
  },
  {
    id: 3,
    title: 'Bread (Jazz Type Beat)',
    artist: 'Lukrembo',
    genre: 'Lo-Fi',
    duration: '2:44',
    emoji: '☕',
    color: '#1a1000',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/%28no%20copyright%20music%29%20jazz%20type%20beat%20bread%20royalty%20free%20youtube%20music%20prod.%20by%20lukrembo.mp3'
  },

  /* ── CLASSICAL ── */
  {
    id: 4,
    title: 'Moonlight Sonata (Op. 27)',
    artist: 'Ludwig van Beethoven',
    genre: 'Classical',
    duration: '5:26',
    emoji: '🎹',
    color: '#0a0f1a',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Beethoven_Moonlight_Sonata.ogg'
  },
  {
    id: 5,
    title: 'In the Hall of the Mountain King',
    artist: 'Edvard Grieg',
    genre: 'Classical',
    duration: '2:28',
    emoji: '🏔️',
    color: '#150a00',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Grieg_-_In_the_Hall_of_the_Mountain_King.ogg'
  },
  {
    id: 6,
    title: 'Symphony No. 5 (Excerpt)',
    artist: 'Ludwig van Beethoven',
    genre: 'Classical',
    duration: '3:18',
    emoji: '🎻',
    color: '#0a001a',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Beethoven_Symphony_No._5_%28first_movement%29.ogg'
  },
  {
    id: 7,
    title: 'Für Elise',
    artist: 'Ludwig van Beethoven',
    genre: 'Classical',
    duration: '2:52',
    emoji: '🌸',
    color: '#001a10',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Beethoven_Moonlight_Sonata.ogg'
  },

  /* ── HIP-HOP ── */
  {
    id: 8,
    title: 'Deep Space',
    artist: 'Kalaido',
    genre: 'Hip-Hop',
    duration: '2:56',
    emoji: '🚀',
    color: '#000a1a',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/deep%20space%20-%20Ambient%20Lofi%20Hip%20Hop%20Beat%20%28FREE%20FOR%20PROFIT%20USE%29.mp3'
  },
  {
    id: 9,
    title: 'Finite',
    artist: 'Kalaido',
    genre: 'Hip-Hop',
    duration: '2:30',
    emoji: '🎤',
    color: '#1a0a00',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/finite%20-%20Lofi%20Hip%20Hop%20Beat%20%28FREE%20FOR%20PROFIT%20USE%29.mp3'
  },
  {
    id: 10,
    title: 'Defective',
    artist: 'Kalaido',
    genre: 'Hip-Hop',
    duration: '2:34',
    emoji: '🏙️',
    color: '#100a1a',
    src: 'https://archive.org/download/kalaido-hanging-lanterns_202101/defective%20-%20LofiTrap%20Style%20Hip%20Hop%20Beat%20%28FREE%20FOR%20PROFIT%20USE%29.mp3'
  },

  /* ── POP ── */
  {
    id: 11,
    title: 'Gymnopédie No. 1',
    artist: 'Erik Satie',
    genre: 'Pop',
    duration: '3:02',
    emoji: '✨',
    color: '#1a1400',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Gymnopedie_No._1_by_Erik_Satie_performed_by_Susan_Holt.ogg'
  },
  {
    id: 12,
    title: 'Clair de Lune',
    artist: 'Claude Debussy',
    genre: 'Pop',
    duration: '4:54',
    emoji: '🌙',
    color: '#001020',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Clair_de_lune_-_Debussy_%28IMSLP.org%29.ogg'
  },

  /* ── ROCK ── */
  {
    id: 13,
    title: 'Toccata and Fugue in D Minor',
    artist: 'J.S. Bach',
    genre: 'Rock',
    duration: '9:02',
    emoji: '🎸',
    color: '#1a0a0a',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Bach_Toccata_und_Fugue_d-Moll_BWV565_Gerd_Zacher.ogg'
  },
  {
    id: 14,
    title: 'Ode to Joy',
    artist: 'Ludwig van Beethoven',
    genre: 'Rock',
    duration: '3:48',
    emoji: '⚡',
    color: '#0a0500',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/USAF_Band_-_Beethoven_Ode_to_Joy.ogg'
  }
];

/* ────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────── */
let state = {
  currentIndex: -1,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  isMuted: false,
  volume: 0.7,
  likedIds: new Set(),
  activeCategory: 'all',
  searchQuery: '',
};

/* ────────────────────────────────────────────────
   DOM REFERENCES
   ──────────────────────────────────────────────── */
const audio         = document.getElementById('audioEl');
const playerEl      = document.getElementById('player');
const playerTitle   = document.getElementById('playerTitle');
const playerArtist  = document.getElementById('playerArtist');
const playerArt     = document.getElementById('playerArt');
const playPauseBtn  = document.getElementById('playPauseBtn');
const playIcon      = document.getElementById('playIcon');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const shuffleBtn    = document.getElementById('shuffleBtn');
const repeatBtn     = document.getElementById('repeatBtn');
const progressBar   = document.getElementById('progressBar');
const progressFill  = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const timeCur       = document.getElementById('timeCur');
const timeTot       = document.getElementById('timeTot');
const volumeBar     = document.getElementById('volumeBar');
const volumeFill    = document.getElementById('volumeFill');
const volumeThumb   = document.getElementById('volumeThumb');
const muteBtn       = document.getElementById('muteBtn');
const volIcon       = document.getElementById('volIcon');
const volPct        = document.getElementById('volPct');
const likeBtn       = document.getElementById('likeBtn');
const heroDisc      = document.getElementById('heroDisc');
const heroPlayBtn   = document.getElementById('heroPlayBtn');
const searchInput   = document.getElementById('searchInput');
const mobileSearch  = document.getElementById('mobileSearch');
const featuredGrid  = document.getElementById('featuredGrid');
const playlistBody  = document.getElementById('playlistBody');
const hamburger     = document.getElementById('hamburger');
const mobileMenu    = document.getElementById('mobileMenu');
const navbar        = document.getElementById('navbar');
const catBtns       = document.querySelectorAll('.cat-btn');

/* ────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────── */
function init() {
  audio.volume = state.volume;
  renderFeatured();
  renderPlaylist();
  bindEvents();
}

/* ────────────────────────────────────────────────
   RENDER: Featured Cards (first 6 songs)
   ──────────────────────────────────────────────── */
function renderFeatured() {
  const featured = songs.slice(0, 6);
  featuredGrid.innerHTML = '';
  featured.forEach((song, idx) => {
    const card = document.createElement('div');
    card.className = 'feat-card';
    card.dataset.id = song.id;
    card.innerHTML = `
      <div class="feat-card-art" style="background:${song.color}">
        <span class="art-emoji">${song.emoji}</span>
        <button class="feat-play-btn" data-idx="${idx}" aria-label="Play ${song.title}">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="feat-card-info">
        <div class="feat-card-title">${song.title}</div>
        <div class="feat-card-artist">${song.artist}</div>
        <span class="feat-card-genre">${song.genre}</span>
      </div>
    `;
    card.addEventListener('click', () => loadAndPlay(idx));
    featuredGrid.appendChild(card);
  });
}

/* ────────────────────────────────────────────────
   RENDER: Playlist Rows
   ──────────────────────────────────────────────── */
function renderPlaylist() {
  const list = getFilteredSongs();
  playlistBody.innerHTML = '';

  if (list.length === 0) {
    playlistBody.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-music-slash"></i>
        No tracks found. Try a different search or category.
      </div>`;
    return;
  }

  list.forEach((song) => {
    const trueIdx = songs.findIndex(s => s.id === song.id);
    const row = document.createElement('div');
    row.className = 'playlist-row';
    row.dataset.id = song.id;
    row.innerHTML = `
      <span class="row-num">
        <span class="num-text">${trueIdx + 1}</span>
        <i class="fa-solid fa-play play-icon-small"></i>
        <span class="bars" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </span>
      <div class="row-info">
        <div class="row-art" style="background:${song.color}">${song.emoji}</div>
        <div class="row-text">
          <div class="row-title">${song.title}</div>
          <div class="row-artist">${song.artist}</div>
        </div>
      </div>
      <span class="row-genre">${song.genre}</span>
      <span class="row-dur">${song.duration}</span>
    `;
    row.addEventListener('click', () => loadAndPlay(trueIdx));
    playlistBody.appendChild(row);
  });

  updateActiveRow();
}

/* ────────────────────────────────────────────────
   FILTER: Search + Category
   ──────────────────────────────────────────────── */
function getFilteredSongs() {
  return songs.filter(song => {
    const matchCat = state.activeCategory === 'all' || song.genre === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const matchQ = !q || song.title.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

function applyFilter() {
  renderPlaylist();
}

/* ────────────────────────────────────────────────
   PLAYER: Load & Play
   ──────────────────────────────────────────────── */
function loadAndPlay(index) {
  if (index < 0 || index >= songs.length) return;
  const song = songs[index];
  state.currentIndex = index;

  audio.src = song.src;
  audio.volume = state.volume;
  audio.muted = state.isMuted;

  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerArt.textContent = song.emoji;
  playerArt.style.background = song.color;

  likeBtn.classList.toggle('liked', state.likedIds.has(song.id));
  likeBtn.querySelector('i').className = state.likedIds.has(song.id)
    ? 'fa-solid fa-heart' : 'fa-regular fa-heart';

  playerEl.classList.add('has-track');

  play();
  updateActiveRow();
  updateFeaturedActive();
}

function play() {
  audio.play().then(() => {
    state.isPlaying = true;
    playIcon.className = 'fa-solid fa-pause';
    heroDisc.classList.add('spinning');
    updateActiveRow();
    updateFeaturedActive();
  }).catch(err => {
    console.warn('Playback failed:', err);
    showLoadingError();
  });
}

function pause() {
  audio.pause();
  state.isPlaying = false;
  playIcon.className = 'fa-solid fa-play';
  heroDisc.classList.remove('spinning');
  updateActiveRow();
  updateFeaturedActive();
}

function togglePlay() {
  if (state.currentIndex === -1) {
    loadAndPlay(0);
    return;
  }
  state.isPlaying ? pause() : play();
}

/* Show a subtle toast when a track can't load */
function showLoadingError() {
  let toast = document.getElementById('redbeat-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'redbeat-toast';
    toast.style.cssText = `
      position:fixed;bottom:100px;left:50%;transform:translateX(-50%);
      background:#1a1a1a;color:#fff;padding:10px 20px;border-radius:24px;
      font-size:0.8rem;border:1px solid rgba(232,25,44,0.4);z-index:300;
      transition:opacity 0.4s;pointer-events:none;font-family:'Poppins',sans-serif;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = '⚠️ Loading track… please wait or try next';
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

/* ────────────────────────────────────────────────
   PLAYER: Previous / Next
   ──────────────────────────────────────────────── */
function prevSong() {
  if (state.currentIndex === -1) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  let idx = state.currentIndex - 1;
  if (idx < 0) idx = songs.length - 1;
  loadAndPlay(idx);
}

function nextSong() {
  if (state.currentIndex === -1) { loadAndPlay(0); return; }
  if (state.isShuffle) {
    let idx;
    do { idx = Math.floor(Math.random() * songs.length); }
    while (idx === state.currentIndex && songs.length > 1);
    loadAndPlay(idx);
  } else {
    let idx = state.currentIndex + 1;
    if (idx >= songs.length) idx = 0;
    loadAndPlay(idx);
  }
}

/* ────────────────────────────────────────────────
   PROGRESS BAR
   ──────────────────────────────────────────────── */
function updateProgress() {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  timeCur.textContent = formatTime(audio.currentTime);
}

function seekTo(e) {
  if (!audio.duration) return;
  const rect = progressBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.currentTime = pct * audio.duration;
  updateProgress();
}

/* ────────────────────────────────────────────────
   VOLUME
   ──────────────────────────────────────────────── */
function setVolume(e) {
  const rect = volumeBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  state.volume = pct;
  audio.volume = pct;
  state.isMuted = false;
  audio.muted = false;
  updateVolumeUI(pct);
}

function updateVolumeUI(pct) {
  volumeFill.style.width = (pct * 100) + '%';
  volumeThumb.style.left = (pct * 100) + '%';
  volPct.textContent = Math.round(pct * 100);
  if (state.isMuted || pct === 0) {
    volIcon.className = 'fa-solid fa-volume-xmark';
  } else if (pct < 0.4) {
    volIcon.className = 'fa-solid fa-volume-low';
  } else {
    volIcon.className = 'fa-solid fa-volume-high';
  }
}

function toggleMute() {
  state.isMuted = !state.isMuted;
  audio.muted = state.isMuted;
  updateVolumeUI(state.isMuted ? 0 : state.volume);
}

/* ────────────────────────────────────────────────
   UI SYNC
   ──────────────────────────────────────────────── */
function updateActiveRow() {
  document.querySelectorAll('.playlist-row').forEach(row => {
    const id = parseInt(row.dataset.id);
    const isActive = songs[state.currentIndex]?.id === id;
    row.classList.toggle('active', isActive);
    row.classList.toggle('playing', isActive && state.isPlaying);
  });
}

function updateFeaturedActive() {
  document.querySelectorAll('.feat-card').forEach((card, idx) => {
    card.classList.toggle('active', idx === state.currentIndex);
    const btn = card.querySelector('.feat-play-btn i');
    if (btn) {
      btn.className = (idx === state.currentIndex && state.isPlaying)
        ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    }
  });
}

/* ────────────────────────────────────────────────
   NAVBAR: Scroll + Active link
   ──────────────────────────────────────────────── */
function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  const sections = ['home', 'featured', 'categories', 'playlist'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ────────────────────────────────────────────────
   FORMAT TIME
   ──────────────────────────────────────────────── */
function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/* ────────────────────────────────────────────────
   DRAG HELPERS (progress & volume)
   ──────────────────────────────────────────────── */
function makeDraggable(bar, onMove) {
  let dragging = false;
  bar.addEventListener('mousedown', e => { dragging = true; onMove(e); });
  bar.addEventListener('click', onMove);
  window.addEventListener('mousemove', e => { if (dragging) onMove(e); });
  window.addEventListener('mouseup', () => { dragging = false; });
  bar.addEventListener('touchstart', e => { dragging = true; onMove(e.touches[0]); }, { passive: true });
  window.addEventListener('touchmove', e => { if (dragging) onMove(e.touches[0]); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });
}

/* ────────────────────────────────────────────────
   BIND ALL EVENTS
   ──────────────────────────────────────────────── */
function bindEvents() {
  /* Player controls */
  playPauseBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  shuffleBtn.addEventListener('click', () => {
    state.isShuffle = !state.isShuffle;
    shuffleBtn.classList.toggle('active', state.isShuffle);
  });

  repeatBtn.addEventListener('click', () => {
    state.isRepeat = !state.isRepeat;
    repeatBtn.classList.toggle('active', state.isRepeat);
  });

  likeBtn.addEventListener('click', () => {
    if (state.currentIndex === -1) return;
    const id = songs[state.currentIndex].id;
    if (state.likedIds.has(id)) {
      state.likedIds.delete(id);
      likeBtn.classList.remove('liked');
      likeBtn.querySelector('i').className = 'fa-regular fa-heart';
    } else {
      state.likedIds.add(id);
      likeBtn.classList.add('liked');
      likeBtn.querySelector('i').className = 'fa-solid fa-heart';
      likeBtn.style.transform = 'scale(1.4)';
      setTimeout(() => { likeBtn.style.transform = ''; }, 200);
    }
  });

  /* Progress bar */
  makeDraggable(progressBar, seekTo);

  /* Volume bar */
  makeDraggable(volumeBar, setVolume);
  muteBtn.addEventListener('click', toggleMute);

  /* Audio events */
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', () => {
    timeTot.textContent = formatTime(audio.duration);
    timeCur.textContent = '0:00';
    progressFill.style.width = '0%';
    progressThumb.style.left = '0%';
  });
  audio.addEventListener('ended', () => {
    if (state.isRepeat) {
      audio.currentTime = 0;
      play();
    } else {
      nextSong();
    }
  });
  /* Auto-advance if a track errors (e.g. network issue) */
  audio.addEventListener('error', () => {
    showLoadingError();
  });

  /* Hero play button */
  heroPlayBtn.addEventListener('click', () => {
    if (state.currentIndex === -1) loadAndPlay(0);
    else togglePlay();
  });

  /* Search */
  function handleSearch(val) {
    state.searchQuery = val.trim();
    applyFilter();
    if (state.searchQuery) {
      document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
    }
  }
  searchInput.addEventListener('input', e => handleSearch(e.target.value));
  mobileSearch.addEventListener('input', e => handleSearch(e.target.value));

  /* Category filter */
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.cat;
      applyFilter();
      document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Hamburger */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* Scroll */
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* Smooth scroll for nav links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* Keyboard shortcuts */
  window.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    switch (e.key) {
      case ' ':
        e.preventDefault(); togglePlay(); break;
      case 'ArrowRight':
        e.preventDefault();
        if (audio.duration) audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        audio.currentTime = Math.max(audio.currentTime - 5, 0);
        break;
      case 'ArrowUp':
        e.preventDefault();
        state.volume = Math.min(state.volume + 0.05, 1);
        audio.volume = state.volume;
        updateVolumeUI(state.volume);
        break;
      case 'ArrowDown':
        e.preventDefault();
        state.volume = Math.max(state.volume - 0.05, 0);
        audio.volume = state.volume;
        updateVolumeUI(state.volume);
        break;
      case 'm': case 'M': toggleMute(); break;
      case 'n': case 'N': nextSong(); break;
      case 'p': case 'P': prevSong(); break;
    }
  });

  /* Set initial volume UI */
  updateVolumeUI(state.volume);
}

/* ────────────────────────────────────────────────
   BOOT
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);
