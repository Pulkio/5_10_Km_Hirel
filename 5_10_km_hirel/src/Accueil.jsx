/**
 * =============================================================
 * Accueil.jsx — Page d'accueil principale du site 5&10km d'Hirel
 * =============================================================
 *
 * RÔLE DU FICHIER :
 * - Point d'entrée visuel du site (route "/")
 * - Affiche l'en-tête (Header), le carrousel vidéo (YouTube Shorts), et le pied de page (Footer)
 *
 * STRUCTURE ET LIENS :
 * - Importe Header.jsx et Footer.jsx (structure commune à toutes les pages)
 * - Importe le CSS youtube-embed.css pour le style du carrousel vidéo
 * - Utilise la liste YOUTUBE_SHORTS pour afficher les vidéos dans le carrousel
 *
 * === COMMENT FONCTIONNENT LES className EN JSX ? ===
 *
 * - Les propriétés `className` dans le JSX remplacent l'attribut `class` du HTML classique.
 * - On peut y mettre une ou plusieurs classes CSS, séparées par des espaces, pour appliquer des styles, des animations, des couleurs, etc.
 * - Les classes peuvent venir :
 *   - de Tailwind CSS (ex : `text-center`, `bg-gradient-to-r`, `rounded-2xl`...)
 *   - de tes propres fichiers CSS (ex : `animate-fade-in`, `youtube-embed-container`...)
 *   - ou être combinées (ex : `text-5xl font-bold animate-fade-in`)
 * - Les classes d'animation (ex : `animate-fade-in`, `animate-slide-up`, `delay-200`) sont définies dans `animations.css` et permettent d'ajouter des effets visuels dynamiques.
 * - Les utilitaires Tailwind (ex : `px-6`, `mb-8`, `bg-gradient-to-r`) sont générés automatiquement et facilitent la mise en page rapide.
 *
 * Astuce :
 * - Pour voir l'effet d'une classe, cherche-la dans le CSS ou la doc Tailwind.
 * - Pour ajouter une animation, ajoute simplement la classe correspondante dans le `className`.
 *
 * Pour toute nouvelle page, s'inspirer de cette structure et commenter !
 */

import React from 'react';
import Header from './assets/components/Header'; // En-tête du site (navigation principale)
import Footer from './assets/components/Footer'; // Pied de page commun
import './styles/youtube-embed.css'; // Styles spécifiques à l'intégration YouTube Shorts

// ===============================
// Liste des liens YouTube Shorts à afficher dans le carrousel vidéo
// ===============================
const YOUTUBE_SHORTS = [
  'https://youtube.com/shorts/CmGhuE26JAw',
  'https://youtube.com/shorts/9GTtodizSHU',
  'https://youtube.com/shorts/WzftutqWjGA',
  'https://youtube.com/shorts/ZK3UH-ND6Ow',
  'https://youtube.com/shorts/ai1iwx8FEac',
  'https://youtube.com/shorts/tDrzoa81LnY',
  'https://youtube.com/shorts/ZhgAq5kHTC0',
  'https://youtube.com/shorts/QPHamOLXm4Q',
  'https://youtube.com/shorts/NaxHR1tapp0',
  'https://youtube.com/shorts/25a4TyzI268',
];

/**
 * Extrait l'identifiant d'une vidéo YouTube à partir d'une URL (shorts ou watch)
 * Permet d'intégrer dynamiquement n'importe quel lien YouTube dans le carrousel.
 * @param {string} url - Lien YouTube
 * @returns {string|null} - ID de la vidéo
 */
function extractYouTubeId(url) {
  // Gère les URLs shorts et watch
  const shortsMatch = url.match(/shorts\/([\w-]+)/);
  if (shortsMatch) return shortsMatch[1];
  const watchMatch = url.match(/[?&]v=([\w-]+)/);
  if (watchMatch) return watchMatch[1];
  return null;
}

