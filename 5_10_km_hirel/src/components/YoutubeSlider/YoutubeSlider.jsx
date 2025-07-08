import { useState } from 'react';
import './YoutubeSlider.css';
import NextButtonArrow from '../../assets/icons/NextButtonArrow.svg'
import PreviousButtonArrow from '../../assets/icons/PreviousButtonArrow.svg'

const YOUTUBE_SHORTS = [
  'https://youtube.com/embed/CmGhuE26JAw',
  'https://youtube.com/embed/9GTtodizSHU',
  'https://youtube.com/embed/WzftutqWjGA',
  'https://youtube.com/embed/ZK3UH-ND6Ow',
  'https://youtube.com/embed/ai1iwx8FEac',
  'https://youtube.com/embed/tDrzoa81LnY',
  'https://youtube.com/embed/ZhgAq5kHTC0',
  'https://youtube.com/embed/QPHamOLXm4Q',
  'https://youtube.com/embed/NaxHR1tapp0',
  'https://youtube.com/embed/25a4TyzI268',
];

const YoutubeSlider = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const prevVideo = () => {
    setCurrentVideoIndex((index) => (index === 0 ? YOUTUBE_SHORTS.length - 1 : index - 1));
  };

  const nextVideo = () => {
    setCurrentVideoIndex((index) => (index === YOUTUBE_SHORTS.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="ytbs-container">
      <div>
        <iframe
          className='ytbs-iframe'
          src={YOUTUBE_SHORTS[currentVideoIndex]}
          title={`Youtube video ${currentVideoIndex}`}
          width="360"
          height="640"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div>

      <div className="ytbs-controls-container">
        <button className="ytbs-controls-button" onClick={prevVideo} aria-label="Vidéo précédente"> 
            <img className="ytbs-controls-button-arrow" src={PreviousButtonArrow} alt="Précédent" /> 
        </button>
        <p className="ytbs-controls-counter"> 
            {currentVideoIndex + 1} / {YOUTUBE_SHORTS.length}
        </p>
        <button className="ytbs-controls-button" onClick={nextVideo} aria-label="Vidéo suivante">
            <img className="ytbs-controls-button-arrow" src={NextButtonArrow} alt="Suivant" /> 
        </button>
      </div>
    </section>
  );
};

export default YoutubeSlider;