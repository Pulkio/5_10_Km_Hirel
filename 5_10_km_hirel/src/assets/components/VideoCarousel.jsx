import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from './VideoPlayer';

/**
 * Carrousel vidéo moderne avec navigation fluide, aperçus animés et contrôles gestuels.
 * Design premium pour page d'accueil avec transitions cinématographiques.
 * @param {Array} videos - Tableau des vidéos avec {id, title, mp4Source, poster, description}
 * @param {boolean} autoRotate - Rotation automatique (défaut: false)
 * @param {number} rotateInterval - Intervalle de rotation en ms (défaut: 8000)
 * @returns {JSX.Element} - Carrousel vidéo moderne
 */
const VideoCarousel = ({ 
  videos = [], 
  autoRotate = false, 
  rotateInterval = 8000 
}) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchMove, setTouchMove] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Vérification des données
  if (!videos || videos.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Aucune vidéo disponible</p>
          <p className="text-sm text-gray-500 mt-1">Les vidéos seront bientôt ajoutées</p>
        </div>
      </div>
    );
  }

  // Auto-rotation
  useEffect(() => {
    if (autoRotate && videos.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }, rotateInterval);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [autoRotate, rotateInterval, videos.length]);

  // Navigation avec transition
  const navigateToVideo = (index) => {
    if (index === currentVideo || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentVideo(index);
    
    // Reset auto-rotation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      if (autoRotate) {
        setTimeout(() => {
          intervalRef.current = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
          }, rotateInterval);
        }, 1000);
      }
    }
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateToVideo(currentVideo === 0 ? videos.length - 1 : currentVideo - 1);
      } else if (e.key === 'ArrowRight') {
        navigateToVideo(currentVideo === videos.length - 1 ? 0 : currentVideo + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentVideo, videos.length]);

  // Gestion tactile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchMove(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchMove) return;
    
    const distance = touchStart - touchMove;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateToVideo(currentVideo === videos.length - 1 ? 0 : currentVideo + 1);
    } else if (isRightSwipe) {
      navigateToVideo(currentVideo === 0 ? videos.length - 1 : currentVideo - 1);
    }
  };

  return (
    <div 
      ref={carouselRef}
      className="w-full max-w-6xl mx-auto px-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* En-tête avec titre et compteur */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            🎬 Vidéos de l'événement
          </h3>
          <p className="text-gray-600">
            Revivez les meilleurs moments de la course
          </p>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm text-gray-500 font-mono">
            {String(currentVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
          </span>
          
          {/* Boutons de navigation */}
          <div className="flex space-x-2">
            <button
              onClick={() => navigateToVideo(currentVideo === 0 ? videos.length - 1 : currentVideo - 1)}
              className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-200 group"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-[color:var(--color-bleu)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button
              onClick={() => navigateToVideo(currentVideo === videos.length - 1 ? 0 : currentVideo + 1)}
              className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-200 group"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-[color:var(--color-bleu)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lecteur vidéo principal avec transition */}
      <div className="relative mb-8">
        <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-75 scale-98' : 'opacity-100 scale-100'}`}>
          <VideoPlayer
            mp4Source={videos[currentVideo].mp4Source}
            webmSource={videos[currentVideo].webmSource}
            poster={videos[currentVideo].poster}
            title={videos[currentVideo].title}
            autoplay={false}
            muted={true}
          />
        </div>
        
        {/* Informations vidéo avec animation */}
        <div className="mt-6 text-center space-y-3">
          <h4 className={`text-2xl font-bold text-gray-900 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {videos[currentVideo].title}
          </h4>
          
          {videos[currentVideo].description && (
            <p className={`text-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {videos[currentVideo].description}
            </p>
          )}
        </div>
      </div>

      {/* Miniatures avec effet parallaxe */}
      {videos.length > 1 && (
        <div className="relative">
          <div className="flex justify-center">
            <div className="flex space-x-3 overflow-x-auto pb-4 max-w-full">
              {videos.map((video, index) => (
                <button
                  key={video.id || index}
                  onClick={() => navigateToVideo(index)}
                  disabled={isTransitioning}
                  className={`relative flex-shrink-0 group transition-all duration-300 ${
                    index === currentVideo
                      ? 'scale-110 z-10'
                      : 'scale-90 opacity-60 hover:opacity-80 hover:scale-95'
                  }`}
                >
                  {/* Miniature avec overlay */}
                  <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay avec effet de fond */}
                    <div className={`absolute inset-0 transition-all duration-300 ${
                      index === currentVideo
                        ? 'bg-[color:var(--color-jaune)] bg-opacity-30 ring-2 ring-[color:var(--color-jaune)]'
                        : 'bg-black bg-opacity-40 group-hover:bg-opacity-20'
                    }`}>
                      {/* Icône play centrée */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-200 ${
                          index === currentVideo ? 'scale-110' : 'group-hover:scale-110'
                        }`}>
                          <svg className="w-3 h-3 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Numéro de la vidéo */}
                    <div className="absolute top-1 left-1 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Titre sous la miniature */}
                  <div className="mt-2 max-w-[120px] md:max-w-[128px]">
                    <p className="text-xs text-gray-600 text-center truncate">
                      {video.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Indicateurs de progression modernes */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToVideo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentVideo
                    ? 'w-8 h-2 bg-[color:var(--color-jaune)]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      )}

      {/* Instructions tactiles pour mobile */}
      <div className="mt-4 text-center md:hidden">
        <p className="text-sm text-gray-500">
          👈 Glissez pour naviguer between les vidéos 👉
        </p>
      </div>
    </div>
  );
};

export default VideoCarousel;
