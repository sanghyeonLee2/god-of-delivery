import styled from "styled-components";
import { flexLayout, setBorder } from "../../../../assets/styles/Mixin";
import { COLORS } from "../../../../assets/styles/colors";

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

export const SearchSlide = styled.div`
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: ${({ $open }) => ($open ? "8rem" : "0rem")};
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  transition: height 0.3s ease-in-out;
  z-index: 99;
  ${flexLayout("center", "center")};
  padding: ${({ $open }) => ($open ? "0 1.5rem" : "0 1.5rem")};
`;

export const UserMenuWrap = styled.div`
  position: relative;
  cursor: pointer;

  a {
    height: 100%;
  }

  ul {
    li:not(:last-child) {
      border-bottom: 1px solid black;
    }

    display: none;
    border: 1px solid black;
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
    background-color: #f0f0f0;
    color: ${COLORS.BTN.SUB};
  }
`;
