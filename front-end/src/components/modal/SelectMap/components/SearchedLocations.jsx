import React from "react";
import { LocationsInfoItem, LocationsInfoWrap } from "./SearchedLocations.styles";
import { Font } from "@assets/styles/CommonStyle";
import { useSetRecoilState } from "recoil";
import { coordsState } from "@recoil/map/atoms";
import { onClickLocation } from "@utils/clickHandler";

function SearchedLocations({ locations, setLocations }) {
  const setCoords = useSetRecoilState(coordsState);
  return (
    <LocationsInfoWrap>
      {locations.map((location) => (
        <LocationsInfoItem
          key={location.id}
          onClick={() => onClickLocation(location.x, location.y, setCoords, setLocations)}
        >
          <Font>{location?.address_name}</Font>
          <Font size={"small"}>{location?.place_name}</Font>
        </LocationsInfoItem>
      ))}
    </LocationsInfoWrap>
  );
}

export default SearchedLocations;
