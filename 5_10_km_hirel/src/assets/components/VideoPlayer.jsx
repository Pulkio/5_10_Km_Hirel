import React, { useRef, useEffect } from 'react';

/**
 * Composant VideoPlayer optimisé pour les formats vertical et horizontal.
 * Gère automatiquement l'affichage selon le ratio de la vidéo.
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.mp4Source - Source MP4 de la vidéo
 * @param {string} props.webmSource - Source WebM de la vidéo (optionnel)
 * @param {string} props.poster - Image de prévisualisation
 * @param {string} props.title - Titre de la vidéo pour l'accessibilité
 * @param {boolean} props.autoplay - Lecture automatique
 * @param {boolean} props.isVertical - Format vertical ou horizontal
 */
const VideoPlayer = ({
  mp4Source,
  webmSource,
  poster,
  title,
  autoplay = false,
  isVertical = false // 🎯 NOUVEAU : gestion du format
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 🎯 Configuration pour vidéo verticale
    if (autoplay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqué par le navigateur:", error);
        });
      }
    }

    // Empêche le focus natif qui provoque le scroll
    setTimeout(() => {
      if (video && typeof video.blur === 'function') {
        video.blur();
      }
    }, 0);

    // Gestion de l'erreur de chargement
    const handleError = (e) => {
      console.error("Erreur de chargement vidéo:", e);
    };

    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [autoplay]);

  return (
    <div
      className={`transition-opacity duration-200 flex items-center justify-center`}
      style={isVertical
        ? { aspectRatio: '9/16', maxHeight: '70vh', height: '70vh', maxWidth: 'calc(70vh * 9 / 16)', margin: '0 auto', background: 'none', padding: 0 }
        : { aspectRatio: '16/9', width: '100%', maxWidth: 700, margin: '0 auto', background: 'none', padding: 0 }}
    >
      {/* On limite la hauteur max à 70vh pour éviter de coller aux bords */}
      <video
        ref={videoRef}
        className={`h-full mx-auto video-no-focus ${isVertical ? 'aspect-[9/16] object-contain vertical-video-player' : 'aspect-video object-cover'}`}
        style={isVertical
          ? { aspectRatio: '9/16', maxHeight: '70vh', height: '70vh', width: 'auto', background: 'none', border: 'none', boxShadow: 'none', display: 'block' }
          : { aspectRatio: '16/9', width: '100%', background: 'none', border: 'none', boxShadow: 'none', display: 'block' }}
        poster={poster}
        controls
        preload="metadata"
        aria-label={`Lecture de la vidéo: ${title}`}
        playsInline // 🎯 Important pour mobile
        tabIndex={-1}
        autoFocus={false}
      >
        {/* Source WebM pour une meilleure compression */}
        {webmSource && (
          <source src={webmSource} type="video/webm" />
        )}
        
        {/* Source MP4 comme fallback */}
        <source src={mp4Source} type="video/mp4" />
        
        {/* Message d'erreur si le navigateur ne supporte pas la vidéo */}
        <div className="flex items-center justify-center h-full bg-gray-100">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📹</div>
            <p className="text-gray-700 font-medium mb-2">
              Votre navigateur ne supporte pas la lecture vidéo.
            </p>
            <p className="text-gray-500 text-sm">
              Veuillez utiliser un navigateur plus récent ou télécharger la vidéo.
            </p>
            <a 
              href={mp4Source} 
              download
              className="mt-4 inline-flex items-center px-4 py-2 bg-[color:var(--color-bleu)] text-white rounded-lg hover:bg-[color:var(--color-bleu)]/90 transition-colors duration-200"
            >
              📥 Télécharger la vidéo
            </a>
          </div>
        </div>
      </video>

      {/* Indicateur de format en overlay */}
      {isVertical && (
        <div className="absolute bottom-4 left-4 px-2 py-1 bg-black/50 text-white text-xs rounded backdrop-blur-sm flex items-center space-x-1">
          <span>📱</span>
          <span>Format vertical</span>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
