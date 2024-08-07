import React from 'react';
import {HeaderInnerLayout, HeaderOuterLayout} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";

export function Header(props) {
    return (
        <HeaderOuterLayout>
            <HeaderInnerLayout>
                <Logo>배달의 신</Logo>
                <Button/>
            </HeaderInnerLayout>
        </HeaderOuterLayout>
    );
}
