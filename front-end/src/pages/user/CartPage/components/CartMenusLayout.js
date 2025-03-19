import styled from "styled-components";
import {elementSize, flexLayout, setBorder} from "../../../../assets/styles/Mixin";
import {exampleColor, outerPadding} from "../../../../assets/styles/CommonStyle";

export const CartMenuBox = styled.div`
    ${setBorder()};
    min-height: 100px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: none;
`

export const MenuOptionWrap = styled.ul`
    ${outerPadding()};
    border-bottom: 1px solid gray;
`
export const MenuOptionLeft = styled.div`
    ${flexLayout("space-between")};
`
export const MenuOptionImg = styled.div`
    border-radius: 8px;
    ${elementSize("70px", "70px")};
    ${exampleColor()};
`