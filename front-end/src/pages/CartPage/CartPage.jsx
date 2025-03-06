import React from 'react';
import {CartHeader, MenuAddBtnWrap, MinStoreInfoWrap} from "./CartLayout";
import {CommonPageWrap, Font} from "../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "components/common/Button/main/MainButton";
import {OrderBtnWrap} from "components/common/Button/main/MainButtonLayout";
import {useCart} from "../../hooks/useCart";
import Loading from "../../components/common/Loading/Loading";
import {useNavigate} from "react-router-dom";
import CartPayment from "./components/CartPayment";
import CartMenus from "pages/CartPage/components/CartMenus";

function CartPage(props) {
    const {
        cartData, isLoading,
        handleDeleteCartItem, isCartItemDeleting,
    } = useCart()
    console.log(cartData)
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <CartHeader>
                <MinStoreInfoWrap>
                    <Font size={"x-large"}>{cartData?.store.storeName}</Font>
                    <Font size={"small"} color={"gray"}>{cartData?.store.deliveryTime} 후 도착예정</Font>
                </MinStoreInfoWrap>
            </CartHeader>
            <form onSubmit={() => navigate("/payment")}>
                <CartMenus handleDeleteCartItem={handleDeleteCartItem} cartItems={cartData?.cartItems}/>
                <MenuAddBtnWrap>
                    <TransBtn text={"메뉴 추가"} onClick={() => navigate(`/stores/all/${cartData?.storeId}`)}/>
                </MenuAddBtnWrap>
                <CartPayment tips={cartData.store.tips}
                             totalCartMenuPrice={cartData.cartItems.reduce((acc, {price, quantity}) =>
                                 acc + (price * quantity), 0)}/>
                <OrderBtnWrap>
                    <SubBtn text={"결제하기"}/>
                </OrderBtnWrap>
            </form>
        </CommonPageWrap>);
}

export default CartPage;