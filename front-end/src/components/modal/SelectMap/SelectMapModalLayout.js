import styled from "styled-components";
import {flexLayout} from "../../../assets/styles/Mixin";

export const ModalOuter = styled.div`
  width: 720px;
  max-height: 900px;
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
  height: 7%;`

export const MapAddressForm = styled.form`
  height: 47%;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;

  ${flexLayout("space-evenly", "center")}
  button {
    width: 100%;
  }
`