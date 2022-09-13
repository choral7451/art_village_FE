import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Home.styles";
import BannerContainer from "./banner/Banner.container";
import { RightOutlined } from "@ant-design/icons";
import Card from "../../commons/productCard/Card.container";

export default function HomeUI() {
  return (
    <S.Body>
      <BannerContainer />
      <S.Wrapper>
        <S.MembershipWrapper>
          <S.MembershipBtn>멤버쉽 가입</S.MembershipBtn>
        </S.MembershipWrapper>
        <S.SubTitle>
          신규 강의 ✨ <RightOutlined />
        </S.SubTitle>
        <S.CardRow>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.CardRow>
        <S.SubTitle>
          신규 악보 🎼 <RightOutlined />
        </S.SubTitle>
      </S.Wrapper>
    </S.Body>
  );
}
