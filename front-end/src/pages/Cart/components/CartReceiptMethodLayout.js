import {flexLayout, setBorder} from "../../../assets/styles/Mixin";
import {outerPadding} from "../../../assets/styles/CommonStyle";
import styled from "styled-components";

export const MethodReceiptBox = styled.li`
    ${flexLayout("space-between", "center")};
    ${setBorder()};
    ${outerPadding()};
    height: 60px;
    margin-bottom: 20px;
`