import React from 'react';

/**
 * Composant pour animer le changement de vidéo avec un fondu
 * VERSION SANS SCROLL - Garde la position de l'utilisateur
 * @param {Object} video - Objet vidéo avec toutes les propriétés
 */
export default function FadeVideoPlayer({ video }) {
  const [visible, setVisible] = React.useState(true);
  const [currentVideo, setCurrentVideo] = React.useState(video);
  const [showControls, setShowControls] = React.useState(true);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (video.id !== currentVideo.id) {
      // ✅ PLUS DE GESTION DU SCROLL - On laisse l'utilisateur où il est
      setVisible(false);
      setShowControls(false);
      
      const timeout = setTimeout(() => {
        setCurrentVideo(video);
        setVisible(true);
        
        // ✅ Réactive les contrôles SANS affecter la position
        setTimeout(() => {
          setShowControls(true);
          
          // ✅ Supprime le focus du lecteur vidéo pour éviter le scroll
          if (videoRef.current) {
            videoRef.current.blur();
          }
        }, 100);
      }, 180);
      
      return () => clearTimeout(timeout);
    }
  }, [video, currentVideo.id]);

  return (
    <div className="mb-10 flex justify-center">
      <div
        className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}
        style={currentVideo.isVertical
          ? { aspectRatio: '9/16', maxHeight: '70vh', height: '70vh', maxWidth: 'calc(70vh * 9 / 16)', margin: '0 auto', background: 'none', padding: 0 }
          : { aspectRatio: '16/9', width: '100%', maxWidth: 700, margin: '0 auto', background: 'none', padding: 0 }}
      >
        <video
          key={currentVideo.id}
          ref={videoRef}
          {...(showControls ? { controls: true } : {})}
          {...(currentVideo.poster ? { poster: currentVideo.poster } : {})}
          className={`h-full mx-auto video-no-focus rounded-2xl ${currentVideo.isVertical ? 'aspect-[9/16] object-contain vertical-video-player' : 'aspect-video object-cover'}`}
          tabIndex={-1}
          autoFocus={false}
          preload="metadata"
          controlsList="nodownload noremoteplayback"
          style={currentVideo.isVertical ? { aspectRatio: '9/16', maxHeight: '70vh', height: '70vh', width: 'auto', background: 'none', border: 'none', boxShadow: 'none', display: 'block' } : { aspectRatio: '16/9', width: '100%', background: 'none', border: 'none', boxShadow: 'none', display: 'block' }}
          onLoadStart={() => {
            if (videoRef.current) {
              videoRef.current.volume = 0.3;
            }
            if (videoRef.current) {
              videoRef.current.blur();
            }
          }}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.blur();
              videoRef.current.volume = 0.3;
            }
          }}
          onFocus={e => { e.target.blur(); }}
        >
          <source src={currentVideo.webmSource} type="video/webm" />
          <source src={currentVideo.mp4Source} type="video/mp4" />
          
          {/* Fallback pour navigateurs non compatibles */}
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
                href={currentVideo.mp4Source} 
                download 
                className="mt-4 inline-flex items-center px-4 py-2 bg-[color:var(--color-bleu)] text-white rounded-lg hover:bg-[color:var(--color-bleu)]/90 transition-colors duration-200"
              >
                📥 Télécharger la vidéo
              </a>
            </div>
          </div>
        </video>
      </div>
    </div>
  );
}