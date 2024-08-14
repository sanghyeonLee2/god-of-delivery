import styled from "styled-components";
import {elementSize, flexLayout} from "../../assets/styles/Mixin";

export const CategoryOuter = styled.main`
  margin-top: 20px;
  ${elementSize("100%", "1280px;")}
`
export const CategoryInner = styled.div`
  margin: 0 auto;
  max-width: 60%;
  height: 100%;
  ${flexLayout("space-between")};
  flex-wrap: wrap;
`
export const CategoryBox = styled.div`
  ${elementSize("300px", "300px")}
  border: lightgray 1px solid;
  position: relative;
  cursor: pointer;
`
export const CategoryText = styled.p`
  margin-top: 25px;
  margin-left: 25px;
`
export const CategoryImg = styled.img`
  position: absolute;
  left: 130px;
  top: 130px;
`