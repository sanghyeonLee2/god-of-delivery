import React from "react";
import { useNavigate } from "react-router-dom";
import { Font } from "@assets/styles/CommonStyle";
import { EmptyWrap } from "@components/common/Empty/Empty.styles";
import { SubBtn } from "@components/common/Button/main/MainButtons";

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
