import React from 'react';
import "./Footer.css";
import bgground from "../../resources/bgground.jpg";
import Logo from "../../resources/travel-logo.png";
import {FaFacebookSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';


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
                    <p>Land behold it created good saw after she'd Our set <br/>living. Signs midst dominion creepeth morning<br/> laboris nisi ufsit aliquip.</p>
                    <FaFacebookSquare className="menu-button"/>
                    <AiOutlineInstagram className="menu-button"/>
                    <AiFillLinkedin className="menu-button"/>
                    <FaPinterest className="menu-button"/>
                </div>
                <div className="footer-one">
                    <h1>Navigation</h1>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div className="footer-one">
                    <h1>Services</h1>
                    <p>Hotels</p>
                    <p>Trips</p>
                    <p>Bookings</p>
                    <p>Bike Ridings</p>
                </div>
                <div className="footer-one">
                    <h1>Contact Us</h1>
                    <p>238 , Basant Nagar , Xyz city, Asr</p>
                    <p>bedisanam@gmail.com</p>
                    <p>+91 70150 24295</p>
                </div>
            </footer>
            
        </div>
    )
}

