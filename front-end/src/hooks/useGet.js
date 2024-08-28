import {useQuery} from "react-query";
import {getApi} from "../apis/api/user";

const useGet = (url) => {
    const {data, isError, status, isLoading} = useQuery(
        ["getData", url],  // 쿼리 키를 고유하게 만들기 위해 url 포함
        () => getApi(url), // queryFn
    );
    return [data, isError, status, isLoading];
}
export default useGet