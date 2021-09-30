import React from 'react';
import "./Busanimation.css";
import bg from "../../resources/bus_back.webp";
import bus from "../../resources/bus.webp";
export default function Busanimation(){
    return (
        <div className="container">
            <img src={bg} alt="" className="bg"/>
            <img src={bus} alt="" className="bus"/>
        </div>
    )
}