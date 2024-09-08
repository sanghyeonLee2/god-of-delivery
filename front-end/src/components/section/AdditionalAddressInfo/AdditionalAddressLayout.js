import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const AdditionalAddressWrapper = styled.div`
  ${flexLayout("space-evenly")};
  flex-direction: column;
  ${elementSize("100%", "150px")};

`