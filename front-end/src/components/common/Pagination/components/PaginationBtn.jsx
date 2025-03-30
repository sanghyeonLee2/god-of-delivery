import React from "react";
import { Font } from "../../../../assets/styles/CommonStyle";
import { PageButton } from "./PaginationBtnLayout";

function PaginationBtn({ page, clicked, onClick }) {
  return (
    <PageButton $clicked={clicked} onClick={onClick}>
      <Font>{page}</Font>
    </PageButton>
  );
}

export default PaginationBtn;
