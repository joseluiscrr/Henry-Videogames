import React from "react";
import { getGames } from "../../../redux/actions";
import Template from "../../from-to/Template";
import style from "styled-components";

const Clear = () => {
    return (
        <Div>
            <Template action={getGames} inner={"REFRESH"} />
        </Div>
    );
};

const Div = style.div`
    button { margin: 10px; }
`;

export default Clear;