import React from 'react';
import {StoresInner, StoresOuter} from "./StoreListLayout";
import StoreBox from "../../StorePage/components/StoreBox";
import {Font} from "../../../assets/styles/CommonStyle";

function StoreList({categoryId, storesData}) {

    return (
        <StoresOuter>
            <Font>
                {categoryId}
            </Font>
            <StoresInner>
                {storesData?.map((e) => <StoreBox storeInfo={e} key={e.storeId}/>)}
            </StoresInner>
        </StoresOuter>
    );
}

export default StoreList;