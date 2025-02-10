import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import {COLORS} from "../../../assets/styles/colors";


export const CategoryListWrap = styled.ul`
    @media (max-width: 880px ) {
        display: none;
    }
    max-width: 1100px;
    height: 75px;
    margin: 0 auto;
    ${flexLayout("center", "center")}`

export const CategoryElement = styled.li`
    ${elementSize("7.5%", "100%")};
    ${flexLayout("center", "center")};
    background-color: ${(props) => props.$clicked === props.id && COLORS.BTN.SUB};

    p {
        color: ${(props) => props.$clicked === props.id && "white"}
    }

    &:hover {
        background-color: ${COLORS.BTN.SUB};

        p {
            color: white;
        }
    }
`;

