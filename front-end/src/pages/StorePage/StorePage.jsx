import React from 'react';
import {MenuInfoTapWrap, MenuTab, MenuTabWrap, StoreOuter} from "./StorePageLayout";
import {VerticalSpace} from "../../assets/styles/CommonStyle";
import StoreInfo from "../../components/section/StoreInfo/StoreInfo";
import StoreReview from "../../components/section/StoreReview/StoreReview";
import StoreHeader from "../../components/section/StoreHeader/StoreHeader";
import UserActions from "../../components/section/UserActions/UserActions";
import StoreCoupon from "../../components/section/StoreCoupon/StoreCoupon";
import StoreOrderInfo from "../../components/section/StoreOrderInfo/StoreOrderInfo";
import StoreMenu from "../../components/section/StoreMenu/StoreMenu";
import useTab from "../../hooks/useTab";
import useGet from "../../hooks/useGet";
import Loading from "../../components/common/Loading/Loading";

function StorePage(props) {
    const content = [
        {
            key: 0,
            tab: "메뉴",
        },
        {
            key: 1,
            tab: "정보·원산지",
        },
        {
            key: 2,
            tab: "리뷰",
        }
    ];
    const {currentItem, setCurrentItem} = useTab(0, content)
    const [data, isError, status, isLoading] = useGet("store")
    if (isLoading) {
        return <Loading/>
    }
    return (
        <StoreOuter>
            <StoreHeader haaderData={data?.data.storeHeader}/>
            <UserActions dips={data?.data.storeInfo.dips}/>
            <StoreCoupon coupons={data?.data.coupons}/>
            <StoreOrderInfo deliveryMethod={data?.data.deliveryMethod}/>
            <VerticalSpace/>
            <MenuTabWrap>
                {content.map((ele, idx) =>
                    <li key={ele.key}>
                        <MenuTab value={currentItem.key === ele.key}
                                 onClick={() => setCurrentItem(idx)}>
                            <span> {ele.tab}</span>
                        </MenuTab>
                    </li>
                )}
            </MenuTabWrap>
            <MenuInfoTapWrap>
                {currentItem.key === 0 && <StoreMenu notice={data?.data.notice} menuInfo={data?.data.menu}/>}
                {currentItem.key === 1 && <StoreInfo storeInfo={data?.data.storeInfo}/>}
                {currentItem.key === 2 && <StoreReview/>}
            </MenuInfoTapWrap>
        </StoreOuter>
    );
}

export default StorePage;