export interface ICoursesAndScores {
  path: string;
}

export interface ICoursesAndScoresUI {
  path: string;
  onClickPush: (path: string) => () => void;
}
