import React from 'react';
import {CommonBorder, CommonPageHeader, FlexOnly, Font} from "../../../assets/styles/CommonStyle";
import {omittedDate} from "../../../utils/transducer";
import {MainBtn, SubBtn} from "components/common/Button/main/MainButton";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import Image from "components/common/Image/Image";

function OrderList({orders}) {
    const navigate = useNavigate()
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    return (
        <ul>
            {orders.map((order) =>
                <CommonBorder key={order.orderId}>
                    <CommonPageHeader>
                        <FlexOnly justify="space-between">
                            <Font size={"small"}>
                                {omittedDate(order.createdAt)}
                            </Font>
                            &nbsp;&nbsp;
                            <Font color={"gray"} size={"small"}>
                                · {order.status}
                            </Font>
                        </FlexOnly>
                        <MainBtn text={"주문상세"} width={"65px"} onClick={() => navigate(`/orders/${order.orderId}`)}/>
                    </CommonPageHeader>
                    <FlexOnly>
                        <Image src={order?.imgUrl} width={95} height={95}/>
                        <div style={{marginLeft: "20px"}}>
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
                    {order.hasReviewed &&
                        <div style={{marginTop: "10px"}}>
                            <SubBtn type={"button"} text={"리뷰 작성하기"} height={"40px"}
                                    onClick={() => setIsModalOpen({
                                        modalType: "리뷰작성",
                                        flag: true,
                                        modalData: {
                                            storeName: order.storeName,
                                            orderId: order.orderId,
                                            storeId: order.storeId,
                                            representativeOrder: order.representativeOrder
                                        },
                                    })}/>
                        </div>
                    }
                </CommonBorder>
            )}
        </ul>
    );
}

export default OrderList;