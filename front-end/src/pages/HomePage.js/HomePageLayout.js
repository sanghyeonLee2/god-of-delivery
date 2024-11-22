import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";


export const CategoryWrap = styled.div`
    min-height: 1075px;
    max-width: 1180px;
    margin: 0 auto;
    height: 100%;
    ${flexLayout("space-between")};
    flex-wrap: wrap;
    padding: 10px 0
`
export const CategoryBoxOuter = styled.div`
    ${elementSize("285px", "255px")};

    @media (max-width: 1200px) {
        width: 32.8%;
    }
    @media (max-width: 1100px) {
        width: 49.1%;
    }
    position: relative;
    padding: 4px 2px;
    cursor: pointer;
`
export const CategoryBoxInner = styled.div`
    border: lightgray 1px solid;
    height: 100%;

    cursor: pointer;
`
export const CategoryText = styled.p`
    margin-top: 25px;
    margin-left: 25px;
`
export const CategoryImg = styled.img`
    position: absolute;
    left: 106px;
    top: 108px;
`