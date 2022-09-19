import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  width: 100%;
`;

export const Wrapper = styled.form`
  width: 30%;
`;

export const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const EamilInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 100%;
  margin-right: 5%;
  border-radius: 15px;
  border: 1px solid #32c2b9;
`;

export const CheckEmail = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 25%;
  font-weight: bold;
  font-size: 16px;
  height: 100%;
  border: 1px solid #32c2b9;
  cursor: pointer;
  color: white;
  background-color: #427ed1;
  :disabled {
    color: black;
    background-color: white;
  }
  :hover {
    color: black;
    background-color: white;
  }
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11%;
  border-radius: 15px;
  font-size: 16px;
  height: 100%;
  border: 1px solid #32c2b9;
  color: black;
`;

export const CheckToken = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 11%;
  font-weight: bold;
  font-size: 16px;
  height: 100%;
  border: 1px solid #32c2b9;
  cursor: pointer;
  color: white;
  margin-left: 3%;
  background-color: #427ed1;
  :disabled {
    color: black;
    background-color: white;
  }
  :hover {
    color: black;
    background-color: white;
  }
`;

export const InputFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
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

export const AgreeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #427ed1;
`;

export const AgreeTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  font-weight: bold;
  font-size: 16px;
`;

export const Arrow = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const SignupBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #32c2b9;
  margin: 30px 0;
  color: black;
  background-color: white;
  :disabled {
    color: white;
    background-color: #427ed1;
  }
  :hover {
    color: black;
    background-color: white;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;
  margin: 10px 0 10px 10px;
  width: 100%;
`;
