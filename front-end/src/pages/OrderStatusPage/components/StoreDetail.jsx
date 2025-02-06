import React from 'react';
import {CommonSectionWrap, Font} from "../../../assets/styles/CommonStyle";

function StoreDetail({storeDetailData}) {
    return (
        <CommonSectionWrap>
            <Font size={"large"}>
                {storeDetailData.storeName}
            </Font>
            <Font>
                주문일시 : {storeDetailData.orderTime}
            </Font>
            <Font>
                주문번호 : {storeDetailData.orderId}
            </Font>
        </CommonSectionWrap>
    );
}

export default StoreDetail;