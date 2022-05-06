import React from "react";
import Buttons from "../styles/buttons";
import PropTypes from "prop-types";
import style from "styled-components";

const Description = ({ array, action }) => {
    return(
        <Div>
            {
                array.map((r) => 
                    r.map((r, index) => index === 0 ?
                        (
                            <Div2 key={index * 32}>
                                <h3>{r || "description"}</h3>
                                <Buttons onClick={action}> Hide</Buttons>
                            </Div2>
                        ) :
                        (
                            r.map((r, index) => r[1] !== '' &&
                                (
                                    <Div3 key={index * 64}>
                                        <h5>{r[0]} {r[1]}</h5>
                                    </Div3>
                                )
                            )
                        )
                    )
                )
            }
        </Div>
    );
};

Instruccions.propTypes= {
    array: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
};

const Div = style.div`
    align-items: center;
    font-size: 20px;
    justify-content: center;
`;

const Div2 = style.div`
    display: flex;
    justify-content: space-around;
    min-width: 50em;
    margin-bottom: 1rem;
    align-items: center;
    span { font-size: 26px; }
`;

const Div3 = style.div`
    border: ${(props) => props.theme.glassBorder};
    background: ${(props) => props.theme.glassTransparent};
    margin: 3px;
    width: 98vw;
`;

export default Instruccions;