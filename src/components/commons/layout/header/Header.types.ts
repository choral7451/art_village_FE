import { MouseEvent } from "react";

interface IUser {
  name: string;
  email: string;
}
export interface IHeaderUI {
  onClickPush: (url: string) => () => void;
  onClickLogout: () => void;
  onClickSearch: (btn: string) => () => void;
  user: IUser;
  searchState: Boolean;
}
