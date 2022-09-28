import { MouseEvent, MouseEventHandler } from "react";

export interface ICard {
  id: number;
  image: string;
  name: string;
  tag?: string;
  title: string;
  onClick: (path: string) => MouseEventHandler<HTMLDivElement>;
}
