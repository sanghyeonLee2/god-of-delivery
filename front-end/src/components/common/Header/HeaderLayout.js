import styled from "styled-components";
import { flexLayout, setBorder, textHover } from "../../../assets/styles/Mixin";
import { innerPadding } from "../../../assets/styles/CommonStyle";
import { COLORS } from "../../../assets/styles/colors";

export const HeaderInner = styled.div`
  margin: 0 auto;
  ${flexLayout("space-between", "center")};
  max-width: 1100px;
  height: 92px;
  ${innerPadding()};

  button {
    ${textHover()};
  }
`;
export const HeaderLeft = styled.div`
  ${flexLayout("space-between", "center")};
  @media (max-width: 700px) {
    width: auto;
    form {
      display: none;
    }
  }
  width: 420px;
`;
export const SearchSlide = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: ${({ $open }) => ($open ? "80px" : "0px")};
  overflow: hidden;
  background-color: white;
  border-bottom: 1px solid #d9d9d9;
  transition: height 0.3s ease-in-out;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $open }) => ($open ? "0 15px" : "0 15px")};
`;

export const HeaderOuter = styled.div`
  border-bottom: 1px solid #d9d9d9;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
    width: 130px;
    background-color: white;
    position: absolute;
    top: 100%;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
    ${setBorder()};
    overflow: hidden;
    z-index: 101;
  }

  li {
    text-align: center;
    height: 60px;
  }

  li:hover {
    background-color: #f0f0f0;
    color: ${COLORS.BTN.SUB};
  }
`;
