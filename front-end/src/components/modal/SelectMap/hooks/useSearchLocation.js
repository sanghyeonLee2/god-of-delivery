import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { isSearchLoadingState } from "@recoil/flag/atoms";

const useSearchLocation = () => {
  const [locations, setLocations] = useState([]);
  const setIsLoading = useSetRecoilState(isSearchLoadingState);
  const { register, watch } = useForm();
  const psRef = useRef(null);

  const searchKeyword = watch("searchKeyword");

  useEffect(() => {
    psRef.current = new window.kakao.maps.services.Places();
  }, []);

  const searchLocation = useCallback(
    (keyword) => {
      if (!keyword) {
        setLocations([]);
        return;
      }

      setIsLoading(true);
      psRef.current?.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setLocations(data);
        } else {
          setLocations([]);
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
    locations,
    setLocations,
    register,
    isTyped: searchKeyword !== "",
  };
};

export default useSearchLocation;
