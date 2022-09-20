import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CheckToken, SendToken, Signup } from "./Signup.queries";
import SignupUI from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function SignupContainer() {
  const router = useRouter();

  const [emailError, setEmailError] = useState("");
  const [checkedAll, setCheckedAll] = useState(false);
  const [tokenInput, setTokenInput] = useState(false);
  const [token, setToken] = useState("");
  const [timerTime, setTimerTime] = useState(180);

  const [signup] = useMutation(Signup);
  const [sendToken] = useMutation(SendToken);
  const [checkToken] = useMutation(CheckToken);

  const onClickSignup = async (data: any) => {
    try {
      await signup({
        variables: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      });
      Modal.success({
        content: "회원가입이 완료되었습니다.",
        onOk() {
          router.push("/login");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@\w+\.\w+/, "이메일 형식이 맞지 않습니다.")
      .required("이메일을 입력해 주세요"),
    name: yup
      .string()
      .max(10, "이름은 10자를 넘을 수 없습니다.")
      .required("이름을 입력해주세요"),
    password: yup
      .string()
      .min(6, "최소 6자 이상 입력해주세요.")
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
    termsAgree: yup.boolean().oneOf([true]).required(),
    termsPrivacy: yup.boolean().oneOf([true]).required(),
    marketingAgreement: yup.boolean(),
    tokenCheck: yup.boolean().oneOf([true]).required(),
  });

  const {
    handleSubmit,
    register,
    formState,
    watch,
    getValues,
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSendToken = async () => {
    try {
      setToken("");
      await sendToken({
        variables: { email: getValues("email") },
      });

      setTokenInput(true);

      Modal.success({
        content: "인증번호가 전송되었습니다.",
        onOk() {
          const timer = setInterval(() => {
            setTimerTime((prev) => {
              prev - 1;
              if (prev <= 0) {
                clearInterval(timer);
                return 180;
              }
              return prev - 1;
            });
          }, 1000);
        },
      });
    } catch (error: any) {
      Modal.error({ content: "이미 존재하는 이메일입니다." });
    }
  };

  const onClickCheckBoxAll = (e: any) => {
    setCheckedAll(e.target.checked);
    if (e.target.checked) {
      setValue("termsAgree", true);
      setValue("termsPrivacy", true);
      setValue("marketingAgreement", true);
      trigger("termsAgree");
      trigger("termsPrivacy");
      trigger("marketingAgreement");
    } else {
      setValue("termsAgree", false);
      setValue("termsPrivacy", false);
      setValue("marketingAgreement", false);
      trigger("termsAgree");
      trigger("termsPrivacy");
      trigger("marketingAgreement");
    }
  };

  const onClickCheckBox = (e: any) => {
    if (
      getValues("termsAgree") ||
      getValues("termsPrivacy") ||
      getValues("marketingAgreement")
    ) {
      setCheckedAll(false);
    }
  };

  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const onClickCheckToken = async () => {
    try {
      const { data } = await checkToken({
        variables: { token },
      });
      if (data.checkToken) {
        Modal.success({
          content: "인증 완료",
          onOk() {
            setValue("tokenCheck", true);
            setTokenInput(false);
            setTimerTime(0);
          },
        });
      }
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <SignupUI
      onClickSignup={onClickSignup}
      onClickSendToken={onClickSendToken}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      emailError={emailError}
      watch={watch}
      onClickCheckBoxAll={onClickCheckBoxAll}
      onClickCheckBox={onClickCheckBox}
      checkedAll={checkedAll}
      tokenInput={tokenInput}
      onChangeToken={onChangeToken}
      onClickCheckToken={onClickCheckToken}
      token={token}
      timerTime={timerTime}
    />
  );
}
