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

function MenuDetailModal(props) {
    const modalData = useRecoilValue(modalDataState)
    /*useEffect(() => {
        const prevScrollY = preventScroll();
        return () => {
            allowScroll(prevScrollY);
        };
    }, []);*/
    return (
        <ModalOuter onClick={() => console.log("ModalDetailModal")}>
            <ModalInner>
                <ModalHeader title={"메뉴 상세"}/>
                <ModalContentWrap>
                    <MenuDetailProlog name={modalData.name} description={modalData.description}/>
                    <MenuDetailTextWrap>
                        <Font>가격</Font>
                        <Font>{modalData.price.toLocaleString()}원</Font>
                    </MenuDetailTextWrap>
                    <MenuDetailOptions details={modalData.details}/>
                    <MenuDetailTextWrap>
                        <Font>수량</Font>
                        <SelectQuantityWrap>
                            <TransBtn text={"-"}/>
                            <div>1</div>
                            <TransBtn text={"+"}/>
                        </SelectQuantityWrap>
                    </MenuDetailTextWrap>
                    <ModalForm>
                    </ModalForm>
                    <OrderPrice price={modalData.price}/>
                </ModalContentWrap>
                <MenuDetailBtnWrap>
                    <SubBtn text={"장바구니에 담기"}/>
                    <SubBtn text={"주문하기"}/>
                </MenuDetailBtnWrap>
            </ModalInner>

        </ModalOuter>
    );
}

export default MenuDetailModal;