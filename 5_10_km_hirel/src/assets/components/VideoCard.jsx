import React from 'react';
import VideoPlayer from './VideoPlayer';

/**
 * Composant VideoCard pour afficher une carte vidéo.
 * @param {string} title - Titre de la vidéo.
 * @param {string} description - Description de la vidéo.
 * @param {string} mp4Source - Chemin vers la vidéo au format MP4.
 * @param {string} webmSource - Chemin vers la vidéo au format WebM.
 * @param {string} poster - Chemin vers l'image de poster pour la vidéo.
 * @returns {JSX.Element} - Élément JSX représentant une carte vidéo.
 */
const VideoCard = ({ title, description, mp4Source, webmSource, poster }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Lecteur vidéo */}
      <VideoPlayer mp4Source={mp4Source} webmSource={webmSource} poster={poster} />
      {/* Contenu de la carte vidéo */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
