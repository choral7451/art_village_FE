import { MouseEvent } from "react";

interface IUser {
  name: string;
  email: string;
}
export interface IHeaderUI {
  onClickPush: (e: MouseEvent<HTMLDivElement>) => void;
  user: IUser;
}
