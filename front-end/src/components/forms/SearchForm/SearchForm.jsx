import React from 'react';
import Input from "../../common/Input/Input";
import resetIcon from "../../../assets/img/reset.png";
import {MainButton} from "../../common/Button/main/MainButton";
import {LocationBtn, SearchInputForm, SearchInputWrapper} from "./SearchFormLayout";
import locationIcon from "../../../assets/img/my_location.png";
import {useRecoilState, useSetRecoilState} from "recoil";
import {isModalOpenState} from "../../../recoil/flag/atoms";
import {coordsState} from "../../../recoil/map/atoms";

function SearchForm() {
    const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState)
    const setCoords = useSetRecoilState(coordsState)
    const onClickCoords = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(`lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`)
            setCoords({center: {lat: position.coords.latitude, lng: position.coords.longitude}, isPanto: true})
        })
    }
    return (
        <SearchInputWrapper>
            <LocationBtn type={"button"} onClick={
                isModalOpen ? onClickCoords : () => setIsModalOpen(true)}>
                <img src={locationIcon} alt="구글 위치 아이콘"/>
            </LocationBtn>
            <SearchInputForm>
                <Input type={"text"}/>
                <img src={resetIcon} alt="구글 리셋 아이콘"/>
                <MainButton type={"submit"} text={"검색"}/>
            </SearchInputForm>
        </SearchInputWrapper>

    );
}

export default SearchForm;