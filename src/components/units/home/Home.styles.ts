import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 70%;
`;

export const SubTitle = styled.div`
  width: fit-content;
  margin-top: 40px;
  font-weight: bold;
  font-size: 26px;
  cursor: pointer;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
`;

export const MembershipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
`;

export const MembershipBtn = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 10px 80px;
  width: fit-content;
  border-radius: 30px;
  color: white;
  background-color: #427ed1;
  cursor: pointer;
  :hover {
    color: black;
    background-color: white;
    border: 1px solid #427ed1;
  }
`;
