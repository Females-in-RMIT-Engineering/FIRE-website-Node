/* eslint-disable */ 

import React from 'react';
import {
  Nav,
  NavLink,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import WebsiteLogo from './FIREWebsiteLogo.png'; 
  
const NavigationBar = () => {
  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLogo to='/' activeStyle>
            <img src={WebsiteLogo} alt='FIRE logo' height={85}/>
          </NavLogo>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/committee' activeStyle>
            FIRE+ Committee
          </NavLink>
          <NavLink to='/sponsors' activeStyle>
            Our Sponsors
          </NavLink>
          <NavLink to='/upcomingevents' activeStyle>
            Upcoming Events
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            Gallery
          </NavLink>
          <NavLink to='/contacts' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/faqs' activeStyle>
            FAQs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/*<a class = 'join' href='https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform' target={'_blank'} rel='noreferrer' style={{textDecoration: "none"}}>Join the Club</a>*/}
          <NavBtnLink to='https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform' target={'_blank'} rel='noreferrer'>Join the Club</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};
  
export default NavigationBar;