import React from "react";
import LabeledTextInput from "@components/common/Input/LabeledTextInput";
import { SubBtn } from "@components/common/Button/main/MainButtons";
import { CommonPageWrap, Font } from "@assets/styles/CommonStyle";
import { useOwnerStore } from "./hooks/useOwnerStore";
import Loading from "@components/common/Loading/Loading";
import Title from "@components/common/Title/Title";
import { OWNER_STORES_INFO, OWNER_STORES_INFO_DISABLE } from "@constants/formFields";
import Image from "@components/common/Image/Image";

function StoreManagementPage() {
  const { isUpdating, handleSubmit, isLoading, register, storeData } = useOwnerStore();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <CommonPageWrap>
      <Title text={"가게 정보 관리"} size={"x-large"} />
      <form onSubmit={handleSubmit}>
        <Font size={"large"}>배달 정보</Font>
        <Font>가게 사진</Font>
        <Image width={"15rem"} height={"15rem"} src={storeData.storeLogoImage} />
        {OWNER_STORES_INFO_DISABLE.map((info) => (
          <LabeledTextInput
            key={info.key}
            disabled={true}
            title={info.title}
            defaultValue={storeData[info.name]}
          />
        ))}
        {OWNER_STORES_INFO.map((info) => (
          <LabeledTextInput
            key={info.key}
            title={info.title}
            defaultValue={storeData[info.name]}
            {...register(info.name)}
          />
        ))}
        <SubBtn text={"수정"} height={"5rem"} isLoading={isUpdating} />
      </form>
    </CommonPageWrap>
  );
}

export default StoreManagementPage;
