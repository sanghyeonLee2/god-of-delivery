import React from "react";
import { ModalContentWrap, ModalForm } from "../../ModalLayout";
import { Font } from "../../../../assets/styles/CommonStyle";
import { ModalBtn, TransBtn } from "../../../common/Button/main/MainButton";
import MenuDetailOptions from "./MenuDetailOptions";
import * as S from "../MenuDetailModalLayout";
import MenuDetailProlog from "./MenuDetailProlog";
import Loading from "../../../common/Loading/Loading";
import OrderPrice from "components/modal/MenuDetail/components/OrderPrice";
import { quantityOnChg } from "../../../../utils/clickHandler";

function MenuDetail({ menuData, form, isFetching, isSubmitting, handleMutate, btnText }) {
  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <ModalContentWrap>
        <MenuDetailProlog
          imgUrl={menuData?.imgUrl}
          name={menuData?.name}
          description={menuData?.description}
        />
        <S.MenuDetailTextWrap>
          <Font>가격</Font>
          <Font>{menuData?.price.toLocaleString()}원</Font>
        </S.MenuDetailTextWrap>
        <ModalForm>
          <MenuDetailOptions
            getValues={form.getValues}
            setValue={form.setValue}
            menuCategories={menuData?.MenuCategories}
            control={form.control}
          />
          <S.MenuDetailTextWrap>
            <Font>수량</Font>
            <S.SelectQuantityWrap>
              <TransBtn
                type={"button"}
                text={"-"}
                onClick={() => quantityOnChg(-1, form.getValues, form.setValue, "quantity")}
              />
              <div>{form.watch("quantity")}</div>
              <TransBtn
                type={"button"}
                text={"+"}
                onClick={() => quantityOnChg(1, form.getValues, form.setValue, "quantity")}
              />
            </S.SelectQuantityWrap>
          </S.MenuDetailTextWrap>
        </ModalForm>
        <OrderPrice
          control={form.control}
          defaultPrice={menuData?.price}
          menuCategories={menuData?.MenuCategories}
          watch={form.watch}
        />
      </ModalContentWrap>
      <ModalBtn text={btnText} isLoading={isSubmitting} onClick={form.handleSubmit(handleMutate)} />
    </>
  );
}

export default MenuDetail;
