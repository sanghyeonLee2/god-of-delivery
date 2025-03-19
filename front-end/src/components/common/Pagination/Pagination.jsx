import React from 'react';
import PaginationBtn from "./components/PaginationBtn";
import IconBtn from "../Button/icon/IconBtn";
import {PaginationInner, PaginationWrap} from "components/common/Pagination/PaginationLayout";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight
} from "react-icons/md";

const PAGE_BTN_LIMIT = 5;

function Pagination({page, totalPages, setPage}) {
    const startPage = Math.floor((page - 1) / PAGE_BTN_LIMIT) * PAGE_BTN_LIMIT + 1;
    const endPage = Math.min(startPage + PAGE_BTN_LIMIT - 1, totalPages);
    const allPages = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
    return (
        <PaginationWrap>
            <PaginationInner>
                <IconBtn isDisable={page === 1} onClick={() => setPage(1)}>
                    <MdKeyboardDoubleArrowLeft size={22}/>
                </IconBtn>
                <IconBtn isDisable={page === 1} onClick={() => setPage(page - 1)}>
                    <MdKeyboardArrowLeft size={22}/>
                </IconBtn>
                {allPages.map((seletedpage) => <PaginationBtn key={seletedpage} page={seletedpage}
                                                              clicked={seletedpage === page}
                                                              onClick={() => setPage(seletedpage)}/>)}

                <IconBtn isDisable={page === totalPages} onClick={() => setPage(page + 1)}>
                    <MdKeyboardArrowRight size={22}/>
                </IconBtn>
                <IconBtn isDisable={endPage === totalPages} onClick={() => setPage(totalPages)}>
                    <MdKeyboardDoubleArrowRight size={22}/>
                </IconBtn>
            </PaginationInner>
        </PaginationWrap>
    );
}

export default Pagination;