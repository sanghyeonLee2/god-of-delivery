import {elementSize} from "../../../assets/styles/Mixin";
import styled from "styled-components";

export const SearchInputForm = styled.form`
    position: relative;
    margin: 0 auto;
    display: flex;
    ${elementSize("350px", "45px")};

    input {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border: black solid 1px;
        border-right: 0;

        ${elementSize("86%", "100%")};
    }

    button {
        border-bottom-left-radius: 0;
        border: black solid 1px;
        border-top-left-radius: 0;
        ${elementSize("20%", "100%")};
    }
`


