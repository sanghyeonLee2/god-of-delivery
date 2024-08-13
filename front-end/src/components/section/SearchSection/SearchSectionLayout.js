import styled from "styled-components";
import {elementSize, flexLayout} from "../../../assets/styles/Mixin";
import searchBoxBackground from "../../../assets/img/search-box-background.jpg";

export const SearchBoxOuter = styled.div`
  height: 77%;
  background-image: url(${searchBoxBackground});
  background-size: cover; /* 또는 contain */
  background-position: center;
  ${flexLayout("center", "center")}
`
export const SearchBoxInner = styled.div`
  ${elementSize("580px", "200px")};
`
export const SearchBoxTextOuter = styled.div`
  ${flexLayout("center", "center")}
`

export const HeaderMainText = styled.p`
  font-size: 40px;
  font-weight: bolder;
  color: white;
`

export const SearchBoxMainText = styled.p`
  font-size: larger;
  padding-top: 10px;
  color: white;
`


export const HeaderTextWrapper = styled.section`
  text-align: center;
  margin-top: 12px;
`
export const SearchInputWrapper = styled.div`
  margin-top: 33px;
  height: 50px;
  ${flexLayout("space-between")}
`

export const LocationBtn = styled.button`
  background-color: white;
  width: 11%;
`

export const LocationBtnIcon = styled.img`
  ${elementSize("33px", "33px")}
`
export const SearchForm = styled.form`
  position: relative;
  ${flexLayout};
  width: 87%;

  button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    ${elementSize("14%", "100%")};
  }
`
export const SearchInput = styled.input`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  ${elementSize("86%", "100%")};
`

export const ResetIcon = styled.img`
  position: absolute;
  left: 390px;
  top: 10px;
  cursor: pointer;
  ${elementSize("31px", "31px")}
`