import { ChangeEvent } from "react";

export interface ILoginUI {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}
