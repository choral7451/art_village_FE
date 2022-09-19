import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface ISignupUI {
  onClickSignup: () => void;
  onClickSendToken: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  emailError: String;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHovering: Boolean;
}
