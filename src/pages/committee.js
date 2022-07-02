import React from 'react';
import { Helmet } from "react-helmet";
import "./committee.css";
  
const Committee = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Committee</title>
      </Helmet>

      <div class = 'committeeContent'>
        <br />
        <h1>Meet the FIRE+ Committee</h1>

        <h2><span class = 'Fontcolor'>Executive</span> Team </h2>
        <h2><span class = 'Fontcolor'>Newsletter </span> Team </h2>
        <h2><span class = 'Fontcolor'>Industry Events </span> Team </h2>
        <h2><span class = 'Fontcolor'>Social Events </span> Team </h2>
        <h2><span class = 'Fontcolor'>Social Media </span> Team </h2>

        <br />
      </div>
    </div>
  );
};
  
export default Committee;