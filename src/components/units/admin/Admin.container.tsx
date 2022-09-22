import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminUI from "./Admin.presenter";

export default function AdminContainer() {
  const router = useRouter();
  const path = router.pathname.replaceAll("/", "").replace("admin", "");

  const [pathCheck, setPathCheck] = useState({
    courses: false,
    scores: false,
    member: false,
  });

  useEffect(() => {
    setPathCheck({
      ...pathCheck,
      [path]: true,
    });
  }, []);

  const sideNavData = {
    title: "관리자 홈",
    dataList: [
      {
        id: "member",
        data: "회원",
        subDataList: [{ data: "회원 목록", router: "/admin/member" }],
      },
      {
        id: "courses",
        data: "강의",
        subDataList: [{ data: "강의 목록", router: "/admin/courses" }],
      },
      {
        id: "scores",
        data: "악보",
        subDataList: [{ data: "악보 목록", router: "/admin/scores" }],
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
