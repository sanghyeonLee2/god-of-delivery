import React from 'react';
import * as S from "./CartLayout";
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
        cartData,
        isLoading,
        handleDeleteCartItem,
        isCartItemDeleting,
        handleSubmit
    } = useCart()
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading/>;
    }
    return (
        <CommonPageWrap>
            <S.CartHeader>
                <S.MinStoreInfoWrap>
                    <Font size={"x-large"}>{cartData?.store.storeName}</Font>
                    <Font size={"small"} color={"gray"}>{cartData?.store.deliveryTime} 후 도착예정</Font>
                </S.MinStoreInfoWrap>
            </S.CartHeader>
            <form onSubmit={handleSubmit}>
                <CartMenus handleDeleteCartItem={handleDeleteCartItem} cartItems={cartData?.cartItems}/>
                <S.MenuAddBtnWrap>
                    <TransBtn text={"메뉴 추가"} onClick={() => navigate(`/stores/all/${cartData?.storeId}`)}/>
                </S.MenuAddBtnWrap>
                <CartPayment tips={cartData.store.tips}
                             totalCartMenuPrice={cartData.totalCartMenuPrice}/>
                <OrderBtnWrap>
                    <SubBtn type={"submit"} text={"결제하기"}/>
                </OrderBtnWrap>
            </form>
        </CommonPageWrap>);
}

export default CartPage;