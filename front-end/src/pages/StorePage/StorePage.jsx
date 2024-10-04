import React from 'react';
import {MenuInfoTapInner, MenuToggleDiv, MenuToggleWrap, StoreOuter} from "./StorePageLayout";
import {VerticalSpace} from "../../assets/styles/CommonStyle";
import StoreInfo from "../../components/section/StoreInfo/StoreInfo";
import StoreReview from "../../components/section/StoreReview/StoreReview";
import StoreHeader from "../../components/section/StoreHeader/StoreHeader";
import UserActions from "../../components/section/UserActions/UserActions";
import StoreCoupon from "../../components/section/StoreCoupon/StoreCoupon";
import StoreOrderInfo from "../../components/section/StoreOrderInfo/StoreOrderInfo";
import StoreMenu from "../../components/section/StoreMenu/StoreMenu";
import useTab from "../../hooks/useTab";

function StorePage(props) {
    const content = [
        {
            key: 0,
            tab: "메뉴",
        },
        {
            key: 1,
            tab: "정보원산지",
        },
        {
            key: 2,
            tab: "리뷰",
        }
    ];
    const {currentItem, setCurrentItem} = useTab(0, content)
//·
    return (
        <StoreOuter>
            <StoreHeader/>
            <UserActions/>
            <StoreCoupon/>
            <StoreOrderInfo/>
            <VerticalSpace/>
            <MenuToggleWrap>
                {content.map((ele, idx) => {
                    return <li key={ele.key}>
                        <MenuToggleDiv value={currentItem.key === ele.key}
                                       onClick={() => setCurrentItem(idx)}
                        >
                            <span> {ele.tab}</span>
                        </MenuToggleDiv>
                    </li>
                })}
            </MenuToggleWrap>
            <MenuInfoTapInner>
                {currentItem.key === 0 && <StoreMenu/>}
                {currentItem.key === 1 && <StoreInfo/>}
                {currentItem.key === 2 && <StoreReview/>}
            </MenuInfoTapInner>
        </StoreOuter>
    );
}

export default StorePage;