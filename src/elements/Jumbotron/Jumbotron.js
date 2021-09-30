import React from 'react';
import "./Jumbotron.css"
export default function Jumbotron(){
    return(
        <div>
            <div className="background">
                <div>
                    <p className="main-heading">LifeLong Memories just a <br/> few seconds away</p>
                    <p className="">Let's start your journey with us , your dream will come true</p>
                </div>
                <div className="button">Explore Destinations<span></span><span></span><span></span><span></span></div>
                <nav>
  <ul>
    <li>
      home
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      products
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      services
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      contact
      <span></span><span></span><span></span><span></span>
    </li>
  </ul>
</nav>
            </div>
        </div>
    )
}
