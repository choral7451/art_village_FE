import { useState } from "react";
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
            style={
              /^\w+@\w+\.\w+/.test(props.watch("email"))
                ? {
                    backgroundColor: props.isHovering ? "white" : "#427ed1",
                    color: props.isHovering ? "black" : "white",
                  }
                : {
                    backgroundColor: "white",
                    color: "black",
                  }
            }
            onMouseEnter={props.handleMouseEnter}
            onMouseLeave={props.handleMouseLeave}
            onClick={props.onClickSendToken}
          >
            인증번호 전송
          </S.CheckEmail>
        </S.EmailWrapper>
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
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
        <S.SignupBtn>회원가입</S.SignupBtn>
      </S.Wrapper>
    </S.Body>
  );
}
