import React from 'react';
import {
  Nav,
  NavLink,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
} from './NavbarElements';

import Logo from './logo.png';
  
const NavigationBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLogo to='/' activeStyle>
            <img src={Logo} alt='FIRE logo' height={100}/>
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
          <a class = 'join' href='https://docs.google.com/forms/d/e/1FAIpQLSfhd4fiAH9qcjkvYebNE1pXbK_DYSGB6CfVaE25LLi77exc6Q/viewform' target={'_blank'} rel='noreferrer'>Join the Club</a>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default NavigationBar;