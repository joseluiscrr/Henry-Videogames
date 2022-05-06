import React from "react";
import { getBase } from "../../../redux/actions";
import Template from "../../from-to/Template";
import style from "styled-components";

const Owns = () => {
    return (
        <Div>
            <Template action={getBase} inner={"Owns"} />
        </Div>
    );
};

const Div = style.div`
    button { margin: 10px; margin-left: 89px; }
`;

export default Owns;