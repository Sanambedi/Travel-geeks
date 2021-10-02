import React from 'react';
import "./Footer.css";
import bgground from "../../resources/bgground.jpg";
import Logo from "../../resources/travel-logo.png";
export default function Footer(){
    return(
        <div className="footer">
            <div className="sample-images">
                <img src={bgground} alt="" className="image-sample"/>
                <img src={bgground} alt="" className="image-sample"/>
                <img src={bgground} alt="" className="image-sample"/>
                <img src={bgground} alt="" className="image-sample"/>
                <img src={bgground} alt="" className="image-sample"/>
            </div>
            <footer className="main-footer">
                <div className="footer-one">
                    <img src={Logo} alt=""/>
                    <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                </div>
                <div className="footer-two"></div>
                <div className="footer-three"></div>
                <div className="footer-four"></div>
            </footer>
        </div>
    )
}

