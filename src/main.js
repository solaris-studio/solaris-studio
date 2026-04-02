import './style.css'

// ============================================================
// SOLARIS STUDIO — ONE PAGE SITE
// ============================================================

const GAME = {
  title: 'ISOTOPE AVENTURE',
  year: '202X',
  genre: 'SURVIVAL HORROR / PUZZLE',
  tagline: 'La vérité irradie dans l\'obscurité.',
  description: `
    Vous êtes <strong>Marcus Holt</strong>, journaliste indépendant. Un tuyau anonyme vous conduit à
    l'usine chimique abandonnée de <strong>Centrale Korova</strong>. Dès vos premiers pas dans
    l'enceinte, les portes se verrouillent derrière vous — et quelque chose se déplace dans les ombres.
  `,
  details: [
    { icon: '🎮', label: 'GAMEPLAY', value: 'Exploration, puzzles environnementaux, gestion de ressources' },
    { icon: '👁️', label: 'ATMOSPHÈRE', value: 'Angles de caméra fixes PS1, brouillard volumétrique, sound design oppressant' },
    { icon: '🧩', label: 'PUZZLES', value: 'Codes d\'accès, circuits électriques, documents cryptés à décrypter' },
    { icon: '📷', label: 'PERSONNAGE', value: 'Marcus Holt — journaliste, pas un soldat. La fuite est souvent la meilleure option' },
  ],
  inspirations: ['SILENT HILL', 'RESIDENT EVIL', 'ALONE IN THE DARK'],
  status: 'EN DÉVELOPPEMENT',
  platform: 'PC / LINUX / MAC',
}

function renderContact() {
  return `
    <!-- ===== CONTACT (commenté — à activer quand le backend sera prêt) ===== -->
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
    
        <div class="flex justify-center gap-6 mt-8">
          <a href="#" class="btn btn-outline btn-sm font-pixel text-xs shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            ITCH.IO
          </a>
          <a href="#" class="btn btn-outline btn-sm font-pixel text-xs shadow-[3px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            GITHUB
          </a>
        </div>
      </div>
    </section>
  `
}

