import React, {useState} from 'react';
import Input from "../../common/Input/Input";
import {SubBtn} from "../../common/Button/main/MainButton";
import {SearchInputForm} from "./SearchFormLayout";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import SearchedLocations from "../../modal/SelectMap/SearchedLocations";

function SearchForm() {
    const location = useLocation()
    const {register, handleSubmit} = useForm()
    const [locationInfo, setLocationInfo] = useState([])

    const searchLocation = (keyword) => {
        const ps = new window.kakao.maps.services.Places()
        ps.keywordSearch(keyword, (data, status, _pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setLocationInfo(data)
            } else {
                alert("검색결과가 없습니다.")
                setLocationInfo([])
            }
        })
    }

    return (
        <>
            <SearchInputForm onSubmit={handleSubmit((data) => searchLocation(data.searchKeyword))}>
                <Input type={"text"}
                       register={register("searchKeyword")}
                       placeholder={location.pathname === "/" ? "배고프니까 일단 검색" : "주소 검색"}
                />
                <SubBtn type={"submit"} text={"검색"}/>
            </SearchInputForm>
            {locationInfo.length > 0 &&
                <SearchedLocations locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>}
        </>
    );
}

export default SearchForm;