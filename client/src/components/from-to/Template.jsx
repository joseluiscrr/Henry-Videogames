import React from "react";
import HistoryDispatch from "../hooks/HistoryDispatch";
import Buttons from "../styles/buttons";

const Template = ({ action, arg, inner }) => {
    const [history, dispatch] = HistoryDispatch();
    const handleClick = () => {
        if(action) {
            dispatch(action(arg));
            history.push('/home');
            window.scrollTo(0, 0);
        };
    };

    return(
        <Buttons onClick={handleClick}>
            <h5>{inner}</h5>
        </Buttons>
    );
};

export default Template;