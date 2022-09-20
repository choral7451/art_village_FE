import * as S from "./Header.styles";
import { IHeaderUI } from "./Header.types";

export default function HeaderUI(props: IHeaderUI) {
  return (
    <S.Header>
      <S.HeaderTop>
        <S.HeaderTopContents>
          {props.user ? (
            <>
              {props.user.email === "admin" ? (
                <>
                  <S.SettingIcon onClick={props.onClickPush("/admin")} />
                </>
              ) : (
                <></>
              )}
              <S.LoginUserIncon />
              <S.LoginUserName>{props.user.name}</S.LoginUserName>
              <S.LoginUserText>님 환영합니다.</S.LoginUserText>
              <S.LogoutBtn onClick={props.onClickLogout}>로그아웃</S.LogoutBtn>
            </>
          ) : (
            <>
              <S.LoginBtn onClick={props.onClickPush("/login")}>
                로그인
              </S.LoginBtn>
              <S.SignupBtn onClick={props.onClickPush("/signup")}>
                회원가입
              </S.SignupBtn>
            </>
          )}
        </S.HeaderTopContents>
      </S.HeaderTop>
      <S.HeaderMid>
        <S.HeaderMidContents>
          <S.LogoWrapper
            style={!props.searchState ? { width: "60%" } : { width: "40%" }}
          >
            <S.Logo onClick={props.onClickPush("/")}>ARTVillage</S.Logo>
          </S.LogoWrapper>
          <S.Nav>
            <S.NavBtn onClick={props.onClickPush("/courses")}>강의</S.NavBtn>
            <S.NavBtn onClick={props.onClickPush("/scores")}>악보</S.NavBtn>
            <S.NavBtn onClick={props.onClickPush("/notice")}>공지</S.NavBtn>
          </S.Nav>
          <S.SearchWrapper
            style={
              !props.searchState
                ? { border: "none", width: "5%", animation: "2s 1 forwards" }
                : {}
            }
          >
            <S.SearchIcon
              onClick={props.onClickSearch("search")}
              style={!props.searchState ? { animation: "2s 1 forwards" } : {}}
            />
            <S.SearchInput
              spellCheck="false"
              placeholder="검색어를 입력해주세요."
              style={
                !props.searchState
                  ? { display: "none", animation: "2s 1 forwards" }
                  : {}
              }
            />
            <S.SearchExitBtn
              onClick={props.onClickSearch("exit")}
              style={
                !props.searchState
                  ? { display: "none", animation: "2s 1 forwards" }
                  : {}
              }
            />
          </S.SearchWrapper>
        </S.HeaderMidContents>
      </S.HeaderMid>
      <S.HeaderBottom></S.HeaderBottom>
    </S.Header>
  );
}
