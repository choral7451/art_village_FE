import AdminUI from "./Admin.presenter";

export default function AdminContainer() {
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

  return <AdminUI sideNavData={sideNavData} />;
}
