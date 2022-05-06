import React from "react";
import Buttons from "../styles/buttons";
import { Link } from "react-router-dom";
import style from "styled-components";

const ToWhere = ({ to, inner }) => {
    return (
        <Button as="div">
            <Link to={to}>
                <Buttons>{inner}</Buttons>
            </Link>
        </Button>
    );
};

const Button = style.button`
    display: inline-block;
`;

export default ToWhere;