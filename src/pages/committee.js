import React from 'react';
import { Helmet } from "react-helmet";
  
const Committee = () => {
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
            <title>FIRE+ | Committee</title>
      </Helmet>
      <h1>Meet the FIRE+ Committee</h1>
    </div>
  );
};
  
export default Committee;