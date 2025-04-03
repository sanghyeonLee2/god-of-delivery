import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { Font } from "@assets/styles/CommonStyle";
import { addressState } from "@recoil/map/atoms";
import { COLORS } from "@constants/colors";

function AddressInfo() {
  const addressValue = useRecoilValueLoadable(addressState);
  if (addressValue.state === "loading") return <Font color={COLORS.FONT.SUB}>로딩 중...</Font>;
  if (addressValue.state === "hasError")
    return <Font color={COLORS.FONT.SUB}>주소를 불러올 수 없습니다.</Font>;

  return (
    <div>
      <Font>{addressValue?.contents.roadInfo}</Font>
      <Font>{addressValue?.contents.address}</Font>
    </div>
  );
}

export default AddressInfo;
