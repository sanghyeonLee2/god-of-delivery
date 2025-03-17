import React from 'react';
import PaginationBtn from "./components/PaginationBtn";
import IconBtn from "../Button/icon/IconBtn";
import arrowLeft from "../../../assets/img/arrow_left.png"
import arrowRight from "../../../assets/img/arrow_right.png"
import arrowDoubleLeft from "../../../assets/img/double_arrow_left.png"
import arrowDoubleRight from "../../../assets/img/double_arrow_right.png"
import {PaginationInner, PaginationWrap} from "components/common/Pagination/PaginationLayout";

const PAGE_BTN_LIMIT = 5;

function Pagination({page, totalPages, setPage}) {
    const startPage = Math.floor((page - 1) / PAGE_BTN_LIMIT) * PAGE_BTN_LIMIT + 1;
    const endPage = Math.min(startPage + PAGE_BTN_LIMIT - 1, totalPages);
    const allPages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
    return (
        <PaginationWrap>
            <PaginationInner>
                <IconBtn src={arrowDoubleLeft} isDisable={page === 1} alt={arrowDoubleLeft} width={22}
                         onClick={() => setPage(1)}/>
                <IconBtn src={arrowLeft} isDisable={page === 1} alt={arrowLeft} width={22}
                         onClick={() => setPage(page - 1)}/>
                {allPages.map((seletedpage) => <PaginationBtn key={seletedpage} page={seletedpage}
                                                              clicked={seletedpage === page}
                                                              onClick={() => setPage(seletedpage)}/>)}
                <IconBtn src={arrowRight} isDisable={page === totalPages} alt={arrowRight} width={22}
                         onClick={() => setPage(page + 1)}/>
                <IconBtn src={arrowDoubleRight} isDisable={endPage === totalPages} alt={arrowDoubleRight}
                         onClick={() => setPage(totalPages)} width={22}/>
            </PaginationInner>
        </PaginationWrap>
    );
}

export default Pagination;