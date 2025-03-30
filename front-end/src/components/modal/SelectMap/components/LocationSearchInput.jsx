import React, { forwardRef } from "react";
import { LocationSearchInputWrap } from "components/modal/SelectMap/components/LocationSearchInputLayout";

const LocationSearchInput = forwardRef((props, ref) => {
  return (
    <LocationSearchInputWrap>
      <input ref={ref} {...props} />
    </LocationSearchInputWrap>
  );
});

export default LocationSearchInput;
