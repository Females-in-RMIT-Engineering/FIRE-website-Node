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
          <NavLogo to='/' title='Home' activeStyle>
            <img src={WebsiteLogo} alt='FIRE logo' height={85}/>
          </NavLogo>
          <NavLink to='/about' title='Learn more about FIRE+' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/committee' title='Meet the FIRE+ Committee' activeStyle>
            FIRE+ Committee
          </NavLink>
          <NavLink to='/sponsors' title='Meet our sponsors' activeStyle>
            Our Sponsors
          </NavLink>
          <NavLink to='/upcomingevents' title='Find our upcoming events' activeStyle>
            Upcoming Events
          </NavLink>
          <NavLink to='/gallery' title='Photos of past events' activeStyle>
            Gallery
          </NavLink>
          <NavLink to='/contacts' title='Contact FIRE+' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/faqs' title='Frequently Asked Questions' activeStyle>
            FAQs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/*<a class = 'join' href='https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform' target={'_blank'} rel='noreferrer' style={{textDecoration: "none"}}>Join the Club</a>*/}
          <NavBtnLink to='https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform' target={'_blank'} rel='noreferrer' title='Google Form to join FIRE+'>Join the Club</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};
  
export default NavigationBar;