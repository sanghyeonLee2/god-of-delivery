import { useParams } from "react-router-dom";

const useCustomParams = () => {
  const params = useParams();

  return Object.entries(params).reduce((acc, [key, value]) => {
    if (value === undefined) return acc;
    const numeric = Number(value);
    acc[key] = Number.isNaN(numeric) ? value : numeric;
    return acc;
  }, {});
};

export default useCustomParams;
