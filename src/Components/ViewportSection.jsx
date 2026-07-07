import React, { useState, useEffect } from "react";
import "./ViewportSection.css";

const ViewportSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isPlaying) {
  interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        return 0; // restart from beginning
      }
      return prev + 1;
    });
  }, 100);
}

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = () => {
    const totalSeconds = Math.floor(progress);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  return (
    <section className="viewport-section">
      <div className="viewport-window">
        {/* Header */}
        <div className="window-header">
          <div className="title">⚙️ 3D Render Viewport</div>

          <div className="fps-box">60.0 FPS</div>
        </div>

        {/* Body */}
        <div className="viewport-body">
          <div className="cube-container">
            <div
              className="cube"
              style={{
                transform: `rotateX(-20deg) rotateY(${
                  progress * 3.6
                }deg)`,
              }}
            >
              <div className="face front">CREA8VE</div>
              <div className="face back">CREA8VE</div>
              <div className="face left">CREA8VE</div>
              <div className="face right">CREA8VE</div>
              <div className="face top">CREA8VE</div>
              <div className="face bottom">CREA8VE</div>
            </div>
          </div>

          
        </div>

        {/* Bottom Controls */}
        <div className="bottom-panel">
          <div className="timer-row">
            <button
              className="pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            <span>{formatTime()}</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) =>
              setProgress(Number(e.target.value))
            }
            className="slider"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewportSection;