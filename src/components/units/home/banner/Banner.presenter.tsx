import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Banner.styles";

export default function BannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.Banner {...settings}>
      <div>
        <S.MainBannerSource src={"/images/home/banner/test.gif"} />
      </div>
      <div>
        <S.MainBannerSource src={"/images/home/banner/test2.gif"} />
      </div>
    </S.Banner>
  );
}
