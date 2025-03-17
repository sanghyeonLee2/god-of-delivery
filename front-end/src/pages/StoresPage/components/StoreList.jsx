import React from 'react';
import * as S from "./StoreListLayout";
import StoreBox from "./StoreBox";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreList({categoryName, storesData}) {
    return (
        <S.StoresOuter>
            <Font>
                {categoryName}
            </Font>
            <S.StoresInner>
                {storesData?.map((storeData) =>
                    <StoreBox storeInfo={storeData} key={storeData.storeId}/>)}
            </S.StoresInner>
        </S.StoresOuter>
    );
}

export default StoreList;