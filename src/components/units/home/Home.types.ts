import { MouseEvent } from "react";

export interface IHomeUI {
  onClickPush: (path: string) => () => void;
  lecture: {
    image: string;
    title: string;
    lecturer: {
      name: string;
    };
    tag: string;
  };
}
