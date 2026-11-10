import { ExternalLink, Image as ImageIcon } from 'lucide-react';

const slides = [
  {
    id: 1,
    src: 'https://w.wallhaven.cc/full/9m/wallhaven-9m5z1x.jpg',
    alt: 'Senku Ishigami - Dr. Stone',
    title: 'Senku Ishigami',
    subtitle: 'The genius scientist determined to restart civilization with science',
    tag: 'Main Character',
    source: 'https://wallhaven.cc/w/9m5z1x',
  },
  {
    id: 2,
    src: 'https://w.wallhaven.cc/full/dg/wallhaven-dgv81j.jpg',
    alt: 'Kohaku - Dr. Stone',
    title: 'Kohaku',
    subtitle: 'A fierce warrior and loyal ally of the Kingdom of Science',
    tag: 'Warrior',
    source: 'https://wallhaven.cc/w/dgv81j',
  },
  {
    id: 3,
    src: 'https://w.wallhaven.cc/full/g7/wallhaven-g7j5yd.jpg',
    alt: 'Dr. Stone Characters',
    title: 'Gen Asagiri',
    subtitle: 'The master manipulator who uses psychology to outwit any opponent',
    tag: 'Mentalist',
    source: 'https://wallhaven.cc/w/g7j5yd',
  },
  {
    id: 4,
    src: 'https://w.wallhaven.cc/full/3q/wallhaven-3q5579.jpg',
    alt: 'Dr. Stone - Team',
    title: 'The Kingdom of Science',
    subtitle: 'A team of brilliant minds working together to build a new world',
    tag: 'Team',
    source: 'https://wallhaven.cc/w/3q5579',
  },
  {
    id: 5,
    src: 'https://w.wallhaven.cc/full/vg/wallhaven-vge265.png',
    alt: 'Kingdom of Science - Dr. Stone',
    title: 'Kingdom of Science',
    subtitle: 'Where science and ingenuity come alive in the stone world',
    tag: 'Science',
    source: 'https://wallhaven.cc/w/vge265',
  },
  {
    id: 6,
    src: 'https://w.wallhaven.cc/full/dp/wallhaven-dp53rg.jpg',
    alt: 'Chrome - Dr. Stone',
    title: 'Chrome',
    subtitle: 'The self-taught sorcerer with an insatiable curiosity for discovery',
    tag: 'Sorcerer',
    source: 'https://wallhaven.cc/w/dp53rg',
  },
];

const GalleryCards = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label">PHOTO GALLERY</p>
          <h2 className="section-title">Dr. Stone</h2>
        </div>

        <div className="gallery-cards">
          {slides.map((slide) => (
            <div className="gallery-card" key={slide.id}>
              <div className="gallery-card-image">
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </div>
              <div className="gallery-card-body">
                <span className="gallery-card-tag">
                  <ImageIcon size={12} />
                  {slide.tag}
                </span>
                <h3 className="gallery-card-title">{slide.title}</h3>
                <p className="gallery-card-desc">{slide.subtitle}</p>
                <a
                  href={slide.source}
                  target="_blank"
                  rel="noreferrer"
                  className="gallery-card-link"
                >
                  View Source
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCards;