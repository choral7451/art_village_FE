import { useRouter } from "next/router";
import { MouseEvent } from "react";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

  const onClickPush = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  return <HeaderUI onClickPush={onClickPush} />;
}
