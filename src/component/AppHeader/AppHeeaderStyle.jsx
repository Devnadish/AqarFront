import styled from "styled-components";
import { Link } from "react-router-dom";
/* ----------------------------------- */
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 60px;
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  font-family: "CairoBold";
  box-shadow: ${({ theme }) => theme.HboxShadow};
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;
/* ----------------------------------- */
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1;
  width: 100%;
  cursor: pointer;
  padding: 5px 0px;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  text-align: right;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
  @media only screen and (max-width: 500px) {
    display: ${({ menuDir }) => (menuDir === "col" ? "flex" : "none")};
  }
`;
/* ----------------------------------- */
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;
  border-left: 1px solid ${({ theme }) => theme.text};
  flex: 1;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

  @media only screen and (max-width: 500px) {
    display: ${({ menuDir }) => (menuDir === "col" ? "flex" : "none")};
  }
`;
/* ----------------------------------- */
const Menu = styled.ul`
  display: flex;
  justify-content: ${({ menuDir }) =>
    menuDir === "col" ? "flex-start" : "space-evenly"};
  align-items: center;
  gap: 2rem;
  margin-top: ${({ menuDir }) => (menuDir === "col" ? "1rem" : "0")};
  flex-direction: ${({ menuDir }) => (menuDir === "col" ? "column" : "row")};
  flex: 7;
  @media only screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
  }
`;
/* ----------------------------------- */
const Navigator = styled.div``;
/* ----------------------------------- */
const MenuContainer = styled.div`
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`;
/* ----------------------------------- */
const MenuTitle = styled.p`
display: flex;
justify-content: center;
align-items: center;
 font-family: "TajawalBold";
 width: 100%;
 text-align: center;
  @media only screen and (max-width: 500px) {
    display: ${({ menuDir }) => (menuDir === "col" ? "flex" : "none")};
  }
`;
/* ----------------------------------- */
const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 35px;
  width: 200px;
  right: 50px;
  height: 70%;
  
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  transition: all 0.3s ease-in;
  z-index: 7;
  @media only screen and (max-width: 500px) {
     width: 50%;
    right: -50px;
   }
`;
/* ----------------------------------- */
const BackIconMenuWraper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  margin-right: 1rem;
  width: 100%;
  cursor: pointer;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.bg};
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
`;
/* ----------------------------------- */
const MenuItemWraper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 0.5rem;
  margin-right: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.price};
  }
`;
/* ----------------------------------- */
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  width: 100%;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  list-style: none;
  padding-bottom: 5px;
  &:hover {
    border-bottom:3px solid ;
  }
 `;
/* ----------------------------------- */
const MenuLink = styled(Link)`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  width: 100%;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  list-style: none;
  /* padding-bottom: 5px; */
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLighter};
  padding: .5rem;
  border-radius: 8px;
  &:hover {
    border-bottom:3px solid ;
  }
`;
/* ----------------------------------- */
export default {
  Container,
  Item,
  Logo,
  Menu,
  MenuItem,
  Navigator,
  SideMenu,
  BackIconMenuWraper,
  MenuItemWraper,
  MenuContainer,
  MenuTitle,
  MenuLink
};
