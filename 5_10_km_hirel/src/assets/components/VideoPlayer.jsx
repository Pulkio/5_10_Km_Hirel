import React, { useState, useRef, useEffect } from 'react';

/**
 * VideoPlayer moderne avec contrôles personnalisés et design élégant.
 * Optimisé pour l'affichage sur page d'accueil avec animations fluides.
 * @param {string} mp4Source - Chemin vers la vidéo MP4
 * @param {string} webmSource - Chemin vers la vidéo WebM
 * @param {string} poster - Image de prévisualisation
 * @param {string} title - Titre de la vidéo
 * @param {boolean} autoplay - Lecture automatique (défaut: false)
 * @param {boolean} muted - Muet par défaut (défaut: true pour autoplay)
 * @returns {JSX.Element} - Lecteur vidéo moderne
 */
const VideoPlayer = ({ 
  mp4Source, 
  webmSource, 
  poster, 
  title = "Vidéo", 
  autoplay = false,
  muted = true 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const timeoutRef = useRef(null);

  // Gestion des événements vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  // Auto-masquage des contrôles
  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2000);
  };

  // Formatage du temps
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Contrôles de lecture
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    video.muted = newVolume === 0;
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      className="relative group bg-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Lecteur vidéo principal */}
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover cursor-pointer"
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        onClick={togglePlay}
        playsInline
      >
        <source src={mp4Source} type="video/mp4" />
        {webmSource && <source src={webmSource} type="video/webm" />}
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Overlay de lecture avec animation */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-200 group"
          >
            <svg className="w-8 h-8 text-gray-800 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Contrôles personnalisés */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-all duration-300 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        
        {/* Barre de progression */}
        <div 
          ref={progressRef}
          className="w-full h-2 bg-white bg-opacity-30 rounded-full cursor-pointer mb-4 group"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-[color:var(--color-jaune)] rounded-full relative transition-all duration-150"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[color:var(--color-jaune)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
          </div>
        </div>

        {/* Contrôles inférieurs */}
        <div className="flex items-center justify-between text-white">
          
          {/* Contrôles gauche */}
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Volume */}
            <div className="flex items-center space-x-2 group">
              <button
                onClick={toggleMute}
                className="w-8 h-8 flex items-center justify-center hover:text-[color:var(--color-jaune)] transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l4.18 4.18a.996.996 0 001.41 0 .996.996 0 000-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity slider"
              />
            </div>

            {/* Temps */}
            <div className="text-sm font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Contrôles droite */}
          <div className="flex items-center space-x-4">
            
            {/* Titre de la vidéo */}
            <span className="text-sm font-medium max-w-xs truncate hidden md:block">
              {title}
            </span>

            {/* Plein écran */}
            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 flex items-center justify-center hover:text-[color:var(--color-jaune)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
};

export default VideoPlayer;
