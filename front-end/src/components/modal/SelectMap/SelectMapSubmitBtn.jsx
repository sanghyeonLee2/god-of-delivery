import React from 'react';
import {ModalBtn} from "components/common/Button/main/MainButton";
import {usePostAddress} from "../../../hooks/usePostAddress";

function SelectMapSubmitBtn(props) {
    const {handlePostAddress, isPostingAddress, addressesState} = usePostAddress()
    if (addressesState === "loading")
        return <ModalBtn text={"로딩중..."}/>
    if (addressesState === "hasError")
        return <ModalBtn text={"에러가 발생했습니다"}/>
    return (
        <ModalBtn text={"등록"} onClick={handlePostAddress}/>
    );
}

export default SelectMapSubmitBtn;