import React from 'react';
import {CommonPageWrap, Font} from "../../assets/styles/CommonStyle";
import KakaoMap from "../../components/kakaoMap/KakaoMap";

function OrderStatusPage(props) {
    return (
        <CommonPageWrap>
            <Font size={"large"}>주문 현황</Font>
            <KakaoMap/>
        </CommonPageWrap>
    );
}

export default OrderStatusPage;