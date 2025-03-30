import styled from "styled-components";
import { elementSize, flexLayout } from "../../assets/styles/Mixin";
import { innerPadding } from "../../assets/styles/CommonStyle";

export const ModalOuter = styled.div`
  ${elementSize("100vw", "100vh")};
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 111;
  top: 0;
  left: 0;
  padding-top: 50px;
  ${flexLayout("center", "flex-start")};
`;
export const ModalInner = styled.div`
  max-width: 100vw;
  border-radius: 10px;
  position: relative;
  ${elementSize("460px", "600px")};
  background-color: white;
  overflow-y: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-height: 780px) {
    height: 500px;
  }
`;
export const ModalTitleDescriptionWrap = styled.div`
  ${innerPadding()};

  p {
    text-align: center;
  }
`;
export const ModalContentWrap = styled.div`
  overflow-y: auto;
  max-height: calc(100% - ${({ $isNeedSpace }) => ($isNeedSpace ? "230px" : "120px")});
`;
