import { useLocation } from "react-router-dom";

const useCustomQueryParams = (paramList = []) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return paramList.reduce((acc, { value, defaultValue }) => {
    const param = queryParams.get(value);
    if (param === null) {
      acc[value] = defaultValue;
      return acc;
    }
    const numeric = Number(param);
    acc[value] = Number.isNaN(numeric) ? param : numeric;
    return acc;
  }, {});
};
export default useCustomQueryParams;
