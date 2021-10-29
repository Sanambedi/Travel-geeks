import React from 'react';
import "./Navbar.css";
import logo from "../../resources/newLogo-removebg-preview.png";
import { MdCall } from 'react-icons/md';
import { FcMenu } from 'react-icons/fc';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return (
        <div className="mainest-nav">
            <div className="main-nav">
                <div className="image-container">
                    <img src={logo} alt="" className="top-nav-logo"/>
                </div>
                <div className="headings">
                    <ul className="nav-headings">
                        <li>
                            <Link className="nav-link" to="/">Home</Link>    
                        </li>
                        <li><Link to="/Events" className="nav-link">Events</Link></li>
                        <li><Link to="/About" className="nav-link">About</Link></li>
                        <li><Link to="/Blog" className="nav-link">Blog</Link></li>
                        <li><Link to="/Contact" className="nav-link">Contact</Link></li>   
                        <li className="call-button">
                            <a href="tel:+917015024295" className="phoneLink"><MdCall className="callIcon"/> +91 70150 24295</a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <FcMenu className="menu-button"/>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="bottom-nav">Hello</div>
            </div>
        </div>
    )
}