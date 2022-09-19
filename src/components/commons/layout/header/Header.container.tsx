import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AccessTokenState } from "../../../../commons/store";
import { FETCH_LOGIN_USER } from "../../../units/home/Home.queries";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };

  const onClickLogout = () => {
    setAccessToken("");
  };

  const { data } = useQuery(FETCH_LOGIN_USER);
  const user = data?.fetchLoginUser;

  return (
    <HeaderUI
      onClickPush={onClickPush}
      user={user}
      onClickLogout={onClickLogout}
    />
  );
}
