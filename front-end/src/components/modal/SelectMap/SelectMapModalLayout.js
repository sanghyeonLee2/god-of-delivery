import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";

export const ModalOuter = styled.div`
  width: 720px;
  height: 650px;
  background-color: bisque;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const ModalTop = styled.div`
  margin: 0 auto;
  width: 580px;
  height: 12%;`

export const MapAddressWrapper = styled.div`
  height: 22%;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;

  ${flexLayout("space-evenly", "center")}
  button {
    width: 100%;
  }
`
export const RoadAddressWrapper = styled.strong`
`

export const AddressWrapper = styled.p`
`