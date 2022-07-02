import React from 'react';
import { Helmet } from "react-helmet";
import "./sponsors.css";

const Sponsors = () => {
    return (
      <div>
        <Helmet>
            <title>FIRE+ | Sponsors</title>
        </Helmet>

        <div class = 'sponsorsContent'>
          <br />

          <h1 style={{ marginBottom: "-10px" }}>Our Sponsors</h1>

          <p class = 'sponsorsheading'>
            FIRE+ is kindly sponsored by the following corporations
          </p>

          <h2> Platinum </h2>
          <h2> Gold </h2>
          <h2> Silver </h2>

          <br />
        </div>
        
      </div>
    );
  };

  export default Sponsors;