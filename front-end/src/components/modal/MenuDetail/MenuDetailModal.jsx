import React from 'react';
import {ModalContentWrap, ModalForm,} from "../ModalLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import {SubBtn, TransBtn} from "../../common/Button/main/MainButton";
import MenuDetailOptions from "./components/MenuDetailOptions";
import OrderPrice from "./components/OrderPrice";
import {MenuDetailBtnWrap, MenuDetailTextWrap, ModalBtnWrap, SelectQuantityWrap} from "./MenuDetailModalLayout";
import MenuDetailProlog from "./components/MenuDetailProlog";
import {usePost} from "../../../hooks/usePost";
import useGetMenuDetailAndInitForm from "../../../hooks/useGetMenuDetailAndInitForm";
import Loading from "../../common/Loading/Loading";
import {quantityOnChg} from "../../../utils/clickHandler";
import {usePatch} from "../../../hooks/usePatch";

function MenuDetailModal({modalType, menuId}) {
    const {form, query} = useGetMenuDetailAndInitForm(`menu-details/${menuId}`)
    const {mutate: handlePutInCart} = usePost("cart-post")
    const {mutate: handleUpdateCart} = usePatch(`cart-put/${query.data?.menuId}`)
    if (query.isLoading) {
        return <Loading/>
    }
    return (
        <>
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
                            <TransBtn dataAction={-1} type={"button"} text={"-"}
                                      onClick={() => quantityOnChg(-1, form, "quantity")}/>
                            <div>{form.getValues("quantity")}</div>
                            <TransBtn dataAction={1} type={"button"} text={"+"}
                                      onClick={() => quantityOnChg(+1, form, "quantity")}/>
                        </SelectQuantityWrap>
                    </MenuDetailTextWrap>
                </ModalForm>
                <OrderPrice defaultPrice={query.data?.price} watch={form.watch}/>
            </ModalContentWrap>
            <MenuDetailBtnWrap>
                {modalType === "menuDetail" &&
                    <ModalBtnWrap>
                        <SubBtn text={"장바구니에 담기"}
                                onClick={form.handleSubmit((data) => handlePutInCart(data))}/>
                        <SubBtn text={"주문하기"}/>
                    </ModalBtnWrap>}
                {modalType === "updateCartMenu" &&
                    <SubBtn text={"수정하기"}
                            onClick={form.handleSubmit((data) => handleUpdateCart(data))}/>
                }
            </MenuDetailBtnWrap>
        </>
    );
}

export default MenuDetailModal;