import {instance} from "../apis/utils/instance";
import {useQuery} from "react-query";

const useGet = (url) => {
    const getData = async () => {
        console.log("ASDGASD")
        return instance.get(url)
    }

    const {data, isError, refetch, status} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        getData, // queryFn
        {
            enabled: false  // 컴포넌트 마운트 시 자동 실행 방지
        }
    );

    return [data, isError, refetch, status];
}
export default useGet