import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IUnitUI {
  nav: string;
  video: string;
  subTitle: string;
  onClickStar: (value: number) => void;
  onClickReview: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickNavBtn: (data: string) => () => void;
  onChangeVideo: (data: string) => () => void;
  data: {
    title: string;
    introduce: string;
    tag: string;
    description: string;
    lecturer: {
      name: string;
    };
    category: {
      name: string;
    };
    subCategory: {
      name: string;
    };
    video: {
      index: number;
      title: string;
      url: string;
    };
  };
}
