import { MouseEvent } from "react";

export interface ISideNav {
  sideNavData: {
    title: string;
    dataList: {
      id: string;
      data: string;
      subDataList: { data: string; router: string }[];
    }[];
  };
  categorySelect?: any;
  onClickCategory?: (e: MouseEvent<HTMLDivElement>) => void;
  onClickPush?: (path: string) => () => void;
}
