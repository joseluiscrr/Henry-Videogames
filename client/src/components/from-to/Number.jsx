import React from "react";
import Input from "../styles/input";
import style from "styled-components";

const Number = ({ type, value, change, name }) => {
    return (
        <Input1
            type={type}
            name={name}
            value={value}
            color={value}
            onChange={change}
            min={0} max={5} step="0.1"
            placeholder={ name === "released" ? "" : "0" }
        />
    );
};

const Input1 = style(Input)`
    padding: -10px -20px;
    width: ${(props) => props.name === "released" ? "130px" : "3rem"};
    font-size: 18px;
    height: 4rem;
    margin: 0;
    margin-top: 1rem;
    background: #8080801c;
    color: white;
`;

export default Number;