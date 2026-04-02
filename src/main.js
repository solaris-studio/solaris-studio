import './style.css'

// ============================================================
// SOLARIS STUDIO — ONE PAGE SITE
// ============================================================

const GAMES = [
  {
    title: 'NOVA BLASTER',
    year: '1987',
    genre: 'SHOOT EM UP',
    description: 'Un space shooter frénétique à 60 fps. Défendez la galaxie contre des vagues infinies d\'envahisseurs pixelisés.',
    pixels: '🚀',
    badge: 'badge-primary',
  },
  {
    title: 'DUNGEON CRAWL X',
    year: '1989',
    genre: 'RPG / ROGUELIKE',
    description: 'Explorez des donjons générés procéduralement. Chaque run est unique. Mourez, apprenez, recommencez.',
    pixels: '⚔️',
    badge: 'badge-secondary',
  },
  {
    title: 'PIXEL RACER',
    year: '1991',
    genre: 'RACING',
    description: 'La vitesse à l\'état pur. Des circuits en pixel art, des bolides 8-bit et une bande-son chiptune qui déchire.',
    pixels: '🏎️',
    badge: 'badge-accent',
  },
  {
    title: 'HAUNTED MANOR',
    year: '1993',
    genre: 'PLATFORMER',
    description: 'Un manoir hanté aux 99 salles secrètes. Sautez, courez, résolvez des puzzles avant que les fantômes vous rattrapent.',
    pixels: '👻',
    badge: 'badge-warning',
  },
]

const SKILLS = [
  { name: 'PIXEL ART', level: 95 },
  { name: 'CHIPTUNE', level: 88 },
  { name: 'C / ASM 6502', level: 92 },
  { name: 'GAME DESIGN', level: 85 },
  { name: 'SCÉNARIO', level: 78 },
]

const STARS = ['★', '★', '★', '★', '★', '☆']

function renderStars() {
  return STARS.map((s, i) => `<span class="star" style="animation-delay:${i * 0.35}s">${s}</span>`).join('')
}

function renderGames() {
  return GAMES.map((g) => `
    <div class="card pixel-card border-base-content bg-base-200 hover:bg-base-300 transition-colors duration-200">
      <div class="card-body gap-3">
        <div class="flex items-center justify-between">
          <span class="text-4xl">${g.pixels}</span>
          <span class="badge ${g.badge} font-retro text-base">${g.genre}</span>
        </div>
        <h3 class="card-title font-pixel text-sm leading-relaxed">${g.title}</h3>
        <p class="font-retro text-lg opacity-70">${g.description}</p>
        <div class="card-actions justify-between items-center mt-2">
          <span class="font-pixel text-xs opacity-50">©${g.year}</span>
          <button class="btn btn-sm btn-outline font-pixel text-xs">JOUER</button>
        </div>
      </div>
    </div>
  `).join('')
}

function renderSkills() {
  return SKILLS.map((s) => `
    <div class="flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <span class="font-pixel text-xs">${s.name}</span>
        <span class="font-retro text-lg opacity-70">${s.level}%</span>
      </div>
      <progress class="progress progress-primary w-full" value="${s.level}" max="100"></progress>
    </div>
  `).join('')
}

