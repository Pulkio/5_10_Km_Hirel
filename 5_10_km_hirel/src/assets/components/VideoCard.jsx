import React from 'react';

/**
 * Composant VideoCard pour afficher un aperçu vidéo.
 * Optimisé pour les formats vertical (smartphone) et horizontal.
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
  isVertical = false, // 🎯 NOUVEAU : gestion du format
  onPlay
}) => {
  return (
    <div 
      className={`
        group relative bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer
        ${isVertical 
          ? 'aspect-[9/16]' // 🎯 Ratio smartphone (9:16)
          : 'aspect-video'   // Ratio classique (16:9)
        }
      `}
      onClick={onPlay}
    >
      {/* Container vidéo avec aspect ratio adapté */}
      <div className={`
        relative w-full 
        ${isVertical ? 'h-full' : 'aspect-video'}
        overflow-hidden bg-gray-900
      `}>
        
        {/* Image de prévisualisation */}
        <img 
          src={poster}
          alt={`Aperçu de ${title}`}
          className={`
            w-full h-full transition-all duration-500 group-hover:scale-110
            ${isVertical 
              ? 'object-cover object-center' // 📱 Pour format vertical
              : 'object-cover'               // 🖥️ Pour format horizontal
            }
          `}
          loading="lazy"
        />

        {/* Overlay sombre au hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

        {/* Bouton play central */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
            <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[color:var(--color-bleu)] ml-1" fill="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
