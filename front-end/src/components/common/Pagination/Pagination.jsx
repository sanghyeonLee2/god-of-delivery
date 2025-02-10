import React from 'react';
import {PaginationInner, PaginationWrap} from "./PaginationLayout";
import PaginationBtn from "./components/PaginationBtn";
import IconBtn from "../Button/icon/IconBtn";
import arrowLeft from "../../../assets/img/arrow_left.png"
import arrowRight from "../../../assets/img/arrow_right.png"
import arrowDoubleLeft from "../../../assets/img/double_arrow_left.png"
import arrowDoubleRight from "../../../assets/img/double_arrow_right.png"

const PAGE_BTN_LIMIT = 5;

function Pagination({currentPage, totalPages, setCurrentPage}) {
    const startPage = Math.floor((currentPage - 1) / PAGE_BTN_LIMIT) * PAGE_BTN_LIMIT + 1;
    const endPage = Math.min(startPage + PAGE_BTN_LIMIT - 1, totalPages);
    const pages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
    return (
        <PaginationWrap>
            <PaginationInner>
                <IconBtn src={arrowDoubleLeft} isDisable={currentPage === 1} alt={arrowDoubleLeft} width={22}
                         onClick={() => setCurrentPage(1)}/>
                <IconBtn src={arrowLeft} isDisable={currentPage === 1} alt={arrowLeft} width={22}
                         onClick={() => setCurrentPage(currentPage - 1)}/>
                {pages.map((page) => <PaginationBtn key={page} page={page} clicked={page === currentPage}
                                                    onClick={() => setCurrentPage(page)}/>)}
                <IconBtn src={arrowRight} isDisable={currentPage === totalPages} alt={arrowRight} width={22}
                         onClick={() => setCurrentPage(currentPage + 1)}/>
                <IconBtn src={arrowDoubleRight} isDisable={endPage === totalPages} alt={arrowDoubleRight}
                         onClick={() => setCurrentPage(totalPages)} width={22}/>
            </PaginationInner>
        </PaginationWrap>
    );
}

export default Pagination;