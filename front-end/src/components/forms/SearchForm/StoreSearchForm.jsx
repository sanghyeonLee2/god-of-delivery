import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import {useForm} from "react-hook-form";
import useGetStores from "../../../hooks/useGetStores";

function StoreSearchForm() {
    const {setKeyword} = useGetStores("stores")
    const {handleSubmit, register} = useForm()
    return (
        <SearchInputForm onSubmit={handleSubmit((data) => setKeyword(data.keyword))}>
            <Input type={"text"} register={register("keyword")} placeholder={"음식점을 검색해 보세요"}/>
            <SubBtn type={"submit"} text={"검색"}/>
        </SearchInputForm>
    );
}

export default StoreSearchForm;