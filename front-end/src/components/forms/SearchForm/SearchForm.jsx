import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import {useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import {useLocation} from "react-router-dom";
import useClick from "../../../hooks/useClick";

function SearchForm() {
    const location = useLocation()
    const setIsModalOpen = useSetRecoilState(isModalOpenState)
    const setClickEvent = (pathname) => {
        pathname !== "/" && setIsModalOpen(true)
    }
    const onClick = useClick(() => setClickEvent(location.pathname))
//react-hook-form으로 변경....ㅜ
    return (
        <SearchInputForm>
            <Input type={"text"}
                   ref={onClick}
                   placeholder={location.pathname === "/" ? "배고프니까 일단 검색" : "주소 검색"}
            />
            <SubBtn type={"submit"} text={"검색"}/>
        </SearchInputForm>
    );
}

export default SearchForm;