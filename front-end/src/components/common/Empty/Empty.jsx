import React from "react";
import { SubBtn } from "components/common/Button/main/MainButton";
import { useNavigate } from "react-router-dom";
import { EmptyWrap } from "components/common/Empty/EmptyLayout";
import { Font } from "../../../assets/styles/CommonStyle";

function Empty({ text }) {
  const navigate = useNavigate();
  return (
    <EmptyWrap>
      <div>
        <Font size={"x-large"}> {text}</Font>

        <SubBtn onClick={() => navigate(-1)} text={"뒤로가기"} />
      </div>
    </EmptyWrap>
  );
}

export default Empty;
