export interface ICoursesAndScores {
  path: string;
}

export interface ICoursesAndScoresUI {
  path: string;
  onClickPush: (path: string) => () => void;
  lecture: {
    id: number;
    lecturer: { name: string };
    title: string;
    category: { name: string };
    subCategory: { name: string };
  }[];
}
