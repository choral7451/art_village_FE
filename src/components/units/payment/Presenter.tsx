import Head from "next/head";
import * as S from "./Styles";
import { IPaymentUI } from "./Types";

export default function PaymentUI(props: IPaymentUI) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Body>
        <S.Wrapper>
          <S.Title>맴버쉽 가입</S.Title>
          <S.PayBtn onClick={props.onCickPay}>
            <S.PayText1>매월 구독 결제</S.PayText1>
            <S.PayText2>￦ 2,000</S.PayText2>
          </S.PayBtn>
        </S.Wrapper>
      </S.Body>
    </>
  );
}
