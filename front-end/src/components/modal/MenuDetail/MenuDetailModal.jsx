import React from 'react';
import {ModalContentWrap, ModalForm, ModalInner, ModalOuter,} from "../ModalLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../common/Button/main/MainButton";
import MenuDetailOptions from "./components/MenuDetailOptions";
import ModalHeader from "./components/ModalHeader";
import OrderPrice from "./components/OrderPrice";
import {MenuDetailBtnWrap, MenuDetailTextWrap, SelectQuantityWrap} from "./MenuDetailModalLayout";
import MenuDetailProlog from "./components/MenuDetailProlog";
import {usePost} from "../../../hooks/usePost";
import useGetMenuDetailAndInitForm from "../../../hooks/useGetMenuDetailAndInitForm";
import Loading from "../../common/Loading/Loading";

function MenuDetailModal({modalType}) {
    const {form, query} = useGetMenuDetailAndInitForm("menuDetails")
    const quantityOnChg = (operand) => {
        const newQuantity = form.getValues("quantity") + operand
        return newQuantity >= 1 && form.setValue("quantity", newQuantity);
    };
    const {mutate: handlePutInCart} = usePost("cart-post")
    if (query.isLoading) {
        return <Loading/>
    }
    return (
        <ModalOuter>
            <ModalInner>
                <ModalHeader title={"메뉴 상세"}/>
                <ModalContentWrap>
                    <MenuDetailProlog name={query.data?.name} description={query.data?.description}/>
                    <MenuDetailTextWrap>
                        <Font>가격</Font>
                        <Font>{query.data?.price.toLocaleString()}원</Font>
                    </MenuDetailTextWrap>
                    <ModalForm>
                        <MenuDetailOptions details={query.data?.details} control={form.control}/>
                        <MenuDetailTextWrap>
                            <Font>수량</Font>
                            <SelectQuantityWrap>
                                <TransBtn dataAction={-1} type={"button"} text={"-"} onClick={() => quantityOnChg(-1)}/>
                                <div>{form.getValues("quantity")}</div>
                                <TransBtn dataAction={1} type={"button"} text={"+"} onClick={() => quantityOnChg(+1)}/>
                            </SelectQuantityWrap>
                        </MenuDetailTextWrap>
                    </ModalForm>
                    <OrderPrice defaultPrice={query.data?.price} watch={form.watch}/>
                </ModalContentWrap>
                <MenuDetailBtnWrap>
                    {modalType === "menuDetail" &&
                        <>
                            <SubBtn text={"장바구니에 담기"}
                                    onClick={form.handleSubmit((data) =>
                                        console.log(data) ||
                                        handlePutInCart(data))}/>
                            <SubBtn text={"주문하기"}/>
                        </>}
                    {modalType === "updateCartMenu" &&
                        <SubBtn text={"수정하기"}/>
                    }
                </MenuDetailBtnWrap>
            </ModalInner>
        </ModalOuter>
    );
}

export default MenuDetailModal;