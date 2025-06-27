import React, { useState, useRef, useEffect } from 'react';
import './VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Pause all videos except the current
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === current) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [current, videos]);

  const handleClick = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {videos.map((video, idx) => {
          // Calculate position for carousel effect
          const offset = idx - current;
          let className = 'carousel-item';
          if (offset === 0) className += ' active';
          else if (offset === -1) className += ' left';
          else if (offset === 1) className += ' right';
          else className += ' hidden';

          return (
            <div
              key={video.id}
              className={className}
              style={{ zIndex: 10 - Math.abs(offset), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => handleClick(idx)}
            >
              <video
                ref={el => videoRefs.current[idx] = el}
                src={video.mp4Source}
                poster={video.poster}
                autoPlay={offset === 0}
                muted
                loop
                playsInline
                className="carousel-video"
                style={{ width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '70vh', objectFit: 'cover', borderRadius: '2rem' }}
              >
                <source src={video.webmSource} type="video/webm" />
                <source src={video.mp4Source} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              <div className="carousel-caption" style={{ textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{video.title}</h2>
                <p style={{ fontSize: '1.2rem', margin: 0 }}>{video.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCarousel;
