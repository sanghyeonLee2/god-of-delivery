import React from 'react';
import {ModalContentWrap, ModalForm, ModalInner, ModalOuter,} from "../ModalLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import {useRecoilValue} from "recoil";
import {modalDataState} from "../../../recoil/flag/atoms";
import {SubBtn, TransBtn} from "../../common/Button/main/MainButton";
import MenuDetailOptions from "./components/MenuDetailOptions";
import ModalHeader from "./components/ModalHeader";
import OrderPrice from "./components/OrderPrice";
import {MenuDetailBtnWrap, MenuDetailTextWrap, SelectQuantityWrap} from "./MenuDetailModalLayout";
import MenuDetailProlog from "./components/MenuDetailProlog";
import {useForm} from "react-hook-form";
import {setMenuDetail} from "../../../utils/defaultValues";
import useClick from "../../../hooks/useClick";
import {usePost} from "../../../hooks/usePost";

function MenuDetailModal({modalType}) {
    const modalData = useRecoilValue(modalDataState)
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        watch
    } = useForm({
        defaultValues: setMenuDetail(modalData.details),
    },)

    const quantityOnChg = (operand) => {
        const newQuantity = getValues("quantity") + Number(operand)
        return newQuantity >= 1 && setValue("quantity", newQuantity);
    };

    const minusBtnRef = useClick(() => {
        quantityOnChg(-1);
    });

    const plusBtnRef = useClick(() => {
        quantityOnChg(1);
    });
    const {mutate: handlePutInCart} = usePost("cart-post")

    //리액트쿼리 사용해서 post
    return (
        <ModalOuter>
            <ModalInner>
                <ModalHeader title={"메뉴 상세"}/>
                <ModalContentWrap>
                    <MenuDetailProlog name={modalData.name} description={modalData.description}/>
                    <MenuDetailTextWrap>
                        <Font>가격</Font>
                        <Font>{modalData.price.toLocaleString()}원</Font>
                    </MenuDetailTextWrap>
                    <ModalForm>
                        <MenuDetailOptions details={modalData.details} register={register} setValue={setValue}
                                           getValues={getValues}/>
                        <MenuDetailTextWrap>
                            <Font>수량</Font>
                            <SelectQuantityWrap>
                                <TransBtn dataAction={-1} type={"button"} text={"-"} ref={minusBtnRef}/>
                                <div>{getValues("quantity")}</div>
                                <TransBtn dataAction={1} type={"button"} text={"+"} ref={plusBtnRef}/>
                            </SelectQuantityWrap>
                        </MenuDetailTextWrap>
                    </ModalForm>
                    <OrderPrice defaultPrice={modalData.price} watch={watch}/>
                </ModalContentWrap>
                <MenuDetailBtnWrap>
                    {modalType === "menuDetail" &&
                        <>
                            <SubBtn text={"장바구니에 담기"} onClick={handleSubmit((data) => handlePutInCart(data))}/>
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