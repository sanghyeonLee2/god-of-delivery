import { useEffect, useState } from "react";
import { HOME_BOARD_KEYWORDS } from "@constants/formValues";

const duplicatedList = [...HOME_BOARD_KEYWORDS, ...HOME_BOARD_KEYWORDS];

function useAniTitle() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const fullLength = HOME_BOARD_KEYWORDS.length * 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 === fullLength) {
          setIsAnimating(false); // 애니메이션 끄고 리셋
          return 0;
        }
        setIsAnimating(true); // 애니메이션 켜기
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [fullLength]);

  return { index, isAnimating, duplicatedList };
}

export default useAniTitle;
