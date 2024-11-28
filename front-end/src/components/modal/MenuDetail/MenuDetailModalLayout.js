import styled from "styled-components";
import {COLORS} from "../../../assets/styles/colors";
import {exampleColor, innerPadding} from "../../../assets/styles/CommonStyle";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const MenuDetailTextWrap = styled.div`
    ${innerPadding()}
    border-bottom: 1px solid ${COLORS.BORDER};
    ${flexLayout("space-between", "center")};
`

export const SelectQuantityWrap = styled.div`
    ${elementSize("100px", "30px")};
    ${flexLayout("center", "center")};
    border: 1px solid ${COLORS.BORDER};

    button {
        width: 30%;
    }

    div {
        text-align: center;
        width: 40%;
    }
`
export const MenuDetailBtnWrap = styled.div`
    ${exampleColor()};
    height: 10%;

    button:first-child {
        background-color: #555555;
        border-bottom-right-radius: 0;
    }

    button:nth-child(2) {
        border-bottom-left-radius: 0;
    }

    button {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        width: 50%;
    }
`