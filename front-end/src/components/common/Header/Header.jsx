import React from 'react';
import {
    HeaderInner,
    HeaderMainText,
    HeaderOuter,
    HeaderTextWrapper,
    HeaderWrapper,
    LocationBtn,
    LocationBtnIcon,
    ResetIcon,
    SearchBoxInner,
    SearchBoxMainText,
    SearchBoxOuter,
    SearchBoxTextOuter,
    SearchForm,
    SearchInput,
    SearchInputWrapper
} from "./HeaderLayout";
import {Button} from "../Button/Button";
import {Logo} from "../../../assets/styles/CommonStyle";
import locationIcon from "../../../assets/img/my_location.png";
import resetIcon from "../../../assets/img/reset.png";

export function Header(props) {
    return (
        <HeaderWrapper>
            <HeaderOuter>
                <HeaderInner>
                    <Logo>배달의 신</Logo>
                    <Button type={"button"} text={"회원가입"}/>
                    <Button type={"button"} text={"로그인"}/>
                </HeaderInner>
            </HeaderOuter>
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
                            <SearchInput/>
                            <ResetIcon src={resetIcon} alt="구글 아이콘"/>
                            <Button type={"submit"} text={"검색"}/>
                        </SearchForm>
                    </SearchInputWrapper>
                </SearchBoxInner>
            </SearchBoxOuter>
        </HeaderWrapper>
    );
}
