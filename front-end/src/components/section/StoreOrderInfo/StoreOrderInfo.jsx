import React from 'react';
import {OrderTabWrap, OrderTypeText} from "./StoreOrderInfoLayout";
import useTab from "../../../hooks/useTab";
import OrderInfo from "../OrderInfo/OrderInfo";

function StoreOrderInfo({deliveryMethod}) {
    const content = [
        {
            key: 0,
            tab: "배달주문",
            content: ["최소 주문금액", "결제방법", "배달시간", "배달팁"]
        },
        {
            key: 1,
            tab: "포장/방문주문",
            content: ["최소 주문금액", "이용방법", "픽업시간", "위치안내", "결제방법"]
        }
    ];
    const {currentItem, setCurrentItem} = useTab(0, content)
    return (
        <div>
            <OrderTabWrap>
                {content.map((ele, idx) =>
                    <li key={ele.key} onClick={() => setCurrentItem(idx)}>
                        <OrderTypeText value={currentItem.key === ele.key}>{ele.tab}</OrderTypeText>
                    </li>
                )}
            </OrderTabWrap>
            <OrderInfo currentItem={currentItem} deliveryMethod={deliveryMethod}/>
        </div>
    );
}

export default StoreOrderInfo;