import React from "react";
import { LocationsInfoItem, LocationsInfoWrap } from "./SearchedLocationsLayout";
import { Font } from "../../../../assets/styles/CommonStyle";
import { useSetRecoilState } from "recoil";
import { coordsState } from "../../../../recoil/map/atoms";
import { onClickLocation } from "../../../../utils/clickHandler";

function SearchedLocations({ locationInfo, setLocationInfo }) {
  const setCoords = useSetRecoilState(coordsState);
  return (
    <LocationsInfoWrap>
      {locationInfo.status === "OK" ? (
        locationInfo.locations.map((location) => (
          <LocationsInfoItem
            key={location.id}
            onClick={() => onClickLocation(location.x, location.y, setCoords, setLocationInfo)}
          >
            <Font>{location?.address_name}</Font>
            <Font size={"small"}>{location?.place_name}</Font>
          </LocationsInfoItem>
        ))
      ) : (
        <LocationsInfoItem>
          <Font>검색결과가 없습니다</Font>
        </LocationsInfoItem>
      )}
    </LocationsInfoWrap>
  );
}

export default SearchedLocations;
