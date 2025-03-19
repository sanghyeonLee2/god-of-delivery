import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import styled from "styled-components";
import {COLORS} from "../../../assets/styles/colors";

export const CategoryListWrap = styled.ul`
    @media (max-width: 880px ) {
        display: none;
    }
    height: 75px;
    margin: 0 auto;
    max-width: 1100px;
    ${flexLayout("center", "center")}
`
export const CategoryElement = styled.li`
    ${elementSize("7.5%", "100%")};
    background-color: ${({$clicked, id}) => $clicked === id && COLORS.BTN.SUB};
    ${flexLayout("center", "center")};

    p {
        color: ${({$clicked, id}) => $clicked === id && "white"}
    }

    &:hover {
        background-color: ${COLORS.BTN.SUB};

        p {
            color: white;
        }
    }
`;