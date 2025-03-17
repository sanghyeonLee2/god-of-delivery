import styled from "styled-components";
import {innerPadding} from "../../../assets/styles/CommonStyle";
import {flexLayout} from "../../../assets/styles/Mixin";


export const InfoBox = styled.div`
    ${innerPadding()};
    border-radius: 10px;
    background-color: #F6F6F6;
`

export const MenuInfoWrap = styled.ul`
    padding: 15px 0;
    ${flexLayout("space-between")};

    img {
        border-radius: 10px;
    }
`