export interface ICoursesUI {
  sideNavData: {
    title: string;
    dataList: {
      id: string;
      data: string;
      subDataList: { data: string; router: string }[];
    }[];
  };
  lecture: {
    image: string;
    title: string;
    lecturer: {
      name: string;
    };
    tag: string;
  };

  onClickPush: (path: string) => () => void;
}
