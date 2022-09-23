import { useRouter } from "next/router";
import CoursesANDScoresUI from "./Presenter";
import { ICoursesAndScores } from "./Types";

export default function CoursesAndScores(props: ICoursesAndScores) {
  const router = useRouter();

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return <CoursesANDScoresUI path={props.path} onClickPush={onClickPush} />;
}
