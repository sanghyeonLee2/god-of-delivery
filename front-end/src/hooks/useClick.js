import {useEffect, useRef} from "react";

const useClick = (onClick) => {
    const element = useRef()
    useEffect(() => {
        const currentElement = element.current; //클로저로 캡쳐
        // 초기 렌더링 전에 DOM 요소가 아직 존재하지 않음 초기값 current: null
        if (currentElement) {
            currentElement.addEventListener("click", onClick)
        }
        return () => {
            if (currentElement) {
                currentElement.removeEventListener("click", onClick)
            }
        }
    }, []);
    return element
}

export default useClick
