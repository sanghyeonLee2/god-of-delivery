import { useState } from "react";

const useTab = (init, all) => {
  const [currentIdx, setCurrentIdx] = useState(init);
  return {
    currentItem: all[currentIdx],
    setCurrentItem: setCurrentIdx,
  };
};

export default useTab;
