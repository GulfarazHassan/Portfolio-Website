import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./sidebarElements";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={() => toggle()}>
            About
          </SidebarLink>
          <SidebarLink
            to='aws'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={() => toggle()}>
            AWS
          </SidebarLink>
          <SidebarLink
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={() => toggle()}>
            Services
          </SidebarLink>
          <SidebarLink
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onClick={() => toggle()}>
            Deployment
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contactme'> Contact Me </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
