import React from 'react';
import {TitleTextWrap} from "./TiltleTextLayout";

function TitleText({text, size = "middle"}) {
    return (
        <TitleTextWrap size={size}>
            <p>{text}</p>
        </TitleTextWrap>);
}

export default TitleText;