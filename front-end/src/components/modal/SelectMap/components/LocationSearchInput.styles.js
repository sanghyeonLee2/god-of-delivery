import styled from "styled-components";
import { flexLayout } from "../../../../assets/styles/Mixin";
import { innerPadding } from "../../../../assets/styles/CommonStyle";

export const LocationSearchInputWrap = styled.div`
  height: 6rem;
  ${flexLayout("center", "center")};

  input {
    width: 80%;
    ${innerPadding()}
  }
`;
