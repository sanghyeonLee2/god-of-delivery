import { useEffect, useRef, useState } from "react";

const useSearchBoxSlide = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchSlideRef = useRef(null);
  const searchBtnRef = useRef(null);

  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClickOutside = (e) => {
      const isOutsideSearch = !searchSlideRef.current?.contains(e.target);
      const isOutsideButton = !searchBtnRef.current?.contains(e.target);

      if (isOutsideSearch && isOutsideButton) {
        setIsSearchOpen(false);
      }
    };

    const handleResize = () => window.innerWidth > 700 && setIsSearchOpen(false);
    const handleScroll = () => setIsSearchOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSearchOpen]);

  return { searchSlideRef, searchBtnRef, isSearchOpen, setIsSearchOpen };
};
export default useSearchBoxSlide;
