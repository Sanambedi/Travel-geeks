import React from 'react';
import Card from '../../elements/Card/Card';
import Footer from '../../elements/footer/Footer';
import Navbar from '../../elements/Navbar/Navbar';
import Balloon from "../../resources/balloon.webp";

import './Events.css';
export default function Events(){
    return(
        <div>
            <Navbar/>
            <div className="container-contact-us">
                <img src={Balloon}  alt="" style={{"width":"100%"}}/>
                <div className="Contact-us">All Events</div>
            </div>
            <div className="mini-heading">
                Check Out our Best Promotional Tours
            </div>
            <br/>
            <h1>Upcoming Events</h1>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <div className="">
            </div>
            <Footer/>
        </div>
    )
}