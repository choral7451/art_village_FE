import LecturerCard from "../../../../../commons/lecturerCard/Container";
import * as S from "./Styles";
import { IAdminLecturerListUI } from "./Types";
import { v4 as uuidv4 } from "uuid";

export default function AdminLecturerListUI(props: IAdminLecturerListUI) {
  let list;
  if (props.search) {
    list = props.lecturer?.map((el) => {
      return <LecturerCard key={uuidv4()} data={el} />;
    });
  } else {
    list = props.lecturers?.map((el) => {
      return <LecturerCard key={uuidv4()} data={el} />;
    });
  }

  return (
    <S.Contents>
      <S.ContentsTitle>
        <S.Title>강사</S.Title>
        <S.SearchWrapper onSubmit={props.handleSubmit(props.onSearch)}>
          <S.SearchIconWrapper>
            <S.SearchIcon />
          </S.SearchIconWrapper>
          <S.SearchInput
            placeholder="이름을 입력해주세요."
            {...props.register("search")}
            spellCheck="false"
          />
        </S.SearchWrapper>
        <S.BtnWrapper>
          <S.Btn onClick={props.onClickPush("/admin/courses/lecturer/write")}>
            강사 등록
          </S.Btn>
        </S.BtnWrapper>
      </S.ContentsTitle>
      {list}
    </S.Contents>
  );
}
