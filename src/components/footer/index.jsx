import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIconLink,
  FooterLinkS,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
} from "./footerElements";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> About Me </FooterLinkTitle>
              <FooterLinkS
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                About
              </FooterLinkS>
              <FooterLinkS
                to='aws'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                AWS (Amazon Web Services)
              </FooterLinkS>
              <FooterLinkS
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                My Services
              </FooterLinkS>
              <FooterLinkS
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                Apps Deployment
              </FooterLinkS>
            </FooterLinksItems>
            <FooterLinksItems></FooterLinksItems>
            <FooterLinksItems></FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> Contact Me </FooterLinkTitle>
              <FooterLink to='/contactme'>Send Message</FooterLink>
              <FooterLink to='#'>contact@gulfarazhassan.com</FooterLink>
              <FooterLink to='#'>+92 3060052374</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Gulfaraz Hassan
            </SocialLogo>
            <WebsiteRights>
              gulfarazhassan c {new Date().getFullYear()}
              All RightReserver.
            </WebsiteRights>
            <SocialIcons>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
