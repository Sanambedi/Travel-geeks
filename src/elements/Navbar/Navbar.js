import React,{useState} from 'react';
import "./Navbar.css";

import logo from "../../resources/newLogo-removebg-preview.png";
import { MdCall } from 'react-icons/md';
import { FcMenu } from 'react-icons/fc';
import { Link } from 'react-router-dom';


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
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
                    <div className="mobile-menu-button" onClick={()=>{
                        setIsOpen(!isOpen)
                    }}>
                        <FcMenu className="menu-button"/>
                    </div>
                </div>
            </div>
            <div className={isOpen ? "hidden" : "mobile-menu"}>
                <div className="bottom-nav">Home</div>
                <div className="bottom-nav">Events</div>
                <div className="bottom-nav">About</div>
                <div className="bottom-nav">Blog</div>
                <div className="bottom-nav">Contact</div>
                <div className="bottom-nav">
                    <div className="call-button2">
                        <a href="tel:+917015024295" className="phoneLink"><MdCall className="callIcon"/> +91 70150 24295</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}