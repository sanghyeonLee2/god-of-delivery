import React from 'react';
import {
    CommonPageHeader,
    CommonPageWrap,
    CommonSectionWrap,
    Font,
    VerticalSpace
} from "../../assets/styles/CommonStyle";
import StoreDetail from "./components/StoreDetail";
import useGet from "../../hooks/useGet";
import Loading from "../../components/common/Loading/Loading";
import MenuDetail from "./components/MenuDetail";
import OrderAmount from "./components/OrderAmount";
import UserPaymentInfo from "./components/UserPaymentInfo";
import {SubBtn} from "../../components/common/Button/main/MainButton";
import {useNavigate} from "react-router-dom";

function OrderDetailPage(props) {
    const navigate = useNavigate();
    const {data: orderDetailData, isError, status, isLoading} = useGet("order-detail")
    if (isLoading) {
        return <Loading/>
    }
    console.log(orderDetailData);

    return (
        <CommonPageWrap>
            <CommonPageHeader>
                <Font size={"large"}>주문 현황</Font>
                <Font size={"large"}>{orderDetailData?.orderStatus}</Font>
            </CommonPageHeader>
            <StoreDetail storeDetailData={orderDetailData?.store}/>
            <VerticalSpace/>
            <MenuDetail menus={orderDetailData?.menus}/>
            <VerticalSpace/>
            <OrderAmount paymentMethods={orderDetailData?.paymentMethods} menuTotalPrice={
                orderDetailData?.menus
                    .reduce((acc, menu) => acc + menu.menuPrice + menu.menuOptions
                        .reduce((optionAcc, option) => optionAcc + option.optionPrice, 0), 0) || 0}
            />
            <VerticalSpace/>
            <UserPaymentInfo userPaymentInfo={orderDetailData?.userPaymentInfo} orderType={orderDetailData?.orderType}/>
            <VerticalSpace/>
            <CommonSectionWrap>
                <SubBtn text={"홈 화면으로 돌아가기"} height={"50px"} onClick={() => navigate("/")}/>
            </CommonSectionWrap>
        </CommonPageWrap>
    );
}

export default OrderDetailPage;