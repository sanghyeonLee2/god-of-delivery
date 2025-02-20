import React from 'react';
import {MenuInfoTapWrap, MenuTab, MenuTabWrap, StoreOuter} from "./StorePageLayout";
import {VerticalSpace} from "../../assets/styles/CommonStyle";
import StoreInfo from "./components/StoreInfo";
import StoreReview from "./components/StoreReview";
import StoreHeader from "./components/StoreHeader";
import StoreOrderInfo from "./components/StoreOrderInfo";
import StoreMenu from "./components/StoreMenu";
import useTab from "../../hooks/useTab";
import useGet from "../../hooks/useGet";
import Loading from "../../components/common/Loading/Loading";

function StorePage(props) {
    const contents = [
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
    const {currentItem, setCurrentItem} = useTab(0, contents)
    const {data: storeData, isError, status, isLoading} = useGet("store")
    if (isLoading) {
        return <Loading/>
    }
    return (
        <StoreOuter>
            <StoreHeader haaderData={storeData?.storeHeader}/>
            <StoreOrderInfo deliveryMethod={storeData?.deliveryMethod}/>
            <VerticalSpace/>
            <MenuTabWrap>
                {contents.map((content, idx) =>
                    <li key={content.key}>
                        <MenuTab value={currentItem.key === content.key}
                                 onClick={() => setCurrentItem(idx)}>
                            <span> {content.tab}</span>
                        </MenuTab>
                    </li>
                )}
            </MenuTabWrap>
            <MenuInfoTapWrap>
                {currentItem.key === 0 && <StoreMenu notice={storeData?.notice} menuInfo={storeData?.menuInfo}/>}
                {currentItem.key === 1 && <StoreInfo storeInfo={storeData?.storeInfo}/>}
                {currentItem.key === 2 && <StoreReview/>}
            </MenuInfoTapWrap>
        </StoreOuter>
    );
}

export default StorePage;