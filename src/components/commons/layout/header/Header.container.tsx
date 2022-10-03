import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "../../../../commons/store";
import { FETCH_LOGIN_USER } from "../../../units/home/Home.queries";
import HeaderUI from "./Header.presenter";
import { MUTATION_LOGOUT } from "./Header.queries";

export default function Header() {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);
  const [searchState, setSearchState] = useState(false);
  const [logout] = useMutation(MUTATION_LOGOUT);

  const router = useRouter();

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  const onClickLogout = async () => {
    const logoutReq = await logout();
    if (logoutReq) {
      setAccessToken("");
    }
  };

  const { data } = useQuery(FETCH_LOGIN_USER);
  const user = data?.fetchLoginUser;

  const onClickSearch = (btn: string) => () => {
    if (btn === "search") {
      if (!searchState) setSearchState(true);
    } else {
    }

    if (btn === "exit") setSearchState(false);
  };

  return (
    <HeaderUI
      onClickPush={onClickPush}
      user={user}
      onClickLogout={onClickLogout}
      onClickSearch={onClickSearch}
      searchState={searchState}
    />
  );
}
