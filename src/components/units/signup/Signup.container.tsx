import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Signup } from "./Signup.queries";
import SignupUI from "./Signup.presenter";

export default function SignupContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [signup] = useMutation(Signup);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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

  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSignup={onClickSignup}
    />
  );
}
