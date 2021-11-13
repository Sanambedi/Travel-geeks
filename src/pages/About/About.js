import React from 'react';
import AboutUs from '../../elements/AboutSection/AboutUs';
import Footer from '../../elements/footer/Footer';
import Navbar from '../../elements/Navbar/Navbar';
import Volcano from "../../resources/Volcano.webp";

export default function About(){
    return(
        <div>
            <Navbar/>
            <div className="container-contact-us">
                <img src={Volcano}  alt="" style={{"width":"100%"}}/>
                <div className="Contact-us">About Us</div>
            </div>
            <AboutUs/>
            <Footer/>
        </div>
    )
}