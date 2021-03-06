import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../styles/buttons";
import styled from "styled-components";

const ToHome = ({ top }) => {
    return(
        <Link to='/home'>
            <Buttons1 top={top}> Go home</Buttons1>
        </Link>
    );
};

const Buttons1 = styled(Buttons)`
    position: absolute;
    top: ${props => props.top || '4%'};
    right: 7%;
`;

export default ToHome;