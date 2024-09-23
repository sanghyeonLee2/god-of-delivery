import React from 'react';
import {LoadingWrapper} from "./LoadingLayout";
import spinner from "../../../assets/img/spinner.gif"

function Loading(props) {
    return (
        <LoadingWrapper>
            <div>
                <img src={spinner} alt={"로딩"} width={100}/>
                <p>로딩 중 입니다</p>
            </div>
        </LoadingWrapper>
    );
}

export default Loading;