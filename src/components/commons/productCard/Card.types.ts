import { MouseEvent } from "react";

export interface ICardUI {
  onClickPush: (e: MouseEvent<HTMLDivElement>) => void;
}
