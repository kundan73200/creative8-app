import React from 'react'
import "./Page8.css";

const Page8 = () => {
  return (
    <div className='main-8'>
        <div className="conatiner-pg8">
            <div className="page8-style">
            <div className="page8-style1"></div>
            <div className="page8-style2"></div>
            </div>
            <div className="conatiner-pg8-left">
                <div className="page8-l-top">
                <div className="top-pg8-left">
                    <h3></h3>
                    <span>LET'S BUILD SOMETHING LEGENDARY</span>
                </div>
                <h2 className="page8-description">Ready To Start<br></br><span className="page8-description2">Your Project ?</span></h2>

                <p className="page-8-paragraph">Don't settle for generic templates. Partner with an elite engineering and design squad dedicated to scaling your revenue and building a powerful brand presence.</p>
                
                </div>

                <div className="page8-bottom">

                <div className="button-section-page8">
                    <div className="page8-button">Book Strtugy Audit </div>
                    <div className="icons-pg8">
                    <a href="https://wa.me/7320094042" target="_blank" >
                                <i class="bi bi-whatsapp fs-4"></i>     
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" className="whatsapp-img" />
                    </a>
                    <a href="tel:+917320094042" >
                                <i class="bi bi-telephone-fill fs-4"></i>
                            
                    <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" className="call-icon" />
                    </a>
                    </div>
                </div>

                <div className="page8-photo-section">
                    <div className="page8-photo">
                    <img src="https://i.pravatar.cc/100?u=director1" alt="" className="page8-img page8-img1 " />
                    <img src="https://i.pravatar.cc/100?u=director2" alt="" className="page8-img page8-img2" />
                    <img src="https://i.pravatar.cc/100?u=director3" alt="" className="page8-img page8-img3" />
                    </div>
                    <span className="pg8-pgotosection-txt">
                        ONLY 12 SLOTS LEFT THIS MONTH
                    </span>
                </div>
            </div>
            </div>

            {/* <div className="conatiner-pg8-right1"> */}
                <div className="conatiner-pg8-right2">
                {/* <div className="page8-left-container"> */}
                    <div className="page8-left-container-top">
                        <div className="page8-left-container-heading">
                            <img src="https://cdn-icons-png.flaticon.com/128/4470/4470631.png" alt="" className="page8-right-letter" />
                            <span>NURTURE YOUR GROWTH</span>
                        </div>
                        <span className="page8-heading">Not ready for a call?</span>
                        <p className="page8-card-p">Join 2,500+ founders receiving our weekly pulse on high-conversion design, search scaling, and AI automation.</p>
                        <div className="page8-inputs">
                        <input type="text" className="page8input" placeholder="Enter Buisness Email"/>
                        <button className="page8-cardbtn">Get Weekly Pulse</button>
                        <spam className="page8-button-description">No spam. Pure architectural value.</spam>
                        </div>
                    </div>
                    <div className="page8-left-container-bottom">
                        
                    </div>

                {/* </div> */}
            </div>
            {/* </div> */}
        </div>
      
    </div>
  )
}

export default Page8;
