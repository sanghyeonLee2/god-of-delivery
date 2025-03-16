import React from 'react';
import {MenuDetailImg, MenuDetailPrologWrap} from "./ModalComponentsLayout";
import {Font} from "../../../../assets/styles/CommonStyle";
import {ModalTitleDescriptionWrap} from "components/modal/ModalLayout";

function MenuDetailProlog({name, description}) {
    return (
        <MenuDetailPrologWrap>
            <MenuDetailImg/>
            <ModalTitleDescriptionWrap>
                <Font size={"large"}>{name}</Font>
                <Font size={"small"} color={"gray"}>{description}</Font>
            </ModalTitleDescriptionWrap>
        </MenuDetailPrologWrap>
    );
}

export default MenuDetailProlog;