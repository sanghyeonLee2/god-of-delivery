import React from 'react';
import {CartHeader, CartWrap, MenuAddBtnWrap, MinStoreInfoWrap} from "./CartLayout";
import {Font} from "../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../components/common/Button/main/MainButton";
import {OrderBtnWrap} from "../../components/common/Button/main/MainButtonLayout";
import CartPayment from "./components/CartPayment";
import CartReceiptMethod from "./components/CartReceiptMethod";
import CartMenus from "./components/CartMenus";
import useGet from "../../hooks/useGet";

function Cart(props) {
    const [data, isError, status, isLoading] = useGet("cart")
    return (
        <CartWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <Font size={"x-large"}>{data.data?.storeTitle}</Font>
                    <Font size={"small"} color={"gray"}>{data.data?.deliveryTime} 후 도착예정</Font>
                    {/*쿠폰 컴포넌트 추가*/}
                </MinStoreInfoWrap>
            </CartHeader>
            <CartMenus menus={data.data?.menus}/>
            <MenuAddBtnWrap>
                <TransBtn text={"메뉴 추가"}/>
            </MenuAddBtnWrap>
            <CartReceiptMethod/>
            <CartPayment/>
            <OrderBtnWrap>
                <SubBtn text={"12000원 결제하기"}/>
            </OrderBtnWrap>
        </CartWrap>
    );
}

export default Cart;