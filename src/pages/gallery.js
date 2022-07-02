import React from 'react';
import { Helmet } from "react-helmet";
import "./gallery.css";
  
const Gallery = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Gallery</title>
      </Helmet>

      <div class = 'galleryContent'>
        <br />

        <h1 style={{ marginBottom: "-10px" }}>Gallery</h1>
        
        <p class = 'galleryheading'>
            Past Events Gallery
        </p>

        <br />
      </div>
      

    </div>
  );
};
  
export default Gallery;
