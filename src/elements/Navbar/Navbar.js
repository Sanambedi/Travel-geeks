import React from 'react';
import "./Navbar.css";
import logo from "../../resources/travel-logo.png";
import { MdCall } from 'react-icons/md';
import { FcMenu } from 'react-icons/fc';


export default function Navbar(){
    return (
        <div className="main-nav">
            <div className="image-container">
                <img src={logo} alt="" className="top-nav-logo"/>
            </div>
            <div className="headings">
                <ul className="nav-headings">
                    <li>Home</li>
                    <li>Events</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>   
                    <li className="call-button">
                        <a href="tel:+917015024295" className="phoneLink"><MdCall className="callIcon"/> +91 70150 24295</a>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu">
               <FcMenu className="menu-button"/>
           </div>
        </div>
    )
}