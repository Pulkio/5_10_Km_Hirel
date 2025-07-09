import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import './Accueil.css'

const YOUTUBE_SHORTS = [
  'https://youtube.com/shorts/CmGhuE26JAw',
  'https://youtube.com/shorts/9GTtodizSHU',
  'https://youtube.com/shorts/WzftutqWjGA',
  'https://youtube.com/shorts/ZK3UH-ND6Ow',
  'https://youtube.com/shorts/ai1iwx8FEac',
  'https://youtube.com/shorts/tDrzoa81LnY',
  'https://youtube.com/shorts/ZhgAq5kHTC0',
  'https://youtube.com/shorts/QPHamOLXm4Q',
  'https://youtube.com/shorts/NaxHR1tapp0',
  'https://youtube.com/shorts/25a4TyzI268',
];

function extractYouTubeId(url) {
  const shortsMatch = url.match(/shorts\/([\w-]+)/);
  if (shortsMatch) return shortsMatch[1];
  const watchMatch = url.match(/[?&]v=([\w-]+)/);
  if (watchMatch) return watchMatch[1];
  return null;
}

const YouTubeShortsCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const total = YOUTUBE_SHORTS.length;

  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const videoId = extractYouTubeId(YOUTUBE_SHORTS[current]);

  return (
    <div className="youtube-embed-container">
      <iframe
        key={videoId}
        width="360"
        height="640"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&modestbranding=1&rel=0&playsinline=1`}
        title="YouTube Shorts"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-embed-frame"
      ></iframe>
      <div className="youtube-embed-controls">
        <button onClick={goPrev} aria-label="Vidéo précédente">◀</button>
        <span>{current + 1} / {total}</span>
        <button onClick={goNext} aria-label="Vidéo suivante">▶</button>
      </div>
    </div>
  );
};

const Accueil = () => {
  return (
    <>
      <Header />
      <Hero/>
      <div className="section blue">
        <h2>Le dimanche 3 aout 2025</h2>
        <p>Hirel vous attend pour une matinée de course à pied mémorable (et sans trop de souffrance en montée 😉) !</p>
      </div>
      <Footer />
    </>
  );
};

export default Accueil;
