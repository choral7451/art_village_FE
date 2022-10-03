import { useLazyQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "../../../commons/store";
import PaymentUI from "./Presenter";
import { FETCH_LOGINUSER } from "./Queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment() {
  const router = useRouter();
  const [userInfo] = useLazyQuery(FETCH_LOGINUSER);

  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  const onCickPay = async () => {
    try {
      const {
        data: {
          fetchLoginUser: { name, email },
        },
      } = await userInfo();

      if (name) {
        Modal.confirm({
          content: "매달 정기결제가 진행됨을 알려드립니다.",
          onOk() {
            const { IMP } = window;
            IMP.init("imp22613089");

            IMP.request_pay(
              {
                pg: "html5_inicis",
                pay_method: "card",
                name: "구독 정기 결제",
                buyer_email: email,
                buyer_name: name,
                amount: 2000,
              },
              (res: any) => {
                // callback
                if (res.success) {
                  try {
                    // const result = createPayment({
                    //   variables: {
                    //     createPaymentInput: {
                    //       roomId: router.query.detailid,
                    //       date,
                    //       start_time: startTime,
                    //       end_time: endTime,
                    //       amount: price + sidePrice,
                    //       guest: guest,
                    //       point: (price + sidePrice) / 10,
                    //       impUid: "imp49910675",
                    //     },
                    //   },
                    // });
                    // alert("결제 되었습니다. 마이페이지로 이동합니다.");
                    // router.push("/mypage");
                  } catch (error) {
                    // alert("결제에 실패하였습니다.");
                  }
                } else {
                  // ...,
                  // 결제 실패 시 로직,
                  // ...
                  alert("결제가 취소되었습니다.");
                }
              }
            );
          },
        });
      }
    } catch (error: any) {
      Modal.warning({
        content: "로그인 후 결제 진행해 주시기 바랍니다.",
        onOk() {
          router.push("/login");
        },
      });
    }
  };

  return <PaymentUI onCickPay={onCickPay} />;
}
