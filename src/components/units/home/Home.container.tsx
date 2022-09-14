import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import HomeUI from "./Home.presenter";

export default function HomeContainer() {
  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  return <HomeUI onClickPush={onClickPush} />;
}
