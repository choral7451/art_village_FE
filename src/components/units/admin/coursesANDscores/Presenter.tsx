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
        <S.Btn>글쓰기</S.Btn>
      </S.ContentsTitle>
      <S.RowWrapper>
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
      </S.RowWrapper>
    </S.Contents>
  );
}
