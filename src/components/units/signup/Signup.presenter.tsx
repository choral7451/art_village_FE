import InputComponent from "../../commons/inputs";
import * as S from "./Signup.styles";
import { ISignupUI } from "./Signup.types";

export default function SignupUI(props: ISignupUI) {
  return (
    <S.Body>
      <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignup)}>
        <S.Title>회원가입</S.Title>
        <S.EmailWrapper>
          <S.EamilInputWrapper>
            <InputComponent
              placeholder="이메일을 입력해주세요."
              register={props.register("email")}
            />
          </S.EamilInputWrapper>
          <S.CheckEmail
            disabled={!/^\w+@\w+\.\w+/.test(props.watch("email"))}
            onClick={props.onClickSendToken}
            type="button"
          >
            인증번호 전송
          </S.CheckEmail>
        </S.EmailWrapper>
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
        <S.EmailWrapper
          style={
            props.tokenInput
              ? { margin: "30px 0", display: "" }
              : { display: "none" }
          }
        >
          <S.EamilInputWrapper>
            <InputComponent
              placeholder="인증번호를 입력해주세요."
              onChange={props.onChangeToken}
              value={props.token}
            />
          </S.EamilInputWrapper>
          <S.Timer>{props.timerTime}</S.Timer>
          <S.CheckToken type="button" onClick={props.onClickCheckToken}>
            인증
          </S.CheckToken>
        </S.EmailWrapper>
        <S.InputFullWrapper>
          <InputComponent
            placeholder="이름을 입력해주세요."
            register={props.register("name")}
          />
        </S.InputFullWrapper>
        <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
        <S.InputFullWrapper>
          <InputComponent
            placeholder="비밀번호를 입력해주세요."
            type={"password"}
            register={props.register("password")}
          />
        </S.InputFullWrapper>
        <S.ErrorMessage>
          {props.formState.errors.password?.message}
        </S.ErrorMessage>
        <S.InputFullWrapper>
          <InputComponent
            placeholder="비밀번호를 다시 입력해주세요."
            type={"password"}
            register={props.register("passwordCheck")}
          />
        </S.InputFullWrapper>
        <S.ErrorMessage>
          {props.formState.errors.passwordCheck?.message}
        </S.ErrorMessage>
        <S.AgreeWrapper style={{ marginTop: "20px" }}>
          <S.CheckBox
            id="checkAll"
            type={"checkbox"}
            onChange={props.onClickCheckBoxAll}
            checked={props.checkedAll ? true : false}
          />
          <S.AgreeTitle>전체 동의</S.AgreeTitle>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox
            type={"checkbox"}
            {...props.register("termsAgree")}
            onClick={props.onClickCheckBox}
          />
          <S.AgreeTitle>(필수) 이용약관 동의</S.AgreeTitle>
          <S.Arrow>{">"}</S.Arrow>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox
            type={"checkbox"}
            {...props.register("termsPrivacy")}
            onClick={props.onClickCheckBox}
          />
          <S.AgreeTitle>(필수) 개인정보 처리방침 동의</S.AgreeTitle>
          <S.Arrow>{">"}</S.Arrow>
        </S.AgreeWrapper>
        <S.AgreeWrapper>
          <S.CheckBox
            type={"checkbox"}
            {...props.register("marketingAgreement")}
            onClick={props.onClickCheckBox}
          />
          <S.AgreeTitle>(선택) 마케팅 수신 동의</S.AgreeTitle>
        </S.AgreeWrapper>
        <S.SignupBtn
          type="submit"
          value="회원가입"
          disabled={!props.formState.isDirty || !props.formState.isValid}
        />
      </S.Wrapper>
    </S.Body>
  );
}
