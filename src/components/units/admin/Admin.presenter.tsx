import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Admin.styles";
import { IAdminUI } from "./Admin.types";
import CoursesAndScores from "./courses/lecture/list/Container";
import AdminCourseWrite from "./courses/lecture/write/Container";
import AdminLecturerList from "./courses/lecturer/list/Container";
import AdminLecturerWrite from "./courses/lecturer/write/Container";
import AdminMemberCotainer from "./member/Cotainer";

export default function AdminUI(props: IAdminUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
        {props.pathCheck.courses.lecture?.list ||
        props.pathCheck.scores.list ? (
          <CoursesAndScores
            path={props.pathCheck.courses.lecture?.list ? "courses" : "scores"}
          />
        ) : (
          ""
        )}
        {props.pathCheck.courses.lecture?.write ? <AdminCourseWrite /> : null}
        {props.pathCheck.courses.lecturer?.list ? <AdminLecturerList /> : null}
        {props.pathCheck.courses.lecturer?.write ? (
          <AdminLecturerWrite />
        ) : null}
        {props.pathCheck.member?.list ? <AdminMemberCotainer /> : null}
      </S.Wrapper>
    </S.Body>
  );
}
