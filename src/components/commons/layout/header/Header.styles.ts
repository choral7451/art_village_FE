import styled from "@emotion/styled";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

export const Header = styled.div`
  width: 100vw;
  height: 240px;

  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTopContents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 65%;
`;

export const LoginBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 6px 20px;
  margin-right: 20px;
  border: 1px solid #427ed1;
  border-radius: 10px;
  :hover {
    background-color: #427ed1;
    color: white;
  }
`;

export const SignupBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 6px 20px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #427ed1;
  color: white;
  background-color: #427ed1;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const HeaderMid = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #eaeaea;
  border-bottom: 2px solid #eaeaea;
`;

export const HeaderMidContents = styled.div`
  display: flex;
  height: 100%;
  width: 65%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 60%;
`;

export const Logo = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: #2b2e32;
  font-size: 40px;
  height: fit-content;
  width: fit-content;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  padding: 0 20px;
  width: 30%;
`;

export const NavBtn = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 1.3rem;
  :hover {
    color: #427ed1;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  color: #2b2e32;
  font-size: 1.3rem;
  width: 5%;
  :hover {
    color: #427ed1;
  }
`;

export const HeaderBottom = styled.div`
  width: 100%;
  height: 25%;
`;
