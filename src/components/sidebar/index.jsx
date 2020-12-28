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
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Discover</SidebarLink>
          <SidebarLink to='services'>Services</SidebarLink>
          <SidebarLink to='signup'>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'> Sign In </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
