import React from "react";
import * as S from "./StoreList.styles";
import StoreBox from "./components/StoreBox";

function StoreList({ storesData, isDibs }) {
  return (
    <S.StoresOuter $isDibs={isDibs}>
      <S.StoresInner>
        {storesData?.map((storeData) => (
          <StoreBox storeInfo={storeData} key={storeData.storeId} />
        ))}
      </S.StoresInner>
    </S.StoresOuter>
  );
}

export default StoreList;
