import React from "react";
import onit from "../images/onit.gif";
import styled from "styled-components";

const Load = () => {
    return (
        <Div>
            <h1>Working on it...</h1>
            <Img src={onit} alt='loading'/>
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    grid-template-rows: 10em 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
`;

const Img = styled.img`
    margin-left: 40px;
`;

export default Load;