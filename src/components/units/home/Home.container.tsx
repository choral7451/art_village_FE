import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import HomeUI from "./Home.presenter";
import { FETCH_LECTURE, FETCH_LOGIN_USER } from "./Home.queries";

export default function HomeContainer() {
  const router = useRouter();

  const lecture = useQuery(FETCH_LECTURE);

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return (
    <HomeUI onClickPush={onClickPush} lecture={lecture.data?.fetchLecture} />
  );
}
