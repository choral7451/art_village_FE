import * as S from "./Signup.styles";
import { ISignupUI } from "./Signup.types";

export default function SignupUI(props: ISignupUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.EmailWrapper>
          <S.EamilInputWrapper>
            <S.EmailInput
              placeholder="이메일을 입력해주세요."
              onChange={props.onChangeEmail}
            />
          </S.EamilInputWrapper>
          <S.CheckEmail>인증번호 전송</S.CheckEmail>
        </S.EmailWrapper>
        <S.InputFullWrapper>
          <S.InputFull
            placeholder="이름을 입력해주세요."
            onChange={props.onChangeName}
          />
        </S.InputFullWrapper>
        <S.InputFullWrapper>
          <S.InputFull
            placeholder="비밀번호를 입력해주세요."
            type={"password"}
            onChange={props.onChangePassword}
          />
        </S.InputFullWrapper>
        <S.InputFullWrapper>
          <S.InputFull
            placeholder="비밀번호를 다시 입력해주세요."
            type={"password"}
          />
        </S.InputFullWrapper>
        <S.AgreeWrapper>
          <S.CheckBox type={"checkbox"} />
          <S.AgreeTitle>전체 동의</S.AgreeTitle>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox type={"checkbox"} />
          <S.AgreeTitle>(필수) 이용약관 동의</S.AgreeTitle>
          <S.Arrow>{">"}</S.Arrow>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox type={"checkbox"} />
          <S.AgreeTitle>(필수) 개인정보 처리방침 동의</S.AgreeTitle>
          <S.Arrow>{">"}</S.Arrow>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox type={"checkbox"} />
          <S.AgreeTitle>(선택) 마케팅 수신 동의</S.AgreeTitle>
        </S.AgreeWrapper>
        <S.SignupBtn onClick={props.onClickSignup}>회원가입</S.SignupBtn>
      </S.Wrapper>
    </S.Body>
  );
}
