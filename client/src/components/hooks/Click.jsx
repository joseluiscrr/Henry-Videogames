import { useEffect, useState } from "react";

function Click(reference, initialState) {
    const [bool, setBool] = useState(initialState);
    useEffect(() => {
        const pageClickEvent = (r) => {
            if(reference.current !== null && !reference.current.contains(r.target)) {
                setBool(!bool);
            }
        };
        if(bool) {
            window.addEventListener("click", pageClickEvent);
        };
        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [bool, reference]);

    return [bool, setBool];
};

export default Click;