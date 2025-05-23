import React from "react";
import {
  CommonPageHeader,
  CommonPageWrap,
  CommonSectionWrap,
  Font,
  VerticalSpace,
} from "@assets/styles/CommonStyle";
import Loading from "@components/common/Loading/Loading";
import { useGetOrder } from "./hooks/useGetOrder";
import UserPaymentInfo from "@pages/user/OrderStatusPage/components/UserPaymentInfo";
import { SubBtn } from "@components/common/Button/main/MainButtons";
import { detailDate } from "@utils/transducer";
import OrderMenusDetail from "@pages/user/OrderStatusPage/components/OrderMenusDetail";
import OrderAmount from "@pages/user/OrderStatusPage/components/OrderAmount";

function OrderStatusPage() {
  const { orderData, navigateOrders, isLoading } = useGetOrder();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      <CommonPageHeader>
        <Font size={"x-large"}>주문 현황</Font>
        <Font size={"large"}>{orderData?.status}</Font>
      </CommonPageHeader>
      <CommonSectionWrap>
        <Font size={"large"}>{orderData.storeName}</Font>
        <Font>주문일시 : {detailDate(orderData.createdAt)}</Font>
        <Font>주문번호 : {orderData.orderId}</Font>
      </CommonSectionWrap>
      <VerticalSpace />
      <OrderMenusDetail menus={orderData?.orderItems} />
      <OrderAmount
        paymentMethod={orderData?.userPaymentInfo.paymentMethod}
        tips={orderData.tips}
        totalPrice={orderData?.totalPrice}
      />
      <VerticalSpace />
      <UserPaymentInfo userPaymentInfo={orderData?.userPaymentInfo} />
      <VerticalSpace />
      <CommonSectionWrap>
        <SubBtn text={"주문목록 보기"} height={"5rem"} onClick={navigateOrders} />
      </CommonSectionWrap>
    </CommonPageWrap>
  );
}

export default OrderStatusPage;
