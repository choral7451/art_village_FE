import * as S from "./Styles";
import { IPaymentUI } from "./Types";

export default function PaymentUI(props: IPaymentUI) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>맴버쉽</S.Title>
        <S.PayBtn onClick={props.onCickPay}>
          <S.PayText1>매월 구독 결제</S.PayText1>
          <S.PayText2>￦ 2,000</S.PayText2>
        </S.PayBtn>
      </S.Wrapper>
    </S.Body>
  );
}
