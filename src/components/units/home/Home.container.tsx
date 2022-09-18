import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import HomeUI from "./Home.presenter";
import { FETCH_LOGIN_USER } from "./Home.queries";

export default function HomeContainer() {
  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };

  return <HomeUI onClickPush={onClickPush} />;
}
