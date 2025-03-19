import React from 'react';
import LabeledTextInput from "components/common/Input/LabeledTextInput";
import {SubBtn} from "components/common/Button/main/MainButton";
import {CommonPageWrap, Font} from "../../../assets/styles/CommonStyle";
import {useOwnerStore} from "../../../hooks/useOwnerStore";
import Loading from "components/common/Loading/Loading";
import Title from "components/common/Title/Title";

function StoreManagementPage(props) {
    const {
        isUpdating, handleSubmit, isLoading,
        register, storeData
    } = useOwnerStore();
    if (isLoading) {
        return <Loading/>
    }
    return (
        <CommonPageWrap>
            <Title text={"가게 정보 관리"} size={"x-large"}/>
            <form onSubmit={handleSubmit}>
                <Font size={"large"}>배달 정보</Font>
                <LabeledTextInput title={"가게 이미지"} type={"file"} defaultValue={storeData?.imgUrl}
                                  register={register("imgUrl")}/>
                <LabeledTextInput title={"최소 주문 금액"} type={"number"} defaultValue={storeData?.deliveryMinPrice}
                                  register={register("deliveryMinPrice")}/>
                <LabeledTextInput title={"팁"} type={"number"} defaultValue={storeData?.deliveryTip}
                                  register={register("deliveryTip")}/>
                <Font size={"large"}>포장 정보</Font>
                <LabeledTextInput title={"최소 주문 금액"} type={"number"} defaultValue={storeData?.takeoutMinPrice}
                                  register={register("takeoutMinPrice")}/>
                <LabeledTextInput title={"할인"} type={"number"} defaultValue={storeData?.takeoutDiscount}
                                  register={register("takeoutDiscount")}/>
                <LabeledTextInput title={"픽업 위치"} defaultValue={storeData?.takeoutLocation}
                                  register={register("takeoutLocation")}/>
                <LabeledTextInput title={"픽업 시간"} type={"number"} defaultValue={storeData?.takeoutPickUpTime}
                                  register={register("takeoutPickUpTime")}/>
                <Font size={"large"}>가게 정보</Font>
                <LabeledTextInput title={"가게 이름"} defaultValue={storeData?.storeName} register={register("storeName")}/>
                <LabeledTextInput title={"상호명"} defaultValue={storeData?.tradeName} register={register("tradeName")}/>
                <LabeledTextInput title={"주소"} defaultValue={storeData?.address} register={register("address")}/>
                <LabeledTextInput title={"공지"} defaultValue={storeData?.notice} register={register("notice")}/>
                <LabeledTextInput title={"가게 소개"} defaultValue={storeData?.introduction}
                                  register={register("introduction")}/>
                <LabeledTextInput title={"사업자 등록번호"} defaultValue={storeData?.businessNum}
                                  register={register("businessNum")}/>
                <LabeledTextInput title={"연락처"} defaultValue={storeData?.contact} register={register("contact")}/>
                <LabeledTextInput title={"휴무일"} defaultValue={storeData?.dayOff} register={register("dayOff")}/>
                <LabeledTextInput title={"운영시간"} defaultValue={storeData?.hours} register={register("hours")}/>
                <SubBtn text={"수정"} height={"50px"} isLoading={isUpdating}/>
            </form>
        </CommonPageWrap>
    );
}

export default StoreManagementPage;