import styled from "styled-components";

const Input = styled.input`
  border: 0.5px solid ${({ theme }) => theme.hrColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: ${({ width }) => width};
  font-family:"TajawalRegular";
  &:focus {
    color: black;
    background-color: white;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: ${({ width }) => width};
  }
`;


const Form = styled.form`
   width:99%;
   overflow:auto
`;
export default {Input,Form}