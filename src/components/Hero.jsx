import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import meImg from '../assets/me.jpg';
import bballImg from '../assets/bball.jpg';
import soccerImg from '../assets/soccer.jpg';
import fallsImg from '../assets/falls.jpg';
import baguioImg from '../assets/baguio.jpg';

const photos = [
  { src: meImg, label: 'Me' },
  { src: bballImg, label: 'Basketball' },
  { src: soccerImg, label: 'Soccer' },
  { src: fallsImg, label: 'Falls' },
  { src: baguioImg, label: 'Baguio' },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalPhotos = photos.length;

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextPhoto, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, nextPhoto]);

  const currentPhoto = photos[currentIndex];

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="welcome">WELCOME!</p>

          <h1>
            Hi, I'm <span>Fritz Gerard M. Rendon</span>
          </h1>

          <p className="hero-description">
            BSIT 3C Student from Ubbog, Santiago, Ilocos Sur. Welcome to my personal page.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn primary-btn">
              About Me
            </a>
            <a href="#gallery" className="btn secondary-btn">
              Dr. Stone Gallery
            </a>
          </div>
        </div>

        <div
          className="hero-image"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="hero-image-frame">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.label}
              className="hero-image-current"
            />
          </div>
          <button
            className="hero-carousel-arrow hero-carousel-prev"
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="hero-carousel-arrow hero-carousel-next"
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>
          <p className="hero-image-caption">{currentPhoto.label}</p>
          <div className="hero-carousel-dots">
            {photos.map((p, index) => (
              <button
                key={p.label}
                className={`hero-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to ${p.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;