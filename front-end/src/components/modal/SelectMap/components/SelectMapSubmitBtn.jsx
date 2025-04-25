import React from "react";
import { usePatchAddress } from "../hooks/usePatchAddress";
import { useRecoilValue } from "recoil";
import { isSearchLoadingState } from "@recoil/flag/atoms";
import { ModalBtn } from "@components/common/Button/main/MainButtons";

function SelectMapSubmitBtn() {
  const { updateAddress, isUpdatingAddress, addressesState } = usePatchAddress();
  const isLoading = useRecoilValue(isSearchLoadingState);
  if (addressesState === "hasError") return <ModalBtn text={"에러가 발생했습니다"} />;
  return (
    <ModalBtn
      text={"등록"}
      isLoading={isLoading || isUpdatingAddress || addressesState === "loading"}
      onClick={updateAddress}
    />
  );
}

export default SelectMapSubmitBtn;
