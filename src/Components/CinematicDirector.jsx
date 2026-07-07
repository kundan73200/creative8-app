import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CinematicDirector.css";
import { FaStepBackward, FaStepForward, FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";

const sequenceData = [
  {
    id: "ch01",
    channel: "CH_01",
    name: "EYORA DIGITAL",
    percent: "98%",
    color: "#7b61ff",
    heading: "PREMIUM BRANDING",
    desc: "High-contrast luxury motion branding for elite eyewear. Crafted to disrupt and capture digital attention.",
    tools: "Premiere • Motion Graphics // EXPORT OK",
    video: "https://crea8vecool.com/public/assets/videos/v1_signature.mp4",
    timelineLabel: "eyora_digital.mp4",
    timelineTool: "Premiere VFX",
  },
  {
    id: "ch02",
    channel: "CH_02",
    name: "BLPK 3D TECH",
    percent: "2.4M",
    color: "#00d1ff",
    heading: "3D PRODUCT SYSTEMS",
    desc: "Sharp 3D product storytelling and technical motion design built for premium digital campaigns.",
    tools: "Blender 3D VFX // EXPORT OK",
    video: "https://crea8vecool.com/public/assets/videos/v2_blpk.mp4",
    timelineLabel: "blpk_3d_tech.mp4",
    timelineTool: "Blender 3D VFX",
  },
  {
    id: "ch03",
    channel: "CH_03",
    name: "CARATLANE",
    percent: "45%",
    color: "#00c8ff",
    heading: "MOTION DESIGN",
    desc: "Minimalist kinetic energy elevating product desirability and structural grace in modern luxury.",
    tools: "After Effects • Vector Suite // EXPORT OK",
    video: "https://crea8vecool.com/public/assets/videos/v3_caratlane.mp4",
    timelineLabel: "carat_lane.mp4",
    timelineTool: "After Effects VFX",
  },
  {
    id: "ch04",
    channel: "CH_04",
    name: "CHICKEN BITE",
    percent: "150k",
    color: "#ffb800",
    heading: "SOCIAL GROWTH",
    desc: "Aggressive, high-retention viral editing for TikTok. Synchronized speed-ramps engineered for loops.",
    tools: "Premiere Pro • Audition // EXPORT OK",
    video: "https://crea8vecool.com/public/assets/videos/v4_chickenbite.mp4",
    timelineLabel: "chicken_bite.mp4",
    timelineTool: "Premiere Pro VFX",
  },
];

const MotionStudioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef(null);

  const activeItem = sequenceData[activeIndex];

  // fake timeline position for the red playhead
  const timelinePercent = useMemo(() => {
    return ((activeIndex + 1) / sequenceData.length) * 100;
  }, [activeIndex]);

  const goToIndex = (index) => {
    setActiveIndex(index);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? sequenceData.length - 1 : prev - 1
    );
    setCurrentTime(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === sequenceData.length - 1 ? 0 : prev + 1
    );
    setCurrentTime(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    if (isPlaying) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  }, [activeIndex, isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;
  }, [muted]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime || 0);
  };

  const formatTime = (sec) => {
    const total = Math.floor(sec);
    const mins = String(Math.floor(total / 60)).padStart(2, "0");
    const secs = String(total % 60).padStart(2, "0");
    return `00:00:${mins}${secs}`.slice(0, 8);
  };

  return (
    <section className="motion-studio-section">
      <div className="motion-container">
        {/* heading */}
        <div className="motion-top-tag">🔴 DIRECTORY: MOTION STUDIO 3.0</div>

        <div className="motion-heading-row">
          <h2 className="motion-main-title">
            Cinematic Director <span>Engine.</span>
          </h2>

          <div className="motion-system-status">
            <h4>NLE_SYSTEM // ACTIVE</h4>
            <p>VOL.03 // PORTRAIT VIEWPORT CONSOLE</p>
          </div>
        </div>

        <div className="motion-top-line"></div>

        {/* main console */}
        <div className="motion-console">
          <div className="motion-console-topbar">
            <div className="motion-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="motion-console-title">
              CONSOLE: CREA8VE_PORTRAIT_V.3.0 // ACTIVE_CHANNEL: {activeItem.channel}
            </div>

            <div className="motion-console-status">RENDER_STATUS: OK</div>
          </div>

          <div className="motion-console-body">
            {/* left phone preview */}
            <div className="motion-left-panel">
              <div className="phone-frame">
                <div className="phone-overlay-top">
                  <span className="rec">REC</span>
                  <span className="clock">12:37</span>
                </div>

                <video
                  ref={videoRef}
                  className="phone-video"
                  src={activeItem.video}
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                />

                <div className="phone-overlay-bottom">
                  <div>{activeItem.channel}</div>
                  <div>{activeItem.name}</div>
                  <div className="phone-time">{formatTime(currentTime)}</div>
                </div>
              </div>
            </div>

            {/* right content */}
            <div className="motion-right-panel">
              <div className="motion-select-head">
                <h3>// SELECT VIDEO SEQUENCE</h3>
                <span>PLAYBACK: LIVE</span>
              </div>

              {/* sequence buttons */}
              <div className="sequence-grid">
                {sequenceData.map((item, index) => (
                  <button
                    key={item.id}
                    className={`sequence-card ${activeIndex === index ? "active" : ""
                      }`}
 style={{
        background: "#151515",
        color: "#fff",
        border: `1px solid ${activeIndex === index ? item.color : "#2a2a2a"}`,
        boxShadow:
          activeIndex === index
            ? `inset 0 0 0 1px ${item.color}, inset -4px -4px 0 0 ${item.color}`
            : "none",
      }}
                    onClick={() => goToIndex(index)}
                  >
                    <div className="seq-left">
                      <span className="seq-channel">{item.channel}</span>
                      <span className="seq-name">{item.name}</span>
                    </div>
                    <span
                      className="seq-percent"
                      style={{ color: activeIndex === index ? item.color : "" }}
                    >
                      {item.percent}
                    </span>
                  </button>
                ))}
              </div>

              {/* description box */}
              <div className="motion-description-box">
                <div className="motion-description-head">
                  <h4 style={{ color: activeItem.color }}>{activeItem.heading}</h4>
                  <span>{activeItem.tools}</span>
                </div>
                <p>{activeItem.desc}</p>
              </div>

              {/* timeline */}
              <div className="timeline-box">
                <div className="timeline-top">
                  <h3>// MULTI_TRACK_SYNC_TIMELINE</h3>

                  <div className="timeline-controls">
                    <button onClick={handlePrev}>
                      <FaStepBackward />
                    </button>

                    <button onClick={togglePlay}>
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    <button onClick={handleNext}>
                      <FaStepForward />
                    </button>

                    <button onClick={toggleMute}>
                      <FaVolumeUp />
                    </button>
                  </div>
                </div>

                <div className="timeline-panel">
                  <div className="track-labels">
                    <span>V1 // VIDEO</span>
                    <span>V2 // VFX</span>
                    <span>A1 // AUDIO</span>
                  </div>

                  <div className="timeline-tracks">
                    {/* VIDEO ROW - clickable */}
   <div className="timeline-row">
  {sequenceData.map((item, index) => (
    <button
      key={item.id}
      className={`timeline-clip ${activeIndex === index ? "active" : ""}`}
      // style={{
      //   background: "#151515",
      //   color: "#fff",
      //   border: `1px solid ${activeIndex === index ? item.color : "#2a2a2a"}`,
      //   boxShadow:
      //     activeIndex === index
      //       ? `inset 0 0 0 1px ${item.color}, inset 4px 4px 0 0 ${item.color}`
      //       : "none",
      // }}
      onClick={() => goToIndex(index)}
    >
      {item.timelineLabel}
    </button>
  ))}
</div>

                    {/* VFX ROW - clickable */}
                    <div className="timeline-row">
                      {sequenceData.map((item, index) => (
                        <button
                          key={item.id + "-tool"}
                          className={`timeline-clip small ${activeIndex === index ? "active" : ""
                            }`}
                          style={{
                            background:
                              activeIndex === index
                                ? `${item.color}22`
                                : "#111",
                            borderColor:
                              activeIndex === index ? item.color : "#2a2a2a",
                            color:
                              activeIndex === index ? item.color : "#7f7f7f",
                          }}
                          onClick={() => goToIndex(index)}
                        >
                          {item.timelineTool}
                        </button>
                      ))}
                    </div>

                    {/* AUDIO ROW */}
                    <div className="audio-wave-row">
                      {sequenceData.map((item, index) => (
                        <button
                          key={item.id + "-audio"}
                          className="audio-wave-block"
                          onClick={() => goToIndex(index)}
                        >
                          {Array.from({ length: 12 }).map((_, i) => (
                            <span
                              key={i}
                              className={`audio-bar ${activeIndex === index ? "active-audio" : ""
                                }`}
                              style={{
                                height: `${8 + ((i * 7) % 18)}px`,
                                background:
                                  activeIndex === index
                                    ? item.color
                                    : "#145c26",
                              }}
                            ></span>
                          ))}
                        </button>
                      ))}
                    </div>

                    {/* red playhead */}
                    <div
                      className="timeline-playhead"
                      style={{ left: `${timelinePercent - 6}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="motion-cta-btn">EXPLORE MOTION STUDIO →</button>
      </div>
    </section>
  );
};

export default MotionStudioSection;