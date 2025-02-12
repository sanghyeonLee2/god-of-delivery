import React from 'react';
import {OrderInfoWrap} from "./OrderInfoLayout";
import {FixedTextInterval} from "../../../assets/styles/CommonStyle";

function OrderInfo({currentItem, orderMethod}) {
    return (
        <OrderInfoWrap>
            <FixedTextInterval>
                {currentItem.key === 1 &&
                    <li>
                        <p>할인</p><span>{orderMethod.takeout?.discount.toLocaleString()}</span>
                    </li>}
                <li>
                    <p>{currentItem.content[0]}</p>{currentItem.key === 0 ?
                    <span>{orderMethod.minPrice.toLocaleString()}</span> :
                    <span>{
                        orderMethod.takeout.minPrice.toLocaleString()}
                    </span>}
                </li>
                <li>
                    <p>{currentItem.content[1]}</p>{currentItem.key === 0 ?
                    <span>{orderMethod.order.paymentMethod}</span> :
                    <span>{orderMethod.takeout.takeoutMethod}</span>}
                </li>
                <li>
                    <p>{currentItem.content[2]}</p>{currentItem.key === 0 ?
                    <span>{orderMethod.order.deliveryTime}</span> :
                    <span>{orderMethod.takeout.pickUpTime}</span>}
                </li>
                <li>
                    <p>{currentItem.content[3]}</p>{currentItem.key === 0 ?
                    <span>{orderMethod.order.tips}</span> :
                    <span>{orderMethod.takeout.location}</span>}
                </li>
                {currentItem.key === 1 && <li>
                    <p>결제방법</p><span>{orderMethod.takeout?.paymentMethod}</span>
                </li>}
            </FixedTextInterval>
        </OrderInfoWrap>
    );
}

export default OrderInfo;