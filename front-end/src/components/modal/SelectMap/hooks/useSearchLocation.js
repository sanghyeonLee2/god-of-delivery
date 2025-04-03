import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { isSearchLoadingState } from "@recoil/flag/atoms";

const useSearchLocation = () => {
  const [locationInfo, setLocationInfo] = useState({ status: "", locations: [] });
  const setIsLoading = useSetRecoilState(isSearchLoadingState);
  const { register, watch } = useForm();

  const searchKeyword = watch("searchKeyword");

  const searchLocation = useCallback(
    (keyword) => {
      if (!keyword) {
        setLocationInfo({ status: "NO_KEYWORD", locations: [] });
        return;
      }

      setIsLoading(true);
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setLocationInfo({ status: "OK", locations: data });
        } else {
          setLocationInfo({ status: "ZERO_RESULT", locations: data });
        }
        setIsLoading(false);
      });
    },
    [setIsLoading]
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchLocation(searchKeyword);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchKeyword, searchLocation]);

  return {
    locationInfo,
    setLocationInfo,
    register,
    isTyped: searchKeyword !== "",
  };
};

export default useSearchLocation;
