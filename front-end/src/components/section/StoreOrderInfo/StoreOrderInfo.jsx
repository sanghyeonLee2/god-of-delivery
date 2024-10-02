import React from 'react';
import {OrderInfoWrap, OrderMethodWrap, OrderToggleWrap, OtherToggleDiv} from "./StoreOrderInfoLayout";
import useTab from "../../../hooks/useTab";

function StoreOrderInfo() {
    const content = [
        {
            key: 0,
            tab: "배달주문",
            content: ["최소 주문금액", "결제방법", "배달시간", "배달팁"]
        },
        {
            key: 1,
            tab: "포장/방문주문",
            content: ["최소 주문금액", "결제방법", "배달시간", "배달팁", "결제방법"]
        }
    ];
    const {currentItem, setCurrentItem} = useTab(0, content)
    return (
        <OrderMethodWrap>
            <OrderToggleWrap>
                {content.map((ele, idx) => {
                    return <li key={ele.key}>
                        <OtherToggleDiv value={currentItem.key === ele.key}
                                        onClick={() => setCurrentItem(idx)}
                        >
                            <span>{ele.tab}</span>
                        </OtherToggleDiv>
                    </li>
                })}
            </OrderToggleWrap>
            <OrderInfoWrap>
                <ul>
                    <li>
                        {currentItem.content[0]}
                    </li>
                    <li>
                        {currentItem.content[1]}
                    </li>
                    <li>
                        {currentItem.content[2]}
                    </li>
                    <li>
                        {currentItem.content[3]}
                    </li>
                    {currentItem?.content[4] && <li>
                        결제방법
                    </li>}
                </ul>
            </OrderInfoWrap>
        </OrderMethodWrap>
    );
}

export default StoreOrderInfo;