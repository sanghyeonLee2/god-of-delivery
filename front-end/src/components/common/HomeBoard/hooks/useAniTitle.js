import { useEffect, useMemo, useState } from "react";
import { HOME_BOARD_KEYWORDS } from "@constants/formValues";

function useAniTitle() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const duplicatedList = useMemo(() => [...HOME_BOARD_KEYWORDS, ...HOME_BOARD_KEYWORDS], []);

  const fullLength = duplicatedList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 === fullLength) {
          setIsAnimating(false);
          return 0;
        }
        setIsAnimating(true);
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [fullLength]);

  return { index, isAnimating, duplicatedList };
}

export default useAniTitle;
