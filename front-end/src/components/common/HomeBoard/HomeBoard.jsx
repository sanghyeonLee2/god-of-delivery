import React from 'react';
import {SearchBoxOuter} from "components/common/Header/HeaderLayout";
import {Font} from "../../../assets/styles/CommonStyle";
import StoreSearchForm from "components/forms/SearchForm/StoreSearchForm";

function HomeBoard(props) {
    return (
        <SearchBoxOuter>
            <section>
                <h2>
                    헤더 메인 텍스트 입니다
                </h2>
                <Font color={"white"}>
                    배달 받으실 위치를 입력해 주세요
                </Font>
                <StoreSearchForm/>
            </section>
        </SearchBoxOuter>
    );
}

export default HomeBoard;