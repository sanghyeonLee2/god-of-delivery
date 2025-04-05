import React from "react";
import Input from "@components/common/Input/Input";
import { SearchInputForm } from "./StoreSearchForm.styles";
import useGetStores from "@pages/user/StoresPage/hooks/useGetStores";
import IconBtn from "@components/common/Button/icon/IconBtn";
import { CiSearch } from "react-icons/ci";

function StoreSearchForm() {
  const {
    searchForm: { handleSubmit, onSubmit, register, urlKeyword },
  } = useGetStores(false);
  return (
    <SearchInputForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={"text"}
        defaultValue={urlKeyword}
        {...register("keyword")}
        placeholder={"음식점을 검색해 보세요"}
      />
      <IconBtn type={"submit"}>
        <CiSearch size={30} />
      </IconBtn>
    </SearchInputForm>
  );
}

export default StoreSearchForm;
