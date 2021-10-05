import React from 'react'
import "./Card.css";
const Card = ({
    cardImage = "",
    cardtext = "This is the description of card"
})=> {
    return (
        <div className="main-card">
            <div className="card">
                <img src={cardImage} alt="Ghomne ki jagah" className="card-image"/>
                <div className="card__details">
                    <span id="tag">Nature</span>
                    <span id="tag">Lake</span>
                    <div className="card-name">Ghomne ki jagah</div>
                    <p id="card-desc">It's a sample text . Its a sample text. It's a sample text . Its a sample text. It's a sample text . Its a sample text.</p>
                    <button className="card-button">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card;