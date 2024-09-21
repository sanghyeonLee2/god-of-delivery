import {useEffect, useRef} from "react";

const useClick = (onClick) => {
    const element = useRef()
    useEffect(() => {
        // 초기 렌더링 전에 DOM 요소가 아직 존재하지 않음 초기값 current: null
        if (element.current) {
            element.current.addEventListener("click", onClick)
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
    }, []);
    return element
}

export default useClick
