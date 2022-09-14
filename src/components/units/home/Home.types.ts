import { MouseEvent } from "react";

export interface IHomeUI {
  onClickPush: (e: MouseEvent<HTMLDivElement>) => void;
}