document.querySelector('#app').innerHTML = `

<!-- ===== NAVBAR ===== -->
<nav class="navbar bg-base-100 border-b-4 border-base-content sticky top-0 z-50 px-4 lg:px-8">
  <div class="navbar-start">
    <a href="#hero" class="font-pixel text-xs lg:text-sm text-primary tracking-widest glitch-hover">
      ☀ SOLARIS
    </a>
  </div>
  <div class="navbar-end hidden md:flex gap-4">
    <a href="#about" class="font-pixel text-xs btn btn-ghost btn-sm">À PROPOS</a>
    <a href="#games" class="font-pixel text-xs btn btn-ghost btn-sm">JEUX</a>
    <a href="#skills" class="font-pixel text-xs btn btn-ghost btn-sm">SKILLS</a>
    <a href="#contact" class="font-pixel text-xs btn btn-primary btn-sm">CONTACT</a>
  </div>
  <!-- Mobile menu button -->
  <div class="navbar-end md:hidden">
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow border-2 border-base-content mt-2">
        <li><a href="#about" class="font-pixel text-xs">À PROPOS</a></li>
        <li><a href="#games" class="font-pixel text-xs">JEUX</a></li>
        <li><a href="#skills" class="font-pixel text-xs">SKILLS</a></li>
        <li><a href="#contact" class="font-pixel text-xs">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- ===== MARQUEE ===== -->
<div class="bg-primary text-primary-content py-2 overflow-hidden border-b-2 border-primary-content/30">
  <div class="marquee-wrapper">
    <span class="marquee-content font-retro text-xl tracking-widest">
      ★ NOVA BLASTER ★ DUNGEON CRAWL X ★ PIXEL RACER ★ HAUNTED MANOR ★ COMING SOON: CYBER KNIGHT ★ NOVA BLASTER ★ DUNGEON CRAWL X ★ PIXEL RACER ★ HAUNTED MANOR ★ COMING SOON: CYBER KNIGHT ★
    </span>
  </div>
</div>

<!-- ===== HERO ===== -->
<section id="hero" class="scanlines crt-effect min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 py-24 text-center relative overflow-hidden">

  <!-- Background pixel grid decoration -->
  <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>

  <!-- Stars -->
  <div class="absolute top-8 left-1/4 text-warning text-2xl">${renderStars()}</div>

  <!-- Main content -->
  <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

    <!-- Logo pixel art -->
    <div class="w-24 h-24 bg-primary rounded-none flex items-center justify-center border-4 border-base-content shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
      <span class="text-5xl">☀</span>
    </div>

    <!-- Studio name -->
    <div>
      <h1 class="font-pixel text-3xl md:text-5xl text-primary leading-relaxed tracking-widest mb-4">
        SOLARIS<br/>STUDIO
      </h1>
      <p class="font-retro text-2xl md:text-3xl opacity-70 tracking-widest">
        INDEPENDENT RETRO GAME DEVELOPER
      </p>
    </div>

    <!-- Tagline terminal style -->
    <div class="bg-base-100 border-4 border-base-content px-6 py-4 max-w-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
      <p class="font-retro text-xl md:text-2xl text-success leading-relaxed">
        &gt; Crafting pixel-perfect adventures since 1987_<span class="blink">█</span>
      </p>
    </div>

    <!-- CTA buttons -->
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#games" class="btn btn-primary btn-lg font-pixel text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        ▶ NOS JEUX
      </a>
      <a href="#contact" class="btn btn-outline btn-lg font-pixel text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        ✉ CONTACT
      </a>
    </div>

    <!-- Stats badges -->
    <div class="flex flex-wrap gap-4 justify-center mt-4">
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">JEUX CRÉÉS</div>
        <div class="stat-value font-pixel text-2xl text-primary">42</div>
      </div>
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">ANNÉES XP</div>
        <div class="stat-value font-pixel text-2xl text-secondary">37</div>
      </div>
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">JOUEURS</div>
        <div class="stat-value font-pixel text-2xl text-accent">1M+</div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 font-pixel text-xs opacity-50 flex flex-col items-center gap-2">
    <span>SCROLL DOWN</span>
    <span class="text-xl" style="animation: blink 1s step-end infinite;">▼</span>
  </div>
</section>

<!-- ===== DIVIDER ===== -->
<div class="w-full border-y-4 border-base-content bg-base-content text-base-100 py-3 text-center overflow-hidden">
  <span class="font-pixel text-xs tracking-[0.5em] opacity-80">— INSERT COIN —</span>
</div>

<!-- ===== ABOUT ===== -->
<section id="about" class="py-24 px-4 lg:px-8 bg-base-100">
  <div class="max-w-5xl mx-auto">

    <div class="text-center mb-16">
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">PLAYER 1 — À PROPOS</h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Text -->
      <div class="flex flex-col gap-6">
        <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
          <p class="font-retro text-xl leading-relaxed">
            Fondé en 1987 dans un garage équipé d'un Amiga 500 et d'un oscilloscope, <strong>Solaris Studio</strong> est un studio indépendant passionné par l'ère d'or du jeu vidéo.
          </p>
        </div>
        <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
          <p class="font-retro text-xl leading-relaxed">
            Notre mission : capturer l'essence des <strong>jeux des années 80-90</strong> — pixel art soigné, musiques chiptune qui restent en tête, et gameplay exigeant qui récompense la persévérance.
          </p>
        </div>
        <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
          <p class="font-retro text-xl leading-relaxed">
            Chaque jeu est développé avec amour par une équipe de <strong>3 passionnés</strong>, sur du matériel authentique et des outils de l'époque. Pas de honte à se limiter à <strong>64 couleurs</strong>.
          </p>
        </div>
      </div>

      <!-- Profile card -->
      <div class="flex flex-col items-center gap-6">
        <div class="card bg-base-200 border-4 border-base-content shadow-[8px_8px_0px_rgba(0,0,0,0.3)] w-full max-w-sm">
          <div class="card-body items-center text-center gap-4">
            <!-- Pixel avatar -->
            <div class="w-20 h-20 bg-secondary border-4 border-base-content flex items-center justify-center text-4xl">
              👾
            </div>
            <h3 class="font-pixel text-sm text-primary">KAI SOLARIS</h3>
            <p class="font-retro text-lg opacity-70">Fondateur & Lead Developer</p>
            <div class="divider my-1"></div>
            <p class="font-retro text-base opacity-60 italic">
              "Un bon jeu, c'est 10 000 sprites et une âme."
            </p>
            <div class="flex gap-2 flex-wrap justify-center">
              <span class="badge badge-outline font-retro text-base">Amiga</span>
              <span class="badge badge-outline font-retro text-base">C64</span>
              <span class="badge badge-outline font-retro text-base">NES</span>
              <span class="badge badge-outline font-retro text-base">SNES</span>
            </div>
          </div>
        </div>

        <!-- Fun facts -->
        <ul class="steps steps-vertical w-full max-w-sm">
          <li class="step step-primary">
            <span class="font-retro text-base text-left pl-4">1987 — Premier jeu sur Amiga 500</span>
          </li>
          <li class="step step-primary">
            <span class="font-retro text-base text-left pl-4">1991 — Création de Solaris Studio</span>
          </li>
          <li class="step step-primary">
            <span class="font-retro text-base text-left pl-4">1998 — Passage au PC &amp; DOS</span>
          </li>
          <li class="step step-secondary">
            <span class="font-retro text-base text-left pl-4">2010 — Revival pixel art indie</span>
          </li>
          <li class="step step-secondary">
            <span class="font-retro text-base text-left pl-4">2024 — 42 jeux au compteur !</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ===== DIVIDER ===== -->
<div class="w-full border-y-4 border-base-content bg-base-300 py-3 overflow-hidden">
  <div class="marquee-wrapper">
    <span class="font-retro text-xl tracking-widest opacity-50" style="display:inline-block; animation: scroll-marquee 30s linear infinite; white-space:nowrap;">
      ☆ PIXEL ART ☆ CHIPTUNE ☆ 8-BIT ☆ 16-BIT ☆ RETRO GAMING ☆ INDIE DEV ☆ PIXEL ART ☆ CHIPTUNE ☆ 8-BIT ☆ 16-BIT ☆ RETRO GAMING ☆ INDIE DEV ☆ PIXEL ART ☆ CHIPTUNE ☆ 8-BIT ☆ 16-BIT ☆ RETRO GAMING ☆ INDIE DEV ☆
    </span>
  </div>
</div>

<!-- ===== GAMES ===== -->
<section id="games" class="py-24 px-4 lg:px-8 bg-base-200">
  <div class="max-w-6xl mx-auto">

    <div class="text-center mb-16">
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">GAME SELECT</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
      <p class="font-retro text-xl opacity-60">Choisissez votre aventure, joueur.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      ${renderGames()}
    </div>

    <div class="text-center mt-12">
      <div class="inline-flex items-center gap-3 bg-base-100 border-4 border-base-content px-6 py-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <span class="font-pixel text-xs text-success blink">▶</span>
        <span class="font-retro text-xl">PROCHAIN JEU : CYBER KNIGHT — ETA 2025</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== SKILLS ===== -->
<section id="skills" class="py-24 px-4 lg:px-8 bg-base-100">
  <div class="max-w-3xl mx-auto">

    <div class="text-center mb-16">
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">STATS & SKILLS</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
      <p class="font-retro text-xl opacity-60">Notre fiche personnage.</p>
    </div>

    <div class="bg-base-200 border-4 border-base-content p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">

      <!-- Character header -->
      <div class="flex items-center gap-4 mb-8 pb-6 border-b-4 border-base-content">
        <div class="w-16 h-16 bg-primary border-4 border-base-content flex items-center justify-center text-3xl flex-shrink-0">
          🕹️
        </div>
        <div>
          <p class="font-pixel text-xs text-primary">SOLARIS STUDIO</p>
          <p class="font-retro text-2xl opacity-60">CLASS: RETRO GAME DEVELOPER</p>
          <p class="font-retro text-lg opacity-40">LVL 99 — XP: MAX</p>
        </div>
      </div>

      <!-- Skills bars -->
      <div class="flex flex-col gap-5">
        ${renderSkills()}
      </div>

      <!-- Equipment -->
      <div class="mt-8 pt-6 border-t-4 border-base-content">
        <p class="font-pixel text-xs mb-4 opacity-70">ÉQUIPEMENT</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-lg badge-outline font-retro text-base">Amiga 500</span>
          <span class="badge badge-lg badge-outline font-retro text-base">Commodore 64</span>
          <span class="badge badge-lg badge-outline font-retro text-base">Aseprite</span>
          <span class="badge badge-lg badge-outline font-retro text-base">FamiTracker</span>
          <span class="badge badge-lg badge-outline font-retro text-base">Tiled</span>
          <span class="badge badge-lg badge-outline font-retro text-base">LÖVE2D</span>
          <span class="badge badge-lg badge-outline font-retro text-base">PICO-8</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section id="contact" class="py-24 px-4 lg:px-8 bg-base-200 relative overflow-hidden">

  <!-- Background decoration -->
  <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 24px 24px;"></div>

  <div class="max-w-2xl mx-auto relative z-10">

    <div class="text-center mb-16">
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">ENTER YOUR NAME</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
      <p class="font-retro text-xl opacity-60">On vous répondra avant le prochain boss.</p>
    </div>

    <div class="bg-base-100 border-4 border-base-content p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">

      <!-- Terminal header -->
      <div class="flex items-center gap-2 mb-6 pb-4 border-b-4 border-base-content">
        <div class="w-3 h-3 rounded-full bg-error border-2 border-base-content"></div>
        <div class="w-3 h-3 rounded-full bg-warning border-2 border-base-content"></div>
        <div class="w-3 h-3 rounded-full bg-success border-2 border-base-content"></div>
        <span class="font-retro text-base opacity-60 ml-2">SOLARIS_COMMS.EXE</span>
      </div>

      <form id="contact-form" class="flex flex-col gap-5">
        <div class="form-control">
          <label class="label pb-1">
            <span class="font-pixel text-xs label-text">&gt; NOM_JOUEUR:</span>
          </label>
          <input type="text" placeholder="PLAYER_01" class="input input-bordered font-retro text-xl w-full focus:outline-primary" required />
        </div>
        <div class="form-control">
          <label class="label pb-1">
            <span class="font-pixel text-xs label-text">&gt; EMAIL:</span>
          </label>
          <input type="email" placeholder="hero@dungeon.net" class="input input-bordered font-retro text-xl w-full focus:outline-primary" required />
        </div>
        <div class="form-control">
          <label class="label pb-1">
            <span class="font-pixel text-xs label-text">&gt; SUJET:</span>
          </label>
          <select class="select select-bordered font-retro text-xl w-full">
            <option>Collaboration</option>
            <option>Presse / Média</option>
            <option>Support technique</option>
            <option>Juste dire bonjour !</option>
          </select>
        </div>
        <div class="form-control">
          <label class="label pb-1">
            <span class="font-pixel text-xs label-text">&gt; MESSAGE:</span>
          </label>
          <textarea class="textarea textarea-bordered font-retro text-xl w-full h-32 focus:outline-primary" placeholder="Écris ton message ici..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg font-pixel text-xs mt-2 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          ▶ ENVOYER
        </button>
      </form>
    </div>

    <!-- Social links -->
    <div class="flex justify-center gap-6 mt-8">
      <a href="#" class="btn btn-outline btn-sm font-pixel text-xs shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        ITCH.IO
      </a>
      <a href="#" class="btn btn-outline btn-sm font-pixel text-xs shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        GITHUB
      </a>
      <a href="#" class="btn btn-outline btn-sm font-pixel text-xs shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        TWITTER
      </a>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="bg-base-content text-base-100 py-8 px-4 border-t-4 border-base-content">
  <div class="max-w-4xl mx-auto text-center flex flex-col gap-3">
    <p class="font-pixel text-xs tracking-widest opacity-80">☀ SOLARIS STUDIO</p>
    <p class="font-retro text-lg opacity-50">© 1987–2024 — Tous droits réservés</p>
    <p class="font-retro text-base opacity-40">
      Made with ♥ and <span class="font-pixel text-xs">pixels</span> — Vite + DaisyUI
    </p>
  </div>
</footer>
`

// ============================================================
// Smooth scroll for nav links (fallback for older browsers)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// ============================================================
// Contact form — feedback toast
// ============================================================
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const toast = document.createElement('div')
  toast.className = 'toast toast-end z-50'
  toast.innerHTML = `
    <div class="alert alert-success border-4 border-base-content shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
      <span class="font-retro text-lg">✓ MESSAGE ENVOYÉ ! ON REVIENT VITE.</span>
    </div>
  `
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 4000)

  e.target.reset()
})
