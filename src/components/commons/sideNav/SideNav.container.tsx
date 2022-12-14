import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import SideNavUI from "./SideNav.presenter";
import { ISideNav } from "./SideNav.types";

export default function SideNav(props: ISideNav) {
  const router = useRouter();

  const categroryState: any = {};
  props.sideNavData.dataList.forEach((el) => {
    categroryState[el.id] = false;
  });

  const [categorySelect, setCategorySelect] = useState(categroryState);

  const onClickCategory = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element)
      setCategorySelect({
        ...categorySelect,
        [e.target.id]: !categorySelect[e.target.id],
      });
  };

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return (
    <SideNavUI
      sideNavData={props.sideNavData}
      onClickCategory={onClickCategory}
      categorySelect={categorySelect}
      onClickPush={onClickPush}
    />
  );
}
