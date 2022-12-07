import styled from "styled-components";
import { Link } from "react-router-dom";

const BodyWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 100%;
  height: 300px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
/* -------------------------------------- */
const IdLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
`;
/* -------------------------------------- */
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
`;
/* -------------------------------------- */
const imageWarper = styled.div`
  min-width: 300px;
  min-height: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg};
`;
/* -------------------------------------- */
const subTitleWarper = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  padding: 1em;
  overflow: auto;
  word-wrap: break-word;
  font-family: "TajawalRegular";
`;
/* -------------------------------------- */
export default {
  BodyWarper,
  Image,
  imageWarper,
  subTitleWarper,
  IdLink,
};
