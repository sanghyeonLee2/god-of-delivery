import React from 'react';
import {CouponContent, CouponWrap, DownloadImgWrap} from "./StoreCouponLayout";
import download from "../../../assets/img/download.png"
import {MiddleSizeFont} from "../../../assets/styles/CommonStyle";

function StoreCoupon({coupons}) {
    return (
        <CouponWrap>
            <CouponContent>
                <MiddleSizeFont color={"purple"}>{coupons[0].couponContent}</MiddleSizeFont>
                <MiddleSizeFont color={"black"}> 할인 쿠폰 받기</MiddleSizeFont>
            </CouponContent>
            <DownloadImgWrap>
                <img width={26} height={26} alt={"다운로드 이미지"} src={download}/>
            </DownloadImgWrap>
        </CouponWrap>
    );
}

export default StoreCoupon;