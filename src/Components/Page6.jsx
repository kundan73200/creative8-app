import React from 'react'
import "./Page6.css"

const Page6 = () => {
  const reviews = [
  {
    name: "Ethan Carter",
    profession: "Tech Founder",
    color: "#6C63FF",
    review:
      "The editing quality exceeded my expectations. Every video feels polished, engaging, and perfectly optimized for social media.",
  },
  {
    name: "Sophia Mitchell",
    profession: "Corporate VP",
    color: "#FF6B6B",
    review:
      "Professional, fast, and highly creative. The team understands exactly how to transform raw footage into premium-quality content.",
  },
  {
    name: "Daniel Brooks",
    profession: "Marketing Director",
    color: "#00C896",
    review:
      "Their editing style boosted our campaign performance significantly. The storytelling is top-notch and always delivered on time.",
  },
  {
    name: "Olivia Parker",
    profession: "Content Creator",
    color: "#FFB703",
    review:
      "I've worked with several editors before, but this service stands out for its creativity and consistency.",
  },
  {
    name: "James Walker",
    profession: "Startup CEO",
    color: "#3A86FF",
    review:
      "The team perfectly captured our brand identity through video. Communication was smooth and revisions were quick.",
  },
  {
    name: "Emma Johnson",
    profession: "Digital Marketing Manager",
    color: "#8338EC",
    review:
      "Our engagement increased noticeably after switching to their editing services.",
  },
  {
    name: "Michael Harris",
    profession: "E-commerce Owner",
    color: "#06D6A0",
    review:
      "Their product videos look incredibly professional and improved our conversion rates.",
  },
  {
    name: "Ava Thompson",
    profession: "Creative Director",
    color: "#F72585",
    review:
      "An exceptional editing service with a strong eye for detail and premium-quality output.",
  },
  {
    name: "Benjamin Scott",
    profession: "YouTube Creator",
    color: "#FB8500",
    review:
      "My audience loves the new editing style. Viewer retention has improved significantly.",
  },
  {
    name: "Charlotte Davis",
    profession: "Brand Strategist",
    color: "#2A9D8F",
    review:
      "Reliable, creative, and incredibly professional. Every project is delivered with excellent quality.",
  },
];

  const reviews2 = [
  {
    name: "Ethan Carter",
    profession: "Tech Founder",
    color: "#6C63FF",
    review:
      "The editing quality exceeded my expectations. Every video feels polished, engaging, and perfectly optimized for social media.",
  },
  {
    name: "Sophia Mitchell",
    profession: "Corporate VP",
    color: "#FF6B6B",
    review:
      "Professional, fast, and highly creative. The team understands exactly how to transform raw footage into premium-quality content.",
  },
  {
    name: "Daniel Brooks",
    profession: "Marketing Director",
    color: "#00C896",
    review:
      "Their editing style boosted our campaign performance significantly. The storytelling is top-notch and always delivered on time.",
  },
  {
    name: "Olivia Parker",
    profession: "Content Creator",
    color: "#FFB703",
    review:
      "I've worked with several editors before, but this service stands out for its creativity and consistency.",
  },
  {
    name: "James Walker",
    profession: "Startup CEO",
    color: "#3A86FF",
    review:
      "The team perfectly captured our brand identity through video. Communication was smooth and revisions were quick.",
  },
  {
    name: "Emma Johnson",
    profession: "Digital Marketing Manager",
    color: "#8338EC",
    review:
      "Our engagement increased noticeably after switching to their editing services.",
  },
  {
    name: "Michael Harris",
    profession: "E-commerce Owner",
    color: "#06D6A0",
    review:
      "Their product videos look incredibly professional and improved our conversion rates.",
  },
  {
    name: "Ava Thompson",
    profession: "Creative Director",
    color: "#F72585",
    review:
      "An exceptional editing service with a strong eye for detail and premium-quality output.",
  },
  {
    name: "Benjamin Scott",
    profession: "YouTube Creator",
    color: "#FB8500",
    review:
      "My audience loves the new editing style. Viewer retention has improved significantly.",
  },
  {
    name: "Charlotte Davis",
    profession: "Brand Strategist",
    color: "#2A9D8F",
    review:
      "Reliable, creative, and incredibly professional. Every project is delivered with excellent quality.",
  },
];

  return (
    <div className="all-review-card">
        <div className="review-raw1">
          <div className="reviews-container">
      {reviews.map((item, index) => (
        <div className="review-card" key={index}>
            <div className="top-part">
          <img className="G-icon" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt=""  />
          <div className="stars-section">
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
          </div>
          </div>
          <span className="middlebar">
            "{item.review}"
          </span>
          <div className="bottom_p5">
            <div className="left-side-p5">
          <span className="name-letter"  style={{ backgroundColor: item.color }}>{item.name.split(" ")[0][0]}</span>
          </div>
          <div className="right-side-p5">
            <span className='Name'>{item.name}</span>
            <p className="profesion">{item.profession}</p>
          </div>
          </div>
         
        </div>
      ))}
    </div>
    </div>
    <div className="review-raw2">

<div className="reviews-container2">
      {reviews.map((item, index) => (
        <div className="review-card" key={index}>
            <div className="top-part">
          <img className="G-icon" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt=""  />
          <div className="stars-section">
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="" className="star" />
          </div>
          </div>
          <span className="middlebar">
            "{item.review}"
          </span>
          <div className="bottom_p5">
            <div className="left-side-p5">
          <span className="name-letter"  style={{ backgroundColor: item.color }}>{item.name.split(" ")[0][0]}</span>
          </div>
          <div className="right-side-p5">
            <span className='Name'>{item.name}</span>
            <span className="profesion">{item.profession}</span>
          </div>
          </div>
         
        </div>
      ))}
    </div>
</div>
    </div>
  )
}

export default Page6;
