import styled, { css } from "styled-components";

const BodyWarper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(95%);
  margin: auto;
  margin-top: 1rem;
  max-height: 100%;
  gap: 0.5rem;
  height: calc(100vh - 50px);
  color: ${({ theme }) => theme.text};
  overflow: auto;
`;
/* -------------------------- */
const ContentWarper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 1rem;
  gap: 1rem;
  background-color: #777;
  border-radius: 4px;
  overflow: auto;
  @media (max-width: 500px) {
    padding: 1rem;
    width: 100%;
    height: 100%;

    align-items: center;
  }
`;
/* ------------------------------------------- */
const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  margin-left: 1rem;
  height: calc(100vh - 150px);
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #777;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    width: 100%;
    margin: 0rem;
    height: 50px;
  }
`;
/* ------------------------------------------- */
const ShowContentWarper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 100px;
  width: calc(100% - 160px);
  height: calc(100vh - 150px);
  justify-content: center;
  align-items: center;
  background-color: #777;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    width: 100%;
    top: 60px;
    left: 0;
    height: calc(100vh - 220px);
  }
`;
/* ------------------------------------------- */
const InnerSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  align-items: center;
  color: #000;
  background-color: #777;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    flex-direction: row;
  }
`;
/* ------------------------------------------- */
const SideIconWarper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 1.8rem;
  border-top: 0.5px solid #44434333;
  border-bottom: 0.5px solid #41404019;
  cursor: pointer;
  z-index: 5;
  
`;
/* ------------------------------------------- */
const HeroTextWarper = styled.div`
  padding: 0.2rem;
  height: 50%;
  width: 100%;
`;
/* ------------------------------------------- */
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: fill;
`;
/* ------------------------------------------- */
const imageWarper = styled.div`
  min-width: 300px;
  min-height: 50%;
  overflow: hidden;

  background-color: ${({ theme }) => theme.bg};
`;
/* ------------------------------------------- */
const HeroTitleHeader = styled.h1`
  background-color: ${({ theme }) => theme.bg};
  text-align: center;
`;
/* ------------------------------------------- */
const TXTtitleWraper = styled.div`
  display: flex;
  flex-direction: ${({ dirx }) => dirx};
  /* gap: 5px; */
  width: 100%;
  /* padding: .4rem; */
  border: ${({ border }) =>border==="none" ? "0px":"1px"} solid ${({ theme }) => theme.soft};
  overflow: auto;
`;
/* ------------------------------------------- */
const txtSharedstyle = css`
  color: ${({ theme }) => theme.text};
  text-align: right;
  word-wrap: break-word;
  border-radius: 1px;
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 5px;
  width: 100%;
  text-align: center;
  /* height: 5rem; */
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 0.2rem;
  }
`;
/* ------------------------------------------- */
const TXTtitle = styled.p`
  background-color: ${({ theme }) => theme.soft};
  text-align: center;
  font-size: 1rem;
  font-family: "CairoBold";
  ${txtSharedstyle}
`;
/* ------------------------------------------- */
const TXTdata = styled.p`
  ${txtSharedstyle}
  background-color:${({ theme }) => theme.bg};
  font-size: 1rem;
  font-family: "TajawalRegular";
  text-align: ${({ align }) => align};
  overflow: auto;
`;
/* ------------------------------------------- */
const TXTBtn = styled.div`
  ${txtSharedstyle}
  background-color:${({ theme }) => theme.nafbar};
  text-align: center;
  font-size: 1rem;
  font-family: "CairoBold";
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  cursor: pointer;
`;
/* ------------------------------------------- */
const FieldSet = styled.fieldset`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 5px 5px 5px;
  margin: 5px 0;
  font-family: "TajawalBold";
  @media (max-width: 500px) {
    text-align: right;
    margin: 0;
    padding: 0px 0px 0px 0px;
    gap: 1px;
  }
`;


/* ****************************************** */    
export default {
  BodyWarper,
  Image,
  imageWarper,
  HeroTitleHeader,
  ContentWarper,
  SideIconWarper,
  HeroTextWarper,
  TXTtitle,
  TXTtitleWraper,
  SideMenu,
  InnerSideMenu,
  ShowContentWarper,
  TXTdata,
  FieldSet,
  TXTBtn,
};
