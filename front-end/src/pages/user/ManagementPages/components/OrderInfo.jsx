import React from "react";
import { CommonBorder, CommonPageHeader, FlexOnly, Font } from "@assets/styles/CommonStyle";
import { omittedDate } from "@utils/transducer";
import { MainBtn, SubBtn } from "@components/common/Button/main/MainButtons";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";
import Image from "@components/common/Image/Image";
import { COLORS } from "@constants/colors";

function OrderInfo({ order }) {
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
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
            text={"리뷰 작성하기"}
            height={"4rem"}
            onClick={() =>
              setIsModalOpen({
                modalType: "리뷰작성",
                flag: true,
                modalData: {
                  storeName: order.storeName,
                  orderId: order.orderId,
                  storeId: order.storeId,
                  representativeOrder: order.representativeOrder,
                },
              })
            }
          />
        </div>
      )}
    </CommonBorder>
  );
}

export default OrderInfo;
