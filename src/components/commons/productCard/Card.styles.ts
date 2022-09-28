import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  height: 90%;
  width: 19%;
  cursor: pointer;
  font-weight: bold;
  :hover {
    border-radius: 10px;
    background-color: rgb(248, 248, 248);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 40%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 20px;
  width: 100%;
  height: 25%;
`;

export const Name = styled.div`
  font-size: 16px;
  margin-left: 5px;
  color: #7d7d7d;
  width: 100%;
  height: 10%;
`;

export const RateWrapper = styled.div`
  height: 10%;
  margin-left: 5px;
`;

export const Star = styled(Rate)`
  width: 100%;
  height: 100%;
`;

export const TagWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;
