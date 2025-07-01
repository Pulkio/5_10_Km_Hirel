import React, { useState } from 'react';

/**
 * VideoCard moderne avec design glassmorphism et animations fluides.
 * Optimisée pour l'affichage sur page d'accueil avec effets visuels premium.
 * @param {string} title - Titre de la vidéo
 * @param {string} description - Description de la vidéo
 * @param {string} mp4Source - Chemin vers la vidéo MP4
 * @param {string} webmSource - Chemin vers la vidéo WebM
 * @param {string} poster - Image de prévisualisation
 * @param {string} category - Catégorie de la vidéo (Départ, Arrivée, etc.)
 * @param {string} date - Date de la vidéo
 * @param {string} duration - Durée de la vidéo
 * @returns {JSX.Element} - Carte vidéo moderne
 */
const VideoCard = ({ 
  title, 
  description, 
  mp4Source, 
  webmSource, 
  poster, 
  category = "Vidéo",
  date,
  duration,
  onPlay
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  /**
   * Gère le clic sur le bouton de lecture
   */
  const handlePlay = () => {
    if (onPlay) {
      onPlay({ title, mp4Source, webmSource, poster });
    }
  };

  /**
   * Gère le partage de la vidéo
   */
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      });
    } else {
      // Fallback - copier l'URL dans le presse-papiers
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  /**
   * Gère l'ajout/suppression des favoris
   */
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Ici vous pouvez ajouter la logique pour sauvegarder en localStorage ou BDD
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container avec overlay gradient */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={poster}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse shimmer"></div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contrôles de lecture overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handlePlay}
            className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300 hover:bg-opacity-100 active:scale-95"
          >
            <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        
        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-xs font-bold rounded-full shadow-lg">
            {category}
          </span>
        </div>
        
        {/* Durée vidéo */}
        {duration && (
          <div className="absolute bottom-4 right-4">
            <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs font-mono rounded shadow-lg">
              {duration}
            </span>
          </div>
        )}
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 space-y-4">
        {/* En-tête avec titre et date */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-[color:var(--color-bleu)] transition-colors duration-300">
            {title}
          </h3>
          
          {/* Métadonnées */}
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            {date && (
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span>{date}</span>
              </div>
            )}
            
            {duration && (
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM12.5 7H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Bouton principal */}
          <button
            onClick={handlePlay}
            className="flex items-center space-x-2 px-4 py-2 bg-[color:var(--color-bleu)] text-white rounded-lg hover:bg-[color:var(--color-bleu)]/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-sm font-medium">Regarder</span>
          </button>

          {/* Actions secondaires */}
          <div className="flex items-center space-x-3">
            {/* Partager */}
            <button
              onClick={handleShare}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[color:var(--color-bleu)] transition-colors duration-200"
              title="Partager"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>

            {/* Favoris */}
            <button
              onClick={handleFavorite}
              className={`w-8 h-8 flex items-center justify-center transition-colors duration-200 ${
                isFavorite 
                  ? 'text-red-500' 
                  : 'text-gray-400 hover:text-red-500'
              }`}
              title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              <svg className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default VideoCard;
