import React from "react";
import { FlexOnly, Font, VerticalSpace } from "@assets/styles/CommonStyle";
import StoreInfo from "./components/StoreInfo";
import StoreReview from "./components/StoreReview";
import StoreHeader from "./components/StoreHeader";
import StoreOrderInfo from "./components/StoreOrderInfo";
import StoreMenu from "./components/StoreMenu";
import useTab from "../../../hooks/useTab";
import useGetStore from "./hooks/useGetStore";
import Loading from "@components/common/Loading/Loading";
import { MenuTab } from "@pages/user/StorePage/StorePage.styles";
import { TAB_CONTENTS } from "@constants/formFields";

function StorePage() {
  const { currentItem, setCurrentItem } = useTab(0, TAB_CONTENTS.STORE);
  const { storeData, isLoading } = useGetStore();

  return (
    <div>
      {isLoading && <Loading />}
      <StoreHeader storeHeader={storeData?.storeHeader} storeId={storeData?.storeId} />
      <StoreOrderInfo
        address={storeData?.storeInfo.businessAddress}
        deliveryInfo={storeData?.orderMethod.delivery}
        takeoutInfo={storeData?.orderMethod.takeout}
      />
      <VerticalSpace />
      <FlexOnly width={"100%"}>
        {TAB_CONTENTS.STORE.map((content, idx) => (
          <MenuTab
            key={content.key}
            $isOn={currentItem.key === content.key}
            onClick={() => setCurrentItem(idx)}
          >
            <Font> {content.tab}</Font>
          </MenuTab>
        ))}
      </FlexOnly>
      {currentItem.key === 0 && (
        <StoreMenu notice={storeData?.notice} menuInfo={storeData?.menuInfo} />
      )}
      {currentItem.key === 1 && <StoreInfo storeInfo={storeData?.storeInfo} />}
      {currentItem.key === 2 && <StoreReview />}
    </div>
  );
}

export default StorePage;
