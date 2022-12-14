import { useMutation } from "@apollo/client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import LoginUI from "./Login.presenter";
import { Login } from "./Login.queries";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "../../../commons/store";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function LoginContainer() {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(Login);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginReq = async () => {
    try {
      const { data } = await login({
        variables: { email, password },
      });

      setAccessToken(data.login);

      router.push("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickLogin = async () => {
    loginReq();
  };
  const onKeyUp = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loginReq();
    }
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onKeyUp={onKeyUp}
    />
  );
}
