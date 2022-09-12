import * as S from "./Header.styles";

export default function HeaderUI() {
  return (
    <S.Header>
      <S.HeaderTop>
        <S.HeaderTopContents>
          <S.LoginBtn>로그인</S.LoginBtn>
          <S.SignupBtn>회원가입</S.SignupBtn>
        </S.HeaderTopContents>
      </S.HeaderTop>
      <S.HeaderMid>
        <S.HeaderMidContents>
          <S.Logo>ARTVillage</S.Logo>
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
