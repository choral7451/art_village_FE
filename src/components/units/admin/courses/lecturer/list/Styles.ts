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

export const SearchWrapper = styled.form`
  width: 30%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eaeaea;
  border-radius: 30px;
`;

export const SearchIconWrapper = styled.button`
  width: 20%;
`;

export const SearchIcon = styled(SearchOutlined)`
  height: 100%;
  width: 100%;
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`;

export const Btn = styled.button`
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  margin: 0 2%;
  width: 200px;
  font-size: 14px;
  height: fit-content;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;
