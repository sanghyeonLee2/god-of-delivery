import {useState} from "react";

const useSearchLocation = () => {
    const [locationInfo, setLocationInfo] = useState([])

    const searchLocation = (keyword) => {
        const ps = new window.kakao.maps.services.Places()
        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                console.log(window.kakao.maps.services.Status.OK)
                setLocationInfo(data)
            } else {
                alert("검색결과가 없습니다.")
                if (locationInfo.length > 0) setLocationInfo([]);
            }
        })
    }
    return {locationInfo, searchLocation, setLocationInfo}
}

export default useSearchLocation