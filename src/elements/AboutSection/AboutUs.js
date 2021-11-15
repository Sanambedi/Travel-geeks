import React from 'react';
import "./AboutUs.css";
import travel from "../../resources/travel-friends.webp";
import bgground from "../../resources/bgground.jpg";
import imageSpace from "../../resources/about2.webp"

export default function AboutUs(){
    return(
        <div className="main-style">
            <div className="backpoint">
                <div className="about-us">
                    <img src={travel} alt="" className="image"/>
                </div>
                <div className="about-para">
                    <div className="mini-div">
                        <h4 className="main-paragraph4-aboutus">About Us</h4>
                        <h1 className="main-paragraph1-aboutus">Get Ready for real time adventures</h1>
                        <p style={{color:"#677f8b",fontSize:"16px",lineHeight:"30px",marginBottom:"15px",fontWeight:"normal"}}>
                            Let’s start your journey with us, your dream will come true.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam quis nostrud
                            exercitation.
                        </p>
                    </div>
                </div>
            </div>
            




            <div className="wrapper">
                <div className="divimage"></div>
                <div className="divtext">
                    <div className="container-about-us">
                        <h5>What Customers say</h5>
                        <p style={{fontSize:"24px",padding:"0",margin:"0",lineHeight:"1.4"}}>"Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <div className="customer">
                            <img src={{bgground}} height="100px" width="100px" alt=""/>
                            <div className="customer-further">
                                <p className="ceo-organization">Sanam Bedi</p>
                                <p className="organization">CEO of Asian Gift Centre</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>






            <div className="faq">
                <p>
                    FAQ
                </p>
                <h1>Full range of travel service</h1>
                <div className="image-section">
                    <div className="collapsible">
                        <h1>5 Collapsibles</h1>
                    </div>
                    <div className="image-space">
                        <img src={imageSpace} alt="" className="feature-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}