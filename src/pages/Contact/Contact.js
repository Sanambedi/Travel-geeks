import React from 'react';
import Navbar from '../../elements/Navbar/Navbar';
import ContactBack from "../../resources/contact_back.webp"
export default function Contact(){
    return(
        <div>
            <Navbar/>
            <img src={ContactBack} className="belowNavbar" alt=""/>
        </div>
    )
}