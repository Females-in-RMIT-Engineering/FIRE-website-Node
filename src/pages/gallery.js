import React from 'react';
import { Helmet } from "react-helmet";
  
const Gallery = () => {
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
            <title>FIRE+ | Gallery</title>
      </Helmet>
      <h1>Gallery</h1>
    </div>
  );
};
  
export default Gallery;