import React from 'react';
import Navbar from '../../elements/Navbar/Navbar';
import ContactBack from "../../resources/contact_back.webp";
import "./Contact.css";
export default function Contact(){
    return(
        <div>
            <Navbar/>
            <div className="container-contact-us">
                <img src={ContactBack}  alt="" style={{"width":"100%"}}/>
                <div className="Contact-us">Contact</div>
            </div>
            <div className="map"/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9696538099615!2d74.86723741546061!3d31.634681248653198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196527e76e3995%3A0xf5779932d3dab5d0!2sGuru%20Nanak%20Dev%20University!5e0!3m2!1sen!2sin!4v1636266820534!5m2!1sen!2sin" className="googlemap" allowFullScreen="true" aria-hidden="false" tabIndex="0" title="Location"></iframe>
        </div>
    )
}