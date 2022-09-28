import { ChangeEvent } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IAdminCourseWriteUI {
  lectureCount?: string;
  makeLecture?: Number;
  onClickLectureMake?: () => void;
  submitWrite: (data: any) => void;
  onChangeCategory?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeSubCategory?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeLectureCount?: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: any;
  isValid: any;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: any;
  loading: boolean;
  category: {
    id: number;
    name: string;
    subCategory: { id: number; name: string }[];
  }[];
  categoryValue: string;
  subCategoryValue: string;
  subCategoryArr: { name: string }[];
  setValue: any;
  onChangeTextArea: (data: string) => void;
  modules: any;
  lecturerSearchFlag: boolean;
  onClickSearch: () => void;
  onChangeLecturerSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (num: string) => () => void;
  search: boolean;
  selectNum: string;
  lecturerInfo: {
    email: string;
    id: number;
    image: string;
    name: string;
    phone: string;
    profile: string;
  }[];
}
