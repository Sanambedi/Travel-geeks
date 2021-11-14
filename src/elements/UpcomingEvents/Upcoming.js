import React from 'react';
import "./Upcoming.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card/Card';

export default function Upcoming(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div>
          <div className="back-back">
            <div className="bg-ground1">
                <p className="checkout-paragraph">Checkout Our Best Promotional Tours</p>
                <h1 className="checkout-heading">Upcoming Events</h1>    
            </div>
          </div>
            <div className="carousel">
                <Carousel
                infinite={true} 
                keyBoardControl={true}
                transitionDuration={500}
                responsive={responsive} >
                    <div><Card cardImage="https://www.collinsdictionary.com/images/full/lake_281848937_1000.jpg"/></div>
                    <div><Card cardImage="https://www.collinsdictionary.com/images/full/lake_281848937_1000.jpg"/></div>
                    <div><Card cardImage="https://www.collinsdictionary.com/images/full/lake_281848937_1000.jpg"/></div>
                    <div><Card cardImage="https://www.collinsdictionary.com/images/full/lake_281848937_1000.jpg"/></div>
                </Carousel>
            </div>
                
            
        </div>
    )
}