// ===============================
// Composant Carrousel YouTube Shorts (modulaire et réutilisable)
// ===============================
const YouTubeShortsCarousel = () => {
  // current : index de la vidéo actuellement affichée
  const [current, setCurrent] = React.useState(0);
  const total = YOUTUBE_SHORTS.length;

  // Fonctions pour naviguer dans le carrousel
  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Récupère l'ID de la vidéo à afficher
  const videoId = extractYouTubeId(YOUTUBE_SHORTS[current]);

  // Rendu du carrousel avec styles modulaires
  return (
    <div className="youtube-embed-container">
      {/* Iframe YouTube Shorts stylée */}
      <iframe
        key={videoId}
        width="360"
        height="640"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&modestbranding=1&rel=0&playsinline=1`}
        title="YouTube Shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-embed-frame"
      ></iframe>
      {/* Contrôles du carrousel */}
      <div className="youtube-embed-controls">
        <button onClick={goPrev} aria-label="Vidéo précédente">◀</button>
        <span>{current + 1} / {total}</span>
        <button onClick={goNext} aria-label="Vidéo suivante">▶</button>
      </div>
    </div>
  );
};


// ===============================
// Composant principal Accueil (page d'accueil)
// ===============================
const Accueil = () => {
  // ===============================
  // Rendu principal de la page d'accueil
  // ===============================
  return (
    <>
      {/* En-tête du site (navigation principale) */}
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        {/*
          SECTION HERO
          - Affiche officielle, titre, et badge "Première édition"
          - Utilisation de className pour appliquer Tailwind (mise en page, couleurs) + animations CSS custom (ex: animate-fade-in, animate-bounce-in)
        */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-bleu)]/5 to-[color:var(--color-vert)]/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Badge "Première édition" animé */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[color:var(--color-jaune)] to-[color:var(--color-jaune)]/80 text-[color:var(--color-gris-fonce)] shadow-lg animate-bounce-in">
                  ✨ PREMIÈRE ÉDITION ✨
                </span>
              </div>
              {/* Titre principal avec animation fade-in et gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 animate-fade-in text-[color:var(--color-bleu)]">
                <span className="bg-gradient-to-r from-[color:var(--color-bleu)] to-blue-700 bg-clip-text text-transparent">5&amp;10km</span>
                <span className="text-[color:var(--color-bleu)]"> d'Hirel</span>
              </h1>
              {/* Sous-titre animé (fade-in + délai) */}
              <p className="text-xl md:text-2xl text-center text-gray-700 mb-12 animate-fade-in delay-200">
                Parcours plat, Fun & Soleil près de la Baie ! ☀️🌾
              </p>
              {/* Grille principale : affiche + infos */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Affiche officielle animée (slide-in-left) */}
                <div className="order-2 lg:order-1 animate-slide-in-left delay-300">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--color-bleu)]/20 to-[color:var(--color-vert)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="images/Affiche.png" 
                      alt="Affiche officielle du 5&10km d'Hirel - Première édition"
                      className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
                    />
                  </div>
                </div>
                {/* Bloc infos clés animé (slide-in-right) */}
                <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right delay-500">
                  {/* Date importante */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <h2 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-4 flex items-center">
                      🗓️ Date à retenir !
                    </h2>
                    <p className="text-xl font-semibold text-gray-800">
                      <span className="text-3xl text-gray-900">Dimanche 3 août 2025</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                      Hirel vous attend pour une matinée de course à pied mémorable (et sans trop de souffrance en montée 😉) ! ✨
                    </p>
                  </div>
                  {/* Horaires */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <h3 className="text-xl font-bold text-[color:var(--color-bleu)] mb-4">
                      ⏰ Programme de la matinée
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[color:var(--color-vert)]/10 to-transparent rounded-lg">
                        <span className="font-semibold">🏃🏻 5km</span>
                        <span className="text-2xl font-bold text-[color:var(--color-vert)]">9h00</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[color:var(--color-bleu)]/10 to-transparent rounded-lg">
                        <span className="font-semibold">🏃🏻‍♂️ 10km</span>
                        <span className="text-2xl font-bold text-[color:var(--color-bleu)]">10h00</span>
                      </div>
                    </div>
                  </div>
                  {/* Bouton d'inscription stylé */}
                  <div className="text-center">
                    <a
                      href="https://www.nextrun.fr/course/inscriptions-avis/sport/4554/5-10-km-d-hirel/2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
                    >
                      🏃‍♂️ Je m'inscris maintenant !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          SECTION DESCRIPTION DÉTAILLÉE
          - Présentation des avantages de la course
          - Utilisation d'une grille responsive et d'animations synchronisées (slide-up, bounce-subtle, delay-*)
        */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Introduction héroïque animée */}
            <div className="text-center mb-20 animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Imaginez le tableau ✨
                </h2>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  Un soleil radieux ☀️ (On a passé commande !), l'air vivifiant de la Baie du Mont Saint-Michel 🌊 juste à côté pour l'ambiance marine, et vous, filant comme le vent au cœur de la campagne hireloise verdoyante 🌳. 
                  <span className="font-semibold text-[color:var(--color-bleu)]"> Un cadre authentique en Ille-et-Vilaine pour une expérience qui change !</span>
                </p>
              </div>
            </div>
            {/* Grille des avantages avec animations rapides et différées */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Parcours plat - Animation rapide */}
              <div className="bg-gradient-to-br from-[color:var(--color-vert)]/5 to-[color:var(--color-vert)]/10 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle">🏃‍♂️</div>
                <h3 className="text-xl font-bold text-[color:var(--color-vert)] mb-4">Parcours 100% plat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fini les côtes qui tuent ! 🙃 Ici, c'est <strong>tout plat</strong>. Parfait pour améliorer ses temps ou découvrir la course à pied sans craindre les montées interminables.
                </p>
              </div>
              {/* Ambiance authentique - Animation différée (delay-75) */}
              <div className="bg-gradient-to-br from-[color:var(--color-bleu)]/5 to-[color:var(--color-bleu)]/10 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle delay-75">🌾</div>
                <h3 className="text-xl font-bold text-[color:var(--color-bleu)] mb-4">Campagne authentique</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un parcours 100% champêtre ! Possibilité d'apercevoir <strong>des lapins et des tracteurs</strong>, c'est la nature qui vous accompagne avec ses parfums et ses couleurs.
                </p>
              </div>
              {/* Proximité baie - Animation différée (delay-150) */}
              <div className="bg-gradient-to-br from-[color:var(--color-jaune)]/10 to-[color:var(--color-jaune)]/20 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle delay-150">🌊</div>
                <h3 className="text-xl font-bold text-[color:var(--color-jaune)] mb-4">Baie du Mont Saint-Michel</h3>
                <p className="text-gray-600 leading-relaxed">
                  À deux pas de ce <strong>joyau du patrimoine mondial</strong> ! L'air marin et les paysages emblématiques de la baie vous donneront des ailes.
                </p>
              </div>
              {/* Convivialité - Animation différée (delay-225) */}
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle delay-225">🤝</div>
                <h3 className="text-xl font-bold text-pink-600 mb-4">Esprit familial</h3>
                <p className="text-gray-600 leading-relaxed">
                  Première édition = ambiance <strong>décontractée et bienveillante</strong> ! Que vous soyez débutant ou confirmé, l'objectif c'est de passer un super moment ensemble.
                </p>
              </div>
              {/* Organisation locale - Animation différée (delay-300) */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle delay-300">🏘️</div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">Organisé localement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Par des passionnés du coin qui connaissent <strong>chaque recoin du territoire</strong>. De l'amour du terroir dans chaque détail de l'organisation !
                </p>
              </div>
              {/* Chaussettes personnalisées - Animation différée (delay-375) */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-200 animate-slide-up">
                <div className="text-5xl mb-4 animate-bounce-subtle delay-375">🧦</div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">Chaussettes offertes !</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tous les coureurs repartent avec des <strong>chaussettes personnalisées</strong> aux couleurs de l'événement ! Un souvenir utile et stylé de votre première participation.
                </p>
              </div>
            </div>
            {/* Call-to-action principal animé */}
            <div className="text-center animate-fade-in delay-500">
              <div className="bg-gradient-to-r from-[color:var(--color-bleu)]/10 to-[color:var(--color-vert)]/10 rounded-3xl p-12 mx-auto max-w-4xl">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  🎯 Alors, prêt(e) pour l'aventure ?
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Rejoignez-nous pour cette première édition qui promet d'être mémorable ! Places limitées pour préserver l'esprit convivial.
                </p>
                <a
                  href="https://www.nextrun.fr/course/inscriptions-avis/sport/4554/5-10-km-d-hirel/2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xl px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 inline-block"
                >
                  🏃‍♀️ Je réserve ma place maintenant !
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
          SECTION VIDÉOS
          - Carrousel YouTube Shorts intégré
          - Utilisation de className pour appliquer le style modulaire (youtube-embed-*)
        */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--color-bleu)] mb-4 animate-fade-in">
                  <span className="bg-gradient-to-r from-[color:var(--color-bleu)] to-blue-700 bg-clip-text text-transparent">Vidéos</span>
                </h2>
                <p className="text-xl text-gray-600 animate-fade-in delay-200">
                  Découvrez l'événement en images !
                </p>
              </div>
              {/* Carrousel vidéo réutilisable */}
              <YouTubeShortsCarousel />
            </div>
          </div>
        </section>

      </main>
      {/* Pied de page commun */}
      <Footer />
    </>
  );
};

export default Accueil;
