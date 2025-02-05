import {useEffect, useRef} from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        const elementValue = element.current;
        if (elementValue) {
            elementValue.addEventListener("click", onClick);
        }
        return () => {
            if (elementValue) {
                elementValue.removeEventListener("click", onClick);
            }
        };
    });
    return element;
}
export default useClick
