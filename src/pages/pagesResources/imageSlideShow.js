import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./imageSlideShow.css";

import boat1 from "./images/boat-party-1.jpg";
import boat2 from "./images/boat-party-2.jpg";
import welcome1 from "./images/welcome-night-1.jpg";
import welcome2 from "./images/welcome-night-2.jpg";
import industry1 from "./images/industry-night-1.jpg";
import industry2 from "./images/industry-night-2.jpg";

const slideImages = [
  boat1, boat2, welcome1, welcome2, industry1, industry2
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
};

const Slideshow = () => {
    return (
        <>
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <img src={slideImages[0]} alt='images' height={500} width={750}  />
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[1]} alt='images' height={500} width={750} /> 
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[2]} alt='images' height={500} width={750} />
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[3]} alt='images' height={500} width={750} />
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[4]} alt='images' height={500} width={750} />
                    </div>
                    <div className="each-slide">
                        <img src={slideImages[5]} alt='images' height={500} width={750} />
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default Slideshow;