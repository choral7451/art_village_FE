import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import AdminCourseWriteUI from "./Presenter";

export default function AdminCourseWrite() {
  const [lectureCount, setLectureCount] = useState("");
  const [makeLecture, setMakeLecture] = useState(0);

  const onChangeLectureCount = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureCount(e.target.value);
  };

  const onClickLectureMake = () => {
    if (!isNaN(Number(lectureCount))) {
      setMakeLecture(Number(lectureCount));
      Modal.success({ content: `강의 ${lectureCount}개가 생성되었습니다.` });
    } else {
      Modal.error({ content: "숫자를 입력해주세요." });
      setLectureCount("");
    }
  };

  return (
    <AdminCourseWriteUI
      lectureCount={lectureCount}
      makeLecture={makeLecture}
      onClickLectureMake={onClickLectureMake}
      onChangeLectureCount={onChangeLectureCount}
    />
  );
}
