import CoursesANDScoresUI from "./Presenter";
import { ICoursesAndScores } from "./Types";

export default function CoursesAndScores(props: ICoursesAndScores) {
  console.log(props.path);
  return <CoursesANDScoresUI path={props.path} />;
}
