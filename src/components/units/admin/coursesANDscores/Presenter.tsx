import * as S from "./Styles";
import { ICoursesAndScoresUI } from "./Types";

export default function CoursesANDScoresUI(props: ICoursesAndScoresUI) {
  return (
    <S.Contents>
      <S.ContentsTitle>
        {props.path === "courses" ? (
          <S.Title>강의</S.Title>
        ) : (
          <S.Title>악보</S.Title>
        )}
      </S.ContentsTitle>
      <S.HeaderWrapper>
        <S.ID>번호</S.ID>
        <S.CategoryWrapper>분류</S.CategoryWrapper>
        <S.ItemTitle>제목</S.ItemTitle>
        <S.ItemWriter>이름</S.ItemWriter>
        <S.ItemBtnWrapper>
          {props.path === "courses" ? (
            <S.Btn onClick={props.onClickPush("/admin/courses/write")}>
              강의 등록
            </S.Btn>
          ) : (
            <S.Btn onClick={props.onClickPush("/admin/scores/write")}>
              악보 등록
            </S.Btn>
          )}
        </S.ItemBtnWrapper>
      </S.HeaderWrapper>
      <S.ItemWrapper>
        <S.ID>1</S.ID>
        <S.CategoryWrapper>
          <S.Category>실용음악</S.Category>
          <S.SubCategory>드럼</S.SubCategory>
        </S.CategoryWrapper>
        <S.ItemTitle>드럼 초보 탈출기</S.ItemTitle>
        <S.ItemWriter>최성수</S.ItemWriter>
        <S.ItemBtnWrapper>
          <S.Btn>수정</S.Btn>
          <S.Btn>삭제</S.Btn>
        </S.ItemBtnWrapper>
      </S.ItemWrapper>
    </S.Contents>
  );
}
