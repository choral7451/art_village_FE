import { Modal } from "antd";
import PaymentUI from "./Presenter";

export default function Payment() {
  const onCickPay = () => {
    Modal.confirm({
      content: "매달 정기결제가 진행됨을 알려드립니다.",
      onOk() {},
    });
  };

  return <PaymentUI onCickPay={onCickPay} />;
}
