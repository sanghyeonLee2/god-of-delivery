import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const RestaurantOuter = styled.li`
  border: lightgray 1px solid;
  position: relative;
  margin-top: 14px;
  ${flexLayout("center", "center")}
  ${elementSize("49%", "120px")}
`
export const RestaurantInner = styled.div`
  ${flexLayout}
  ${elementSize("95%", "75%")}
`
export const RestaurantLogo = styled.div`
  background-color: brown;
  ${elementSize("22%", "100%")}`
export const RestaurantTitle = styled.p`
  font-size: x-large;
`
export const RestaurantInfoWrapper = styled.div`
  padding: 12px 20px;
  width: 100%;
`
export const RestaurantInfoUl = styled.ul`
  ${flexLayout}
`
export const RestaurantAboutText = styled.small`
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
