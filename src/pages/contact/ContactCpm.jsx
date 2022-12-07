import styled from "styled-components";

/* ------------------------------------- */
const BodyWarper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 90%;
  height: calc(100vh - 120px);
  margin: auto;
  color: ${({ theme }) => theme.text};
  gap:1rem;
  overflow: auto;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const LeftArea = styled.div`
display: flex;
flex-direction: column;
  gap: 10px;
`;
const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
`;
/* ------------------------------------- */
const HeroImageWarper = styled.div`
  max-width: 80%;
  max-height: 80%;
  margin: auto;
`;
/* ------------------------------------- */
const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;
/* ------------------------------------- */
const Txt = styled.p`
display: flex;
align-items: center;
  font-family: "CairoBold";
  font-size: .9rem;
  /* padding: 1rem; */
  color: ${({ theme }) => theme.text};
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
/* ------------------------------------- */
const Btn = styled.button`
  outline: none;
  padding: 0.2rem 1rem;
  min-width: 5rem;
  font-family: "CairoBold";
  border-radius: 8px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
/* ------------------------------------- */
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>direction };;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.nafbar};
  border-radius: 4px;
  margin-bottom: 1rem;
`;
/* ------------------------------------- */
export default {
  BodyWarper,
  Image,
  HeroImageWarper,
  Txt,
  Btn,
  FlexDiv,
  LeftArea,
  RightArea,
};
