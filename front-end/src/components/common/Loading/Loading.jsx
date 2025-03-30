import React from "react";
import { LoadingWrapper } from "./LoadingLayout";
import { ReactComponent as Spinner } from "../../../assets/img/Rolling@1x-1.0s-200px-200px_blue.svg";

function Loading() {
  return (
    <LoadingWrapper>
      <Spinner width={35} height={35} className="loading-icon" />
    </LoadingWrapper>
  );
}

export default Loading;
