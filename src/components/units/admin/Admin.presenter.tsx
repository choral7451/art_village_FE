import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Admin.styles";
import { IAdminUI } from "./Admin.types";
import CoursesAndScores from "./coursesANDscores/Container";
import AdminCourseWrite from "./coursesANDscores/courseWrite/Container";
import AdminCourseWriteUI from "./coursesANDscores/courseWrite/Presenter";
import AdminMemberCotainer from "./member/Cotainer";

export default function AdminUI(props: IAdminUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
        {props.pathCheck.courses.list || props.pathCheck.scores.list ? (
          <CoursesAndScores
            path={props.pathCheck.courses.list ? "courses" : "scores"}
          />
        ) : (
          ""
        )}
        {props.pathCheck.courses.write ? <AdminCourseWrite /> : ""}
        {props.pathCheck.member ? <AdminMemberCotainer /> : ""}
      </S.Wrapper>
    </S.Body>
  );
}
