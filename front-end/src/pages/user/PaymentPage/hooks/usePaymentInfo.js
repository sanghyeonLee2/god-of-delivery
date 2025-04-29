import { useRecoilState } from "recoil";
import { paymentTipState } from "@recoil/order/atom";
import { useEffect } from "react";

const usePaymentInfo = (tips) => {
  const [paymentTip, setPayment] = useRecoilState(paymentTipState);
  useEffect(() => {
    setPayment(tips);
  }, [tips, setPayment]);
  return paymentTip;
};

export default usePaymentInfo;
