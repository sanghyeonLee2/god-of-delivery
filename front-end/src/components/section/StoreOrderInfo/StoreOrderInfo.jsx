import React, {useState} from 'react';
import {OrderInfoWrap, OrderMethodWrap, OrderToggleWrap, OtherToggleSpan} from "./StoreOrderInfoLayout";
import useClick from "../../../hooks/useClick";

function StoreOrderInfo() {
    const [isDelivery, setIsDelivery] = useState(true)
    const onClickDelivery = useClick(() => {
        setIsDelivery(true);
    });
    const onClickPickup = useClick(() => {
        setIsDelivery(false);
    });

    return (
        <OrderMethodWrap>
            <OrderToggleWrap>
                <li ref={onClickDelivery}>
                    <OtherToggleSpan value={isDelivery}>배달주문</OtherToggleSpan>
                </li>
                <li ref={onClickPickup}>
                    <OtherToggleSpan value={!isDelivery}>포장/방문주문</OtherToggleSpan>
                </li>
            </OrderToggleWrap>
            <OrderInfoWrap>
                <ul>
                    <li>
                        최소주문금액:{isDelivery ? "10,000원" : "이용방법"}
                    </li>
                    {/*포장 정보 조건부 구현 예정*/}
                    <li>
                        {isDelivery ? "결제방법" : "이용방법"}
                    </li>
                    <li>
                        {isDelivery ? "배달시간" : "픽업시간"}
                    </li>
                    <li>
                        {isDelivery ? "배달팁" : "위치안내"}
                    </li>
                    {!isDelivery && <li>
                        결제방법
                    </li>}
                </ul>
            </OrderInfoWrap>
        </OrderMethodWrap>
    );
}

export default StoreOrderInfo;