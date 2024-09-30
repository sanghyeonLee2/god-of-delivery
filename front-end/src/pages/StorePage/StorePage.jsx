import React from 'react';
import {MenuInfoTapWrap, MenuToggleWrap, StoreOuter} from "./StorePageLayout";
import {VerticalSpace} from "../../assets/styles/CommonStyle";
import StoreInfo from "../../components/section/StoreInfo/StoreInfo";
import StoreReview from "../../components/section/StoreReview/StoreReview";
import StoreHeader from "../../components/section/StoreHeader/StoreHeader";
import UserActions from "../../components/section/UserActions/UserActions";
import StoreCoupon from "../../components/section/StoreCoupon/StoreCoupon";
import StoreOrderInfo from "../../components/section/StoreOrderInfo/StoreOrderInfo";
import StoreMenu from "../../components/section/StoreMenu/StoreMenu";

function StorePage(props) {
    return (
        <StoreOuter>
            <StoreHeader/>
            <UserActions/>
            <StoreCoupon/>
            <StoreOrderInfo/>
            <VerticalSpace/>
            <MenuToggleWrap>
                <li>메뉴</li>
                <li>정보·원산지</li>
                <li>리뷰</li>
            </MenuToggleWrap>
            <MenuInfoTapWrap>
                <StoreMenu/>
                <StoreInfo/>
                <StoreReview/>
            </MenuInfoTapWrap>
        </StoreOuter>
    );
}

export default StorePage;