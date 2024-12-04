import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import {useLocation} from "react-router-dom";

function SearchForm() {
    const location = useLocation()
    return (
        <SearchInputForm>
            <Input type={"text"}
                   placeholder={location.pathname === "/" ? "배고프니까 일단 검색" : "주소 검색"}
            />
            <SubBtn type={"submit"} text={"검색"}/>
        </SearchInputForm>
    );
}

export default SearchForm;