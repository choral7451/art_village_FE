import * as S from "./Styles";
import { ICoursesAndScoresUI } from "./Types";
import { v4 as uuidv4 } from "uuid";

export default function CoursesANDScoresUI(props: ICoursesAndScoresUI) {
  const data = props.lecture?.map((el) => {
    return (
      <S.ItemWrapper key={uuidv4()}>
        <S.ID>{el.id}</S.ID>
        <S.CategoryWrapper>
          <S.Category>{el.category.name}</S.Category>
          <S.SubCategory>{el.subCategory.name}</S.SubCategory>
        </S.CategoryWrapper>
        <S.ItemTitle>{el.title}</S.ItemTitle>
        <S.ItemWriter>{el.lecturer.name}</S.ItemWriter>
        <S.ItemBtnWrapper>
          <S.Btn>수정</S.Btn>
          <S.Btn>삭제</S.Btn>
        </S.ItemBtnWrapper>
      </S.ItemWrapper>
    );
  });

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
            <S.Btn onClick={props.onClickPush("/admin/courses/lecture/write")}>
              강의 등록
            </S.Btn>
          ) : (
            <S.Btn onClick={props.onClickPush("/admin/scores/write")}>
              악보 등록
            </S.Btn>
          )}
        </S.ItemBtnWrapper>
      </S.HeaderWrapper>
      {props.path === "courses" ? data : ""}
    </S.Contents>
  );
}
