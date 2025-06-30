import React, { useState } from 'react';

const VideoCarousel = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        <p>Aucune vidéo disponible</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Lecteur vidéo principal */}
      <div className="mb-4">
        <video
          key={currentVideo}
          controls
          className="w-full h-64 md:h-80 rounded-lg shadow-lg bg-gray-900"
          poster={videos[currentVideo].poster} // Correction ici
        >
          <source src={videos[currentVideo].mp4Source} type="video/mp4" /> {/* Correction ici */}
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>

      {/* Titre de la vidéo */}
      <h4 className="text-lg font-semibold text-center mb-4 text-gray-800">
        {videos[currentVideo].title}
      </h4>

      {/* Thumbnails navigation */}
      <div className="flex justify-center space-x-2 overflow-x-auto">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideo(index)}
            className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentVideo
                ? 'ring-4 ring-blue-500 scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {/* Thumbnail avec overlay play */}
            <div className="relative w-20 h-12 md:w-24 md:h-16">
              <img
                src={video.poster}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-6 h-6 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-t-2 border-b-2 border-l-gray-800 border-t-transparent border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Indicateurs de progression */}
      <div className="flex justify-center mt-4 space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentVideo
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
