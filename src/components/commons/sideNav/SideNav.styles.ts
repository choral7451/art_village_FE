import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";

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
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  border-top: 2px solid #e4e4e4;
  cursor: pointer;
`;

export const Rotate = keyframes`
  0% {    
    transform-origin: 50% 50%;
    transform: rotate(0deg);
  }
  100% {  
    transform-origin: 50% 50%;
    transform: rotate(90deg);
  }
`;

export const Arrow = styled(RightOutlined)`
  height: fit-content;
  margin-right: 20px;
  animation: ${Rotate} 0.3s 1 forwards;
`;

export const SideMenuSubCategory = styled.div`
  width: 100%;
  display: none;
  padding: 10px 0;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  border-top: 2px solid #e4e4e4;
  cursor: pointer;
  background-color: white;
`;
