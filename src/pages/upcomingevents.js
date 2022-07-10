/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/upcomingEvents.css";

import Popup from './pagesResources/PopUp';

const Events = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Upcoming Events</title>
      </Helmet>

      <div class = 'eventsContent'>
        <br />

        <h1 style={{ marginBottom: "-10px" }}>Upcoming Events</h1>

        <br />
      </div>
      

    </div>
  );
};
  
export default Events;