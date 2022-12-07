import styled from "styled-components";
const Hr = styled.hr`
margin: 5px 0px;
border: .5px solid ${({ theme }) => theme.hrColor};;
width: 80%;
`;

export default {
    Hr
}