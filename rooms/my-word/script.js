(function () {
  'use strict';

  /* ── Unified Journey Configuration (108 Total Photos Across 3 Chapters) ── */
  const TOTAL_JOURNEY_PHOTOS = 108;
  const PHASE1_START = 1;
  const PHASE1_END = 50;
  const PHASE2_START = 51;
  const PHASE2_END = 100;
  const PHASE3_START = 101;
  const PHASE3_END = 108;

  const SLIDE_INTERVAL_MS = 6200;        // 6.2s calm pause per photo
  const PHASE3_INTERVAL_MS = 6800;       // 6.8s slightly deeper linger for final 8 frames
  const TRANSITION_DURATION_MS = 1450;   // 1.45s smooth transition
  const OPENING_DURATION_MS = 2600;
  const INTERLUDE_DURATION_MS = 3400;    // Smooth chapter interlude
  const ASSET_BASE_PATH = '../../assets/my-word/';

  /* ── PHASE 1 CAPTIONS (araa1 .. araa50 — Preserved Intact) ── */
  const PHASE1_CAPTIONS = [
    "Every little moment with you becomes a beautiful part of my story that I never want to stop reading.",
    "You make ordinary days feel like gentle memories worth keeping close to my heart forever and always.",
    "In a world that moves so fast, being beside you is the quietest and sweetest peace I have ever known.",
    "Looking at your smile reminds me how lucky I am to walk through this life holding your hand.",
    "Thank you for turning simple, everyday moments into the brightest chapters of my favorite memory book.",
    "No matter how much time passes, my heart still lights up every single time I see your face.",
    "With you, even the smallest moments carry a warmth that stays with me long after the day ends.",
    "You are my favorite place to return to, my calmest shelter, and my happiest reason to smile today.",
    "Every photograph of us holds a quiet kind of magic that words can only ever begin to describe.",
    "Loving you feels as natural as breathing, and every shared laugh makes me fall a little deeper.",
    "I am endlessly grateful for the kindness, patience, and gentle joy you bring into my world every day.",
    "Some memories fade with the seasons, yet every moment spent with you only grows warmer in my heart.",
    "You have a way of making life feel softer, brighter, and infinitely more meaningful just by being yourself.",
    "If I could relive any days all over again, I would choose every single one I spent with you.",
    "Being with you taught me that true happiness lives in the quiet beauty of two hearts choosing each other.",
    "Your laughter is my favorite melody, and your presence turns every simple moment into pure gold.",
    "I never knew how rich life could feel until your love became the gentle rhythm of my days.",
    "Here is to the effortless comfort of being together, where silence feels warm and every glance says enough.",
    "Every step we take together becomes a memory I want to frame and carry with me for a lifetime.",
    "You are the sweetest blessing I never saw coming, and the greatest gift I get to cherish every day.",
    "Whenever I think of happiness, my mind always wanders back to the warmth of your smile and your voice.",
    "Thank you for loving me with such sincerity and making every shared moment feel so deeply special.",
    "Beside you, even the simplest afternoon feels like a scene from a timeless film I want to replay forever.",
    "My heart feels completely at home whenever I am close to you, sharing another chapter of our story.",
    "You bring a gentle light into my life that turns ordinary hours into treasures I will always hold dear.",
    "Every time I look at you, I am reminded of a hundred different reasons why I am grateful for us.",
    "With your hand in mine, every tomorrow feels brighter and every memory behind us feels worth celebrating.",
    "You make loving you the easiest and most wonderful thing I have ever done in my entire life.",
    "I cherish the way we can laugh at nothing and still feel like we have everything in the world.",
    "There is a quiet beauty in our story that makes me thankful for every single day we share together.",
    "You are my favorite thought in the morning, my sweetest comfort at night, and my always in between.",
    "No matter where life leads us next, these moments with you will forever remain my happiest memories.",
    "Your warmth has a way of turning fleeting seconds into feelings that linger softly inside my heart.",
    "I am so thankful for your gentle spirit, your radiant heart, and the love we continue to build together.",
    "Every frame here is a quiet reminder that the best parts of my life all have you in them.",
    "Being loved by you feels like stepping into warm sunlight after a long and quiet morning.",
    "You have filled my days with so much joy, tenderness, and laughter that my heart overflows with gratitude.",
    "Even across a thousand moments, my favorite view will always be the gentle happiness in your eyes.",
    "Thank you for being my partner, my best friend, and the sweetest part of every single day.",
    "Our memories are stitched together with quiet smiles, warm glances, and a love that grows stronger each day.",
    "You turn simple moments into lifelong keepsakes without even trying, simply by sharing your heart with me.",
    "In every chapter we write together, my favorite line will always be the one where I get to love you.",
    "Nothing compares to the quiet joy of knowing I get to share my days and dreams with you.",
    "You bring so much grace and warmth into my life that every day feels like a gift worth celebrating.",
    "Every glance back at our memories fills me with gratitude for the love we have nurtured side by side.",
    "With you, love is not just a word—it is every gentle moment, every smile, and every shared tomorrow.",
    "I hold onto these moments like precious film reels, grateful that every frame tells a story of us.",
    "Your presence makes everything feel complete, turning ordinary moments into memories my heart will never forget.",
    "Through every season and every passing day, choosing you remains the easiest and happiest decision of my life.",
    "If love could be captured in light and time, it would look just like every moment I share with you."
  ];

  /* ── PHASE 2 CAPTIONS (araa51 .. araa100 — Preserved Intact) ── */
  const PHASE2_CAPTIONS = [
    "Falling in love with you happened softly, and staying in love with you feels like my favorite grace.",
    "Just having you near turns quiet, unhurried hours into memories I would never trade for anything else.",
    "Your gentle presence carries a warmth that settles my mind and makes every single day feel lighter.",
    "Little moments spent beside you have a quiet magic that stays glowing long after the day fades.",
    "The more days we share together, the deeper my appreciation grows for the kindness in your heart.",
    "You bring an effortless joy into my life that makes even the simplest moments feel deeply meaningful.",
    "Choosing you is never a question for me—it is the happiest certainty my heart has ever known.",
    "Every time you appear, the whole room feels warmer, softer, and infinitely brighter than it was before.",
    "I love how we keep growing together, learning each other a little more with every passing season.",
    "Some memories never lose their warmth, especially the ones where I get to see you genuinely happy.",
    "Being together with you feels like floating through calm golden light where nothing else needs to rush.",
    "You have a rare, quiet beauty that makes every ordinary moment feel like an unforgettable gift.",
    "My favorite part of any day is simply knowing I get to share it with someone as wonderful as you.",
    "With you, happiness is never complicated—it lives in your smile, your voice, and your gentle heart.",
    "I am endlessly thankful for the way you care, listen, and make our togetherness feel so safe.",
    "Every little memory we build adds another bright thread to the story I am proud to call ours.",
    "Loving you has shown me how sweet life becomes when two hearts choose patience, warmth, and joy.",
    "Even in the quietest moments, your presence speaks louder to my heart than a thousand grand gestures.",
    "I still catch myself smiling whenever I think about how lucky I am to have you in my life.",
    "You turn fleeting moments into lasting treasures simply by sharing your warmth and laughter with me.",
    "No matter how many memories we gather, my heart always looks forward to the next one with you.",
    "There is something deeply comforting about knowing we are walking forward and growing together side by side.",
    "Your smile has a gentle power that can soften my hardest days in just a single glance.",
    "I appreciate every small way you bring tenderness, humor, and light into the spaces we share.",
    "Falling for you was the sweetest beginning, and loving you today feels even richer than before.",
    "You make togetherness feel effortless, like two melodies that were always meant to play in harmony.",
    "Every memory with you carries a quiet depth that reminds me what truly matters in this life.",
    "Having you by my side turns simple everyday routines into moments my heart wants to keep forever.",
    "I admire the warmth you carry so naturally and the gentle joy you bring wherever you go.",
    "Through every small laugh and shared glance, we keep building a love that feels steady and true.",
    "You are proof that the most unforgettable memories are made with the person who feels like home.",
    "Each day with you gives me another reason to be grateful for the love we continue to nurture.",
    "When I look at our journey so far, what I cherish most is simply being right here with you.",
    "Your presence brings a calm, radiant happiness that makes every shared moment feel worth remembering.",
    "I love the way our story unfolds—unhurried, sincere, and filled with countless little moments of grace.",
    "Choosing each other every day is the quiet promise that makes our bond feel stronger with time.",
    "Even the smallest glimpse of your happiness is enough to fill my entire day with warmth.",
    "Thank you for being someone whose kindness and presence make life feel so much more meaningful.",
    "With every memory we keep, I fall a little more in love with the person you are.",
    "You bring a gentle sparkle to ordinary hours, turning them into moments I never want to forget.",
    "Growing together with you has been the sweetest adventure and the deepest blessing of my heart.",
    "There is no place I would rather be than right beside you, sharing another quiet, happy moment.",
    "Your warmth lingers in every memory here, reminding me how deeply cherished you will always be.",
    "I am grateful not only for the big milestones, but for every tiny moment we share in between.",
    "Loving you feels like discovering new reasons to smile in the very same person day after day.",
    "You make every moment feel softer and brighter just by bringing your genuine heart into the room.",
    "Our togetherness is my favorite story—written in small laughs, warm glances, and endless affection.",
    "Every frame from these days reminds me how much joy your presence has woven into my world.",
    "No matter what tomorrow brings, knowing I get to face it with you makes everything feel right.",
    "One hundred moments in, and my heart is still amazed by how deeply I love being yours."
  ];

  /* ── PHASE 3 CAPTIONS (araa101 .. araa108 — 8 Deeply Romantic Final Captions) ── */
  const PHASE3_CAPTIONS = [
    "Out of everything life has ever given me, my deepest gratitude will always begin with having you.",
    "Your presence turns quiet moments into something sacred, reminding me how blessed I am to hold your love.",
    "Every single morning, in every small choice, my heart still reaches for you without a second thought.",
    "Looking at these memories reminds me that the beauty of my life is measured in moments with you.",
    "I appreciate every gentle part of who you are, and I cherish the grace you bring into us.",
    "Wherever our tomorrows lead, my greatest wish is to keep walking forward and building a future beside you.",
    "The love we share does not stand still—it deepens, softens, and grows stronger with every passing day.",
    "Through every season of this life, my heart belongs to you—completely, sincerely, and forever and always."
  ];

  /* ── Build Unified 108-Photo Journey Catalog ────────────── */
  const ALL_SLIDES = Array.from({ length: TOTAL_JOURNEY_PHOTOS }, (_, idx) => {
    const num = idx + 1;
    let phase = 1;
    let caption = '';

    if (num <= PHASE1_END) {
      phase = 1;
      caption = PHASE1_CAPTIONS[num - 1];
    } else if (num <= PHASE2_END) {
      phase = 2;
      caption = PHASE2_CAPTIONS[num - PHASE2_START];
    } else {
      phase = 3;
      caption = PHASE3_CAPTIONS[num - PHASE3_START];
    }

    return {
      index: idx,
      number: num,
      phase,
      baseSrc: `${ASSET_BASE_PATH}araa${num}`,
      caption
    };
  });

  /* ── Single Unified Journey Controller State ────────────── */
  const state = {
    currentIndex: 0,           // 0..107 (araa1..araa108)
    currentPhase: 1,           // 1, 2, or 3
    isPlaying: true,
    isTransitioning: false,
    isInterludeActive: false,
    isFinalSceneActive: false,
    isClosed: false,
    autoTimer: null,
    openingTimer: null,
    interludeTimer: null,
    interludeHideTimer: null,
    captionTimer: null,
    transitionTimer: null,
    finalTransitionTimer: null,
    preloaded: new Set(),
    resolvedSrc: new Map(),
    listeners: [],
    parallaxRaf: null,
    parallaxTarget: { x: 0, y: 0 },
    parallaxCurrent: { x: 0, y: 0 }
  };

  /* ── DOM References ─────────────────────────────────────── */
  const elBody = document.body;
  const elOpening = document.getElementById('myword-opening');
  const elOpeningBar = document.getElementById('myword-opening-bar');
  const elInterlude = document.getElementById('myword-interlude');
  const elInterludeKicker = document.getElementById('myword-interlude-kicker');
  const elInterludeClosing = document.getElementById('myword-interlude-closing');
  const elInterludeTitle = document.getElementById('myword-interlude-title');
  const elInterludeSub = document.getElementById('myword-interlude-sub');
  const elInterludeBar = document.getElementById('myword-interlude-bar');
  const elViewport = document.getElementById('myword-viewport');
  const elTrackStage = document.getElementById('myword-track-stage');
  const elReelTitle = document.getElementById('myword-reel-title');
  const elCounter = document.getElementById('myword-counter');
  const elCaption = document.getElementById('myword-caption');
  const elProgressWrap = document.getElementById('myword-progress-wrap');
  const elProgressFill = document.getElementById('myword-progress-fill');
  const elPrevBtn = document.getElementById('myword-prev');
  const elNextBtn = document.getElementById('myword-next');
  const elPlayPauseBtn = document.getElementById('myword-playpause');
  const elPlayPauseLabel = document.getElementById('myword-playpause-label');
  const elIconPause = document.getElementById('myword-icon-pause');
  const elIconPlay = document.getElementById('myword-icon-play');
  const elRecDot = document.getElementById('myword-rec-dot');
  const elFinalScene = document.getElementById('myword-final');
  const elWatchAgainBtn = document.getElementById('myword-watch-again');
  const elDustLayer = document.getElementById('myword-dust-layer');

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Tracked Listener Helper (Clean Teardown on Close) ──── */
  function addTrackedListener(target, event, handler, options) {
    if (!target) return;
    target.addEventListener(event, handler, options);
    state.listeners.push({ target, event, handler, options });
  }

  /* ── Image Source Resolver & Preloader ──────────────────── */
  function applyPhotoSrc(imgEl, slideObj) {
    if (!imgEl || !slideObj) return;
    const cached = state.resolvedSrc.get(slideObj.number);
    if (cached) {
      imgEl.src = cached;
      return;
    }
    const candidates = slideObj.number === 107 ? [
      `${slideObj.baseSrc}.png`,
      `${slideObj.baseSrc}.jpg`,
      `${slideObj.baseSrc}.jpeg`,
      `${slideObj.baseSrc}.webp`
    ] : [
      `${slideObj.baseSrc}.jpg`,
      `${slideObj.baseSrc}.jpeg`,
      `${slideObj.baseSrc}.png`,
      `${slideObj.baseSrc}.webp`
    ];
    let attempt = 0;
    const tryNext = () => {
      if (attempt >= candidates.length) return;
      const candidate = candidates[attempt++];
      imgEl.onerror = tryNext;
      imgEl.onload = () => {
        state.resolvedSrc.set(slideObj.number, candidate);
        imgEl.onerror = null;
      };
      imgEl.src = candidate;
    };
    tryNext();
  }

  function preloadAround(index) {
    const indicesToPreload = [index - 1, index, index + 1, index + 2, index + 3];
    indicesToPreload.forEach((i) => {
      if (i < 0 || i >= TOTAL_JOURNEY_PHOTOS) return;
      const num = i + 1;
      if (state.preloaded.has(num)) return;
      state.preloaded.add(num);
      const probe = new Image();
      probe.decoding = 'async';
      applyPhotoSrc(probe, ALL_SLIDES[i]);
    });
  }

  /* ── Ambient Warm Dust Motes ────────────────────────────── */
  function initDustMotes() {
    if (!elDustLayer || prefersReducedMotion) return;
    const count = window.innerWidth < 600 ? 12 : 22;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const mote = document.createElement('span');
      mote.className = 'myword-mote';
      const size = (2 + Math.random() * 4).toFixed(1);
      mote.style.width = `${size}px`;
      mote.style.height = `${size}px`;
      mote.style.left = `${(Math.random() * 100).toFixed(1)}%`;
      mote.style.top = `${(Math.random() * 100).toFixed(1)}%`;
      mote.style.setProperty('--dur', `${(10 + Math.random() * 10).toFixed(1)}s`);
      mote.style.setProperty('--delay', `${(Math.random() * 8).toFixed(1)}s`);
      mote.style.setProperty('--dx', `${((Math.random() - 0.5) * 44).toFixed(0)}px`);
      mote.style.setProperty('--dy', `${(-20 - Math.random() * 45).toFixed(0)}px`);
      mote.style.setProperty('--max-op', (0.25 + Math.random() * 0.45).toFixed(2));
      frag.appendChild(mote);
    }
    elDustLayer.appendChild(frag);
  }

  /* ── Subtle Horizontal Parallax Depth Engine for Phase 2 Floating Cards ── */
  function initParallaxLoop() {
    if (prefersReducedMotion) return;

    addTrackedListener(window, 'mousemove', (e) => {
      if (state.currentPhase !== 2 || state.isClosed) return;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      state.parallaxTarget.x = nx * 14;
      state.parallaxTarget.y = ny * 8;
    }, { passive: true });

    const tick = () => {
      if (state.isClosed) return;
      state.parallaxCurrent.x += (state.parallaxTarget.x - state.parallaxCurrent.x) * 0.06;
      state.parallaxCurrent.y += (state.parallaxTarget.y - state.parallaxCurrent.y) * 0.06;

      if (state.currentPhase === 2 && elTrackStage) {
        const activeFloatStage = elTrackStage.querySelector('.myword-float-stage');
        if (activeFloatStage) {
          const x = state.parallaxCurrent.x;
          const y = state.parallaxCurrent.y;
          activeFloatStage.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateY(${(x * 0.035).toFixed(2)}deg) rotateX(${(-y * 0.04).toFixed(2)}deg)`;
        }
      }
      state.parallaxRaf = requestAnimationFrame(tick);
    };
    state.parallaxRaf = requestAnimationFrame(tick);
  }

  /* ── Phase 1 DOM Builder: Horizontal Cinematic Film Slide ── */
  function buildPhase1SlideElement(slideObj, initialStateClass) {
    const slide = document.createElement('article');
    slide.className = `myword-slide ${initialStateClass}`;
    slide.dataset.phase = '1';
    slide.setAttribute('aria-label', `Memory ${slideObj.number} of ${TOTAL_JOURNEY_PHOTOS}`);

    const outer = document.createElement('div');
    outer.className = 'myword-frame-outer';

    const inner = document.createElement('div');
    inner.className = 'myword-frame-inner';

    const photoBox = document.createElement('div');
    photoBox.className = 'myword-photo-box';

    const img = document.createElement('img');
    img.className = 'myword-photo';
    img.alt = `Memory ${String(slideObj.number).padStart(2, '0')} of ${TOTAL_JOURNEY_PHOTOS}`;
    slide.dataset.transitionStyle = ['track', 'light-leak', 'push', 'matte', 'exposure'][(slideObj.number - 1) % 5];
    img.dataset.cameraMove = ['drift-left', 'drift-right', 'push', 'pull', 'soft-pan'][(slideObj.number - 1) % 5];
    img.loading = slideObj.number <= 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    applyPhotoSrc(img, slideObj);

    const sheen = document.createElement('div');
    sheen.className = 'myword-glass-sheen';
    sheen.setAttribute('aria-hidden', 'true');

    const lightLeak = document.createElement('div');
    lightLeak.className = 'myword-film-leak';
    lightLeak.setAttribute('aria-hidden', 'true');

    photoBox.appendChild(img);
    photoBox.appendChild(sheen);
    photoBox.appendChild(lightLeak);
    inner.appendChild(photoBox);
    outer.appendChild(inner);
    slide.appendChild(outer);

    return slide;
  }

  /* ── Phase 2 DOM Builder: Horizontal Floating Cinematic Card ── */
  function buildPhase2CardElement(slideObj, initialStateClass) {
    const card = document.createElement('article');
    card.className = `myword-fcard ${initialStateClass}`;
    card.dataset.phase = '2';
    card.dataset.transitionStyle = ['orbit', 'fan', 'depth', 'glide'][(slideObj.number - PHASE2_START) % 4];
    card.setAttribute('aria-label', `Memory ${slideObj.number} of ${TOTAL_JOURNEY_PHOTOS}`);

    const floatBody = document.createElement('div');
    floatBody.className = 'myword-fcard-float-body';

    const outer = document.createElement('div');
    outer.className = 'myword-fcard-outer';

    const inner = document.createElement('div');
    inner.className = 'myword-fcard-inner';

    const photoBox = document.createElement('div');
    photoBox.className = 'myword-fcard-photo-box';

    const img = document.createElement('img');
    img.className = 'myword-fcard-photo';
    img.alt = `Memory ${String(slideObj.number).padStart(2, '0')} of ${TOTAL_JOURNEY_PHOTOS}`;
    img.dataset.cameraMove = ['orbit-left', 'orbit-right', 'push', 'drift'][(slideObj.number - PHASE2_START) % 4];
    img.loading = 'eager';
    img.decoding = 'async';
    applyPhotoSrc(img, slideObj);

    const reflection = document.createElement('div');
    reflection.className = 'myword-fcard-reflection';
    reflection.setAttribute('aria-hidden', 'true');

    photoBox.appendChild(img);
    photoBox.appendChild(reflection);
    inner.appendChild(photoBox);
    outer.appendChild(inner);
    floatBody.appendChild(outer);
    card.appendChild(floatBody);

    return card;
  }

  /* ── Phase 3 DOM Builder: Cinematic Slideshow Frame ─────── */
  function buildPhase3SlideElement(slideObj, initialStateClass) {
    const slide = document.createElement('article');
    slide.className = `myword-show-slide ${initialStateClass}`;
    slide.dataset.phase = '3';
    slide.dataset.transitionStyle = ['iris', 'dissolve', 'radial', 'sweep'][(slideObj.number - PHASE3_START) % 4];
    slide.setAttribute('aria-label', `Memory ${slideObj.number} of ${TOTAL_JOURNEY_PHOTOS}`);

    const outer = document.createElement('div');
    outer.className = 'myword-show-outer';

    const inner = document.createElement('div');
    inner.className = 'myword-show-inner';

    const photoBox = document.createElement('div');
    photoBox.className = 'myword-show-photo-box';

    const img = document.createElement('img');
    img.className = 'myword-show-photo';
    img.alt = `Memory ${slideObj.number} of ${TOTAL_JOURNEY_PHOTOS}`;
    img.dataset.cameraMove = ['push', 'pull', 'drift-left', 'drift-right'][(slideObj.number - PHASE3_START) % 4];
    img.loading = 'eager';
    img.decoding = 'async';
    applyPhotoSrc(img, slideObj);

    const sheen = document.createElement('div');
    sheen.className = 'myword-show-sheen';
    sheen.setAttribute('aria-hidden', 'true');

    photoBox.appendChild(img);
    photoBox.appendChild(sheen);
    inner.appendChild(photoBox);
    outer.appendChild(inner);
    slide.appendChild(outer);

    return slide;
  }

  /* ── Stage Decorators per Phase ─────────────────────────── */
  function ensurePhase1StageDecorators() {
    if (!elTrackStage) return;
    elTrackStage.querySelectorAll('.myword-float-stage, .myword-show-stage').forEach((n) => n.remove());

    if (!elTrackStage.querySelector('.myword-ghost-left')) {
      const leftGhost = document.createElement('div');
      leftGhost.className = 'myword-ghost-frame myword-ghost-left';
      leftGhost.setAttribute('aria-hidden', 'true');
      elTrackStage.appendChild(leftGhost);
    }
    if (!elTrackStage.querySelector('.myword-ghost-right')) {
      const rightGhost = document.createElement('div');
      rightGhost.className = 'myword-ghost-frame myword-ghost-right';
      rightGhost.setAttribute('aria-hidden', 'true');
      elTrackStage.appendChild(rightGhost);
    }
  }

  function ensurePhase2StageDecorators(currentIndex) {
    if (!elTrackStage) return;
    elTrackStage.querySelectorAll('.myword-ghost-frame, .myword-slide, .myword-show-stage').forEach((n) => n.remove());

    let floatStage = elTrackStage.querySelector('.myword-float-stage');
    if (!floatStage) {
      floatStage = document.createElement('div');
      floatStage.className = 'myword-float-stage';
      elTrackStage.appendChild(floatStage);
    }

    const companionSlots = [
      { className: 'is-left-far', offset: -2 },
      { className: 'is-left', offset: -1 },
      { className: 'is-right', offset: 1 },
      { className: 'is-right-far', offset: 2 }
    ];
    companionSlots.forEach(({ className, offset }) => {
      let companion = floatStage.querySelector(`.myword-float-companion.${className}`);
      if (!companion) {
        companion = document.createElement('div');
        companion.className = `myword-float-companion ${className}`;
        companion.setAttribute('aria-hidden', 'true');
        companion.innerHTML = '<div class="myword-float-companion-inner"><img alt=""></div>';
        floatStage.appendChild(companion);
      }
      const companionIndex = PHASE2_START - 1 + ((currentIndex - (PHASE2_START - 1) + offset + 50) % 50);
      applyPhotoSrc(companion.querySelector('img'), ALL_SLIDES[companionIndex]);
    });

    return floatStage;
  }

  function ensurePhase3StageDecorators() {
    if (!elTrackStage) return;
    elTrackStage.querySelectorAll('.myword-ghost-frame, .myword-slide, .myword-float-stage').forEach((n) => n.remove());

    let showStage = elTrackStage.querySelector('.myword-show-stage');
    if (!showStage) {
      showStage = document.createElement('div');
      showStage.className = 'myword-show-stage';
      const halo = document.createElement('div');
      halo.className = 'myword-show-halo';
      halo.setAttribute('aria-hidden', 'true');
      showStage.appendChild(halo);
      elTrackStage.appendChild(showStage);
    }
    return showStage;
  }

  /* ── Apply Active Phase Mode to Body & Header ───────────── */
  function syncPhaseMode(phase) {
    state.currentPhase = phase;
    if (elBody) {
      elBody.classList.toggle('myword-phase-1', phase === 1);
      elBody.classList.toggle('myword-phase-2', phase === 2);
      elBody.classList.toggle('myword-phase-3', phase === 3);
    }
    if (elReelTitle) {
      if (phase === 1) elReelTitle.textContent = 'MY WORD • FILM';
      else if (phase === 2) elReelTitle.textContent = 'MY WORD • FLOATING';
      else elReelTitle.textContent = 'MY WORD • SLIDESHOW';
    }
  }

  /* ── Update HUD (Counter 01/108 .. 108/108, Progress Bar, Buttons) ─── */
  function updateHud(index) {
    const currentNum = index + 1;
    const formatted = currentNum < 100 ? String(currentNum).padStart(2, '0') : String(currentNum);
    if (elCounter) elCounter.textContent = `${formatted} / ${TOTAL_JOURNEY_PHOTOS}`;

    const pct = (currentNum / TOTAL_JOURNEY_PHOTOS) * 100;
    if (elProgressFill) elProgressFill.style.width = `${pct}%`;
    if (elProgressWrap) elProgressWrap.setAttribute('aria-valuenow', String(currentNum));

    if (elPrevBtn) elPrevBtn.disabled = index === 0;
    if (elNextBtn) elNextBtn.disabled = false;
  }

  /* ── Animate Caption Soft Fade & Gentle Rise ────────────── */
  function updateCaption(text) {
    if (!elCaption) return;
    clearTimeout(state.captionTimer);
    elCaption.classList.remove('is-visible');

    state.captionTimer = setTimeout(() => {
      if (state.isClosed) return;
      elCaption.textContent = text;
      void elCaption.offsetWidth;
      elCaption.classList.add('is-visible');
    }, prefersReducedMotion ? 10 : state.currentPhase === 3 ? 520 : 220);
  }

  /* ── Render / Transition Slide (Unified Phase 1, 2 & 3) ─── */
  function renderSlide(targetIndex, direction = 'forward', immediate = false) {
    if (!elTrackStage || state.isClosed) return;

    const slideObj = ALL_SLIDES[targetIndex];
    syncPhaseMode(slideObj.phase);
    preloadAround(targetIndex);
    updateHud(targetIndex);
    updateCaption(slideObj.caption);

    if (slideObj.phase === 1) {
      renderPhase1Slide(slideObj, direction, immediate);
    } else if (slideObj.phase === 2) {
      renderPhase2Slide(slideObj, targetIndex, direction, immediate);
    } else {
      renderPhase3Slide(slideObj, direction, immediate);
    }
  }

  function renderPhase1Slide(slideObj, direction, immediate) {
    ensurePhase1StageDecorators();
    const existingActive = elTrackStage.querySelector('.myword-slide.is-center');

    if (immediate || !existingActive || prefersReducedMotion) {
      elTrackStage.querySelectorAll('.myword-slide').forEach((n) => n.remove());
      const fresh = buildPhase1SlideElement(slideObj, 'is-center');
      elTrackStage.appendChild(fresh);
      requestAnimationFrame(() => {
        const img = fresh.querySelector('.myword-photo');
        if (img && !prefersReducedMotion) img.classList.add('is-kenburns');
      });
      state.isTransitioning = false;
      return;
    }

    state.isTransitioning = true;
    clearTimeout(state.transitionTimer);
    elTrackStage.querySelectorAll('.myword-slide').forEach((node) => {
      if (node !== existingActive) node.remove();
    });

    const enterClass = direction === 'backward' ? 'is-enter-left' : 'is-enter-right';
    const exitClass = direction === 'backward' ? 'is-exit-right' : 'is-exit-left';

    const incoming = buildPhase1SlideElement(slideObj, enterClass);
    existingActive.dataset.transitionStyle = incoming.dataset.transitionStyle;
    elTrackStage.appendChild(incoming);
    void incoming.offsetWidth;

    requestAnimationFrame(() => {
      existingActive.classList.remove('is-center');
      existingActive.classList.add(exitClass);

      incoming.classList.remove(enterClass);
      incoming.classList.add('is-center');

      const img = incoming.querySelector('.myword-photo');
      if (img) img.classList.add('is-kenburns');
    });

    state.transitionTimer = setTimeout(() => {
      if (existingActive && existingActive.parentNode) existingActive.remove();
      elTrackStage.querySelectorAll('.myword-slide').forEach((el) => {
        if (el !== incoming) el.remove();
      });
      state.isTransitioning = false;
    }, TRANSITION_DURATION_MS + 60);
  }

  function renderPhase2Slide(slideObj, targetIndex, direction, immediate) {
    const floatStage = ensurePhase2StageDecorators(targetIndex);
    const existingActive = floatStage.querySelector('.myword-fcard.is-center');

    if (immediate || !existingActive || prefersReducedMotion) {
      floatStage.querySelectorAll('.myword-fcard').forEach((n) => n.remove());
      const fresh = buildPhase2CardElement(slideObj, 'is-center');
      floatStage.appendChild(fresh);
      requestAnimationFrame(() => {
        const img = fresh.querySelector('.myword-fcard-photo');
        if (img && !prefersReducedMotion) img.classList.add('is-kenburns');
      });
      state.isTransitioning = false;
      return;
    }

    state.isTransitioning = true;
    clearTimeout(state.transitionTimer);
    floatStage.querySelectorAll('.myword-fcard').forEach((node) => {
      if (node !== existingActive) node.remove();
    });

    // Strictly horizontal: forward enters from right & exits left; backward enters from left & exits right
    const enterClass = direction === 'backward' ? 'is-enter-left' : 'is-enter-right';
    const exitClass = direction === 'backward' ? 'is-exit-right' : 'is-exit-left';

    const incoming = buildPhase2CardElement(slideObj, enterClass);
    existingActive.dataset.transitionStyle = incoming.dataset.transitionStyle;
    floatStage.appendChild(incoming);
    void incoming.offsetWidth;

    requestAnimationFrame(() => {
      existingActive.classList.remove('is-center');
      existingActive.classList.add(exitClass);

      incoming.classList.remove(enterClass);
      incoming.classList.add('is-center');

      const img = incoming.querySelector('.myword-fcard-photo');
      if (img) img.classList.add('is-kenburns');
    });

    state.transitionTimer = setTimeout(() => {
      if (existingActive && existingActive.parentNode) existingActive.remove();
      floatStage.querySelectorAll('.myword-fcard').forEach((el) => {
        if (el !== incoming) el.remove();
      });
      state.isTransitioning = false;
    }, TRANSITION_DURATION_MS + 60);
  }

  function renderPhase3Slide(slideObj, direction, immediate) {
    const showStage = ensurePhase3StageDecorators();
    const existingActive = showStage.querySelector('.myword-show-slide.is-center');

    if (immediate || !existingActive || prefersReducedMotion) {
      showStage.querySelectorAll('.myword-show-slide').forEach((n) => n.remove());
      const fresh = buildPhase3SlideElement(slideObj, 'is-center');
      showStage.appendChild(fresh);
      requestAnimationFrame(() => {
        const img = fresh.querySelector('.myword-show-photo');
        if (img && !prefersReducedMotion) img.classList.add('is-camera-pan');
      });
      state.isTransitioning = false;
      return;
    }

    state.isTransitioning = true;
    clearTimeout(state.transitionTimer);
    showStage.querySelectorAll('.myword-show-slide').forEach((node) => {
      if (node !== existingActive) node.remove();
    });

    const enterClass = direction === 'backward' ? 'is-enter-left' : 'is-enter-right';
    const exitClass = direction === 'backward' ? 'is-exit-right' : 'is-exit-left';

    const incoming = buildPhase3SlideElement(slideObj, enterClass);
    existingActive.dataset.transitionStyle = incoming.dataset.transitionStyle;
    showStage.appendChild(incoming);
    void incoming.offsetWidth;

    requestAnimationFrame(() => {
      existingActive.classList.remove('is-center');
      existingActive.classList.add(exitClass);

      incoming.classList.remove(enterClass);
      incoming.classList.add('is-center');

      const img = incoming.querySelector('.myword-show-photo');
      if (img) img.classList.add('is-camera-pan');
    });

    state.transitionTimer = setTimeout(() => {
      if (existingActive && existingActive.parentNode) existingActive.remove();
      showStage.querySelectorAll('.myword-show-slide').forEach((el) => {
        if (el !== incoming) el.remove();
      });
      state.isTransitioning = false;
    }, 1650 + 60);
  }

  /* ── Smooth Chapter Interlude Runner (1 -> 2, and 2 -> 3) ─ */
  function runChapterInterlude(opts) {
    if (state.isClosed || state.isInterludeActive) return;

    state.isInterludeActive = true;
    clearAutoTimer();
    clearTimeout(state.interludeTimer);
    clearTimeout(state.interludeHideTimer);

    preloadAround(opts.targetIndex);

    if (elInterludeKicker) elInterludeKicker.textContent = opts.kicker;
    if (elInterludeClosing) elInterludeClosing.textContent = opts.closingLine;
    if (elInterludeTitle) elInterludeTitle.textContent = opts.title;
    if (elInterludeSub) elInterludeSub.textContent = opts.subtitle;

    if (elInterludeBar) {
      elInterludeBar.style.transition = 'none';
      elInterludeBar.style.width = '0%';
    }

    if (elInterlude) {
      elInterlude.classList.remove('myword-hidden');
      void elInterlude.offsetWidth;
      elInterlude.classList.add('is-active');
    }

    const duration = prefersReducedMotion ? 600 : INTERLUDE_DURATION_MS;

    requestAnimationFrame(() => {
      if (elInterludeBar) {
        elInterludeBar.style.transition = `width ${duration - 250}ms linear`;
        elInterludeBar.style.width = '100%';
      }
    });

    state.interludeTimer = setTimeout(() => {
      if (state.isClosed) return;
      state.currentIndex = opts.targetIndex;
      renderSlide(state.currentIndex, 'forward', true);

      if (elInterlude) {
        elInterlude.classList.remove('is-active');
      }

      state.interludeHideTimer = setTimeout(() => {
        if (state.isClosed) return;
        if (elInterlude) elInterlude.classList.add('myword-hidden');
        state.isInterludeActive = false;
        if (state.isPlaying) {
          resetAutoTimer();
        }
      }, prefersReducedMotion ? 50 : 750);
    }, duration);
  }

  function transitionPhase1ToPhase2() {
    runChapterInterlude({
      kicker: 'CHAPTER I COMPLETE • 50 / 108',
      closingLine: 'Fifty frames of quiet magic—and our story is only getting sweeter.',
      title: 'AND THE BEAUTIFUL MOMENTS KEEP GOING...',
      subtitle: 'CHAPTER II • FLOATING CINEMATIC CARDS',
      targetIndex: PHASE2_START - 1 // index 50 -> araa51
    });
  }

  function transitionPhase2ToPhase3() {
    runChapterInterlude({
      kicker: 'CHAPTER II COMPLETE • 100 / 108',
      closingLine: 'One hundred memories held close—now for the moments meant to stay with you forever.',
      title: 'AND HERE COMES THE PART I WANT YOU TO REMEMBER FOREVER...',
      subtitle: 'CHAPTER III • CINEMATIC SLIDESHOW',
      targetIndex: PHASE3_START - 1 // index 100 -> araa101
    });
  }

  /* ── Final Scene: Love Letter (After Photo 108) ─────────── */
  function showFinalScene() {
    if (state.isClosed) return;
    clearAutoTimer();
    state.isFinalSceneActive = true;
    if (elFinalScene) {
      elFinalScene.scrollTop = 0;
      const finalPhoto = elTrackStage?.querySelector('.myword-show-slide.is-center .myword-show-photo');
      if (finalPhoto) {
        let backgroundPhoto = elFinalScene.querySelector('.myword-final-photo');
        if (!backgroundPhoto) {
          backgroundPhoto = document.createElement('img');
          backgroundPhoto.className = 'myword-final-photo';
          backgroundPhoto.alt = '';
          backgroundPhoto.setAttribute('aria-hidden', 'true');
          elFinalScene.prepend(backgroundPhoto);
        }
        backgroundPhoto.src = finalPhoto.currentSrc || finalPhoto.src;
      }
      elBody.classList.add('myword-closing-reel');
      clearTimeout(state.finalTransitionTimer);
      state.finalTransitionTimer = setTimeout(() => {
        if (state.isClosed || !state.isFinalSceneActive) return;
        elFinalScene.classList.remove('myword-hidden');
        requestAnimationFrame(() => elFinalScene.classList.add('is-revealed'));
      }, prefersReducedMotion ? 0 : 1750);
    }
  }

  function hideFinalScene() {
    state.isFinalSceneActive = false;
    clearTimeout(state.finalTransitionTimer);
    elBody.classList.remove('myword-closing-reel');
    if (elFinalScene) {
      elFinalScene.classList.add('myword-hidden');
      elFinalScene.classList.remove('is-revealed');
    }
  }

  /* ── Single Autoplay Timer Management (Prevents Double Timers) ── */
  function clearAutoTimer() {
    if (state.autoTimer !== null) {
      clearInterval(state.autoTimer);
      state.autoTimer = null;
    }
  }

  function getActiveIntervalMs() {
    return state.currentPhase === 3 ? PHASE3_INTERVAL_MS : SLIDE_INTERVAL_MS;
  }

  function resetAutoTimer() {
    clearAutoTimer();
    if (!state.isPlaying || state.isClosed || state.isInterludeActive || state.isFinalSceneActive) return;
    state.autoTimer = setInterval(() => {
      if (!state.isPlaying || state.isClosed || state.isInterludeActive || state.isFinalSceneActive) return;
      advanceSlide(true);
    }, getActiveIntervalMs());
  }

  function setPlaying(playing) {
    state.isPlaying = playing;
    if (elPlayPauseLabel) elPlayPauseLabel.textContent = playing ? 'PAUSE' : 'PLAY';
    if (elPlayPauseBtn) {
      elPlayPauseBtn.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
    }
    if (elIconPause) elIconPause.classList.toggle('myword-hidden', !playing);
    if (elIconPlay) elIconPlay.classList.toggle('myword-hidden', playing);
    if (elRecDot) elRecDot.classList.toggle('myword-paused', !playing);

    if (playing && !state.isInterludeActive && !state.isFinalSceneActive) {
      resetAutoTimer();
    } else {
      clearAutoTimer();
    }
  }

  /* ── Unified Slide Navigation (Manual + Auto) ───────────── */
  function advanceSlide(isAuto = false) {
    if (state.isClosed || state.isInterludeActive || state.isFinalSceneActive) return;

    const currentPhotoNum = state.currentIndex + 1;

    if (currentPhotoNum === PHASE1_END) {
      transitionPhase1ToPhase2();
      return;
    }

    if (currentPhotoNum === PHASE2_END) {
      transitionPhase2ToPhase3();
      return;
    }

    if (currentPhotoNum >= PHASE3_END) {
      showFinalScene();
      return;
    }

    state.currentIndex += 1;
    renderSlide(state.currentIndex, 'forward', false);
    if (!isAuto) {
      resetAutoTimer();
    }
  }

  function goPrev() {
    if (state.isClosed || state.isInterludeActive || state.isFinalSceneActive || state.currentIndex <= 0) return;

    const prevIndex = state.currentIndex - 1;
    const crossingPhaseBoundary =
      state.currentIndex === (PHASE2_START - 1) ||
      state.currentIndex === (PHASE3_START - 1);

    state.currentIndex = prevIndex;
    renderSlide(state.currentIndex, 'backward', crossingPhaseBoundary);
    resetAutoTimer();
  }

  function goNext() {
    if (state.isClosed || state.isInterludeActive || state.isFinalSceneActive) return;
    advanceSlide(false);
  }

  function restartFromBeginning() {
    clearTimeout(state.interludeTimer);
    clearTimeout(state.interludeHideTimer);
    state.isInterludeActive = false;
    if (elInterlude) {
      elInterlude.classList.remove('is-active');
      elInterlude.classList.add('myword-hidden');
    }
    hideFinalScene();
    state.currentIndex = 0;
    renderSlide(0, 'forward', true);
    setPlaying(true);
  }

  /* ── Touch Swipe Support (Mobile) ───────────────────────── */
  function initTouchSwipe() {
    let startX = null;
    let startY = null;

    addTrackedListener(elViewport, 'touchstart', (e) => {
      if (!e.touches || e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    addTrackedListener(elViewport, 'touchend', (e) => {
      if (startX === null || !e.changedTouches || !e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      startX = null;
      startY = null;

      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        if (dx < 0) goNext();
        else goPrev();
      }
    }, { passive: true });
  }

  /* ── Keyboard Navigation ────────────────────────────────── */
  function initKeyboard() {
    addTrackedListener(document, 'keydown', (e) => {
      if (state.isClosed || state.isInterludeActive) return;

      if (state.isFinalSceneActive) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          restartFromBeginning();
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        setPlaying(!state.isPlaying);
      }
    });
  }

  /* ── Clean Teardown of All Timers, RAF, and Listeners ───── */
  function cleanupRoom() {
    if (state.isClosed) return;
    state.isClosed = true;
    clearAutoTimer();
    clearTimeout(state.openingTimer);
    clearTimeout(state.interludeTimer);
    clearTimeout(state.interludeHideTimer);
    clearTimeout(state.captionTimer);
    clearTimeout(state.transitionTimer);
    clearTimeout(state.finalTransitionTimer);
    if (state.parallaxRaf !== null) {
      cancelAnimationFrame(state.parallaxRaf);
      state.parallaxRaf = null;
    }

    state.listeners.forEach(({ target, event, handler, options }) => {
      try {
        target.removeEventListener(event, handler, options);
      } catch (_) {}
    });
    state.listeners = [];
  }

  /* ── Initialize Unified 108-Photo Journey ───────────────── */
  function init() {
    initDustMotes();
    initParallaxLoop();
    preloadAround(0);

    renderSlide(0, 'forward', true);

    window.MYWORD_JOURNEY = {
      getState: () => ({
        currentPhoto: state.currentIndex + 1,
        currentPhase: state.currentPhase,
        isPlaying: state.isPlaying,
        isFinalSceneActive: state.isFinalSceneActive,
        totalPhotos: TOTAL_JOURNEY_PHOTOS
      }),
      jumpToPhoto: (photoNum) => {
        hideFinalScene();
        const clamped = Math.max(1, Math.min(PHASE3_END, Number(photoNum) || 1));
        state.currentIndex = clamped - 1;
        renderSlide(state.currentIndex, 'forward', true);
        resetAutoTimer();
      }
    };

    requestAnimationFrame(() => {
      if (elOpeningBar) elOpeningBar.style.width = '100%';
    });

    addTrackedListener(elPrevBtn, 'click', goPrev);
    addTrackedListener(elNextBtn, 'click', goNext);
    addTrackedListener(elPlayPauseBtn, 'click', () => setPlaying(!state.isPlaying));
    addTrackedListener(elWatchAgainBtn, 'click', restartFromBeginning);

    initTouchSwipe();
    initKeyboard();

    addTrackedListener(window, 'pagehide', cleanupRoom);
    addTrackedListener(window, 'beforeunload', cleanupRoom);
    addTrackedListener(document, 'visibilitychange', () => {
      if (document.hidden) {
        clearAutoTimer();
      } else if (state.isPlaying && !state.isClosed && !state.isInterludeActive && !state.isFinalSceneActive) {
        resetAutoTimer();
      }
    });

    const openingDelay = prefersReducedMotion ? 400 : OPENING_DURATION_MS;
    state.openingTimer = setTimeout(() => {
      if (state.isClosed) return;
      if (elOpening) elOpening.classList.add('myword-opening-exit');
      resetAutoTimer();
    }, openingDelay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
