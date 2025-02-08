import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";

export const PaginationWrap = styled.div`
    height: 80px;`

export const PaginationInner = styled.ul`
    margin: 0 auto;
    max-width: 800px;
    height: 40px;
    ${flexLayout("center", "center")};

    li {
        margin: 0 10px;
    }
`

export const PageElement = styled.li`
    width: 30px;
    background-color: antiquewhite;
`