import { ChangeEvent } from "react";
import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IAdminCourseWriteUI {
  lectureCount?: string;
  makeLecture?: Number;
  onClickLectureMake?: () => void;
  submitWrite?: (data: any) => void;
  onChangeCategory?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeSubCategory?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeLectureCount?: (e: ChangeEvent<HTMLInputElement>) => void;
  formState: FormState<FieldValues>;
  handleSubmit: any;
  register: any;
  loading: boolean;
  category: { id: number; name: string; subCategory: { name: string }[] }[];
  categoryValue: string;
  subCategoryValue: string;
  subCategoryArr: { name: string }[];
  setValue: any;
}
