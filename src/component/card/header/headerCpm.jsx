import styled from "styled-components";

const headerWarper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  gap: 8px;
  width: 100%;
  height: 45px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding-bottom: 8px;
  padding-top: 8px;
  border-radius: 8px;
`;

const iconWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};

  font-size: 20px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const headerTypeWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
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

const headerTitleWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 

  width: 70%;
  height: 38px;

  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
 

  margin: 3px 3px;
  font-family: "TajawalBold";
`;

export default {
  headerWarper,
  iconWarper,
  headerTypeWarper,
  headerTitleWarper,
};
