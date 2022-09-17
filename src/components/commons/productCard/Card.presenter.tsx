import * as S from "./Card.styles";
import { ICardUI } from "./Card.types";

export default function CardUI(props: ICardUI) {
  return (
    <>
      <S.Wrapper id="/courses/드럼-초보탈출/unit/1" onClick={props.onClickPush}>
        <S.Image src="/images/home/banner/p1.gif" />
        <S.Title>드럼 초보탈출</S.Title>
        <S.Name>최성수</S.Name>
        <S.RateWrapper>
          <S.Star value={5} />
        </S.RateWrapper>
        <S.Tag>+1000명</S.Tag>
      </S.Wrapper>
    </>
  );
}
