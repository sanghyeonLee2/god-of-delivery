import React from 'react';
import {
    HeaderMainText,
    HeaderTextWrap,
    SearchBoxInner,
    SearchBoxMainText,
    SearchBoxOuter,
    SearchBoxTextOuter
} from "./SearchSectionLayout";
import SearchForm from "../../forms/SearchForm/SearchForm";

function SearchSection(props) {
    return (
        <SearchBoxOuter>
            <SearchBoxInner>
                <SearchBoxTextOuter>
                    <HeaderTextWrap>
                        <HeaderMainText>
                            헤더 메인 텍스트 입니다
                        </HeaderMainText>
                        <SearchBoxMainText>
                            배달 받으실 위치를 입력해 주세요
                        </SearchBoxMainText>
                    </HeaderTextWrap>
                </SearchBoxTextOuter>
                <SearchForm/>
            </SearchBoxInner>
        </SearchBoxOuter>
    );
}

export default SearchSection;