import React, { useState } from "react";
import "./hero.css";

const Hero = () => {
  const services = [
    {
      title: "Pro Video Editing",
      heading1: "Professional",
      heading2: "Video Editing.",
      desc: "Create engaging videos for your business and social media with cinematic editing and storytelling.",
      color: "#6B5CF6",
      textColor: "rgb(26 21 21)",
      gradient: true,
    },
    {
      title: "3D & Visual Effects",
      heading1: "Creative",
      heading2: "3D & Visual Effects.",
      desc: "High-quality CGI, VFX and product animations for brands and creators.",
      color: "#ff4fa2",
      textColor: "#ff4fa2",
      gradient: true,
    },
    {
      title: "Websites & Google Ranking",
      heading1: "Websites Built to",
      heading2: "Get More Sales.",
      desc: "We build fast websites and rank them higher on Google to get more traffic and conversions.",
      color: "#16c79a",
      textColor: "#0d8f6c",
      gradient: true,
    },
    {
      title: "Paid Ad Campaigns",
      heading1: "Smart",
      heading2: "Paid Ad Campaigns.",
      desc: "Get more customers with targeted ads on Facebook, Instagram and Google. We manage your budget to give you the best return on investment.",
      color: "#ff7a16",
      textColor: "#ffffff",
      gradient: true,
    },
    {
      title: "Social Media Growth",
      heading1: "Social Media",
      heading2: "Growth.",
      desc: "Increase followers, engagement and sales with smart social media strategies.",
      color: "#f5b400",
      textColor: "#9c7600",
      gradient: true,
    },
  ];

  const [active, setActive] = useState(3);

  return (
    <div>
    <section className="hero">
      <div className="hero-left">
        <div className="badge">
          <span className="dot"></span>
          Scale Your Growth
        </div>

        {/* HEADING */}
        <div className="hero-heading">
          <div className="heading1">
            {services[active].heading1}
          </div>

          <span
            className={`heading2 ${
              services[active].gradient
                ? "gradient-text"
                : ""
            }`}
          >
            {services[active].heading2}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p>{services[active].desc}</p>

        {/* BUTTONS */}
        <div className="hero-btns">
          <button className="consult-btn">
            Free Consultation →
          </button>

          <button className="work-btn">
            See Our Work
          </button>
        </div>

        {/* MARQUEE */}

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        {services.map((item, index) => (
          <div
            key={index}
            className={`service-card ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
            style={{
              borderColor: item.color,
              background:
                active === index
                  ? item.color
                  : "#f3f3f3",
              color:
                active === index
                  ? "#fff"
                  : item.textColor,
            }}
          >
            {item.title}

            {active === index && (
              <div className="progress"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="marquee-bos-or-review-box top-marquee">
       <div className="marquee-box">
          <div className="marquee">
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
          </div>
        </div>
          <div className="review-card2">
      <div className="left-section">
        <div className="avatars">
          <div className="avatar blue">AS</div>
          <div className="avatar red">PM</div>
          <div className="avatar green">RK</div>
        </div>

        <div className="review-text">
          <div className="stars">★★★★★</div>
          <p>Trusted by 180+ happy founders</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="google-rating">
        <div className="google-icon">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
          />
        </div>

        <div>
          <h2>4.9/5</h2>
          <span>GOOGLE VERIFIED</span>
        </div>
      </div>
    </div>
        </div>
    </section>

       <div className="marquee-bos-or-review-box bottom-marquee">
       <div className="marquee-box">
          <div className="marquee">
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
            WEBSITES • APPS • SEO • 3D VISUALS • SOCIAL MEDIA •
          </div>
        </div>
          <div className="review-card2">
      <div className="left-section">
        <div className="avatars">
          <div className="avatar blue">AS</div>
          <div className="avatar red">PM</div>
          <div className="avatar green">RK</div>
        </div>

        <div className="review-text2">
          <div className="stars">★★★★★</div>
          <p>Trusted by 180+ happy founders</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="google-rating">
        <div className="google-icon">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
          />
        </div>

        <div>
          <h2>4.9/5</h2>
          <span>GOOGLE VERIFIED</span>
        </div>
      </div>
    </div>
        </div>

        </div>

        

  );
};

export default Hero;