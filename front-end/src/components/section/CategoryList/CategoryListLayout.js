import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";

export const CategoryListOuter = styled.div`
  height: 75px;
  border-bottom: 1px solid #d9d9d9;`

export const CategoryListInner = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;`

export const CategoryListUl = styled.ul`
  ${flexLayout("center", "center")}
  height: 100%;`
export const CategoryListLi = styled.li`
  ${elementSize("7.3%", "100%")};
  ${flexLayout("center", "center")};
  background-color: ${(props) => props.id === props.clicked && "#333333"};

  span {
    color: ${(props) => props.id === props.clicked && "white"}
  }

  &:hover {
    background-color: #333333;

    span {
      color: white;
    }
  }

`
export const SearchImg = styled.img`
  border: lightgray 1px solid;
  border-radius: 3px;
`
export const CategoryListSearchLi = styled.li`
  ${flexLayout("center")}
  width: 5%;
`

