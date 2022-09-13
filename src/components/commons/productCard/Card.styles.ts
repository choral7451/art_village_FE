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
  height: 50%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 20px;
  width: 100%;
  height: 20%;
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

export const Tag = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  height: 10%;
  padding: 0 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: hsl(321, 63%, 90%);
`;
