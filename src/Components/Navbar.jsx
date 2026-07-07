import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <img
              src="https://crea8vecool.com/public/assets/images/logo.webp"
              alt="logo"
            />
          </div>

          {/* Nav Links */}
          <ul className="nav-links">
            <li className="nav-item">
              Development ▼

              <div className="mega-menu">
                <div className="menu-column">
                  <h4>WEB DEVELOPMENT</h4>
                  <a href="/">Business Website</a>
                  <a href="/">E-Commerce Website</a>
                  <a href="/">Web Application</a>
                  <a href="/">Mobile App</a>
                </div>

                <div className="menu-card">
                  <span>FREE CONSULTATION</span>
                  <h3>Let's Build Something Great</h3>
                  <p>
                    Build high-performance websites and apps for your business.
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
            </li>

            <li className="nav-item">
              Creativities ▼

              <div className="mega-menu">
                <div className="menu-column">
                  <h4>CREATIVE SERVICES</h4>
                  <a href="/">UI/UX Design</a>
                  <a href="/">3D Animation</a>
                  <a href="/">Video Editing</a>
                  <a href="/">Brand Identity</a>
                </div>

                <div className="menu-card">
                  <span>OUR WORK</span>
                  <h3>Creative Portfolio</h3>
                  <p>
                    Explore our latest branding and design projects.
                  </p>
                  <button>View Work</button>
                </div>
              </div>
            </li>

            <li className="nav-item">
              Marketing ▼

              <div className="mega-menu">
                <div className="menu-column">
                  <h4>MARKETING</h4>
                  <a href="/">SEO</a>
                  <a href="/">Social Media</a>
                  <a href="/">Performance Ads</a>
                  <a href="/">Content Marketing</a>
                </div>

                <div className="menu-card">
                  <span>FREE AUDIT</span>
                  <h3>Grow Your Business</h3>
                  <p>
                    Get a free digital marketing consultation.
                  </p>
                  <button>Book Now</button>
                </div>
              </div>
            </li>

            <li className="nav-item">
              Company ▼

              <div className="mega-menu">
                <div className="menu-column">
                  <h4>COMPANY</h4>
                  <a href="/">About Us</a>
                  <a href="/">Our Team</a>
                  <a href="/">Careers</a>
                  <a href="/">Contact Us</a>
                </div>

                <div className="menu-card">
                  <span>LET'S TALK</span>
                  <h3>Book a Meeting</h3>
                  <p>
                    Schedule a strategy session with our experts.
                  </p>
                  <button>Contact</button>
                </div>
              </div>
            </li>

            <li className="nav-item">
              Showcase ▼

              <div className="mega-menu showcase-menu">
                <div className="menu-column">
                  <h4>OUR WORK</h4>
                  <a href="/">Website Projects</a>
                  <a href="/">Mobile Apps</a>
                  <a href="/">3D Projects</a>
                </div>
              </div>
            </li>
          </ul>

          <button className="get-btn">
            Get Started →
          </button>
 <div
          className="burger"
          onClick={() => setIsOpen(!isOpen)}>☰</div>

        </div>
       

      </nav>
      {/* <div className="mobilemenu">
        {isOpen && (
          <div className="mobile-menu">
            <div className="top-mobile-menu">
              <img src="https://crea8vecool.com/public/assets/images/logo.webp" alt="" className="mobile-menu-logo" />
              <div
                className="close-burger"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "✕" : "☰"}
              </div>
            </div>
            <div className="menu-options">

              <span className="menu-heading" href="#">Core Solution</span>
              <div className="web-development">
                <img src="https://cdn-icons-png.flaticon.com/128/7838/7838138.png" alt="" className="phone-menu-logo" />
                <span href="#">Development</span>
              </div>
              <span href="#">Services</span>
              <span href="#">About</span>
              <span href="#">Contact</span>
            </div>

          </div>
        )}
      </div> */}


        <div className="mobilemenu">
  <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    <div className="top-mobile-menu">
      <img
        src="https://crea8vecool.com/public/assets/images/logo.webp"
        alt=""
        className="mobile-menu-logo"
      />

      <div
        className="close-burger"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </div>
    </div>

    <div className="menu-options">
      <span className="menu-heading">Core Solution</span>
<div className="menu-subheadings">
      <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/15591/15591404.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Website Dev</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/19016/19016643.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Mobile Apps</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/19010/19010137.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Saas</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/17122/17122592.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>ERP & CRM System</span>
      </div>
      </div>
       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/6416/6416376.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>E-Commerce & Retail</span>
      </div>
      </div>
       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/17122/17122352.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Website Dev</span>
      </div>

      </div>
      </div>

    </div>

        <div className="menu-options">
      <span className="menu-heading">Agency & Company</span>
<div className="menu-subheadings">
      <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/15578/15578616.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>About Us</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/17556/17556388.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>The Founder</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/17490/17490043.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Our Process</span>
      </div>
      </div>

       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/19034/19034738.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>3D Motion & Videos</span>
      </div>
      </div>
       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/15594/15594432.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>SEO Stretigy</span>
      </div>
      </div>
       <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/8818/8818987.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Platform Marketing</span>
      </div>

      </div>

      <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/19004/19004061.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>Web & System Showcase</span>
      </div>

      </div>
      <div className="web-development options">
        <img
          src="https://cdn-icons-gif.flaticon.com/19017/19017427.gif"
          alt=""
          className="phone-menu-logo"
        />
        <div className="optionss">
        <span>3D Motion Showcase</span>
      </div>

      </div>
      <div className="bottom-margin"></div>

      
        <button className="phone-menu-button">Consult For Free</button>
        <div className="menu-social-media">
          <img className="social-img" src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="" />
          <img className="social-img" src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" />
        </div>
      </div>

    </div>

  </div>
</div>


    </div>
  );
};

export default Navbar;