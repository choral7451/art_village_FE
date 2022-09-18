import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Signup } from "./Signup.queries";
import SignupUI from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignupContainer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");

  const [signup] = useMutation(Signup);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    onClickSendToken();
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickSignup = async () => {
    await signup({
      variables: { email, password, name },
    });
  };

  const onClickSendToken = async () => {
    !email ? setEmailError("이메일을 입력해 주세요.") : setEmailError("");
  };

  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@\w+\.\w+/, "이메일 형식이 맞지 않습니다.")
      .required("이메일을 입력해 주세요"),
    name: yup
      .string()
      .max(7, "이름은 7자를 넘을 수 없습니다.")
      .required("이름을 입력해주세요"),
    password: yup
      .string()
      .max(15, "비밀번호는 15자를 넘을 수 없습니다.")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "영어,숫자,특수문자가 포함되어야 합니다."
      )
      .required("비밀번호를 입력해주세요"),
    passwordCheck: yup
      .string()
      .max(15, "비밀번호는 15자를 넘을 수 없습니다.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호를 다시 입력해주세요"),
  });

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  formState.isValid;
  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSignup={onClickSignup}
      onClickSendToken={onClickSendToken}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      emailError={emailError}
    />
  );
}
