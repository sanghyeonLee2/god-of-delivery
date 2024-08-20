import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";

export const CategoryOuter = styled.main`
  margin-top: 18px;
  min-height: 1190px;
`
export const CategoryInner = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  height: 100%;
  ${flexLayout("space-between")};
  flex-wrap: wrap;
`
export const CategoryBox = styled.div`
  ${elementSize("280px", "280px")}
  border: lightgray 1px solid;
  position: relative;
  cursor: pointer;
  margin-bottom: 18px;
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