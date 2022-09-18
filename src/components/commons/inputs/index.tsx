import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInputProps {
  placeholder: string | undefined;
  disabled?: boolean;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: object;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Input = styled.input`
  width: 90%;
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

export default function InputComponent(props: IInputProps) {
  return (
    <Input
      placeholder={props?.placeholder}
      onChange={props?.onChange}
      disabled={props?.disabled}
      type={props?.type}
      readOnly={props?.readOnly}
      defaultValue={props?.defaultValue}
      {...props?.register}
    ></Input>
  );
}
