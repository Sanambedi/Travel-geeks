import React from 'react';
import "./About.css";
import travel from "../../resources/travel-friends.webp";
import bgground from "../../resources/bgground.jpg";
import imageSpace from "../../resources/about2.webp"

export default function About(){
    return(
        <div className="main-style">
            <div className="about-us">
                <div className="main-img">
                    <img src={travel} alt="" className="image"/>
                </div>
                <div className="about-para">
                    <h4>About Us</h4>
                    <h1>Get Ready for real<br/> time adventures</h1>
                    <p>
                    Let’s start your journey with us, your dream will come true.<br/> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/>
                    sed do eiusmod tempor incididunt ut labore et dolore <br/>
                    magna aliqua. Ut enim ad minim veniam quis nostrud <br/>
                    exercitation.
                    </p>
                    

                </div>
            </div>
            <div className="container-about-us">
                <img src={bgground} alt="" className="bgground"/>
                <div className="centre-about-us">
                    <div className="customer-reviews">
                        <h1>What Customers Say</h1>
                        <p>"Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        <img src={imageSpace} alt=""/>
                    </div>
                </div>
                <button className="button">Book Your Destination</button>
            </div>
        </div>
    )
}