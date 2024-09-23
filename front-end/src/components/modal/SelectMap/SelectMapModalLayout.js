import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";


export const ModalOuter = styled.div`
  padding-top: 10px;
  ${flexLayout("center")}
  ${elementSize("100vw", "100vh")}
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`
export const ModalInner = styled.div`
  width: 720px;
  max-height: 800px;
  border-radius: 10px;
  background-color: white;
  @media (max-height: 780px ) {
    height: 570px;
  }
`
export const MapAddressForm = styled.form`
  height: 48%;
  width: 80%;
  margin: 0 auto;

  button {
    margin-top: 3px;
    width: 100%;
  }
`