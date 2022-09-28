import styled from "@emotion/styled";
import { Tag } from "antd";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagInput = styled(Tag)`
  margin: 5px 10px;
  padding: 6px 20px;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(321, 63%, 90%);
`;

export const Delete = styled.button`
  :hover {
    font-weight: bold;
  }
`;
