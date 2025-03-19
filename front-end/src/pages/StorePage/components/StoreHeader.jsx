import React from 'react';
import * as S from "./StoreHeaderLayout";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Font} from "../../../assets/styles/CommonStyle";
import {useDibs} from "../../../hooks/useDibs";
import IconBtn from "../../../components/common/Button/icon/IconBtn";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

function StoreHeader({storeHeader, storeId}) {
    const handleToggleDib = useDibs()
    return (
        <S.StoreHeaderWrap>
            <Font size={"x-large"}>{storeHeader?.storeName}</Font>
            <div>
                <StarRatings rating={storeHeader?.rating} starRatedColor={"gold"} starDimension={"30px"}/>
                &nbsp;&nbsp;
                <span>{storeHeader?.rating.toFixed(1)}</span>
            </div>
            <S.ReviewWrap>
                <IconBtn onClick={() => handleToggleDib.mutate({storeId, isDib: storeHeader?.isDib})}>
                    {storeHeader?.isDib ? <MdFavorite size={19} color={"red"}/> :
                        <MdFavoriteBorder size={19} color={"red"}/>}
                </IconBtn>
                &nbsp;<Font>{storeHeader?.dibs}</Font>&nbsp;|&nbsp;
                <Font>리뷰 수 {storeHeader?.reviewCnt}</Font>&nbsp;|&nbsp;
                <Font>사장님 댓글 수 {storeHeader?.ownerReviewCnt}</Font>
            </S.ReviewWrap>
        </S.StoreHeaderWrap>
    );
}

export default StoreHeader;