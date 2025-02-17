import React from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import {useForm} from "react-hook-form";
import SearchedLocations from "../../modal/SelectMap/SearchedLocations";
import useSearchLocation from "../../../hooks/useSearchLocation";

function LocationSearchForm() {
    const {register, handleSubmit} = useForm()
    const {locationInfo, searchLocation, setLocationInfo} = useSearchLocation()

    return (
        <>
            <SearchInputForm onSubmit={handleSubmit((data) => searchLocation(data.searchKeyword))}>
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