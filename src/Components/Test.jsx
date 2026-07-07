import React, { useState } from "react";
import "./Test.css";

const Page = () => {
  const cards = [
    {
      title: "Web Development",
      desc: "We create modern and responsive websites.",
    },
    {
      title: "Video Editing",
      desc: "Professional editing for YouTube, Instagram and Ads.",
    },
    {
      title: "Graphic Design",
      desc: "Creative logos, banners and social media posts.",
    },
    {
      title: "SEO",
      desc: "Improve your website ranking on Google.",
    },
  ];

  const [openCard, setOpenCard] = useState(null);

  function handleCard(index) {
    if (openCard === index) {
      setOpenCard(null); // Close if clicked again
    } else {
      setOpenCard(index); // Open clicked card
    }
  }

  return (
    <div className="container">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className={openCard === index ? "card active" : "card"}
            onClick={() => handleCard(index)}
          >
            <h2>{card.title}</h2>

            {openCard === index && (
              <p>{card.desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Page;