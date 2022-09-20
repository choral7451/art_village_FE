import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "./Admin.styles";
import { IAdminUI } from "./Admin.types";

export default function AdminUI(props: IAdminUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
      </S.Wrapper>
    </S.Body>
  );
}
