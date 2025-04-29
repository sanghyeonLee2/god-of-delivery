import React from "react";
import { CommonBorder, CommonPageHeader, FlexOnly, Font } from "@assets/styles/CommonStyle";
import { omittedDate } from "@utils/transducer";
import { MainBtn } from "@components/common/Button/main/MainButtons";
import { useNavigate } from "react-router-dom";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/style";
import CompletionReview from "@pages/user/ManagementPages/components/CompletionReview";
import CreateReviewSection from "@pages/user/ManagementPages/components/CreateReviewSection";

function OrderInfo({ order }) {
  const navigate = useNavigate();
  return (
    <CommonBorder>
      <CommonPageHeader>
        <FlexOnly justify="space-between">
          <Font size={"small"}>{omittedDate(order.createdAt)}</Font>
          &nbsp;&nbsp;
          <Font color={COLORS.FONT.SUB} size={"small"}>
            · {order.status}
          </Font>
        </FlexOnly>
        <MainBtn
          text={"주문상세"}
          width={"6.5rem"}
          onClick={() => navigate(`/orders/${order.orderId}`)}
        />
      </CommonPageHeader>
      <FlexOnly>
        <Image src={order?.imgUrl} width={"9.5rem"} height={"9.5rem"} />
        <div style={{ marginLeft: "2rem" }}>
          <Font size={"large"} onClick={() => navigate(`/stores/${order.storeId}`)}>
            {order.storeName}
          </Font>
          <Font>
            {order.representativeOrder}
            &nbsp;&nbsp;
            {order.totalPrice.toLocaleString()}원
          </Font>
        </div>
      </FlexOnly>
      {order.hasReviewed ? <CompletionReview /> : <CreateReviewSection order={order} />}
    </CommonBorder>
  );
}

export default React.memo(OrderInfo);
