import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CoursesANDScoresUI from "./Presenter";
import { FETCH_LECTURE } from "./Queries";
import { ICoursesAndScores } from "./Types";

export default function CoursesAndScores(props: ICoursesAndScores) {
  const router = useRouter();

  const lecture = useQuery(FETCH_LECTURE);

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return (
    <CoursesANDScoresUI
      path={props.path}
      onClickPush={onClickPush}
      lecture={lecture.data?.fetchLecture}
    />
  );
}
