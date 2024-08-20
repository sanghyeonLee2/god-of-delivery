import styled from "styled-components";
import {elementSize} from "../../../assets/styles/Mixin";


export const SortingOuter = styled.div`
  height: 60px;
  border: lightgray 1px solid;
`

export const SortingInner = styled.div`
  margin: 0 auto;
  padding: 12px 1px;
  ${elementSize("55%", "100%")}
`

export const SortingSelect = styled.select`
  float: right;
  ${elementSize("35%", "60%")}
`