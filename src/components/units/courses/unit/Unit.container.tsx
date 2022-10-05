import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FIND_LECTURE } from "./Unit.queries";
import UnitUI from "./Unit.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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

  const schema = yup.object({
    review: yup.string(),
    star: yup.number(),
  });

  const {
    handleSubmit,
    register,
    formState,
    watch,
    getValues,
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickStar = (value: number) => {
    setValue("star", value);
  };

  const onClickReview = (data: any) => {
    console.log(data);
  };

  return (
    <UnitUI
      nav={nav}
      onClickStar={onClickStar}
      onClickReview={onClickReview}
      handleSubmit={handleSubmit}
      register={register}
      onClickNavBtn={onClickNavBtn}
      data={data?.findLecture}
      onChangeVideo={onChangeVideo}
      video={video}
      subTitle={subTitle}
    />
  );
}
