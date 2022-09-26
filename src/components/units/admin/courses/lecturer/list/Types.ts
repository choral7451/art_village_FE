import { ChangeEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface Lecturer {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  profile: string;
}

export interface IAdminLecturerListUI {
  search: boolean;
  onSearch: (value: any) => void;
  onClickPush: (path: string) => () => void;
  lecturers: Lecturer[];
  lecturer: Lecturer | string;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
