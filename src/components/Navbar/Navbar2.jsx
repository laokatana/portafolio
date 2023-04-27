import React from "react";
import styled from "styled-components";



const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #49426c;
`;

const NavBarWraper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-beetwen;
`;

const IconLogo = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:flex-start;
 align-items:center;
 font-size:1.2rem;
 color: #ebc88b; 

`

const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-wight:400;
` 

const MenuItemLink = styled.a`
  text-decoration: none;
  color: #ebc88b;
`


const Navbar2 = () => {
  return (
    <>
      <NavbarContainer>
        <NavBarWraper>
          <IconLogo>
           menu 
          </IconLogo>
        </NavBarWraper>
      </NavbarContainer>
    </>
  );
};

export default Navbar2;
