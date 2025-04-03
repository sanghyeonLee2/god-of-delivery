import React from "react";
import PaginationBtn from "./components/PaginationBtn";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import * as S from "@components/common/Pagination/Pagination.styles";
import IconBtn from "@components/common/Button/icon/IconBtn";

const PAGE_BTN_LIMIT = 5;

function Pagination({ page, totalPages, setPage }) {
  const startPage = Math.floor((page - 1) / PAGE_BTN_LIMIT) * PAGE_BTN_LIMIT + 1;
  const endPage = Math.min(startPage + PAGE_BTN_LIMIT - 1, totalPages);
  const allPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  return (
    <S.PaginationWrap>
      <S.PaginationInner>
        <IconBtn isDisable={page === 1} onClick={() => setPage(1)}>
          <MdKeyboardDoubleArrowLeft size={22} />
        </IconBtn>
        <IconBtn isDisable={page === 1} onClick={() => setPage(page - 1)}>
          <MdKeyboardArrowLeft size={22} />
        </IconBtn>
        {allPages.map((seletedpage) => (
          <PaginationBtn
            key={seletedpage}
            page={seletedpage}
            clicked={seletedpage === page}
            onClick={() => setPage(seletedpage)}
          />
        ))}

        <IconBtn isDisable={page === totalPages} onClick={() => setPage(page + 1)}>
          <MdKeyboardArrowRight size={22} />
        </IconBtn>
        <IconBtn isDisable={endPage === totalPages} onClick={() => setPage(totalPages)}>
          <MdKeyboardDoubleArrowRight size={22} />
        </IconBtn>
      </S.PaginationInner>
    </S.PaginationWrap>
  );
}

export default Pagination;
