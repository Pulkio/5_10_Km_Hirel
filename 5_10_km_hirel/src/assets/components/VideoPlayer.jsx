import React from 'react';

/**
 * Composant VideoPlayer pour afficher des vidéos avec plusieurs formats.
 * @param {string} mp4Source - Chemin vers la vidéo au format MP4.
 * @param {string} webmSource - Chemin vers la vidéo au format WebM.
 * @param {string} poster - Chemin vers l'image de poster pour la vidéo.
 * @returns {JSX.Element} - Élément JSX représentant le lecteur vidéo.
 */
const VideoPlayer = ({ mp4Source, webmSource, poster }) => {
  return (
    <div className="video-container">
      {/* Utilisation de l'élément HTML5 <video> pour afficher la vidéo */}
      <video controls poster={poster} className="w-full h-auto">
        {/* Source vidéo au format MP4 */}
        <source src={mp4Source} type="video/mp4" />
        {/* Source vidéo au format WebM */}
        <source src={webmSource} type="video/webm" />
        {/* Message affiché si le navigateur ne supporte pas la vidéo */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
