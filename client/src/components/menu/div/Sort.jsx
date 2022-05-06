import React from "react";
import Template from "../../from-to/Template";
import style from "styled-components";

const Sort = ({ innerLeft, innerRight, actionLeft, actionRight, argLeft, argRight, title }) => {
    return (
        <Div>
            <Template inner={innerLeft} action={actionLeft} arg={argLeft} />
            <h1>{title}</h1>
            <Template inner={innerRight} action={actionRight} arg={argRight} />
        </Div>
    );
};

const Div = style.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    margin-left: 0px;
    align-items: center;
    button{ border: ${props => props.theme.darkBorder} }
`;

export default Sort;