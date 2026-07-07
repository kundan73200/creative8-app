import React from 'react'
import { useState } from 'react'
import "./Page7.css"
const Page7 = () => {

    const cards = [
        {
            number: "01",
            title: "What is the typical project timeline?",
            desc: "High-end platforms typically take 4-8 weeks. Complex enterprise solutions can range from 12-16 weeks including full system architecture and testing.",
        },

        {
            number: "02",
            title: "How much does a project cost?",
            desc: "Project pricing depends on the features, design requirements, and overall project size. We provide a custom quote after discussing your needs.",
        },

        {
            number: "03",
            title: "Do you provide support after delivery?",
            desc: "Yes, we offer post-launch support, bug fixes, and maintenance to ensure everything continues to work smoothly.",
        },

        {
            number: "04",
            title: "Can I request changes during the project?",
            desc: "Absolutely! We encourage feedback throughout the development process and allow revisions to make sure the final result meets your expectations.",
        },
    ];

    const [openCard, setOpenCard] = useState(null);

    function handleCard(index) {
        if (openCard == index) {
            setOpenCard(null);
        }
        else {
            setOpenCard(index);
        }
    }



    return (
        <div className="page7" >
            <div className="page7-left">
                <img src="https://crea8vecool.com/public/assets/images/faq_visual_unbranded.webp" alt="" className="page7-img" />
            </div>

            <div className="page7-right">
                <div className="page7-right-top">
                    <span className="heading-pg7">SUPPORT & CLEARLITY</span>
                    <h2 className="page7-heading">Common <span className='.page7-heading2'>Questions</span></h2>
                    <p>Everything you need to know about working with us. We believe in total transparency from day one.</p>
                </div>

                <div className="page7-right-bottom">
  {cards.map((card, index) => (
    <div
      key={index}
      className={openCard === index ? "cards-pg7 active" : "cards-pg7"}
      onClick={() => handleCard(index)}
    >
      <div className="page7-card-header">
        <span className={openCard === index ? "card-number show-num" : "card-number"} >{card.number}</span>

        <span className="card-title">{card.title}</span>

        <span className= {openCard === index ?"card-icon deg" : "card-icon"}>
          +
        </span>
      </div>

      <div className={openCard === index ? "card-body show" : "card-body"}>
        <p className="card7-p">{card.desc}</p>
      </div>
    </div>
  ))}
</div>
            </div>
        </div>
    )
}

export default Page7;
