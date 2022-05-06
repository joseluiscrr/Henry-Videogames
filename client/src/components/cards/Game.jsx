import React from "react";
import notImage from "../images/NotImage.jpeg"
import { Link } from "react-router-dom";
import Dynamic from "../styles/dynamic";
// import PropTypes from "prop-types";
import styled from "styled-components";

const Game = ({ id, image, name, genres, rating }) => {
    return (
        <Div image={image ? image : notImage}>
            <Link to={'/home/' + id}>
                <Div2>
                    <h3>{name}</h3>
                    <Div3>
                        <Dynamic color={rating} size='20px'>{rating}</Dynamic>
                        <h4>{genres === '' ? 'There are no associated genres' : genres}</h4>
                    </Div3>
                </Div2>
            </Link>
        </Div>
    );
};

// Game.defaultProps = {
//     genres: [],
//     rating: '0'
// };

// Game.propTypes = {
//     id: PropTypes.any.isRequired,
//     image: PropTypes.any.isRequired,
//     name: PropTypes.string.isRequired,
//     genres: PropTypes.array,
//     rating: PropTypes.string.isRequired
// };

let Div = styled.div`
    background: ${(props) => `url(${props.image})center / cover`};
    a { text-decoration: none; }
    overflow: hidden;
    background-repeat: repeat;
    text-align: center;
    margin: 3em;
    min-width: 20em;
    min-height: 15em;
    max-height: 16em;
    border-radius: 13px;
    transition: box-shadow 0.4s ease;
    &:hover { box-shadow: 0px 0px 35px 5px #ffffff78; }
`;

const Div2 = styled.div`
    background: #000000e0;
    position: relative;
    top: 74%;
    color: white;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr;
    grid-template-areas: "name" "extra";
    transition: all 0.5s;
    ${Div}:hover & { transform: translateY(-40%); }
    span { padding: 0.5rem; border-radius: 2rem; height: max-content; margin: 1rem; }
    padding: 0;
    h3 { grid-area: name; margin: 10px; margin-bottom: 0; align-items: center; padding: 5px 10px; min-height: 3em; }
    div { grid-area: extra; }
    height: 13rem;
`;
    
const Div3 = styled.div`
    display: flex;
`;

export default Game;