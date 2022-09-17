import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
`;

export const SideMenu = styled.div`
  width: 20%;
  background-color: rgb(248, 248, 248);
  border: 2px solid #e4e4e4;
  color: #595959;
  height: fit-content;
`;

export const SideMenuAll = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const SideMenuCategory = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  border-top: 2px solid #e4e4e4;
  cursor: pointer;
`;

export const Arrow = styled(RightOutlined)``;

export const Contents = styled.div`
  width: 80%;

  padding: 0 40px;
`;
export const Category = styled.div`
  font-size: 36px;
  font-weight: bold;
  border-bottom: 2px solid #e4e4e4;
  padding: 20px 20px 20px 40px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
`;
