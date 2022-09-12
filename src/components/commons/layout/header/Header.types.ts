import { MouseEvent } from "react";

export interface IHeaderUI {
  onClickPush: (e: MouseEvent<HTMLDivElement>) => void;
}
