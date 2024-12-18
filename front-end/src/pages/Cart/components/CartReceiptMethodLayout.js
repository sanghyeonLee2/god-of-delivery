import {flexLayout, setBorder} from "../../../assets/styles/Mixin";
import {outerPadding} from "../../../assets/styles/CommonStyle";
import styled from "styled-components";
import {COLORS} from "../../../assets/styles/colors";

export const MethodReceiptBox = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== 'isChecked',
})`
    background-color: ${(props) => props.isChecked && COLORS.BORDER};
    ${flexLayout("space-between", "center")};
    ${setBorder()};
    ${outerPadding()};
    height: 60px;
    margin-bottom: 20px;
`;
