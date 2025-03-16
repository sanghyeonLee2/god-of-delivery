import React from 'react';
import {MainBtn} from "components/common/Button/main/MainButton";
import {ReviewBtnWrap} from "components/common/Review/ReviewLayout";

function ReviewUpdateMode({children, cancelUpdateMode, setUpdateMode, deleteReview, updateMode}) {
    return (
        <>
            {updateMode ?
                <div>
                    {children}
                    <ReviewBtnWrap>
                        <MainBtn width={"60px"} type={"submit"} text={"완료"}/>
                        <MainBtn width={"60px"} text={"취소"} type={"button"}
                                 onClick={cancelUpdateMode}
                        />
                    </ReviewBtnWrap>
                </div>
                :
                <ReviewBtnWrap>
                    <MainBtn width={"60px"} text={"삭제"} type={"button"}
                             onClick={deleteReview}/>
                    <MainBtn width={"60px"} text={"수정"} type={"button"}
                             onClick={setUpdateMode}/>
                </ReviewBtnWrap>
            }
        </>
    );
}

export default ReviewUpdateMode;