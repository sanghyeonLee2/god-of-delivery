import styled from "styled-components";
import {exampleColor, innerPadding} from "../../../../assets/styles/CommonStyle";
import {flexLayout} from "../../../../assets/styles/Mixin";
import {COLORS} from "../../../../assets/styles/colors";

export const ModalHeaderWrap = styled.div`
    position: relative;
    height: 10%;
    padding-top: 14px;
    text-align: center;

    img {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`
export const MenuDetailPrologWrap = styled.div`
    min-height: 300px;
    border-bottom: 1px solid ${COLORS.BORDER};
`
export const MenuDetailImg = styled.div`
    ${exampleColor()};
    height: 230px;
`
export const MenuDetailDescriptionWrap = styled.div`
    ${innerPadding()};

    p {
        text-align: center;
    }
`

export const MenuDetailOptionsWrap = styled.div`
    border-bottom: 1px solid ${COLORS.BORDER};

    label {
        display: block;
    }
`
export const OptionWrap = styled.div`
    height: 45px;
    ${innerPadding()};
    ${flexLayout("space-between", "center")};
`
export const OrderPriceWrap = styled.div`
    ${exampleColor()};
    ${innerPadding()};
    ${flexLayout("space-between")};
    height: 60px;
`
