import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Contents = styled.div`
  width: 100%;
  margin: 0 40px;
  padding-bottom: 80px;
  border-bottom: 2px solid #e4e4e4;
`;

export const ContentsTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e4e4e4;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0 20px 40px;
  width: 15%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  height: 100px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid #e4e4e4;
`;

export const UserWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  font-size: 18px;
  border-bottom: 1px solid #e4e4e4;
`;

export const ID = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Email = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const Membership = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupDate = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eaeaea;
  border-radius: 30px;
`;

export const SearchIcon = styled(SearchOutlined)`
  width: 20%;
  cursor: pointer;
  color: #2b2e32;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  width: 70%;
  margin-right: 10%;
  border: none;
  :focus {
    outline: none;
  }
`;
