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
            <div style={{"height":"5vh"}}/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9696538099615!2d74.86723741546061!3d31.634681248653198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196527e76e3995%3A0xf5779932d3dab5d0!2sGuru%20Nanak%20Dev%20University!5e0!3m2!1sen!2sin!4v1636266820534!5m2!1sen!2sin" className="googlemap" allowFullScreen={true} aria-hidden="false" tabIndex="0" title="Location"></iframe>
            <div style={{"height":"5vh"}}/>
            <div className="map">
                <div className="wrapper">
                    <div className="under-wrapper">
                        <h1 style={{textAlign:"left"}}>Get in touch</h1>
                    </div>
                    <div className="under-wrapper-1">
                        <div className="contact-box">
                            <div className="left-box">
                                <textarea className="textarea" placeholder="Enter Message"/>
                                <div style={{"height":"5vh"}}/> 
                                <div className="contact-box">
                                    <input type="text" className="textarea1" placeholder="Name"/>
                                    <input type="email" className="textarea2" placeholder="Email"/>
                                </div>
                                <div style={{"height":"5vh"}}/> 
                                <div className="contact-box">
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="right-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}