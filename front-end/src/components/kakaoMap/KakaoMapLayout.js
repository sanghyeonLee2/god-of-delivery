import styled from "styled-components";

export const CurrentLocationBtn = styled.button`
    position: absolute;
    right: 55px;
    bottom: 10px;
    z-index: 10;
`

export const MapWrap = styled.div`
    height: 350px;
    margin-top: 10px;
    position: relative;
    @media (max-height: 780px ) {
        height: 130px;
    }
`