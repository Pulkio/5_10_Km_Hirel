import React, { useState, useEffect } from 'react';
import VideoCarousel from './assets/components/VideoCarousel';
import VideoCard from './assets/components/VideoCard';
import VideoPlayer from './assets/components/VideoPlayer';

/**
 * Page d'accueil du 5&10km d'Hirel.
 * Affiche l'affiche officielle, les informations de l'événement et la galerie vidéo.
 * @returns {JSX.Element} - Page d'accueil complète
 */
const Accueil = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Données des vidéos de l'événement
  const videos = [
    {
      id: 1,
      title: "5km d'Hirel - Départ matinal",
      description: "Le départ énergique du 5km à 9h pétante ! Ambiance électrique et motivante pour bien commencer la matinée.",
      mp4Source: "videos/video1.mp4",
      webmSource: "videos/video1.webm",
      poster: "images/video1-poster.jpg",
      category: "Départ",
      date: "3 août 2025",
      duration: "2:30"
    },
    {
      id: 2,
      title: "10km d'Hirel - Parcours champêtre",
      description: "Découvrez le magnifique parcours plat à travers la campagne hireloise. Un cadre authentique entre champs et nature !",
      mp4Source: "videos/video2.mp4",
      webmSource: "videos/video2.webm",
      poster: "images/video2-poster.jpg",
      category: "Parcours",
      date: "3 août 2025",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Ambiance et arrivée - 5&10km d'Hirel",
      description: "L'ambiance conviviale de l'arrivée, les sourires (parfois crispés !) et la joie des coureurs ayant relevé le défi !",
      mp4Source: "videos/video3.mp4",
      webmSource: "videos/video3.webm",
      poster: "images/video3-poster.jpg",
      category: "Arrivée",
      date: "3 août 2025",
      duration: "3:45"
    },
    {
      id: 4,
      title: "Préparation et échauffement",
      description: "Les derniers préparatifs avant le grand jour ! Conseils d'échauffement et ambiance décontractée.",
      mp4Source: "videos/video4.mp4",
      webmSource: "videos/video4.webm",
      poster: "images/video4-poster.jpg",
      category: "Préparation",
      date: "3 août 2025",
      duration: "1:50"
    },
    {
      id: 5,
      title: "Paysages de la Baie du Mont Saint-Michel",
      description: "Découvrez les magnifiques paysages qui entourent le parcours, avec la Baie du Mont Saint-Michel en toile de fond.",
      mp4Source: "videos/video5.mp4",
      webmSource: "videos/video5.webm",
      poster: "images/video5-poster.jpg",
      category: "Paysages",
      date: "3 août 2025",
      duration: "3:20"
    },
    {
      id: 6,
      title: "Témoignages des participants",
      description: "Les coureurs partagent leurs impressions sur cette première édition du 5&10km d'Hirel. Que du bonheur !",
      mp4Source: "videos/video6.mp4",
      webmSource: "videos/video6.webm",
      poster: "images/video6-poster.jpg",
      category: "Témoignages",
      date: "3 août 2025",
      duration: "2:10"
    }
  ];

  /**
   * Gère l'ouverture de la modal vidéo
   */
  const handleVideoPlay = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
    document.body.style.overflow = 'hidden'; // Empêche le scroll
  };

  /**
   * Gère la fermeture de la modal vidéo
   */
  const handleCloseModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset'; // Réactive le scroll
  };

  /**
   * Ferme la modal avec la touche Échap
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && showVideoModal) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        
        {/* Section Hero avec l'affiche */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-bleu)]/5 to-[color:var(--color-vert)]/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Badge "Première édition" */}
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[color:var(--color-jaune)] to-[color:var(--color-jaune)]/80 text-[color:var(--color-gris-fonce)] shadow-lg animate-bounce-in">
                  ✨ PREMIÈRE ÉDITION ✨
                </span>
              </div>

              {/* Titre principal */}
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 gradient-text animate-fade-in">
                5&10km d'Hirel
              </h1>
              
              <p className="text-xl md:text-2xl text-center text-gray-700 mb-12 animate-fade-in delay-200">
                Parcours plat, Fun & Soleil près de la Baie ! ☀️🌾
              </p>

              {/* Conteneur principal avec affiche et infos */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Affiche officielle */}
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

                {/* Informations clés */}
                <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right delay-500">
                  
                  {/* Date importante */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <h2 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-4 flex items-center">
                      🗓️ Date à retenir !
                    </h2>
                    <p className="text-xl font-semibold text-gray-800">
                      <span className="text-3xl text-[color:var(--color-jaune)]">Dimanche 3 août 2025</span>
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

                  {/* Bouton d'inscription */}
                  <div className="text-center">
                    <button className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      🏃‍♂️ Je m'inscris maintenant !
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Description détaillée */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-8">
                
                {/* Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 animate-fade-in">
                  <p className="text-xl leading-relaxed">
                    <strong>Imaginez le tableau :</strong> Un soleil radieux ☀️ (On a passé commande !), l'air vivifiant de la Baie du Mont Saint-Michel 🌊 juste à côté pour l'ambiance marine, et vous, filant comme le vent (ou presque !) au cœur de la campagne hireloise verdoyante 🌳, entre les champs. Un cadre authentique en Ille-et-Vilaine pour une expérience qui change !
                  </p>
                </div>

                {/* Argument choc - Parcours plat */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 animate-fade-in delay-200">
                  <h3 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-4 flex items-center">
                    🐟 Le GROS plus de notre événement
                  </h3>
                  <p className="text-lg">
                    Le parcours est <strong>plus plat qu'une limande déshydratée !</strong> 🐟 Non, sérieusement, votre montre GPS va se demander si elle n'a pas un problème. C'est le spot parfait pour claquer un RP et enfin avoir un graphique de dénivelé qui ressemble à une ligne droite. Fini les excuses du genre "ah mais ça montait trop !" 😉
                  </p>
                </div>

                {/* Programme détaillé */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 animate-fade-in delay-300">
                  <h3 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-6">
                    🕰️ Au programme de cette matinée sportive (et légèrement folle)
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl font-bold text-[color:var(--color-vert)] min-w-[60px]">9h</span>
                      <div>
                        <strong>Départ du 5km.</strong> Pour ceux qui veulent une injection rapide d'endorphines avant le brunch. 🏃🏻🍃
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl font-bold text-[color:var(--color-bleu)] min-w-[60px]">10h</span>
                      <div>
                        <strong>Départ du 10km.</strong> Pour les plus courageux ou ceux qui aiment avoir une excuse pour manger plus au déjeuner. 🏃🏻‍♂️🏃🏻‍♂️🍃
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-lg italic text-center">
                    Rejoignez notre joyeuse troupe de passionnés 🥳 pour partager la sueur, les sourires (crispés ?) et l'incroyable sensation d'avoir accompli quelque chose avant midi !
                  </p>
                </div>

                {/* Pourquoi venir */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 animate-fade-in delay-500">
                  <h3 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-6">
                    🎯 Pourquoi vous DEVEZ venir (on insiste un peu)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl">☀️</span>
                      <div>
                        <strong>Un soleil radieux</strong> commandé spécialement pour l'occasion (on croise les doigts très fort 🤞🏻).
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl">💐</span>
                      <div>
                        <strong>Un parcours 100% champêtre.</strong> Possibilité d'apercevoir des lapins 🐇 (option non contractuelle).
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl">🏃🏻‍♂️</span>
                      <div>
                        <strong>Un profil ULTRA PLAT !</strong> (Oui, on insiste, c'est notre argument choc !). Votre cardio vous dira merci... peut-être.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <span className="text-2xl">🎉</span>
                      <div>
                        <strong>Une ambiance électrique et conviviale !</strong> Venez avec votre bonne humeur, on fournit le reste (et peut-être des encouragements bruyants).
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action final */}
                <div className="bg-gradient-to-r from-[color:var(--color-jaune)]/20 to-[color:var(--color-vert)]/20 rounded-2xl p-8 text-center animate-fade-in delay-700">
                  <h3 className="text-2xl font-bold text-[color:var(--color-bleu)] mb-4">
                    🏃‍♀️ Alors, prêt(e) à relever le défi (plat) ?
                  </h3>
                  <p className="text-lg mb-6">
                    Laissez vos excuses au vestiaire, enfilez vos plus belles chaussettes de running (celles avec des motifs rigolos sont encouragées) et ramenez-vous à Hirel le <strong>3 août 2025</strong> ! Promis, vous repartirez avec des souvenirs plein la tête... et peut-être l'envie de revenir l'année prochaine (ou de faire une sieste immédiate 😂).
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="btn-primary text-xl px-10 py-4 rounded-xl">
                      🏃‍♂️ Je m'inscris !
                    </button>
                    <p className="text-lg font-semibold text-[color:var(--color-bleu)]">
                      On vous attend de pied ferme ! 😊👍
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section Carrousel vidéo */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 animate-fade-in">
                🎬 Découvrez l'événement en vidéo
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12 animate-fade-in delay-200">
                Plongez dans l'ambiance du 5&10km d'Hirel !
              </p>
              
              <div className="animate-zoom-in delay-300">
                <VideoCarousel 
                  videos={videos} 
                  onVideoClick={handleVideoPlay}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Galerie vidéo complète */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
                📹 Toutes les vidéos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <div 
                    key={video.id}
                    className={`animate-fade-in delay-${index * 100 + 200}`}
                  >
                    <VideoCard
                      title={video.title}
                      description={video.description}
                      mp4Source={video.mp4Source}
                      webmSource={video.webmSource}
                      poster={video.poster}
                      category={video.category}
                      date={video.date}
                      duration={video.duration}
                      onPlay={() => handleVideoPlay(video)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Newsletter */}
        <section className="py-20 bg-gradient-to-r from-[color:var(--color-bleu)] to-[color:var(--color-vert)] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 animate-fade-in">
                📧 Restez informé(e) !
              </h2>
              <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
                Inscrivez-vous à notre newsletter pour recevoir toutes les informations sur le 5&10km d'Hirel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in delay-300">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)]"
                />
                <button className="px-6 py-3 bg-[color:var(--color-jaune)] text-[color:var(--color-gris-fonce)] rounded-lg font-semibold hover:bg-[color:var(--color-jaune)]/90 transition-all duration-200">
                  📧 Rester informé
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de lecture vidéo */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 modal-overlay">
          {/* Overlay cliquable pour fermer */}
          <div 
            className="absolute inset-0" 
            onClick={handleCloseModal}
          ></div>
          
          {/* Contenu de la modal */}
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl modal-content">
            {/* Bouton de fermeture */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 focus-visible"
              aria-label="Fermer la vidéo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Lecteur vidéo */}
            <VideoPlayer
              mp4Source={selectedVideo.mp4Source}
              webmSource={selectedVideo.webmSource}
              poster={selectedVideo.poster}
              title={selectedVideo.title}
              autoplay={true}
            />

            {/* Informations sur la vidéo */}
            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{selectedVideo.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-[color:var(--color-bleu)] text-white rounded text-xs font-semibold">
                    {selectedVideo.category}
                  </span>
                  <span>{selectedVideo.date}</span>
                </span>
                <span>{selectedVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accueil;
