import React from 'react';
import { Helmet } from "react-helmet";
  
const Contacts = () => {
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
            <title>FIRE+ | Contact Us</title>
      </Helmet>
      <h1>Contact Us</h1>
    </div>
  );
};
  
export default Contacts;