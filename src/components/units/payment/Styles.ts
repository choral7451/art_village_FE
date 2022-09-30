import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 40%;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export const PayBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;
  height: 200px;
  width: 100%;
  border: 2px solid #427ed1;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #427ed1;
  }
`;

export const PayText1 = styled.div`
  padding-right: 70px;
`;

export const PayText2 = styled.div`
  font-weight: bold;
`;
