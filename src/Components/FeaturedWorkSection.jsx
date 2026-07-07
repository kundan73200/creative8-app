import React from "react";
import "./FeaturedWorkSection.css";

const works = [
  {
    id: "01",
    category: "IMPORT & EXPORTS",
    categoryColor: "#ff6a5f",
    title: "VELTRIVO EXPORTS & IMPORTS",
    desc: "Bespoke digital architecture and interface engineering optimized for high conversions.",
    tag: "10M+ IMPACT",
    tagBg: "#fff1ee",
    tagColor: "#ff6a5f",
    liveColor: "#ff6a5f",
    browserUrl: "https://veltrivoexportsimports.com",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop",
    cardTint: "#fff7f4",
  },
  {
    id: "02",
    category: "CORPORATE WEB",
    categoryColor: "#6a63ff",
    title: "ELEVATE HR SERVICES",
    desc: "A lightning-fast, conversion-optimized web platform custom engineered for scalable growth.",
    tag: "50% EFFICIENCY",
    tagBg: "#f1efff",
    tagColor: "#6a63ff",
    liveColor: "#6a63ff",
    browserUrl: "https://elevatehrservices.com",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    cardTint: "#f7f6ff",
    active: true,
  },
  {
    id: "03",
    category: "NUMEROLOGY & ASTROLOGY",
    categoryColor: "#19b94a",
    title: "BHARATESHNUMEROLOGY",
    desc: "An immersive spiritual consultation platform crafted for trust, clarity, and bookings.",
    tag: "100K+ STUDENTS",
    tagBg: "#ecfff1",
    tagColor: "#19b94a",
    liveColor: "#19b94a",
    browserUrl: "https://bharateshnumorology.com",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1400&auto=format&fit=crop",
    cardTint: "#f4fff6",
  },
  {
    id: "04",
    category: "PERSONAL BRAND",
    categoryColor: "#f5aa15",
    title: "BULLBYKUNAL",
    desc: "Complete strategic identity design, visual frameworks, and guidelines built to establish authority.",
    tag: "#1 DEV PROFILE",
    tagBg: "#fff7e8",
    tagColor: "#f5aa15",
    liveColor: "#f5aa15",
    browserUrl: "https://bullbykunal.com",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
    cardTint: "#fffaf0",
  },
];

const WorkCard = ({ item }) => {
  return (
    <div className={`fw-card ${item.active ? "fw-card-active" : ""}`}>
      <div className="fw-card-top">
        <div className="fw-card-top-left">
          <span className="fw-number">{item.id}/</span>
          <span
            className="fw-category"
            style={{ color: item.categoryColor }}
          >
            {item.category}
          </span>
        </div>

        <div className="fw-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className="fw-preview"
        style={{ backgroundColor: item.cardTint }}
      >
        <div className="fw-browser-window">
          <div className="fw-browser-bar">
            <div className="fw-browser-left-dots">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <div className="fw-browser-url">{item.browserUrl}</div>
          </div>

          <div className="fw-browser-image-wrap">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      </div>

      <div className="fw-card-bottom">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        <div className="fw-card-footer">
          <span
            className="fw-tag"
            style={{
              background: item.tagBg,
              color: item.tagColor,
              borderColor: item.tagColor + "33",
            }}
          >
            {item.tag}
          </span>

          <a
            href="/"
            className="fw-live-link"
            style={{ color: item.liveColor }}
            onClick={(e) => e.preventDefault()}
          >
            Live Project ↗
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturedWorkSection = () => {
  return (
    <section className="featured-work-section">
      <div className="featured-work-inner">
        <div className="featured-work-header">
          <div className="featured-left">
            <span className="featured-pill">PROVEN SOLUTIONS</span>
            <h2>
              Featured <span>Work.</span>
            </h2>
          </div>

          <div className="featured-right">
            <p>
              No fluff. Raw outcomes and real business results driven by
              master-level engineering and uncompromised design standards.
            </p>
          </div>
        </div>

        <div className="featured-line"></div>

        <div className="featured-grid">
          {works.map((item) => (
            <WorkCard item={item} key={item.id} />
          ))}
        </div>

        <div className="featured-btn-wrap">
          <button className="featured-archive-btn">
            Explore Full Archive <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;