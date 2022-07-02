import React from 'react';
import { Helmet } from "react-helmet";
import "./about.css";
  
function About() {
  return (
      <div>
        <Helmet>
            <title>FIRE+ | About</title>
        </Helmet>
        <div class='headingAbout'>
          <h1>About Us</h1> 
        </div>
      </div>
  );
};



export default About;