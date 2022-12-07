import styled from "styled-components";
 


const BodyWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin: auto;
  margin-top: 1rem;
  max-height:  100%;
  height:  calc(100vh - 120px);
  color: ${({ theme }) => theme.text};
  overflow:auto ;
`;

const ContentWarper = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #777;
  height: 100%;
  width: 100%;
  
`;

const HeroImageWarper = styled.div`
  height: 50%;
  width: 100%;
  padding: .7rem;
  /* background-color: lightgreen; */
  
`;

const HeroTextWarper = styled.div`
padding: .2rem;
  height: 50%;
  width: 100%;

  
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: fill;
`;






const imageWarper = styled.div`
  min-width: 300px;
  min-height: 50%;
  overflow: hidden;
  
  background-color: ${({ theme }) => theme.bg};
`;



const HeroTitleHeader = styled.h1`
background-color:${({ theme }) => theme.bg};
text-align: center;
font-family: "CairoBold";

`;

const HeroSubTitleWraper= styled.div`
width:100% ;
overflow: auto;
/* margin : 1rem; */
height: 80%;
padding: 1rem;
margin-top:.5rem ;
border:1px solid ${({ theme }) => theme.soft};

`;
const HeroSubTitle = styled.p`
background-color:${({ theme }) => theme.bg};
text-align: right;
padding: 1rem;
word-wrap: break-word;
width:100% ;
overflow: auto;
border-radius: 8px;
border:1px solid ${({ theme }) => theme.bg};


`;

export default {
  BodyWarper,
  Image,
  imageWarper,
  HeroTitleHeader,
  ContentWarper,
  HeroImageWarper,
HeroTextWarper,
HeroSubTitle,
 HeroSubTitleWraper

};
