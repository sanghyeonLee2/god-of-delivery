import {useState} from "react";
import {useForm} from "react-hook-form";

const useSearchLocation = () => {
    const [locationInfo, setLocationInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm()
    const searchLocation = (keyword) => {
        setIsLoading(true);
        const ps = new window.kakao.maps.services.Places()
        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setLocationInfo(data)
            } else {
                setLocationInfo([]);
            }
            setIsLoading(false)
        })
    }
    return {locationInfo, searchLocation, setLocationInfo, isLoading, register, handleSubmit}
}

export default useSearchLocation