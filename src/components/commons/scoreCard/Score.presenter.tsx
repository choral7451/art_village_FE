import * as S from "./Score.styles";

export default function ScoreCardUI() {
  return (
    <S.Wrapper>
      <S.Image src="/images/home/banner/p2.gif" />
      <S.Level>[초보]</S.Level>
      <S.Title>드럼 초보탈출</S.Title>
      <S.Price>₩ 2,500</S.Price>
      <S.Star value={5} />
    </S.Wrapper>
  );
}
