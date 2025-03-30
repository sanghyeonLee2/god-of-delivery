import React from "react";
import { ModalBtn } from "components/common/Button/main/MainButton";
import { usePatchAddress } from "../hooks/usePatchAddress";
import { useRecoilValue } from "recoil";
import { isSearchLoadingState } from "../../../../recoil/flag/atoms";

function SelectMapSubmitBtn(props) {
  const { handlePostAddress, isPostingAddress, addressesState } = usePatchAddress();
  const isLoading = useRecoilValue(isSearchLoadingState);
  if (addressesState === "hasError") return <ModalBtn text={"에러가 발생했습니다"} />;
  return (
    <ModalBtn
      text={"등록"}
      isLoading={isLoading || isPostingAddress || addressesState === "loading"}
      onClick={handlePostAddress}
    />
  );
}

export default SelectMapSubmitBtn;
