import React from "react";
import { ModalContentWrap } from "../../Modal.styles";
import { Font } from "@assets/styles/CommonStyle";
import { ModalBtn, TransBtn } from "../../../common/Button/main/MainButtons";
import MenuDetailOptions from "./MenuDetailOptions";
import MenuDetailProlog from "./MenuDetailProlog";
import { quantityOnChg } from "@utils/clickHandler";
import Loading from "@components/common/Loading/Loading";
import * as S from "@components/modal/MenuDetail/MenuDetailModal.styles";
import OrderPrice from "@components/modal/MenuDetail/components/OrderPrice";

function MenuDetail({ menuData, form, isFetching, isSubmitting, handleMutate, btnText }) {
  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <ModalContentWrap $isNeedSpace={true}>
        <MenuDetailProlog
          imgUrl={menuData?.imgUrl}
          name={menuData?.name}
          description={menuData?.description}
        />
        <S.MenuDetailTextWrap>
          <Font>가격</Font>
          <Font>{menuData?.price.toLocaleString()}원</Font>
        </S.MenuDetailTextWrap>
        <form>
          <MenuDetailOptions
            getValues={form.getValues}
            setValue={form.setValue}
            menuCategories={menuData?.MenuCategories}
            control={form.control}
          />
          <S.MenuDetailFixed>
            <S.MenuDetailTextWrap>
              <Font>수량</Font>
              <S.SelectQuantityWrap>
                <TransBtn
                  type={"button"}
                  text={"-"}
                  onClick={() => quantityOnChg(-1, form.getValues, form.setValue, "quantity")}
                />
                <Font size={"small"}> {form.watch("quantity")}</Font>
                <TransBtn
                  type={"button"}
                  text={"+"}
                  onClick={() => quantityOnChg(1, form.getValues, form.setValue, "quantity")}
                />
              </S.SelectQuantityWrap>
            </S.MenuDetailTextWrap>
            <OrderPrice
              control={form.control}
              defaultPrice={menuData?.price}
              menuCategories={menuData?.MenuCategories}
              watch={form.watch}
            />
          </S.MenuDetailFixed>
        </form>
      </ModalContentWrap>
      <ModalBtn
        isUpdate={true}
        text={btnText}
        isLoading={isSubmitting}
        onClick={form.handleSubmit(handleMutate)}
      />
    </>
  );
}

export default React.memo(MenuDetail);
