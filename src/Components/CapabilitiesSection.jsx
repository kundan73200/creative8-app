import React from "react";
import {
  FaSearch,
  FaGoogle,
  FaCog,
  FaWindowMaximize,
  FaCommentDots,
  FaBullhorn,
  FaCube,
  FaInfoCircle,
  FaPaintBrush,
  FaMagic,
  FaChartLine,
} from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { TbTopologyStar3 } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./CapabilitiesSection.css";

const row1 = [
  {
    title: "WEB DESIGN",
    icon: FaWindowMaximize,
    color: "#7a6cff",
    hoverText: "Figma • UI Systems",
    backIcon: FaPaintBrush,
  },
  {
    title: "E-COMMERCE",
    icon: HiOutlineShoppingBag,
    color: "#22c55e",
    hoverText: "Shopify • WooCommerce",
    backIcon: HiOutlineShoppingBag,
   
  },
  {
    title: "SEO PLATFORMS",
    icon: FaSearch,
    color: "#ff6f61",
    hoverText: "Ahrefs • SEMrush",
    backIcon: FaChartLine,
   
  },
  {
    title: "GOOGLE AUDIENCES",
    icon: FaGoogle,
    color: "#f4b400",
    hoverText: "GA4 • Ads • Pixel",
    backIcon: FaBullhorn,
    
  },
  {
    title: "WORKFLOW AUTO",
    icon: FaCog,
    color: "#7a6cff",
    hoverText: "Zapier • Make",
    backIcon: FaMagic,
    
  },
];

const row2 = [
  {
    title: "SOCIAL ACQUISITIONS",
    icon: FaBullhorn,
    color: "#ff5b5b",
    hoverText: "Meta Ads • UGC Funnels",
    backIcon: FaBullhorn,
    
  },
  {
    title: "BRAND DESIGN",
    icon: TbTopologyStar3,
    color: "#f0b341",
    hoverText: "Figma • Illustrator",
    backIcon: FaPaintBrush,
    
  },
  {
    title: "3D VISUALIZATION",
    icon: FaCube,
    color: "#7a6cff",
    hoverText: "Blender • Product Render",
    backIcon: FaCube,
  
  },
  {
    title: "CINEMATIC VFX",
    icon: MdMovie,
    color: "#22c55e",
    hoverText: "After Effects • Compositing",
    backIcon: MdMovie,
    
  },
  {
    title: "CONTENT STRATEGY",
    icon: FaCommentDots,
    color: "#ff6f61",
    hoverText: "Hooks • Scripts • Planning",
    backIcon: FaCommentDots,
  
  },
];

const Card = ({ item }) => {
  const FrontIcon = item.icon;
  const BackIcon = item.backIcon;

  return (
    <div className="cap-card">
      <div className="cap-card-inner">
        {/* FRONT */}
        <div className="cap-face cap-front">
          <div className="cap-front-wrap">
            <span className="cap-icon-box">
              <FrontIcon
                className="cap-icon-svg"
                style={{ color: item.color }}
              />
            </span>
            <span className="cap-title">{item.title}</span>
          </div>
        </div>

        {/* BACK */}
        <div className="cap-face cap-back">
          <div className="cap-back-wrap">
            <span className="cap-back-icon-box">
              <BackIcon className="cap-back-icon-svg" />
            </span>
            <span className="cap-back-text">{item.hoverText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CapabilitiesSection = () => {
  return (
    <section className="capabilities-section">
      <div className="capabilities-top">
        <h2>FULL STACK CAPABILITIES</h2>
        <div className="top-line"></div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left">
          {[...row1, ...row1].map((item, index) => (
            <Card item={item} key={`row1-${index}`} />
          ))}
        </div>
      </div>

      <div className="marquee-wrapper second-row">
        <div className="marquee-track marquee-right">
          {[...row2, ...row2].map((item, index) => (
            <Card item={item} key={`row2-${index}`} />
          ))}
        </div>
      </div>

      <div className="capabilities-note">
        <FaInfoCircle />
        <span>
          HOVER ON CAPABILITIES TO FLIP & REVEAL OUR FRAMEWORK TECH STACKS
        </span>
      </div>
    </section>
  );
};

export default CapabilitiesSection;