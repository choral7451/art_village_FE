import * as S from "./Header.styles";
import { IHeaderUI } from "./Header.types";

export default function HeaderUI(props: IHeaderUI) {
  return (
    <S.Header>
      <S.HeaderTop>
        <S.HeaderTopContents>
          <S.LoginBtn id="/login" onClick={props.onClickPush}>
            로그인
          </S.LoginBtn>
          <S.SignupBtn id="/signup" onClick={props.onClickPush}>
            회원가입
          </S.SignupBtn>
        </S.HeaderTopContents>
      </S.HeaderTop>
      <S.HeaderMid>
        <S.HeaderMidContents>
          <S.Logo id="/" onClick={props.onClickPush}>
            ARTVillage
          </S.Logo>
          <S.Nav>
            <S.NavBtn>강의</S.NavBtn>
            <S.NavBtn>악보</S.NavBtn>
          </S.Nav>
          <S.SearchIcon />
        </S.HeaderMidContents>
      </S.HeaderMid>
      <S.HeaderBottom></S.HeaderBottom>
    </S.Header>
  );
}
