import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 5px;
`;

const TXTLabel = styled.p`
  font-size: 0.9rem;
  font-family: "TajawalRegular";
  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const Input = styled.input`
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: ${({ width }) => width};
  font-family: "TajawalRegular";
  &:focus {
    color: black;
    background-color: white;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const ImageBtn = styled.button`
  display: flex;
  font-size: 0.9rem;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
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
   
  min-width: 64px;
  padding: 3px 8px;
  border-radius: 4px;

  color: rgb(255, 255, 255);
  background-color: rgb(25, 118, 210);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;

const ImagePreview = styled.div`
  max-width: 75px;
  max-height: 75px;
  background-image: url(${({imgpreview})=>  imgpreview === null ? "img/general/addfile.svg" : null});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${({imgpreview})=>  imgpreview === null ? "lightgray" : null};
  background-position: center;
  
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  border-radius: 8px;
  
`;
const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  border: 1px solid rgba(0, 0,0,.7);
  padding: 1rem;
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
export default {
  Input,
  Form,
  InputContainer,
  TXTLabel,
  ImageBtn,
  ImagePreview,
  Image,
  ImagePreviewContainer
};
