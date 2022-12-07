import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 80%;
   
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  border: 0 solid;
  gap: 10px;
  /* box-shadow:0 0 0rem .5em blue; */
  border-radius: 4px;
  box-shadow:  0 5px 20px rgba(0,0,0,0.5) ;

  @media only screen and (max-width: 500px) {
    width: 50%;
     
  }
`;

const MenuItemWrper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: .5px solid ${({ theme }) => theme.hrColor} ;
  cursor: pointer;
  &:hover{
    border-bottom: 2px solid ${({ theme }) => theme.price} ;
    /* background-color:${({ theme }) => theme.text}; */
 
  }
`;

const MenuHeaderItemWrper = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 10px;
  /* background-color: ${({ theme }) => theme.nafbar}; */
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  &:hover{
    color: ${({ theme }) => theme.price};
  }
`;



const DailogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  gap: 5px;
  padding: 1rem;
  border:3px solid  ${({ theme }) => theme.soft};;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;


const Text = styled.p`
  font-size: 1rem;
  /* padding: .5rem; */
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  &:hover{
    color: ${({ theme }) => theme.price};
  }
`;


const InputText = styled.input`
  font-size: 1rem;
   
   
  /* color: ${({ theme }) => theme.text}; */
  
`;



const TextData = styled.p`
  font-size: 1rem;
  /* padding: .5rem; */
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  &:hover{
    color: ${({ theme }) => theme.price};
  }
`;

const MenuIcon = styled.div`
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  
`;


const ItemTxtWraper = styled.div`
display: flex;
align-items: center;
gap:1rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  
`;

export default {
  Container,
  MenuItemWrper,
  MenuHeaderItemWrper,
  MenuItem,
  MenuIcon,
  Text,
  DailogContainer,
  TextData,
  ItemTxtWraper,
  InputText
};
