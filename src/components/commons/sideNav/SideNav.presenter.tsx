import * as S from "./SideNav.styles";
import { ISideNav } from "./SideNav.types";
import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";

export default function SideNavUI(props: ISideNav) {
  const contents = props.sideNavData.dataList.map((el) => {
    const subData = el.subDataList.map((element) => {
      return (
        <S.SideMenuSubCategory
          key={uuidv4()}
          style={
            props.categorySelect[el.id]
              ? {
                  display: "flex",
                }
              : {}
          }
          onClick={
            props.onClickPush ? props.onClickPush(element.router) : () => ""
          }
        >
          {element.data}
        </S.SideMenuSubCategory>
      );
    });

    return (
      <Fragment key={el.id}>
        <S.SideMenuCategory id={el.id} onClick={props.onClickCategory}>
          {el.data}
          <S.Arrow
            style={
              !props.categorySelect[el.id] ? { animation: "1s 1 forwards" } : {}
            }
          />
        </S.SideMenuCategory>
        {subData}
      </Fragment>
    );
  });

  return (
    <S.SideMenu>
      <S.SideMenuAll>{props.sideNavData.title}</S.SideMenuAll>
      {contents}
    </S.SideMenu>
  );
}
