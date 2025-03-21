import React from 'react';
import {ModalContentWrap, ModalForm,} from "../ModalLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import {ModalBtn, TransBtn} from "../../common/Button/main/MainButton";
import MenuDetailOptions from "./components/MenuDetailOptions";
import * as S from "./MenuDetailModalLayout";
import MenuDetailProlog from "./components/MenuDetailProlog";
import useMenuDetails from "../../../hooks/useMenuDetails";
import Loading from "../../common/Loading/Loading";
import OrderPrice from "components/modal/MenuDetail/components/OrderPrice";
import {quantityOnChg} from "../../../utils/clickHandler";

function MenuDetailModal({modalType, modalData}) {
    const {form, query, mutate} = useMenuDetails(modalData.api)
    if (query.isLoading) {
        return <Loading/>
    }
    return (
        <>
            <ModalContentWrap $modalType={modalType}>
                {query.isLoading && <Loading/>}
                <MenuDetailProlog imgUrl={query.menuData?.imgUrl} name={query.menuData?.name}
                                  description={query.menuData?.description}/>
                <S.MenuDetailTextWrap>
                    <Font>가격</Font>
                    <Font>{query.menuData?.price.toLocaleString()}원</Font>
                </S.MenuDetailTextWrap>
                <ModalForm>
                    <MenuDetailOptions getValues={form.getValues} setValue={form.setValue}
                                       menuCategories={query.menuData?.MenuCategories} control={form.control}/>
                    <S.MenuDetailTextWrap>
                        <Font>수량</Font>
                        <S.SelectQuantityWrap>
                            <TransBtn type={"button"} text={"-"}
                                      onClick={() => quantityOnChg(-1, form.getValues, form.setValue, "quantity")}/>
                            <div>{form.watch("quantity")}</div>
                            <TransBtn type={"button"} text={"+"}
                                      onClick={() => quantityOnChg(1, form.getValues, form.setValue, "quantity")}/>
                        </S.SelectQuantityWrap>
                    </S.MenuDetailTextWrap>
                </ModalForm>
                <OrderPrice defaultPrice={query.menuData?.price}
                            menuCategories={query.menuData?.MenuCategories}
                            watch={form.watch}/>
            </ModalContentWrap>
            {modalType === "메뉴상세" &&
                <ModalBtn isLoading={mutate.isCartPosting} text={"장바구니에 담기"}
                          onClick={form.handleSubmit((data) => mutate.handlePostCart(data))}/>
            }
            {modalType === "메뉴수정" &&
                <ModalBtn text={"수정하기"}
                          isLoading={mutate.isUpdatingCart}
                          onClick={form.handleSubmit((data) => mutate.handleUpdateCart(modalData.cartItemId))}/>
            }
        </>
    );
}

export default MenuDetailModal;