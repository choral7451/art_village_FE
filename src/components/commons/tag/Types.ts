import { MouseEvent } from "react";

export interface ITag {
  text: string;
  click?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: "view" | "delete";
}
