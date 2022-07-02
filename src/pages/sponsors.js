import React from 'react';
import { Helmet } from "react-helmet";

const Sponsors = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        <Helmet>
            <title>FIRE+ | Sponsors</title>
        </Helmet>
        <h1>Our Sponsors</h1>
      </div>
    );
  };

  export default Sponsors;