export interface IAdminUI {
  sideNavData: {
    title: string;
    dataList: {
      id: string;
      data: string;
      subDataList: { data: string; router: string }[];
    }[];
  };
}
