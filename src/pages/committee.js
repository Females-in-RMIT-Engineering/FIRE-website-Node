/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/committee.css";
import CommitteeCard from './pagesResources/CommitteeCards';

import KylaImage from './pagesResources/images/CommitteeImages/ExecutiveTeam/Kyla.jpg';
import VictoriaImage from './pagesResources/images/CommitteeImages/ExecutiveTeam/Victoria.jpeg';
import TerryImage from './pagesResources/images/CommitteeImages/ExecutiveTeam/Terry.jpeg';
import KarenImage from './pagesResources/images/CommitteeImages/ExecutiveTeam/Karen.jpeg';

import AparnaImage from './pagesResources/images/CommitteeImages/SocialMediaTeam/Aparna.jpg';
import ApsaraImage from './pagesResources/images/CommitteeImages/SocialMediaTeam/Apsara.jpg';

import AkshitaImage from './pagesResources/images/CommitteeImages/SocialEventsTeam/Akshita.jpg';
  
const Committee = () => {
  return (
    <div>
      <Helmet>
            <title>FIRE+ | Committee</title>
      </Helmet>

      <div class ='committeeContent'>
        <br />
        <h1>Meet the FIRE+ Committee</h1>

        

        <h2><span class = 'Fontcolor'>Executive</span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={TerryImage} name = "Terry Kim" role="President"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={VictoriaImage} name = "Victoria Kokurin" role="Vice President"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={KylaImage} name = "Kyla Diego"  role="Marketing Manager"/>
          </div>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={KarenImage} name = "Karen Khalil"  role="Treasurer"/>
          </div>
        </div>
        

        <h2><span class='Fontcolor'>Newsletter </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Industry Events </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Social Events </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={AkshitaImage} name = "Akshita Agrawal" role="Social Events Officer"/>
          </div>  
        </div>  

        <h2><span class='Fontcolor'>Social Media </span> Team </h2>

        <div class = 'CommitteeRow'>
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={AparnaImage} name = "Aparna" role="Social Media Officer"/>
          </div>  
          <div class = 'CommitteeColumn'>
            <CommitteeCard imagesrc={ApsaraImage} name = "Apsara" role="Social Media Officer"/>
          </div>
        </div>  

        <br />
      </div>
    </div>
  );
};
  
export default Committee;