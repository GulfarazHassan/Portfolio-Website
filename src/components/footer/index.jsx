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
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>careers</FooterLink>
              <FooterLink to='/signin'>Invertors</FooterLink>
              <FooterLink to='/signin'>Terms of service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle> Contact us </FooterLinkTitle>
              <FooterLink to='/signin'>Contact</FooterLink>
              <FooterLink to='/signin'>Support</FooterLink>
              <FooterLink to='/signin'>Destinations</FooterLink>
              <FooterLink to='/signin'>Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to='/signin'>Submit video</FooterLink>
              <FooterLink to='/signin'>Ambassadors</FooterLink>
              <FooterLink to='/signin'>careers</FooterLink>
              <FooterLink to='/signin'>Agency</FooterLink>
              <FooterLink to='/signin'>Influencers</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to='/signin'>Facebook</FooterLink>
              <FooterLink to='/signin'>Twitter</FooterLink>
              <FooterLink to='/signin'>Instagram</FooterLink>
              <FooterLink to='/signin'>Youtube</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              TabeebGhar
            </SocialLogo>
            <WebsiteRights>
              tabeebghar c {new Date().getFullYear()}
              All RightReserver.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
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
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
