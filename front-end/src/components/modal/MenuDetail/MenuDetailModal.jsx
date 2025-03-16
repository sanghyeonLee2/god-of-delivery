import React from 'react';
import {ModalContentWrap, ModalForm,} from "../ModalLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import {ModalBtn, TransBtn} from "../../common/Button/main/MainButton";
import MenuDetailOptions from "./components/MenuDetailOptions";
import {MenuDetailBtnWrap, MenuDetailTextWrap, ModalBtnWrap, SelectQuantityWrap} from "./MenuDetailModalLayout";
import MenuDetailProlog from "./components/MenuDetailProlog";
import useMenuDetails from "../../../hooks/useMenuDetails";
import Loading from "../../common/Loading/Loading";
import OrderPrice from "components/modal/MenuDetail/components/OrderPrice";
import {quantityOnChg} from "../../../utils/clickHandler";

function MenuDetailModal({modalType, api}) {
    const {form, query, mutate} = useMenuDetails(api)
    if (query.isLoading) {
        return <Loading/>
    }
    return (
        <>
            <ModalContentWrap $modalType={modalType}>
                <MenuDetailProlog name={query.menuData?.name} description={query.menuData?.description}/>
                <MenuDetailTextWrap>
                    <Font>가격</Font>
                    <Font>{query.menuData?.price.toLocaleString()}원</Font>
                </MenuDetailTextWrap>
                <ModalForm>
                    <MenuDetailOptions getValues={form.getValues} setValue={form.setValue}
                                       menuCategories={query.menuData?.menuCategories} control={form.control}/>
                    <MenuDetailTextWrap>
                        <Font>수량</Font>
                        <SelectQuantityWrap>
                            <TransBtn type={"button"} text={"-"}
                                      onClick={() => quantityOnChg(-1, form.getValues, form.setValue, "quantity")}/>
                            <div>{form.watch("quantity")}</div>
                            <TransBtn type={"button"} text={"+"}
                                      onClick={() => quantityOnChg(1, form.getValues, form.setValue, "quantity")}/>
                        </SelectQuantityWrap>
                    </MenuDetailTextWrap>
                </ModalForm>
                <OrderPrice defaultPrice={query.menuData?.price}
                            menuCategories={query.menuData?.menuCategories}
                            watch={form.watch}/>
            </ModalContentWrap>
            <MenuDetailBtnWrap>
                {modalType === "메뉴상세" &&
                    <ModalBtnWrap>
                        <ModalBtn text={"장바구니에 담기"}
                                  onClick={form.handleSubmit((data) => mutate.handlePostCart(data))}/>
                        <ModalBtn text={"주문하기"}/>
                    </ModalBtnWrap>}
                {modalType === "메뉴수정" &&
                    <ModalBtn text={"수정하기"}
                              onClick={form.handleSubmit((data) => mutate.handleUpdateCart(data))}/>
                }
            </MenuDetailBtnWrap>
        </>
    );
}

export default MenuDetailModal;