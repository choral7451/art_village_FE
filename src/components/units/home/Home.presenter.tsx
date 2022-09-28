import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Home.styles";
import BannerContainer from "./banner/Banner.container";
import { RightOutlined } from "@ant-design/icons";
import Card from "../../commons/productCard/Card.container";
import { IHomeUI } from "./Home.types";
import ScoreCard from "../../commons/scoreCard/Score.container";
import { v4 as uuidv4 } from "uuid";

export default function HomeUI(props: IHomeUI) {
  const card = props.lecture?.map((el) => {
    return (
      <Card
        key={uuidv4()}
        id={el.id}
        image={el.image}
        tag={el.tag}
        name={el.lecturer.name}
        title={el.title}
        onClick={props.onClickPush}
      />
    );
  });

  return (
    <S.Body>
      <BannerContainer />
      <S.Wrapper>
        <S.MembershipWrapper>
          <S.MembershipBtn>멤버쉽 가입</S.MembershipBtn>
        </S.MembershipWrapper>
        <S.SubTitle onClick={props.onClickPush("/courses")}>
          강의 ✨ <RightOutlined />
        </S.SubTitle>
        <S.CardRow>{card}</S.CardRow>
        <S.SubTitle>
          악보 🎼 <RightOutlined />
        </S.SubTitle>
        <S.ScoreRow>
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
        </S.ScoreRow>
      </S.Wrapper>
    </S.Body>
  );
}