function renderGame() {
  return `
    <!-- Fiche jeu principale -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      <!-- Colonne gauche : cover fictive + infos clés -->
      <div class="flex flex-col gap-6">

        <!-- Cover / artwork placeholder avec ambiance -->
        <div class="relative border-4 border-base-content shadow-[8px_8px_0px_rgba(0,0,0,0.5)] overflow-hidden bg-base-300 aspect-video flex items-center justify-center">
          <!-- Grille de fond façon écran PS1 -->
          <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 16px 16px;"></div>
          <!-- Contenu placeholder -->
          <div class="relative z-10 flex flex-col items-center gap-4 p-8 text-center isotope-aventure">
            <span class="text-8xl opacity-80">☢</span>
            <p class="font-pixel text-xs text-primary leading-relaxed tracking-widest">ISOTOPE<br/>AVENTURE</p>
            <p class="font-retro text-lg opacity-50 tracking-widest">CENTRALE KOROVA — NIVEAU B3</p>
          </div>
          <!-- Overlay scanlines -->
          <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px);"></div>
        </div>

        <!-- Badges inspirations -->
        <div class="flex flex-col gap-3">
          <p class="font-pixel text-xs opacity-50 tracking-widest">INSPIRÉ PAR</p>
          <div class="flex flex-wrap gap-2">
            ${GAME.inspirations.map(i => `<span class="badge badge-outline badge-lg font-retro text-base">${i}</span>`).join('')}
          </div>
        </div>

        <!-- Statut & plateforme -->
        <div class="flex gap-4">
          <div class="flex-1 bg-base-200 border-4 border-base-content p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-center">
            <p class="font-pixel text-xs opacity-50 mb-1">STATUT</p>
            <p class="font-retro text-xl text-warning">${GAME.status}</p>
          </div>
          <div class="flex-1 bg-base-200 border-4 border-base-content p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-center">
            <p class="font-pixel text-xs opacity-50 mb-1">PLATEFORME</p>
            <p class="font-retro text-xl text-accent">${GAME.platform}</p>
          </div>
          <div class="flex-1 bg-base-200 border-4 border-base-content p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] text-center">
            <p class="font-pixel text-xs opacity-50 mb-1">SORTIE</p>
            <p class="font-retro text-xl text-primary">${GAME.year}</p>
          </div>
        </div>
      </div>

      <!-- Colonne droite : synopsis + détails gameplay -->
      <div class="flex flex-col gap-6">

        <!-- En-tête titre -->
        <div>
          <div class="flex items-center gap-3 mb-3">
            <span class="badge badge-primary font-retro text-base">${GAME.genre}</span>
          </div>
          <h3 class="font-pixel text-lg md:text-2xl text-primary leading-relaxed mb-2">${GAME.title}</h3>
          <p class="font-retro text-2xl text-secondary italic opacity-80">"${GAME.tagline}"</p>
        </div>

        <!-- Synopsis -->
        <div class="bg-base-200 border-4 border-base-content p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
          <p class="font-pixel text-xs opacity-50 mb-3 tracking-widest">SYNOPSIS</p>
          <p class="font-retro text-xl leading-relaxed">${GAME.description}</p>
        </div>

        <!-- Détails gameplay -->
        <div class="flex flex-col gap-3">
          ${GAME.details.map(d => `
            <div class="flex gap-4 items-start bg-base-200 border-l-4 border-primary px-4 py-3">
              <span class="text-2xl flex-shrink-0">${d.icon}</span>
              <div>
                <p class="font-pixel text-xs opacity-50 mb-1">${d.label}</p>
                <p class="font-retro text-lg leading-snug">${d.value}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `

<!-- ===== NAVBAR ===== -->
<nav class="navbar bg-base-100 border-b-4 border-base-content sticky top-0 z-50 px-4 lg:px-8">
  <div class="navbar-start">
    <a href="#hero" class="glitch-hover flex items-center">
      <img src="/solaris-studio/solaris-logo.png" alt="Solaris Studio" class="h-10 w-auto" />
    </a>
  </div>
  <div class="navbar-end hidden md:flex gap-4">
    <a href="#about" class="font-pixel text-xs btn btn-ghost btn-sm glitch-hover">À PROPOS</a>
    <a href="#games" class="font-pixel text-xs btn btn-ghost btn-sm glitch-hover">JEUX</a>
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
      </ul>
    </div>
  </div>
</nav>

<!-- ===== MARQUEE ===== -->
<div class="bg-primary text-primary-content py-2 overflow-hidden border-b-2 border-primary-content/30">
  <div class="marquee-wrapper">
    <span class="marquee-content font-retro text-xl tracking-widest">
      ☢ ISOTOPE AVENTURE — EN DÉVELOPPEMENT ☢ CENTRALE KOROVA — ENTREZ SI VOUS L'OSEZ ☢ SURVIVAL HORROR / PUZZLE ☢ INSPIRÉ DE SILENT HILL &amp; RESIDENT EVIL ☢ ISOTOPE AVENTURE — EN DÉVELOPPEMENT ☢ CENTRALE KOROVA — ENTREZ SI VOUS L'OSEZ ☢ SURVIVAL HORROR / PUZZLE ☢ INSPIRÉ DE SILENT HILL &amp; RESIDENT EVIL ☢
    </span>
  </div>
</div>

<!-- ===== HERO ===== -->
<section id="hero" class="scanlines crt-effect min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 py-24 text-center relative overflow-hidden">

  <!-- Background pixel grid decoration -->
  <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>

  <!-- Main content -->
  <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

    <!-- Logo -->
    <img
      src="/solaris-studio/solaris-logo.png"
      alt="Solaris Studio"
      class="w-64 md:w-80 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
    />

    <!-- Tagline -->
    <div>
      <p class="font-retro text-2xl md:text-3xl opacity-70 tracking-widest">
        INDIE HORROR GAME STUDIO
      </p>
    </div>

    <!-- Tagline terminal style -->
    <div class="bg-base-100 border-4 border-base-content px-6 py-4 max-w-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
      <p class="font-retro text-xl md:text-2xl text-success leading-relaxed">
        &gt; Nouveau jeu en développement : ISOTOPE AVENTURE_<span class="blink">█</span>
      </p>
    </div>

    <!-- CTA buttons -->
    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#games" class="glitch-hover btn btn-primary btn-lg font-pixel text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        ☢ DÉCOUVRIR
      </a>
      <a href="#about" class="glitch-hover btn btn-outline btn-lg font-pixel text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
        ▶ À PROPOS
      </a>
    </div>

    <!-- Stats badges -->
    <div class="flex flex-wrap gap-4 justify-center mt-4">
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">JEU EN COURS</div>
        <div class="stat-value font-pixel text-lg text-primary leading-relaxed">ISOTOPE</div>
      </div>
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">GENRE</div>
        <div class="stat-value font-pixel text-lg text-secondary leading-relaxed">HORROR</div>
      </div>
      <div class="stat bg-base-100 border-4 border-base-content p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
        <div class="stat-title font-retro text-base opacity-60">SORTIE</div>
        <div class="stat-value font-pixel text-lg text-accent leading-relaxed">202X</div>
      </div>
    </div>
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
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">À PROPOS</h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <!-- Text -->
    <div class="flex flex-col gap-6">
      <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
        <p class="font-retro text-xl leading-relaxed">
          <strong>Solaris Studio</strong> est un studio indépendant fondé par une poignée de passionnés de jeux vidéo rétro et d'horreur. Notre terrain de jeu : l'ère PS1 — ses angles de caméra fixes, ses textures qui bavent, ses bruitages qui glacent le sang_<span class="blink">█</span>
        </p>
      </div>
      <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
        <p class="font-retro text-xl leading-relaxed">
          Notre premier projet, <strong>Isotope Aventure</strong>, est un hommage direct à Silent Hill et Resident Evil — l'angoisse en moins de polygones, l'atmosphère en plus. Un jeu d'aventure horrifique où chaque couloir peut être le dernier_<span class="blink">█</span>
        </p>
      </div>
      <div class="bg-base-200 border-4 border-base-content p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)]">
        <p class="font-retro text-xl leading-relaxed">
          Pas de jumpscares bon marché. Pas de tutoriels. Juste vous, <strong>Marcus Holt</strong>, un carnet de notes, et une usine qui ne veut pas vous laisser partir_<span class="blink">█</span>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ===== DIVIDER ===== -->
<div class="w-full border-y-4 border-base-content bg-base-300 py-3 overflow-hidden">
  <div class="marquee-wrapper">
    <span class="font-retro text-xl tracking-widest opacity-50" style="display:inline-block; animation: scroll-marquee 30s linear infinite; white-space:nowrap;">
      ☢ SURVIVAL HORROR ☢ PUZZLE ADVENTURE ☢ CAMÉRAS FIXES ☢ AMBIANCE PS1 ☢ JOURNALISTE EN DANGER ☢ CENTRALE KOROVA ☢ SURVIVAL HORROR ☢ PUZZLE ADVENTURE ☢ CAMÉRAS FIXES ☢ AMBIANCE PS1 ☢ JOURNALISTE EN DANGER ☢ CENTRALE KOROVA ☢
    </span>
  </div>
</div>

<!-- ===== GAMES ===== -->
<section id="games" class="py-24 px-4 lg:px-8 bg-base-200">
  <div class="max-w-6xl mx-auto">

    <div class="text-center mb-16">
      <h2 class="font-pixel text-xl md:text-2xl text-primary mb-4">NOS JEUX</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
      <p class="font-retro text-xl opacity-60">Notre premier titre — en développement actif.</p>
    </div>

    <div class="max-w-5xl mx-auto">
      ${renderGame()}
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="bg-base-content text-base-100 py-8 px-4 border-t-4 border-base-content">
  <div class="max-w-4xl mx-auto text-center flex flex-col gap-3">
    <p class="font-pixel text-xs tracking-widest opacity-80">SOLARIS STUDIO</p>
    <p class="font-retro text-lg opacity-50">© 19XX–2026 — Tous droits réservés</p>
    <p class="font-retro text-base opacity-40">
      Made with ♥ and <span class="font-pixel text-xs">pixels</span>
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
