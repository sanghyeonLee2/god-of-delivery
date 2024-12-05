import React from 'react';
import {MenuDetailDescriptionWrap, MenuDetailImg, MenuDetailPrologWrap} from "./ModalComponentsLayout";
import {Font} from "../../../../assets/styles/CommonStyle";

function MenuDetailProlog({name, description}) {
    return (
        <MenuDetailPrologWrap>
            <MenuDetailImg/>
            <MenuDetailDescriptionWrap>
                <Font size={"large"}>{name}</Font>
                <Font size={"small"} color={"gray"}>{description}</Font>
            </MenuDetailDescriptionWrap>
        </MenuDetailPrologWrap>
    );
}

export default MenuDetailProlog;