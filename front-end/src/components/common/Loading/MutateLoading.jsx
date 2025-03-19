import React from 'react';
import {ReactComponent as Spinner} from "../../../assets/img/Rolling@1x-1.0s-200px-200px.svg";
import {FlexOnly} from "../../../assets/styles/CommonStyle"; // SVG를 컴포넌트로 import

function MutateLoading() {
    return (
        <FlexOnly justify={"center"}>
            <Spinner width={35} height={35} className="loading-icon"/>
        </FlexOnly>
    );
}

export default MutateLoading;