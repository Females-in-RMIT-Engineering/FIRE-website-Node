/* eslint-disable */ 

import React, { useState, useCallback } from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/gallery.css";
//import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import boat1 from "./pagesResources/images/boat-party-1.jpg";
import boat2 from "./pagesResources/images/boat-party-2.jpg";
import boat3 from "./pagesResources/images/boat-party-3.jpg";
import boat4 from "./pagesResources/images/boat-party-4.jpg";
import boat5 from "./pagesResources/images/boat-party-5.jpg";
import boat6 from "./pagesResources/images/boat-party-6.jpg";
import boat7 from "./pagesResources/images/boat-party-7.jpg";
import welcome1 from "./pagesResources/images/welcome-night-1.jpg";
import welcome2 from "./pagesResources/images/welcome-night-2.jpg";
import welcome3 from "./pagesResources/images/welcome-night-3.jpg";
import welcome4 from "./pagesResources/images/welcome-night-4.jpg";
import welcome5 from "./pagesResources/images/committeePicture.jpg";
import industry1 from "./pagesResources/images/industry-night-1.jpg";
import industry2 from "./pagesResources/images/industry-night-2.jpg";
import openDay1 from "./pagesResources/images/open-day-1.jpg";
import studySession1 from "./pagesResources/images/study-session-1.jpg";
  
const ImageGallery = () => {

  const photos = [
    {
      src: boat1,
      width: 3,
      height: 2
    },
    {
      src: boat2,
      width: 3,
      height: 2
    },
    {
      src: industry1,
      width: 3,
      height: 2
    },
    {
      src: industry2,
      width: 3,
      height: 2
    },
    {
      src: welcome1,
      width: 4,
      height: 3
    },
    {
      src: welcome2,
      width: 4,
      height: 3
    },
    {
      src: boat3,
      width: 3,
      height: 2
    },
    {
      src: boat4,
      width: 3,
      height: 2
    },
    {
      src: boat5,
      width: 3,
      height: 2
    },
    {
      src: boat6,
      width: 3,
      height: 2
    },
    {
      src: boat7,
      width: 2,
      height: 1.5
    },
    {
      src: welcome3,
      width: 4,
      height: 3
    },
    {
      src: welcome4,
      width: 3,
      height: 4
    },
    {
      src: welcome5,
      width: 4,
      height: 3
    },
    {
      src: openDay1,
      width: 2,
      height: 1.5
    },
    {
      src: studySession1,
      width: 4,
      height: 3
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

        <div class = 'galleryImages'>

          <Gallery photos={photos} onClick={openLightbox}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>

        </div>

        <br />
      </div>
      

    </div>
  );
};

export default ImageGallery;
