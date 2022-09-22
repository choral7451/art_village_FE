import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface ISignupUI {
  onClickSignup: (data: any) => void;
  onClickSendToken: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  emailError: String;
  onClickCheckBoxAll: (e: any) => void;
  onClickCheckBox: (e: any) => void;
  checkedAll: Boolean;
  tokenInput: Boolean;
  onChangeToken: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCheckToken: () => void;
  token: string;
  timerTime: number;
}
