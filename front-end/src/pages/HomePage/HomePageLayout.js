import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";


export const CategoryWrap = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    ${flexLayout("space-between")};
    flex-wrap: wrap;
    padding: 10px 0;
`
export const CategoryBoxOuter = styled.div`
    ${elementSize("25%", "255px")};

    @media (max-width: 1200px) {
        width: 33.3%;
    }
    @media (max-width: 1100px) {
        width: 50%;
    }

    padding: 5px 5px;
    cursor: pointer;
    box-sizing: border-box;
`
export const CategoryBoxInner = styled.div`
    border: lightgray 1px solid;
    height: 100%;
    position: relative;
    cursor: pointer;
`
export const CategoryText = styled.p`
    margin-top: 25px;
    margin-left: 25px;
`
export const CategoryImg = styled.img`
    position: absolute;
    left: 90px;
    top: 108px;
`