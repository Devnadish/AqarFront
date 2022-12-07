import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 80%;

  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
  border: 0 solid;
  gap: 10px;

  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;


const shareStyle = css`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px 0 5px 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: "TajawalBold";
`;

const themcolor = css`
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
`;


const DailogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  padding: 1rem;
  border: 3px solid ${({ theme }) => theme.soft};
  ${themcolor}
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;



const FormContainer = styled.form`
  max-width: 1200px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  color: black;
  @media only screen and (max-width: 500px) {
    max-width: 300px;
  }
`;

const FormStyle = styled.div`
display: flex;
flex-wrap: wrap;
  max-width: 800px;
  gap: 3px;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  /* border: 1px solid; */
  /* margin: 10px auto; */
  /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); */
  color: black;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;



const InputText = styled.input`
  display:  block;
  width: 100%;
  
  font-family: "CairoRegular";
  ${shareStyle}
`;





const PriceInputText = styled.input`
  display: ${({reqFlag})=> reqFlag===3 ? "block": "none"};
  color: ${({reqFlag})=> reqFlag===3 ? "red": "green"};
  width: 100%;
  
  font-family: "CairoRegular";
  ${shareStyle}
`;


const RequstTypeWrper= styled.div`
  display: "flex";
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const LabelText = styled.div`
 padding: 8px 14px;
 font-size: 14px;
 font-family: "CairoRegular";
 color: #fff;
 width:100%;
 text-align: center;
 background: #009578;
 cursor:pointer;
  
 &:not(:last-of-type){
  border-right: 1px solid #006B56;
 }
 &:not(:first-of-type){
  border-right: 1px solid #006B56;
 }

 &:hover{
  background-color:red;
 }

   
`;




const RadioInputText = styled.div`
  display: none;
  
 
`;

const Btn = styled.button`
  display: block;
  background-color: #f7797d;
  color:black;
  font-size: 1rem;
  border :0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  width:100%;
  cursor: pointer;
  box-sizing: border-box;
  font-family: "CairoBold"
  
  
`;



const InputTextarea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height :100px;
  ${shareStyle}
`;

const FieldSet = styled.fieldset`
display: flex;
align-items: center;
/* justify-content:center; */
width: 100%;
gap:15px;
border: 1px solid #ddd;
border-radius: 5px;
padding: 0px 5px 0px 5px;
margin :5px 0;
font-family: 'TajawalBold';


`;

const HeaderTypeWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 30px;
  background-color: ${({ type }) => (type === "ايجار" ? "gold" : "crimson")};
  color: ${({ type }) => (type === "ايجار" ? "black" : "white")};
  border-radius: 8px;
  font-weight: bolder;
  margin: 3px 3px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  font-family: "CairoBold";
  &:hover {
    transition: scale(1.1);
  }
`;




const TextData = styled.p`
  font-size: 1rem;
  color: black;
  border:${({border})=>border==="yes" ? ".5px solid": "0"};
  border-color: #ccc777;
  border-radius: 4px;
  width: 90%;
  padding:.3rem;
  text-align: center;
  margin: auto;
  font-family: 'TajawalBold';
`;

 const RadioDiv=styled.div`
 width: 100%;
 display: inline-flex;
 overflow: hidden;
 border-radius: 15px;
 box-shadow: 0 0 5px rgba(0,0,0,0.25) inset;
 
 `;


const Text = styled.p`
 display:block;
  font-size: 1rem;
  width: 100%;
  font-family: 'TajawalBold';
  color: black;

  @media only screen and (max-width: 500px) {
    font-size: .8rem;
  }
  
`;

const ItemTxtWraper = styled.div`
  display: flex;
  width: 100%;
  flex-direction:${({dsn})=>dsn==="row" ? "row": "column"};
  justify-content: flex-start;
  align-items: ${({dsn})=>dsn==="row" ? "center": "flex-start"};
  gap :${({dsn})=>dsn==="row" ? "10px": "5px"};
  padding: 0rem 1rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap:4px;
  }

`;

export default {
  Container,
  Text,
  DailogContainer,
  TextData,
  ItemTxtWraper,
  InputText,
  FormContainer,
  Btn,
  FieldSet,
  FormStyle,
  HeaderTypeWarper,
  RadioInputText,
  RadioDiv,
  LabelText,
  RequstTypeWrper,
  PriceInputText,
  InputTextarea


};
