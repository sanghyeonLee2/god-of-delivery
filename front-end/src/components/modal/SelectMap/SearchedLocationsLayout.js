import styled from "styled-components";
import {innerPadding} from "../../../assets/styles/CommonStyle";

export const LocationsInfoWrap = styled.ul`
    min-height: 30px;
    margin: 10px auto;
    width: 80%;
    border: 1px solid;
`
export const LocationsInfoItem = styled.li.attrs(({isBottom}) => ({
    isBottom: undefined // isBottom을 DOM에서 제거
}))`
    background-color: white;

    &:hover {
        filter: brightness(0.95);
    }

    ${innerPadding()};
    border-bottom: ${(props) => (props.isBottom ? "none" : "1px solid")};
`;

