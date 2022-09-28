import LecturerCardUI from "./Presenter";
import { ILecturer } from "./Types";

export default function LecturerCard(props: ILecturer) {
  return (
    <LecturerCardUI
      data={props.data}
      type={props.type}
      change={props.change}
      check={props.check}
    />
  );
}
