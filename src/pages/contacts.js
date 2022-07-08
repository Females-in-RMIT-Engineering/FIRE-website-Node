/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/contacts.css";

import committeePicture from "./pagesResources/images/committeePicture.jpg";
  
const Contacts = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Contact Us</title>
      </Helmet>
      
      <div class = 'ContactContent'>
        <br />
        <h1>Contact Us</h1>

        <div class = 'ContactRow'>
          <div class = 'ContactColumn'>
            <img src={committeePicture} alt = 'Committee' height={400} width={500}/>
          </div>
          <div class = 'ContactColumn'>
            <p style={{ marginBottom: "4px" }}>You can reach us via email using</p>
            <a target={"_blank"} rel='noreferrer' href="mailto:firengineering@rmit.edu.au">
              firengineering@rmit.edu.au
            </a>
            <p style={{ marginBottom: "-15px", marginTop: "30px" }}>RMIT University City Campus</p>
            <p>Melbourne, Australia</p>
            <p style={{ marginBottom: "-15px", marginTop: "30px" }}>Check out our Social Media Platforms:</p>
            <p style={{ marginBottom: "-15px" }}><a target={"_blank"} rel='noreferrer' href="https://www.facebook.com/firengineering/">
              Facebook
            </a></p>
            <p style={{ marginBottom: "-15px" }}><a target={"_blank"} rel='noreferrer' href="https://www.instagram.com/firengineering_/">
              Instagram
            </a></p>
            <p style={{ marginBottom: "-15px" }}><a target={"_blank"} rel='noreferrer' href="https://www.linkedin.com/company/firengineering/">
              Linkedin 
            </a></p>
            <p style={{ marginBottom: "-15px" }}><a target={"_blank"} rel='noreferrer' href="https://discord.com/channels/799421462598647851/799422177912684596">
              Discord
            </a></p>
            <p style={{ marginBottom: "-15px" }}><a target={"_blank"} rel='noreferrer' href="https://www.tiktok.com/@firengineering?lang=en">
             TikTok
            </a></p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
  
export default Contacts;