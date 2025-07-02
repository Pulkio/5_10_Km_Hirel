import React from 'react';

/**
 * Composant VideoCard pour afficher un aperçu vidéo.
 * Optimisé pour les formats vertical (smartphone) et horizontal.
 * VERSION ANTI-SCROLL - Empêche le scroll automatique lors du clic
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Titre de la vidéo
 * @param {string} props.description - Description de la vidéo
 * @param {string} props.mp4Source - Source MP4
 * @param {string} props.webmSource - Source WebM
 * @param {string} props.poster - Image de prévisualisation
 * @param {string} props.category - Catégorie de la vidéo
 * @param {string} props.date - Date de la vidéo
 * @param {string} props.duration - Durée de la vidéo
 * @param {boolean} props.isVertical - Format vertical ou horizontal
 * @param {Function} props.onPlay - Fonction callback lors du clic
 */
const VideoCard = ({
  title,
  description,
  mp4Source,
  webmSource,
  poster,
  category,
  date,
  duration,
  isVertical = false,
  onPlay
}) => {
  
  // ✅ Gestionnaire de clic anti-scroll
  const handleClick = (e) => {
    e.preventDefault();           // Empêche le comportement par défaut
    e.stopPropagation();         // Empêche la propagation de l'événement
    
    // ✅ Sauvegarde la position de scroll actuelle
    const currentScrollY = window.scrollY;
    
    // ✅ Exécute la fonction onPlay
    if (onPlay) {
      onPlay();
    }
    
    // ✅ Force la position de scroll à rester identique
    // Utilise requestAnimationFrame pour s'assurer que cela se produit après le rendu
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScrollY,
        behavior: 'auto'        // Pas de scroll fluide, immédiat
      });
    });
  };

  // ✅ Gestionnaire pour empêcher le drag qui peut causer des scrolls
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`
        group relative bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer
        no-scroll-behavior                    // ✅ Classe CSS anti-scroll
        ${isVertical 
          ? 'aspect-[9/16]' 
          : 'aspect-video'
        }
      `}
      onClick={handleClick}                   // ✅ Gestionnaire anti-scroll
      onDragStart={handleDragStart}          // ✅ Empêche le drag
      role="button"                          // ✅ Accessibilité
      tabIndex={0}                           // ✅ Navigation clavier
      onKeyDown={(e) => {                    // ✅ Support clavier
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      }}
      aria-label={`Voir la vidéo: ${title}`} // ✅ Accessibilité
    >
      {/* Container vidéo avec aspect ratio adapté */}
      <div className={`
        relative w-full 
        ${isVertical ? 'h-full' : 'aspect-video'}
        overflow-hidden bg-gray-900
      `}>
        
        {/* Vidéo de prévisualisation (première frame) */}
        <video
          src={mp4Source}
          poster={poster}
          preload="metadata"
          muted
          playsInline
          tabIndex={-1}
          className={`w-full h-full transition-all duration-500 group-hover:scale-110 pointer-events-none select-none ${isVertical ? 'object-cover object-center' : 'object-cover'}`}
          style={{display: 'block'}}
          onLoadedData={e => { try { e.target.currentTime = 0.1; } catch {} }}
        >
          {webmSource && <source src={webmSource} type="video/webm" />}
          <source src={mp4Source} type="video/mp4" />
        </video>

        {/* Overlay sombre au hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

        {/* Bouton play central */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
            <svg 
              className="w-8 h-8 lg:w-10 lg:h-10 text-[color:var(--color-bleu)] ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              pointerEvents="none"            // ✅ Empêche les interactions sur l'icône
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* Badge catégorie */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-[color:var(--color-bleu)]/90 text-white text-xs font-semibold rounded-lg backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Badge durée */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded backdrop-blur-sm">
            {duration}
          </span>
        </div>

        {/* Badge format vertical */}
        {isVertical && (
          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-1 bg-[color:var(--color-vert)]/90 text-white text-xs font-medium rounded backdrop-blur-sm flex items-center space-x-1">
              <span>📱</span>
              <span>Vertical</span>
            </span>
          </div>
        )}
      </div>

      {/* Informations textuelles - CONDENSÉES pour format vertical */}
      <div className={`p-4 ${isVertical ? 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white' : 'bg-white'}`}>
        <h3 className={`
          font-bold mb-2 line-clamp-2 group-hover:text-[color:var(--color-bleu)] transition-colors duration-300
          ${isVertical ? 'text-sm text-white' : 'text-lg text-gray-900'}
        `}>
          {title}
        </h3>
        
        {!isVertical && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className={`flex items-center justify-between text-xs ${isVertical ? 'text-gray-300' : 'text-gray-500'}`}>
          <span>{date}</span>
          <span className="flex items-center space-x-1">
            <svg 
              className="w-3 h-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              pointerEvents="none"          // ✅ Empêche les interactions sur l'icône
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10V3m0 6V3"/>
            </svg>
            <span>Cliquer pour voir</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
