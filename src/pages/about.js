import React from 'react';
import { Helmet } from "react-helmet";
import "./about.css";

import websitelogo from "./logo.png";
import RMITlogo from "./RMIT logo.png";
import RUSUlogo from "./RUSU logo.jpg";
  
function About() {
  return (
      <div>
        <Helmet>
            <title>FIRE+ | About</title>
        </Helmet>

        <div class='contentAbout'>
          <br />
          <h1><span class = 'differentColor'> About </span> Us</h1> 

          <p>
          Founded in 2019, Females+ in RMIT Engineering (FIRE+) is a student organization for engineering and 
          aviation students who want STEM to be inclusive for all individuals. The FIRE+ community aims to 
          support womxn, non-binary and gender nonconforming students at RMIT University. FIRE+ organizes 
          social & industry events and initiatives to support, engage and empower our members.
          </p>

          <h1><span class = 'differentColor'> Our </span> Objectives </h1> 

          <p>FIRE+ aims to:</p>

          <ul>
            <li> Bring the womxn in engineering and aviation cohorts together and encourage networking across the variety of disciplines. </li>
            <li> Actively build an inclusive RMIT engineering and aviation community with a focus on the inclusivity of minorities and underrepresented groups in STEM. </li>
            <li> Create a strong community of engineering and aviation students, staff, academics and professionals. </li>
            <li> Educate engineering and aviation students about real diversity/inclusivity issues within education/ industry and how we can tackle these as a community. </li>
            <li> Help prepare engineering and aviation students to be industry-ready through workshops and seminars. </li>
            <li> Organise STEM volunteering opportunities and promote engineering and aviation to young students. </li>
          </ul>

          <h1><span class = 'differentColor'> Acknowledgement </span> of the Country </h1> 

          <p>
            FIRE+ acknowledges the people of the Kulin Nations on whose unceded lands
            we meet and work on. We respectfully acknowledge their Ancestors and 
            Elders, past and present. We recognize the Traditional Custodians and their 
            Ancestors of the lands and waters across Australia that we depend upon. 
          </p>

          <h1><span class = 'differentColor'> FIRE+ </span> Awards </h1> 

          <p>*insert awards image here*</p>

          <h1><span class = 'differentColor'> Who </span> We are a Part of </h1> 

          <div class = 'row'>
            <div class = 'column'>
              <img src={websitelogo} alt = 'FIRE+ website logo' height={100}/>
            </div>
            <div class = 'column'>
              <img src={RUSUlogo} alt = 'RUSU logo' height={80}/>
            </div>
            <div class = 'column'>
              <img src={RMITlogo} alt = 'RMIT logo' height={80}/>
            </div>
          </div>

          <br />
        </div>

      </div>
  );
};



export default About;