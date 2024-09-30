import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const StoreOuter = styled.li`
  border: lightgray 1px solid;
  position: relative;
  margin-top: 14px;
  ${flexLayout("center", "center")}
  ${elementSize("49%", "120px")}
`
export const StoreInner = styled.div`
  ${flexLayout}
  ${elementSize("95%", "75%")}
`
export const StoreLogo = styled.div`
  background-color: brown;
  ${elementSize("22%", "100%")}`
export const StoreTitle = styled.p`
  font-size: x-large;
`
export const StoreInfoWrapper = styled.div`
  padding: 12px 20px;
  width: 100%;
`
export const StoreInfoUl = styled.ul`
  ${flexLayout}
`
export const StoreAboutText = styled.small`
  font-weight: bold;
  color: ${(props) => {
    switch (props?.name) {
      case "rating":
        return "#FFA800"
      case "pass":
        return "red"
      case "minimum":
        return "gray"
      default:
        return "black"
    }
  }}
`
export const AverageTimeLi = styled.li`
  position: absolute;
  right: 10px;
  bottom: 10px;

  small {
    color: gray;
  }
`
