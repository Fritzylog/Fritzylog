import { MapPin, ExternalLink } from "lucide-react";
import locations from "../data/locations.json";

function MapCards() {
  return (
    <section id="map" className="section map-section">
      <div className="container">
        <p className="section-label">MY ADDRESS</p>
        <div className="map-grid">
          {locations.map((loc) => (
            <div key={loc.id} className="map-card map-card-featured">
              <div className="map-card-header">
                <div className="map-card-icon">
                  <MapPin size={20} />
                </div>
                <div className="map-card-info">
                  <h3 className="map-card-name">{loc.name}</h3>
                  <span className="map-card-type">{loc.type}</span>
                </div>
                <a
                  href={`https://www.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="map-card-link"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="map-card-desc">{loc.description}</p>

              <div className="map-card-coords">
                <span>
                  {loc.coordinates.lat.toFixed(4)}°N,{" "}
                  {loc.coordinates.lng.toFixed(4)}°E
                </span>
              </div>

              <div className="map-card-embed">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MapCards;