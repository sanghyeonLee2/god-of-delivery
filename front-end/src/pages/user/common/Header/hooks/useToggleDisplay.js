import { useRef } from "react";

function useToggleDisplay() {
  const ref = useRef(null);

  const showMenu = () => {
    if (ref.current) {
      ref.current.style.display = "block";
    }
  };

  const hideMenu = () => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
  };
  return [ref, showMenu, hideMenu];
}

export default useToggleDisplay;
