import React from "react";
import { LocationsInfoItem, LocationsInfoWrap } from "./SearchedLocationsLayout";
import { Font } from "../../../../assets/styles/CommonStyle";
import { useSetRecoilState } from "recoil";
import { coordsState } from "../../../../recoil/map/atoms";

function SearchedLocations({ locationInfo, setLocationInfo }) {
  const setCoords = useSetRecoilState(coordsState);
  const onClickLocation = (latLng) => {
    setCoords(latLng);
    setLocationInfo([]);
  };
  return (
    <LocationsInfoWrap>
      {locationInfo.map((location, idx) => (
        <LocationsInfoItem
          key={location.id}
          $isBottom={idx === locationInfo.length - 1}
          onClick={() => onClickLocation({ lat: Number(location.y), lng: Number(location.x) })}
        >
          <Font>{location?.address_name}</Font>
          <Font size={"small"}>{location?.place_name}</Font>
        </LocationsInfoItem>
      ))}
    </LocationsInfoWrap>
  );
}

export default SearchedLocations;
