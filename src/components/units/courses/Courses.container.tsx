import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CoursesUI from "./Courses.presenter";
import { FETCH_LECTURE } from "./Courses.queries";

export default function CoursesContainer() {
  const router = useRouter();

  const lecture = useQuery(FETCH_LECTURE);

  const sideNavData = {
    title: "전체 강의",
    dataList: [
      {
        id: "contemporaryMusic",
        data: "실용음악",
        subDataList: [{ data: "드럼", router: "" }],
      },
      {
        id: "classic",
        data: "클래식",
        subDataList: [{ data: "피아노", router: "" }],
      },
    ],
  };

  const onClickPush = (path: string) => () => {
    router.push(path);
  };

  return (
    <CoursesUI
      sideNavData={sideNavData}
      lecture={lecture.data?.fetchLecture}
      onClickPush={onClickPush}
    />
  );
}
