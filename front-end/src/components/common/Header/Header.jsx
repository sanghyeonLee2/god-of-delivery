import React from 'react';
import {HeaderInnerLayout, HeaderOuterLayout, Logo} from "./HeaderLayout";
import {Button} from "../Button/Button";

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
