import * as S from "./Login.styles";
import { ILoginUI } from "./Login.types";

export default function LoginUI(props: ILoginUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>로그인</S.Title>
        <S.InputFullWrapper>
          <S.InputFull
            placeholder="이메일"
            onChange={props.onChangeEmail}
            onKeyUp={props.onKeyUp}
          />
        </S.InputFullWrapper>
        <S.InputFullWrapper>
          <S.InputFull
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            type="password"
            onKeyUp={props.onKeyUp}
          />
        </S.InputFullWrapper>
        <S.findPassword>비밀번호 찾기</S.findPassword>
        <S.Btn onClick={props.onClickLogin}>로그인</S.Btn>
        <S.Naver>
          <S.BtnImg src={"/images/login/naver.svg"} />
          <S.BtnText>네이버 로그인</S.BtnText>
        </S.Naver>
        <S.Kakao>
          <S.BtnImg src={"/images/login/kakao.svg"} />
          <S.BtnText>카카오 로그인</S.BtnText>
        </S.Kakao>
        <S.Google>
          <S.BtnImg src={"/images/login/google.svg"} />
          <S.BtnText>구글 로그인</S.BtnText>
        </S.Google>
        <S.PushSignupWrapper>
          아직 계정이 없으신가요?<S.PushSignup>회원가입</S.PushSignup>
        </S.PushSignupWrapper>
      </S.Wrapper>
    </S.Body>
  );
}
