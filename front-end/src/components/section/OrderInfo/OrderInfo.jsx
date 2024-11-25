import React from 'react';
import {OrderInfoWrap} from "./OrderInfoLayout";
import {FixedTextInterval} from "../../../assets/styles/CommonStyle";

function OrderInfo({currentItem, deliveryMethod}) {
    return (
        <OrderInfoWrap>
            <FixedTextInterval>
                {currentItem.key === 1 &&
                    <li>
                        <p>할인</p><span>{deliveryMethod.takeout?.discount.toLocaleString()}</span>
                    </li>}
                <li>
                    <p>{currentItem.content[0]}</p>{currentItem.key === 0 ?
                    <span>{deliveryMethod.order.minPrice.toLocaleString()}</span> :
                    <span>{
                        deliveryMethod.takeout.minPrice.toLocaleString()}
                    </span>}
                </li>
                <li>
                    <p>{currentItem.content[1]}</p>{currentItem.key === 0 ?
                    <span>{deliveryMethod.order.paymentMethod}</span> :
                    <span>{deliveryMethod.takeout.takeoutMethod}</span>}
                </li>
                <li>
                    <p>{currentItem.content[2]}</p>{currentItem.key === 0 ?
                    <span>{deliveryMethod.order.deliveryTime}</span> :
                    <span>{deliveryMethod.takeout.pickUpTime}</span>}
                </li>
                <li>
                    <p>{currentItem.content[3]}</p>{currentItem.key === 0 ?
                    <span>{deliveryMethod.order.tips}</span> :
                    <span>{deliveryMethod.takeout.location}</span>}
                </li>
                {currentItem.key === 1 && <li>
                    <p>결제방법</p><span>{deliveryMethod.takeout?.paymentMethod}</span>
                </li>}
            </FixedTextInterval>
        </OrderInfoWrap>
    );
}

export default OrderInfo;