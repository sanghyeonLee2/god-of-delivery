import React from "react";
import { CommonBorder, CommonPageHeader, FlexOnly, Font } from "@assets/styles/CommonStyle";
import { omittedDate } from "@utils/transducer";
import { MainBtn, SubBtn } from "@components/common/Button/main/MainButtons";
import { useNavigate } from "react-router-dom";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/style";
import useOpenModal from "@hooks/useOpenModal";
import { MODAL_TYPES } from "@constants/modalTypes";

function OrderInfo({ order }) {
  const navigate = useNavigate();
  const openModal = useOpenModal();
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
      {!order.hasReviewed && (
        <div style={{ marginTop: "1rem" }}>
          <SubBtn
            type={"button"}
            text={MODAL_TYPES.CREATE_REVIEW}
            height={"4rem"}
            onClick={() =>
              openModal(MODAL_TYPES.CREATE_REVIEW, {
                storeName: order.storeName,
                orderId: order.orderId,
                storeId: order.storeId,
                representativeOrder: order.representativeOrder,
              })
            }
          />
        </div>
      )}
    </CommonBorder>
  );
}

export default React.memo(OrderInfo);
