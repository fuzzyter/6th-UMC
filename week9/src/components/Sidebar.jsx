import React, { useState } from 'react';
import styled from 'styled-components';

const MenuIcon = styled.div`
  display: block; 
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;

  @media (min-width: 800px) {
    display: block;
  }
  }
`;

const SidebarContainer = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-250px')};
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const SidebarLink = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleSidebar}>☰</MenuIcon>
      <SidebarContainer isOpen={isOpen}>
        <SidebarLink href="/popular">Popular</SidebarLink>
        <SidebarLink href="/nowplaying">Now Playing</SidebarLink>
        <SidebarLink href="/toprated">Top Rated</SidebarLink>
        <SidebarLink href="/upcoming">Upcoming</SidebarLink>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
