import { useState } from "react";
import UnitUI from "./Unit.presenter";

export default function UnitContainer() {
  const [nav, setNav] = useState("education");
  const onClickNavBtn = (data: string) => () => {
    setNav(data);
  };

  return <UnitUI nav={nav} onClickNavBtn={onClickNavBtn} />;
}
