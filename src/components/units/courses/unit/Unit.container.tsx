import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FIND_LECTURE } from "./Unit.queries";
import UnitUI from "./Unit.presenter";

export default function UnitContainer() {
  const router = useRouter();

  const { data } = useQuery(FIND_LECTURE, {
    variables: { num: Number(router.query.id) },
  });

  const [nav, setNav] = useState("education");
  const [subTitle, useSubTitle] = useState("강의 소개");
  const [video, setVideo] = useState(data?.findLecture.introduce);
  const onClickNavBtn = (data: string) => () => {
    setNav(data);
  };

  const onChangeVideo = (data: string) => () => {
    setVideo(data);
    window.scrollTo(0, 200);
  };

  return (
    <UnitUI
      nav={nav}
      onClickNavBtn={onClickNavBtn}
      data={data?.findLecture}
      onChangeVideo={onChangeVideo}
      video={video}
      subTitle={subTitle}
    />
  );
}
