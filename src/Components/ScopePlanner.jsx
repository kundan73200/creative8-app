import React, { useState } from "react";
import "./ScopePlanner.css";
import {
  FaCode,
  FaRocket,
  FaCube,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineRocketLaunch } from "react-icons/md";

const growthChannels = [
  {
    id: "web",
    title: "WEB ENGINEERING",
    subtitle: "Next.js & Robust Backends",
    icon: <FaCode />,
  },
  {
    id: "uiux",
    title: "UI/UX FIGMA DECKS",
    subtitle: "Premium Brand Wireframes",
    icon: <HiOutlineDocumentText />,
  },
  {
    id: "motion",
    title: "3D & MOTION REELS",
    subtitle: "DaVinci & After Effects",
    icon: <FaCube />,
  },
  {
    id: "marketing",
    title: "GROWTH MARKETING",
    subtitle: "SEMrush SEO & Ads",
    icon: <MdOutlineRocketLaunch />,
  },
];

const paceOptions = [
  {
    id: "standard",
    title: "Standard Pace",
    extra: "Balanced delivery",
  },
  {
    id: "express",
    title: "Hyper-Express (High Priority)",
    extra: "Faster turnaround",
  },
];

const ScopePlanner = () => {
  const [selectedChannels, setSelectedChannels] = useState(["web", "uiux"]);
  const [selectedPace, setSelectedPace] = useState("standard");
  const [complexity, setComplexity] = useState(40);

  const toggleChannel = (id) => {
    if (selectedChannels.includes(id)) {
      setSelectedChannels(selectedChannels.filter((item) => item !== id));
    } else {
      setSelectedChannels([...selectedChannels, id]);
    }
  };

  const paceDays = selectedPace === "express" ? 12 : 22;
  const complexityLabel =
    complexity < 33
      ? "STARTUP MVP"
      : complexity < 66
      ? "MARKET DISRUPTOR"
      : "ENTERPRISE PLATFORM";

  return (
    <section className="scope-section">
      {/* TOP STATS */}
      <div className="stats-strip">
        <div className="stat-box">
          <h3>50+</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="stat-box">
          <h3>30+</h3>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="stat-box">
          <h3>200%</h3>
          <p>AVG. GROWTH</p>
        </div>
        <div className="stat-box">
          <h3>5★</h3>
          <p>AVERAGE RATING</p>
        </div>
      </div>

      {/* HEADING */}
      <div className="scope-heading-wrap">
        <div className="scope-heading-left">
          <span className="scope-badge">INTERACTIVE PLANNER</span>
          <h2>
            Design Your <span>Scope.</span>
          </h2>
        </div>

        <div className="scope-heading-right">
          <p>
            Select your growth channels, dial in your required velocity, and
            instantly generate a tailor-made design and engineering blueprint.
          </p>
        </div>
      </div>

      <div className="scope-divider"></div>

      {/* MAIN GRID */}
      <div className="scope-grid">
        {/* LEFT PLANNER */}
        <div className="planner-card">
          <div className="planner-step">
            <div className="planner-step-head">
              <span className="step-number">01</span>
              <h4>CHOOSE REQUIRED GROWTH CHANNELS</h4>
            </div>

            <div className="channel-grid">
              {growthChannels.map((item) => {
                const active = selectedChannels.includes(item.id);

                return (
                  <button
                    key={item.id}
                    className={`channel-card ${active ? "active" : ""}`}
                    onClick={() => toggleChannel(item.id)}
                  >
                    <div className="channel-icon">{item.icon}</div>

                    <div className="channel-text">
                      <h5>{item.title}</h5>
                      <p>{item.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="planner-step">
            <div className="planner-step-head">
              <span className="step-number">02</span>
              <h4>SCALE & COMPLEXITY FACTOR</h4>
              <span className="step-side-text">{complexityLabel}</span>
            </div>

            <div className="slider-wrap">
              <input
                type="range"
                min="0"
                max="100"
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="scope-slider"
              />

              <div className="slider-labels">
                <span>STARTUP MVP</span>
                <span>MARKET DISRUPTOR</span>
                <span>ENTERPRISE PLATFORM</span>
              </div>
            </div>
          </div>

          <div className="planner-step">
            <div className="planner-step-head">
              <span className="step-number">03</span>
              <h4>SELECT PRODUCTION INTENSITY</h4>
            </div>

            <div className="pace-grid">
              {paceOptions.map((item) => (
                <button
                  key={item.id}
                  className={`pace-card ${
                    selectedPace === item.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedPace(item.id)}
                >
                  <div className="pace-top">
                    <span className="pace-icon">
                      {item.id === "standard" ? "▣" : "⚡"}
                    </span>
                    <span className="pace-title">{item.title}</span>
                  </div>
                  {/* <span className="pace-extra">{item.extra}</span> */}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT RESULT CARD */}
        <div className="blueprint-card">
          <div className="blueprint-topbar">
            <div className="bp-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="bp-status">SYS_STATUS // ONLINE</div>
          </div>

          <div className="blueprint-inner">
            <div className="bp-code-box">
              <span className="bp-label">BLUEPRINT CODE</span>
              <h3>#CC-WE-UI-862</h3>
            </div>

            <div className="bp-mini-grid">
              <div className="bp-mini-box">
                <span className="bp-small-label">EST. TIMELINE</span>
                <h4>{paceDays}Days</h4>
              </div>

              <div className="bp-mini-box">
                <span className="bp-small-label">COMPLEXITY</span>
                <h4>{complexity}/100</h4>
              </div>
            </div>

            <div className="bp-scope-list">
              <h5>RECOMMENDED SCOPE ITEMS:</h5>

              {selectedChannels.length === 0 ? (
                <p className="bp-empty">No channels selected yet.</p>
              ) : (
                <ul>
                  {selectedChannels.includes("web") && (
                    <li>Ready: Web Architecture</li>
                  )}
                  {selectedChannels.includes("uiux") && (
                    <li>Ready: UI/UX & Figma</li>
                  )}
                  {selectedChannels.includes("motion") && (
                    <li>Ready: Motion / 3D Reels</li>
                  )}
                  {selectedChannels.includes("marketing") && (
                    <li>Ready: SEO / Ads / Funnels</li>
                  )}
                  <li>Ready: 1:1 Responsive Design Q/A</li>
                </ul>
              )}
            </div>

            <div className="bp-growth-box">
              <span>CONVERSION VECTOR:</span>
              <span bp-growth-box1> +185% Avg Growth</span>
            </div>

            <button className="bp-main-btn">
              LOCK IN THIS BLUEPRINT <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopePlanner;