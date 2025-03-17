import React from 'react';
import {StoresInner, StoresOuter} from "./StoreListLayout";
import StoreBox from "./StoreBox";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreList({categoryName, storesData}) {
    return (
        <StoresOuter>
            <Font>
                {categoryName}
            </Font>
            <StoresInner>
                {storesData?.map((storeData) =>
                    <StoreBox storeInfo={storeData} key={storeData.storeId}/>)}
            </StoresInner>
        </StoresOuter>
    );
}

export default StoreList;