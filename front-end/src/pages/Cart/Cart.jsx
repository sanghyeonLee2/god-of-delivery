import React from 'react';
import {CartHeader, CartWrap, MenuAddBtnWrap, MinStoreInfoWrap} from "./CartLayout";
import {Font} from "../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";
import CartPayment from "./components/CartPayment";
import CartReceiptMethod from "./components/CartReceiptMethod";
import CartMenus from "./components/CartMenus";
import {useGetAndInitForm} from "../../hooks/useGetAndInitForm";
import Loading from "../../components/common/Loading/Loading";

function Cart(props) {
    const {query, form} = useGetAndInitForm("cart")
    if (query.isLoading) {
        return <Loading/>;
    }
    console.log(form.watch())
    return (<CartWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <Font size={"x-large"}>{query.data?.storeTitle}</Font>
                    <Font size={"small"} color={"gray"}>{query.data?.deliveryTime} 후 도착예정</Font>
                    {/*쿠폰 컴포넌트 추가*/}
                </MinStoreInfoWrap>
            </CartHeader>
            <form onSubmit={form.handleSubmit((data) => console.log(data))}>
                <CartMenus menus={query.data?.menus} form={form}/>
                <MenuAddBtnWrap>
                    <TransBtn text={"메뉴 추가"}/>
                </MenuAddBtnWrap>
                <CartReceiptMethod getValues={form.getValues} control={form.control}
                                   receiptMethods={query.data?.receiptMethods}/>
                <CartPayment form={form}/>
                <OrderBtnWrap>
                    <SubBtn text={"결제하기"}/>
                </OrderBtnWrap>
            </form>
        </CartWrap>);
}

export default Cart;