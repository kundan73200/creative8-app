import React, { useState } from "react";
import TopPage from "./TopPage";
// import Navbar from "./Navbar";
import ViewportSection from "./ViewportSection";
import CapabilitiesSection from "./CapabilitiesSection";
import FeaturedWorkSection from "./FeaturedWorkSection";
import CinematicDirector from "./CinematicDirector";
import HighYieldSection from "./HighYieldSection";
import Page6 from "./Page6";
import Page5 from "./Page5";
import Page7 from "./Page7";
import ScopePlanner from "./ScopePlanner";
import Page8 from "./Page8";
import Page9 from "./Page9";

import "./components.css";

const HeroSection = () => {
  // const services = [
  //   {
  //     title: "Pro Video Editing",
  //     heading1: "Videos That",
  //     heading2: "Grab Attention.",
  //     desc: "Professional editing for reels, ads and social media content.",
  //     color: "#ece8ff",
  //     activeColor: "#7a5cff",
  //     textColor: "#6554ff",
  //   },
  //   {
  //     title: "3D & Visual Effects",
  //     heading1: "Creative 3D",
  //     heading2: "Visual Experiences.",
  //     desc: "High-quality 3D visuals and effects for your business.",
  //     color: "#fff0f5",
  //     activeColor: "#ff4f8d",
  //     textColor: "#ff4f8d",
  //   },
  //   {
  //     title: "Websites & Google Ranking",
  //     heading1: "Websites Built to",
  //     heading2: "Get More Sales.",
  //     desc: "We build fast, modern websites optimized for growth.",
  //     color: "#dff5ef",
  //     activeColor: "#22c997",
  //     textColor: "#00a57a",
  //   },
  //   {
  //     title: "Paid Ad Campaigns",
  //     heading1: "Ads That Bring",
  //     heading2: "Customers.",
  //     desc: "Targeted campaigns designed for conversions.",
  //     color: "#fff4ea",
  //     activeColor: "#ff7a00",
  //     textColor: "#ff7a00",
  //   },
  //   {
  //     title: "Social Media Growth",
  //     heading1: "Grow Faster On",
  //     heading2: "Social Media.",
  //     desc: "Increase engagement and followers.",
  //     color: "#fff7d7",
  //     activeColor: "#f8bb2d",
  //     textColor: "#b58b00",
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState(2);
  // const [hoverIndex, setHoverIndex] = useState(null);
  // const [spend, setSpend] = useState(3900);

  return (
    <div className="page1">
      <TopPage />
      {/* SERVICES SECTION */}
      {/* EXTRA COMPONENTS */}
      <CapabilitiesSection />
      <FeaturedWorkSection />
      <CinematicDirector />
      <ScopePlanner />
      <HighYieldSection />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />

    </div>
  );
};

export default HeroSection;