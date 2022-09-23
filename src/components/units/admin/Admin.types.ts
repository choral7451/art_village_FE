export interface IAdminUI {
  sideNavData: {
    title: string;
    dataList: {
      id: string;
      data: string;
      subDataList: { data: string; router: string }[];
    }[];
  };

  pathCheck: {
    member: boolean;
    courses: { write: boolean; list: boolean; update: boolean };
    scores: { write: boolean; list: boolean; update: boolean };
  };
}
