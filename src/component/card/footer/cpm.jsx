import styled from "styled-components";
import {Link} from  "react-router-dom";
 
const actionWarper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.5);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  border-top: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 0px 0px 8px 8px;
`;
/* ------------------------------------------ */
const footeIconWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.soft};;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;
/* ------------------------------------------ */ 
const footeIconTextWarper = styled.div`
font-size: 10px;
font-weight: lighter;
font-style: italic;
color: inherit;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
/* ------------------------------------------ */ 
const footeIconWithTextWarper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;
/* ------------------------------------------ */ 
const ServicePrice = styled.h4`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border-radius: 0px 8px 8px 0px;
  padding: 12px 8px 12px 8px;
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
/* ------------------------------------------ */ 
const TextDetail = styled.p`
  margin-top: 10px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.text};
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
/* ------------------------------------------ */ 
const SubTextDetail = styled.li`
  margin-top: 5px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.text};
  width: 100%;
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
// const MoreBtn = styled.button`
// display: flex;
// justify-content: center;
// align-items: center;
// font-family: "CairoBold";
// background-color: blueviolet;
// width: 100%;
// flex:1;
// padding: .5rem 1rem;
// border-radius: 4px;
// font-size: .8rem;
// box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
// `;

const MoreBtn = styled.button`
display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: "CairoBold";
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: rgb(25, 118, 210);
    /* box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px; */
    box-shadow:0 1px 2px 0 rgb(48 48 48 / 30%), 0 1px 3px 1px rgb(48 48 48 / 15%);
    `;




const IdLink = styled(Link)`
 text-decoration: none;
 list-style: none;
 /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  text-align: ${({ menuDir }) => (menuDir === "col" ? "right" : "center")};
  padding-bottom: 5px;
  color: ${({ theme }) => theme.text};
    
  &:hover {
    border-bottom:3px solid ;
  } */
`;

/* ------------------------------------------ */ 
export default {
  actionWarper,
  footeIconWarper,
  footeIconTextWarper,
  footeIconWithTextWarper,
  MoreBtn,
  IdLink
};

