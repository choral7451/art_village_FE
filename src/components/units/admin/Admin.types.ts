export interface IAdminUI {
  sideNavData: {
    title: string;
    dataList: {
      id: string;
      data: string;
      subDataList: { data: string; router: string }[];
    }[];
  };

  pathCheck: { member: boolean; courses: boolean; scores: boolean };
}
