import Card from "../../commons/productCard/Card.container";
import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Courses.styles";
import { ICoursesUI } from "./Courses.types";
import { v4 as uuidv4 } from "uuid";

export default function CoursesUI(props: ICoursesUI) {
  const card = props.lecture?.map((el) => {
    return (
      <Card
        key={uuidv4()}
        id={el.id}
        image={el.image}
        tag={el.tag}
        name={el.lecturer.name}
        title={el.title}
        onClick={props.onClickPush}
      />
    );
  });

  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
        <S.Contents>
          <S.Category>전체</S.Category>
          <S.CardRow>{card}</S.CardRow>
        </S.Contents>
      </S.Wrapper>
    </S.Body>
  );
}
