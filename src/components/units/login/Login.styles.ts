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
  width: 20%;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;

export const InputFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #32c2b9;
  margin: 15px 0;
`;

export const InputFull = styled.input`
  width: 93%;
  height: 100%;
  font-size: 16px;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #32c2b9;
  }
`;

export const findPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  cursor: pointer;
  color: #32c2b9;
  padding-bottom: 20px;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #32c2b9;
  margin: 20px 0;
  font-weight: bold;
  :hover {
    color: white;
    background-color: #427ed1;
  }
`;

export const Naver = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  border-radius: 15px;
  border: none;
  color: white;
  background-color: rgb(3, 199, 90);
  box-shadow: rgb(228 228 228) 0px 1px 1px 1px;
  margin: 20px 0;
`;

export const Kakao = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: rgb(254, 229, 0);
  box-shadow: rgb(228 228 228) 0px 1px 1px 1px;
  margin: 20px 0;
`;

export const Google = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  border-radius: 15px;
  border: none;
  box-shadow: rgb(228 228 228) 0px 1px 1px 1px;
  margin: 20px 0;
`;

export const BtnImg = styled.img`
  position: absolute;
  margin-left: 20px;
  height: 40px;
`;

export const BtnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PushSignupWrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #32c2b9;
`;
export const PushSignup = styled.div`
  padding-left: 20px;
  color: #32c2b9;
  text-decoration: underline;
  cursor: pointer;
`;
