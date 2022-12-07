import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
/* -------------------------------------- */
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 60px;
  height: 60px;
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  z-index: 1;
`;
/* -------------------------------------- */
const IconWarper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.bgLighter};
  width: 100%;
  padding: .5rem;
  border-radius: 8px;
  cursor: pointer;
`;
/* -------------------------------------- */
const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  width: 100%;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  list-style: none;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.text};
  &:hover {
    border-bottom: 3px solid;
  }
`;
const ImageIcon = styled.svg`
`;
/* -------------------------------------- */
const Wa=styled(IoLogoWhatsapp)`
color: lightgreen;
stroke: 1;
`
/* -------------------------------------- */
const PhoneMenuLink =styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.8rem; */
  text-decoration: none;
  width: 100%;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  list-style: none;
  /* padding-bottom: 5px; */
  color: ${({ theme }) => theme.text};
  &:hover {
    border-bottom: 3px solid;
  }
`;
/* -------------------------------------- */
export default {
  Container,
  IconWarper,
  MenuLink,
  PhoneMenuLink,
  Wa,
  ImageIcon
};
