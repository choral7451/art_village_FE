import { ChangeEvent } from "react";

export interface IAdminCourseWriteUI {
  lectureCount?: string;
  makeLecture?: Number;
  onClickLectureMake?: () => void;
  onChangeLectureCount?: (e: ChangeEvent<HTMLInputElement>) => void;
}
