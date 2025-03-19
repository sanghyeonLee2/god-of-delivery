import styled from "styled-components";
import {COLORS} from "../../../assets/styles/colors";
import {innerPadding} from "../../../assets/styles/CommonStyle";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const MenuDetailTextWrap = styled.div`
    ${innerPadding()};
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
