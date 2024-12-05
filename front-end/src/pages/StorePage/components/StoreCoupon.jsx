import React from 'react';
import {CouponContent, CouponWrap, DownloadImgWrap} from "./StoreCouponLayout";
import download from "../../../assets/img/download.png"
import {Font} from "../../../assets/styles/CommonStyle";

function StoreCoupon({coupons}) {
    return (
        <CouponWrap>
            <CouponContent>
                <Font color={"purple"}>{coupons[0].couponContent}</Font>
                <Font color={"black"}> 할인 쿠폰 받기</Font>
            </CouponContent>
            <DownloadImgWrap>
                <img width={26} height={26} alt={"다운로드 이미지"} src={download}/>
            </DownloadImgWrap>
        </CouponWrap>
    );
}

export default StoreCoupon;