import ScoreCard from "../../commons/scoreCard/Score.container";
import SideNav from "../../commons/sideNav/SideNav.container";
import * as S from "../courses/Courses.styles";
import { IScoresUI } from "./Scores.styles";

export default function ScoresUI(props: IScoresUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <SideNav sideNavData={props.sideNavData} />
        <S.Contents>
          <S.Category>전체</S.Category>
          <S.CardRow>
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
          </S.CardRow>
        </S.Contents>
      </S.Wrapper>
    </S.Body>
  );
}
