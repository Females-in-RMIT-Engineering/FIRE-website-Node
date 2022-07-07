import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/sponsors.css";

import JohnHollandLogo from './pagesResources/logos/JohnHollandLogo.png';
import AmazonLogo from './pagesResources/logos/AmazonLogo.png';
import StantecLogo from './pagesResources/logos/StantecLogo.png';
import SystraLogo from './pagesResources/logos/SystraLogo.png';
import TelstraLogo from './pagesResources/logos/TelstraLogo.png';
import APALogo from './pagesResources/logos/APALogo.png';
import AECOMLogo from './pagesResources/logos/AECOMLogo.png';

const Sponsors = () => {
    return (
      <div>
        <Helmet>
            <title>FIRE+ | Sponsors</title>
        </Helmet>

        <div class = 'sponsorsContent'>
          <br />

          <h1 style={{ marginBottom: "-10px" }}>Our Sponsors</h1>

          <p class = 'sponsorsheading'>
            FIRE+ is kindly sponsored by the following corporations
          </p>

          <h2> Platinum </h2>
            <div class = 'SponsorRow'>
              <div class = 'SpnsorColumn'>
                <img src={JohnHollandLogo} alt = 'John Holland Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
            </div>

          <h2> Gold </h2>
            <div class = 'SponsorRow'>
              <div class = 'SpnsorColumn'>
                <img src={AmazonLogo} alt = 'Amazon Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
              <div class = 'SpnsorColumn'>
                <img src={StantecLogo} alt = 'Stantec Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
            </div>
            <div class = 'SponsorRow'>
              <div class = 'SpnsorColumn'>
                <img src={SystraLogo} alt = 'Systra Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
            </div>

          <h2> Silver </h2>
            <div class = 'SponsorRow'>
              <div class = 'SpnsorColumn'>
                <img src={TelstraLogo} alt = 'Telstra Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
              <div class = 'SpnsorColumn'>
                <img src={APALogo} alt = 'APA Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
            </div>
            <div class = 'SponsorRow'>
              <div class = 'SpnsorColumn'>
                <img src={AECOMLogo} alt = 'Aecome Logo' width = {270} height = {90} class = 'SponsorLogos' />
              </div>
            </div>

          <br />
        </div>
        
      </div>
    );
  };

  export default Sponsors;

  /* <div class="middle">
      <div class="text">John Doe</div>
    </div> */