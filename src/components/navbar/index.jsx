import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              TabeebGhar
            </NavLogo>
            <MobileIcon onClick={() => toggle()}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  Discover
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  SingUp
                </NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>SignIn</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
