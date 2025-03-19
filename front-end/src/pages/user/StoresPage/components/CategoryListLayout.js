import {flexLayout} from "../../../../assets/styles/Mixin";
import styled from "styled-components";
import {COLORS} from "../../../../assets/styles/colors";

export const CategoryListWrap = styled.ul`
    @media (max-width: 880px ) {
        display: none;
    }
    padding: 0 25px;
    height: 75px;
    margin: 0 auto;
    max-width: 1100px;
    flex-wrap: wrap;
    gap: 0;
    ${flexLayout("space-between", "center")}
`
export const CategoryElement = styled.li`
    background-color: ${({$clicked, id}) => $clicked === id && COLORS.BTN.SUB};
    flex: 1 1 calc(100% / 12);
    text-align: center;
    height: 100%;

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