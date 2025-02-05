import React from 'react';
import {CartHeader, MenuAddBtnWrap, MinStoreInfoWrap} from "./CartLayout";
import {CommonPageWrap, Font} from "../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";
import CartReceiptMethod from "./components/CartReceiptMethod";
import CartMenus from "./components/CartMenus";
import {useGetCartAndInitForm} from "../../hooks/useGetCartAndInitForm";
import Loading from "../../components/common/Loading/Loading";
import {useNavigate} from "react-router-dom";
import CartPayment from "./components/CartPayment";

function CartPage(props) {
    const {query, form} = useGetCartAndInitForm("cart")
    const navigate = useNavigate();
    if (query.isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <Font size={"x-large"}>{query.data?.storeTitle}</Font>
                    <Font size={"small"} color={"gray"}>{query.data?.deliveryTime} 후 도착예정</Font>
                    {/*쿠폰 컴포넌트 추가*/}
                </MinStoreInfoWrap>
            </CartHeader>
            <form
                onSubmit={form.handleSubmit((data) => navigate("/payment", {state: {orderInfo: data}}))}>
                <CartMenus menus={query.data?.menus} getValues={form.getValues}/>
                <MenuAddBtnWrap>
                    <TransBtn text={"메뉴 추가"} onClick={() => navigate(`/store/${query.data?.storeId}`)}/>
                </MenuAddBtnWrap>
                <CartReceiptMethod getValues={form.getValues} control={form.control}
                                   receiptMethods={query.data?.receiptMethods}/>
                <CartPayment getValues={form.getValues} control={form.control}/>
                <OrderBtnWrap>
                    <SubBtn text={"결제하기"}/>
                </OrderBtnWrap>
            </form>
        </CommonPageWrap>);
}

export default CartPage;