import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IAdminLecturerWriteUI {
  modules: any;
  onChangeProfile: (data: string) => void;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  getValues: any;
  profileErr: string;
  onClickRegister: (data: any) => void;
  loading: boolean;
}
