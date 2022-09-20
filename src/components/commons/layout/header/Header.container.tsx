import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AccessTokenState } from "../../../../commons/store";
import { FETCH_LOGIN_USER } from "../../../units/home/Home.queries";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);
  const [searchState, setSearchState] = useState(false);

  const router = useRouter();

  const onClickPush = (url: string) => () => {
    router.push(url);
  };

  const onClickLogout = () => {
    setAccessToken("");
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
