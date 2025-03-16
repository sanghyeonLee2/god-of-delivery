import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import SearchedLocations from "../../modal/SelectMap/SearchedLocations";
import useSearchLocation from "../../../hooks/useSearchLocation";

function LocationSearchForm() {
    const {locationInfo, searchLocation, setLocationInfo, register, handleSubmit} = useSearchLocation()
    return (
        <>
            <SearchInputForm onSubmit={
                handleSubmit(({searchKeyword}) => searchLocation(searchKeyword))}>
                <Input type={"text"}
                       register={register("searchKeyword")}
                       placeholder={"주소를 검색해 보세요"}
                />
                <SubBtn type={"submit"} text={"검색"}/>
            </SearchInputForm>
            {locationInfo.length > 0 &&
                <SearchedLocations locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>}
        </>
    );
}

export default LocationSearchForm;