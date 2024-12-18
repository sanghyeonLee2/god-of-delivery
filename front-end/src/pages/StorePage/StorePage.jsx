import React from 'react';
import {MenuInfoTapWrap, MenuTab, MenuTabWrap, StoreOuter} from "./StorePageLayout";
import {VerticalSpace} from "../../assets/styles/CommonStyle";
import StoreInfo from "./components/StoreInfo";
import StoreReview from "./components/StoreReview";
import StoreHeader from "./components/StoreHeader";
import UserActions from "./components/UserActions";
import StoreCoupon from "./components/StoreCoupon";
import StoreOrderInfo from "./components/StoreOrderInfo";
import StoreMenu from "./components/StoreMenu";
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
    const {data: storeData, isError, status, isLoading} = useGet("store")
    if (isLoading) {
        return <Loading/>
    }
    return (
        <StoreOuter>
            <StoreHeader haaderData={storeData?.storeHeader}/>
            <UserActions dips={storeData?.storeInfo.dips}/>
            <StoreCoupon coupons={storeData?.coupons}/>
            <StoreOrderInfo deliveryMethod={storeData?.deliveryMethod}/>
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
                {currentItem.key === 0 && <StoreMenu notice={storeData?.notice} menuInfo={storeData?.menu}/>}
                {currentItem.key === 1 && <StoreInfo storeInfo={storeData?.storeInfo}/>}
                {currentItem.key === 2 && <StoreReview/>}
            </MenuInfoTapWrap>
        </StoreOuter>
    );
}

export default StorePage;