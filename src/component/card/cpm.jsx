import styled from "styled-components";
const Container = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow:${({ theme }) => theme.boxShadow};
  border-radius: 8px;
  border: 1px solid;
  border-color:${({ type }) => type ==="ايجار" ? "gold":"crimson"} ;
  background-color:${({ theme }) => theme.bg};
  
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height:100% ;
  /* height: auto; */
  object-fit: contain;
`;


const ActionBtn = styled.button`
position: absolute;
top: 5px;
right: 5px;
border-radius:8px;
border: 1px solid white;
width:40px;
height:35px;
/* background-color: transparent; */

box-shadow: 0px 0px 20px rgba(16, 172, 42, 0.2);
z-index: 3;
border: 0;
outline:none;
cursor: pointer;
&:hover {
  background-color: gold;
}

`;
const imageWarper = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.bg};
`;
const subTitleWarper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: .9rem;
  padding:.5em;
  overflow-y: auto;
`;
const actionWarper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};


  border-radius: 0px 0px 8px 8px;
  box-shadow:${({ theme }) => theme.boxShadow};
`;

const footeIconWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
  background-color: ${({ theme }) => theme.soft};;
  color: ${({ theme }) => theme.text};
  box-shadow:${({ theme }) => theme.boxShadow};
 

  font-size: 15px;
`;

const footeIconTextWarper = styled.div`
font-size: 10px;
font-weight: lighter;
font-style: italic;
color: inherit;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const footeIconWithTextWarper = styled.div`

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

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

export default {
  Container,
  Image,
  ServicePrice,
  TextDetail,
  SubTextDetail,
  imageWarper,
  subTitleWarper,
  actionWarper,
  footeIconWarper,
  footeIconTextWarper,
  footeIconWithTextWarper,
  ActionBtn
};
