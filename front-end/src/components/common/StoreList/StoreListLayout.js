import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";
import {outerPadding} from "../../../assets/styles/CommonStyle";

export const StoresOuter = styled.div`
    margin: 0 auto;
    max-width: 1100px;

    li {
        width: ${({$isDibs}) => ($isDibs ? "100%" : "49.5%")}; /* 기본적으로 width 적용 */

        @media (max-width: ${({$isDibs}) => ($isDibs ? "0px" : "880px")}) {
            width: 100%;
        }
    }

    ${({$isDibs}) => !$isDibs && outerPadding()}
`

export const StoresInner = styled.ul`
    padding-top: 10px;
    ${flexLayout("space-between")};
    flex-wrap: wrap;
}
`