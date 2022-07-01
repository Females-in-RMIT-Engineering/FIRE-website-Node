import React from "react";
import "./homepage.css";
import SocialFollow from "./SocialMedia";

const Home = () => {
    return (
      <div>

        <div class = 'heading'>
            <h3>FIRE+</h3>
            <h1>FEMALES+ IN RMIT <br /> ENGINEERING</h1>
            <p>Enagage. Support. Empower.</p>
        </div>

        <div class = 'content'>
            <p><b><br />Creating an
            <span class = 'inclusive'> Inclusive </span>
            Environment for Engineering <br />and Aviation students.</b></p>
            <div class = 'socials'>
                <SocialFollow />
            </div>
        </div>
        
      </div>
    );
  };
    
  export default Home;
