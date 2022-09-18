import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignupUI {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSignup: () => void;
  onClickSendToken: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  emailError: String;
}
