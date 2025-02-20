import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";
import {outerPadding} from "../../assets/styles/CommonStyle";

export const StoreOuter = styled.div`
    max-width: 800px;
    margin: 0 auto;
`
export const MenuTabWrap = styled.ul`
    display: flex;

    li {
        ${elementSize("33.33%", "60px")}
    }
`
export const MenuTab = styled.div`
    ${flexLayout("center", "center")};
    border-right: ${(props) => props.value && "grey 1px solid"};
    border-left: ${(props) => props.value && "grey 1px solid"};
    border-top: ${(props) => props.value ? "black 3px solid" : "transparent 3px solid "};
    border-bottom: ${(props) => props.value ? "transparent 1px solid" : "grey 1px solid"};
    height: 100%;
`

export const MenuInfoTapWrap = styled.div`
    padding-top: 10px;

    > div {
        ${outerPadding()}
    }
`

