import styled,{css} from "styled-components";
/* 
* Global Styles
*/
const InputCss=css`
 border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  font-family: "TajawalRegular";
  &:focus {
    color: black;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.price};

  }
`;
/* ---------------------------------------------- */

const InputContainer = styled.div`
  display:inline-flex;
  flex-direction: ${({dirLabel})=>dirLabel} ;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  /* border:1px solid rgba(0, 0, 255, 0.9); */
  padding: 5px;
  gap: 5px;
`;

const TXTLabel = styled.p`
display: inline;
  font-size: 0.9rem;
  font-family: "TajawalBold";
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;


const ImageBtn = styled.button`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "TajawalRegular";
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  min-height: 40px;
  min-width: 64px;
  padding: 3px 8px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
     
  }
`;

const ImagePreview = styled.div`
  max-width: 100%;
  max-height: 100%;
  background-image: url(${({imgpreview})=>  imgpreview === null ? "img/general/addfile.svg" : null});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${({imgpreview})=>  imgpreview === null ? "lightgray" : null};
  background-position: center;
  border: 1px solid black;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  border-radius: 8px;
  
`;
const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content:"center";
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  /* border: 3px solid rgba(255, 55,200,.9); */
  padding: 5px 15px;
  border-radius: 4px;
  
`;



const Image = styled.img`
max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 99%;
  overflow: auto;
`;


/* ----------------------------------------- */
const Input = styled.input`
  ${InputCss}
  background-color: ${({disabled})=>disabled === true ? "rgba(255,150,0,.9)" :"transparent"};
  color: black;
  width: ${({ width }) => width};
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;
/* ################################################ */
const InputTextarea = styled.textarea`
  ${InputCss}
  width: ${({ width }) => width};
  color: black;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;
/* ----------------------------------------- */
const SeclectOption = styled.select`
  /* ${InputCss} */
  max-height: 45px;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
 display: flex;
 justify-content: flex-start;
 align-items:"center";
font-size: .8rem;
/* padding:.5rem .5rem;  */
color:white;
background-color: #9496a5;
font-family: "TajawalRegular";
border: 0;

 
`;
 

const CustomSelectDiv= styled.div`
 max-height: 31px;
position: relative;
width: 100%;
height: 100%;
border-radius: 6px;
`;



export default {
  Input,
  Form,
  InputContainer,
  TXTLabel,
  ImageBtn,
  ImagePreview,
  Image,
  ImagePreviewContainer,
  InputTextarea,
  SeclectOption,
  
  CustomSelectDiv
};
