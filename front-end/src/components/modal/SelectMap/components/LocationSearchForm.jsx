import React from "react";
import SearchedLocations from "./SearchedLocations";
import LocationSearchInput from "@components/modal/SelectMap/components/LocationSearchInput";
import useSearchLocation from "@components/modal/SelectMap/hooks/useSearchLocation";

function LocationSearchForm() {
  const { locationInfo, setLocationInfo, register } = useSearchLocation();
  return (
    <div>
      <LocationSearchInput
        type={"text"}
        {...register("searchKeyword")}
        placeholder={"주소를 검색해 보세요"}
      />
      {locationInfo.locations.length > 0 && (
        <SearchedLocations locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      )}
    </div>
  );
}

export default LocationSearchForm;
