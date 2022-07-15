/* eslint-disable */ 

import React, { useState, useCallback } from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/gallery.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";
import LoadingSign from "./pagesResources/loading sign/load.gif";
  
const ImageGallery = () => {

  const [images, setImages] = React.useState(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [isLoading, setLoading] = useState(true);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/XKuAkPmTQ5Q5kDwF6"
      );
      setLoading(false);
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map(url => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
            src: `${url}`,
            width: 7,
            height: 5,
            title: "Image"
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  const gallery = images ? <Gallery photos={images} onClick={openLightbox} isLoading ={isLoading} /> : null;

  return isLoading ? (
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

        <div class = 'galleryLoadingSign'>
          <img src= {LoadingSign} alt='Loading...' />
        </div>

        <br />

      </div>

      
    </div>
  ) 
  :
  (
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

        { gallery }
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map(x => ({
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
