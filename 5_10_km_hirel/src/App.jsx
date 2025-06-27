import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets//components/Footer';
import VideoCarousel from './assets/components/VideoCarousel';

/**
 * Composant principal de l'application.
 * @returns {JSX.Element} - Élément JSX représentant l'application.
 */
const App = () => {
  // Données des vidéos
  const videos = [
    {
      id: 1,
      title: 'Vidéo 1',
      description: 'Description de la vidéo 1.',
      mp4Source: '../public/videos/video1.mp4',
      webmSource: '../public/videos/video1.webm',
      poster: '../public/videos/poster1.jpg',
    },
    {
      id: 2,
      title: 'Vidéo 2',
      description: 'Description de la vidéo 2.',
      mp4Source: '../public/videos/video2.mp4',
      webmSource: '../public/videos/video2.webm',
      poster: '../public/videos/poster2.jpg',
    },
    {
      id: 3,
      title: 'Vidéo 3',
      description: 'Description de la vidéo 3.',
      mp4Source: '../public/videos/video3.mp4',
      webmSource: '../public/videos/video3.webm',
      poster: '../public/videos/poster3.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête du site */}
      <Header />
      {/* Contenu principal */}
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Ma Course</h1>
          {/* Carrousel vidéo moderne */}
          <VideoCarousel videos={videos} />
        </div>
      </main>
      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default App;
