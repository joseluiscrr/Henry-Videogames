import React from "react";
import start from "../images/start.png";
import styled from "styled-components";

const Start = () => {
    return (
        <Div>
            <H1>The games will be shown here</H1>
            <Img src={start} />
        </Div>
    );
};

const Div = styled.div`
    height: 30em;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 'title' 'cartoon';
`;

const H1 = styled.h1`
    display: inline-block;
    grid-area: title;
    width: fit-content;
    margin: auto;
`;

const Img = styled.img`
    height: 25em;
    grid-area: cartoon;
    margin: auto;
`;

export default Start;