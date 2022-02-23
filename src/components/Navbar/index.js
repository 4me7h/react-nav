import React from 'react'
import {
  Nav, 
  NavLink, 
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink 
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../images/logo.svg').default} alt="logo" width="40px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          {/* 2nd nav */}
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact-us">Contact Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar