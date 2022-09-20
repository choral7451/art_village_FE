import Card from "../../commons/productCard/Card.container";
import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Courses.styles";
import { ICoursesUI } from "./Courses.types";

export default function CoursesUI(props: ICoursesUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
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
