import React, { useState } from "react";
import "./HighYieldSection.css";
import {
  FiZap,
  FiUsers,
  FiStar,
  FiTrendingUp,
  FiArrowUp,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

const accordionData = [
  {
    id: 1,
    title: "Always Improving",
    icon: <FiZap />,
    color: "#6d5dfc",
    content:
      "We constantly learn and adapt to the latest design trends and technologies, keeping your brand ahead of the competition.",
  },
  {
    id: 2,
    title: "A Dedicated Team",
    icon: <FiUsers />,
    color: "#ff2f92",
    content:
      "A focused team of strategists, designers, and developers works together on your project with fast communication and zero unnecessary delays.",
  },
  {
    id: 3,
    title: "Brand Experiences",
    icon: <FiStar />,
    color: "#00d9ff",
    content:
      "We craft memorable digital experiences that strengthen trust, improve engagement, and make your brand visually stand out in the market.",
  },
  {
    id: 4,
    title: "Proven Experience",
    icon: <FiTrendingUp />,
    color: "#f5b321",
    content:
      "Our process is built on real project execution, performance-driven design decisions, and scalable systems that support long-term growth.",
  },
];

const HighYieldSection = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="hy-section">
      <div className="hy-container">
        {/* LEFT */}
        <div className="hy-left">
          <div className="hy-badge">THE CREA8VE COOL ADVANTAGE</div>

          <h2 className="hy-heading">
            We Architect
            <br />
            High-Yield
            <br />
            <span>Brands.</span>
          </h2>

          <p className="hy-description">
            We reject generic templates and superficial aesthetic trends.
            We build digital-first ecosystems engineered specifically to
            convert users into loyal customers.
          </p>

          <div className="hy-call-card">
            <div className="hy-call-top">
              <div className="hy-avatars">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="director 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                  alt="director 2"
                />
              </div>

              <div className="hy-call-text">
                <h4>Talk Directly to Directors</h4>
                <p>Zero corporate bloat & delays.</p>
              </div>
            </div>

            <button className="hy-call-btn">
              <span>Book Strategy Call</span>
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hy-right">
          {accordionData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`hy-accordion ${isActive ? "active" : ""}`}
                style={{
                  borderColor: isActive ? item.color : "rgba(255,255,255,0.08)",
                  boxShadow: isActive
                    ? `0 0 0 1px ${item.color} inset`
                    : "none",
                }}
              >
                <button
                  className="hy-accordion-header"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="hy-accordion-left">
                    <div
                      className="hy-accordion-icon"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}55`,
                        background: `${item.color}10`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="hy-accordion-title"
                      style={{ color: isActive ? item.color : "#ffffff" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className={`hy-accordion-arrow ${isActive ? "rotate" : ""}`}
                    style={{
                      color: item.color,
                      boxShadow: isActive
                        ? `0 0 18px ${item.color}66`
                        : "none",
                    }}
                  >
                    {isActive ? <FiArrowUp /> : <FiChevronDown />}
                  </div>
                </button>

                <div className={`hy-accordion-body ${isActive ? "open" : ""}`}>
                  <div className="hy-accordion-divider"></div>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighYieldSection;