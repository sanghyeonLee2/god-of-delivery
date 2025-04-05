import styled from "styled-components";
import { flexLayout, setBorder } from "@assets/styles/Mixin";
import { COLORS } from "@constants/style";

export const HeaderLeft = styled.div`
  ${flexLayout("space-between", "center")};

  @media (max-width: 70rem) {
    width: auto;

    form {
      display: none;
    }
  }

  width: 40rem;
`;

export const UserMenuWrap = styled.div`
  position: relative;
  cursor: pointer;

  a {
    height: 100%;
  }

  ul {
    li:not(:last-child) {
      border-bottom: 1px solid ${COLORS.BORDER};
    }

    display: none;
    border: 1px solid ${COLORS.BORDER};
    right: 0;
    width: 13rem;
    background-color: white;
    position: absolute;
    top: 100%;
    box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.3);
    ${setBorder()};
    overflow: hidden;
    z-index: 101;
  }

  li {
    align-content: center;
    text-align: center;
    height: 6rem;
  }

  li:hover {
    background-color: ${COLORS.HOVER};
    color: ${COLORS.BTN.SUB};
  }
`;
