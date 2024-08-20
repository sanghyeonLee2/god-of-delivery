import React from 'react';
import {
    HeaderMainText,
    HeaderTextWrapper,
    LocationBtn,
    LocationBtnIcon,
    ResetIcon,
    SearchBoxInner,
    SearchBoxMainText,
    SearchBoxOuter,
    SearchBoxTextOuter,
    SearchForm,
    SearchInputWrapper
} from "./SearchSectionLayout";
import locationIcon from "../../../assets/img/my_location.png";
import resetIcon from "../../../assets/img/reset.png";
import {Button} from "../../common/Button/Button";
import Input from "../../common/Input/Input";

function SearchSection(props) {
    return (
        <SearchBoxOuter>
            <SearchBoxInner>
                <SearchBoxTextOuter>
                    <HeaderTextWrapper>
                        <HeaderMainText>
                            헤더 메인 텍스트 입니다
                        </HeaderMainText>
                        <SearchBoxMainText>
                            배달 받으실 위치를 입력해 주세요
                        </SearchBoxMainText>
                    </HeaderTextWrapper>
                </SearchBoxTextOuter>
                <SearchInputWrapper>
                    <LocationBtn type={"button"}>
                        <LocationBtnIcon src={locationIcon} alt="구글 아이콘"/>
                    </LocationBtn>
                    <SearchForm>
                        <Input type={"text"}/>
                        <ResetIcon src={resetIcon} alt="구글 아이콘"/>
                        <Button type={"submit"} text={"검색"}/>
                    </SearchForm>
                </SearchInputWrapper>
            </SearchBoxInner>
        </SearchBoxOuter>
    );
}

export default SearchSection;