import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 24px; */
  /* margin-top: 15px; */
  width: 100%;
  
`;
/* --------------------------- */
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: .5rem;
  border-radius: 8px;
`;
/* --------------------------- */
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
/* --------------------------- */

const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Styleiframe = styled.div``;
/* --------------------------- */
export default {
  Container,
  Content,
  VideoWrapper,
  Hr,
  Styleiframe,
};
