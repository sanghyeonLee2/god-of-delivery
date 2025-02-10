import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";
import {outerPadding} from "../../../assets/styles/CommonStyle";

export const StoresOuter = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    ${outerPadding()}
`

export const StoresInner = styled.ul`
    padding-top: 10px;
    ${flexLayout("space-between")};
    flex-wrap: wrap;
}
`