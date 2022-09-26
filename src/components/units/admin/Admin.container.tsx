import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";

export default function AdminContainer() {
  const router = useRouter();
  const path = router.pathname.replace("/", "").split("/");

  const [pathCheck, setPathCheck] = useState({
    courses: {
      lecture: {
        list: false,
        write: false,
      },
      lecturer: {
        list: false,
        write: false,
      },
    },
    scores: {
      list: false,
      write: false,
      update: false,
    },
    member: {
      list: false,
    },
  });

  useEffect(() => {
    if (path.length === 3) {
      setPathCheck({
        ...pathCheck,
        [path[1]]: {
          [path[2]]: true,
        },
      });
    } else if (path.length === 4) {
      setPathCheck({
        ...pathCheck,
        [path[1]]: {
          [path[2]]: {
            [path[3]]: true,
          },
        },
      });
    }
  }, []);

  const sideNavData = {
    title: "관리자 홈",
    dataList: [
      {
        id: "member",
        data: "회원",
        subDataList: [{ data: "회원 목록", router: "/admin/member/list" }],
      },
      {
        id: "courses",
        data: "강의",
        subDataList: [
          { data: "강의 목록", router: "/admin/courses/lecture/list" },
          { data: "강사 목록", router: "/admin/courses/lecturer/list" },
        ],
      },
      {
        id: "scores",
        data: "악보",
        subDataList: [{ data: "악보 목록", router: "/admin/scores/list" }],
      },
      {
        id: "payment",
        data: "결제",
        subDataList: [{ data: "결제 목록", router: "" }],
      },
    ],
  };

  return <AdminUI sideNavData={sideNavData} pathCheck={pathCheck} />;
}
