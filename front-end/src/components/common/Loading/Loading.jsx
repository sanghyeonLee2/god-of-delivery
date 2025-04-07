import React from "react";
import { LoadingWrapper } from "./Loading.styles";
import { ReactComponent as Spinner } from "@assets/img/Rolling@1x-1.0s-200px-200px_blue.svg";

function Loading() {
  return (
    <LoadingWrapper>
      <Spinner width="3.5rem" height="3.5rem" />
    </LoadingWrapper>
  );
}

export default Loading;
