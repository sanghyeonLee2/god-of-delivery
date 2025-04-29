import styled from "styled-components";
import { COLORS } from "@constants/style";
import { flexLayout } from "@assets/styles/Mixin";

export const SearchSlideWrap = styled.div`
  background-color: ${COLORS.BACKGROUND};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: ${({ $open }) => ($open ? "8rem" : "0rem")};
  overflow: hidden;
  border-bottom: 1px solid ${({ $open }) => ($open ? COLORS.BORDER : "0rem")};
  border-top: 1px solid ${({ $open }) => ($open ? COLORS.BORDER : "0rem")};
  transition: height 0.3s ease-in-out;
  z-index: 99;
  ${flexLayout("center", "center")};
  padding: ${({ $open }) => ($open ? "0 1.5rem" : "0 1.5rem")};
`;
