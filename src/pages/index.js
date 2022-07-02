import React from "react";
import { Helmet } from "react-helmet";
import "./homepage.css";
import SocialFollow from "./SocialMedia";
import Slideshow from "./imageSlideShow";
//import Slideshow from "./slideshow";
//import Footer from "./Footer";

const Home = () => {
    return (
      <div>
        <Helmet>
            <title>FIRE+ | Home</title>
        </Helmet>
        <div class = 'heading'>
            <h3>FIRE+</h3>
            <h1>FEMALES+ IN RMIT <br /> ENGINEERING</h1>
            <p>Enagage. Support. Empower.</p>
        </div>

        <div class = 'content'>
            <p><b><br />Creating an
            <span class = 'inclusive'> Inclusive </span>
            Environment for Engineering <br />and Aviation students.</b></p>
            <div class = 'slidehow'>
                <Slideshow />
            </div>
            <div class = 'socials'>
                <SocialFollow />
            </div>
            <p class = 'statement'><b>
                “We are a proud RUSU affiliated club here to create a strong community of engineering and aviation students, staff, academics and professionals.”
            </b></p>
            <p class = 'byLine'>
                — Females+ in RMIT Engineering (FIRE+)
            </p>
            <br />
        </div>
      </div>
    );
  };
    
  export default Home;


/* import SlideShow from "./slideshow";

<div class = 'images'>
                <SlideShow />
            </div>;
*/