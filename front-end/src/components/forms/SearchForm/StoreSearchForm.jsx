import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import useGetStores from "../../../hooks/useGetStores";

function StoreSearchForm() {
    const {setKeyword, searchForm} = useGetStores(false)
    return (
        <SearchInputForm onSubmit={searchForm.handleSubmit((data) => setKeyword(data.keyword))}>
            <Input type={"text"} register={searchForm.register("keyword")} placeholder={"음식점을 검색해 보세요"}/>
            <SubBtn type={"submit"} text={"검색"}/>
        </SearchInputForm>
    );
}

export default StoreSearchForm;