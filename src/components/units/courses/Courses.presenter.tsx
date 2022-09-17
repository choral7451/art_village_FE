import Card from "../../commons/productCard/Card.container";
import * as S from "./Courses.styles";

export default function CoursesUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.SideMenu>
          <S.SideMenuAll>전체 강의</S.SideMenuAll>
          <S.SideMenuCategory>
            실용음악
            <S.Arrow />
          </S.SideMenuCategory>
          <S.SideMenuCategory>
            클래식
            <S.Arrow />
          </S.SideMenuCategory>
        </S.SideMenu>
        <S.Contents>
          <S.Category>전체</S.Category>
          <S.CardRow>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </S.CardRow>
        </S.Contents>
      </S.Wrapper>
    </S.Body>
  );
}
