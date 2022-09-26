import { Lecturer } from "../../units/admin/courses/lecturer/list/Types";
import LecturerCardUI from "./Presenter";

export default function LecturerCard(data: { data: Lecturer }) {
  return <LecturerCardUI data={data.data} />;
}
