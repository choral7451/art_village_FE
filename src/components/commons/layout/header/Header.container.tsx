import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import { FETCH_LOGIN_USER } from "../../../units/home/Home.queries";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };

  const { data } = useQuery(FETCH_LOGIN_USER);
  const user = data?.fetchLoginUser;

  return <HeaderUI onClickPush={onClickPush} user={user} />;
}
