import React from "react";
import Input from "../../Input/Input";
import { SearchInputForm } from "./StoreSearchFormLayout";
import useGetStores from "pages/user/StoresPage/hooks/useGetStores";
import IconBtn from "components/common/Button/icon/IconBtn";
import { CiSearch } from "react-icons/ci";

function StoreSearchForm() {
  const { setKeyword, searchForm } = useGetStores(false);
  return (
    <SearchInputForm onSubmit={searchForm.handleSubmit((data) => setKeyword(data.keyword))}>
      <Input
        type={"text"}
        defaultValue={searchForm.urlKeyword}
        register={searchForm.register("keyword")}
        placeholder={"음식점을 검색해 보세요"}
      />
      <IconBtn type={"submit"}>
        <CiSearch size={30} />
      </IconBtn>
    </SearchInputForm>
  );
}

export default StoreSearchForm;
