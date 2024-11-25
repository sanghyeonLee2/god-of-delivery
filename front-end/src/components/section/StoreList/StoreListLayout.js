import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";

export const RecommendedOuter = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    padding-top: 20px;
    height: 100%;
`

export const RecommendedWrap = styled.ul`
    padding-top: 10px;
    ${flexLayout("space-between")};
    flex-wrap: wrap;
}
`