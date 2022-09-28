export interface IUnitUI {
  nav: string;
  video: string;
  subTitle: string;
  onClickNavBtn: (data: string) => () => void;
  onChangeVideo: (data: string) => () => void;
  data: {
    title: string;
    introduce: string;
    tag: string;
    description: string;
    lecturer: {
      name: string;
    };
    category: {
      name: string;
    };
    subCategory: {
      name: string;
    };
    video: {
      index: number;
      title: string;
      url: string;
    };
  };
}
