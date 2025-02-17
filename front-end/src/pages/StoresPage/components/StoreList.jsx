import React from 'react';
import {StoresInner, StoresOuter} from "./StoreListLayout";
import StoreBox from "./StoreBox";
import {Font} from "../../../assets/styles/CommonStyle";
import categoryDummy from "../../../assets/data/categoryDummy.json";

function StoreList({categoryId, storesData}) {
    const category = categoryDummy.find((category) => category.id === categoryId)
    return (
        <StoresOuter>
            <Font>
                {category.name}
            </Font>
            <StoresInner>
                {storesData?.map((e) => <StoreBox storeInfo={e} key={e.storeId}/>)}
            </StoresInner>
        </StoresOuter>
    );
}

export default StoreList;