import { useRouter } from "next/router";
import { MouseEvent } from "react";
import CardUI from "./Card.presenter";

export default function Card() {
  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  return <CardUI onClickPush={onClickPush} />;
}
