import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Admin.styles";
import { IAdminUI } from "./Admin.types";
import CoursesAndScores from "./coursesANDscores/Container";

export default function AdminUI(props: IAdminUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
        {props.pathCheck.courses || props.pathCheck.scores ? (
          <CoursesAndScores
            path={props.pathCheck.courses ? "courses" : "scores"}
          />
        ) : (
          ""
        )}
      </S.Wrapper>
    </S.Body>
  );
}
