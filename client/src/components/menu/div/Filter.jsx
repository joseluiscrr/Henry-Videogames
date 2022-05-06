import React from "react";
import HistoryDispatch from "../../hooks/HistoryDispatch";
import { filterGenre, setReference } from "../../../redux/actions";
import PropTypes from "prop-types"
import style from "styled-components";

const Filter = ({ genre }) => {
    const [history, dispatch] = HistoryDispatch();
    const filter = () => {
        dispatch(filterGenre(genre));
        dispatch(setReference(genre));
        history.push('/home');
    };

    return <Button onClick={filter}>{genre}</Button>;
};

Filter.protoTypes = {
    genre: PropTypes.string.isRequired
};

const Button = style.button`
    border-radius: ${(props) => props.theme.glassBorderRadius};
    background: ${(props) => props.theme.glassWhite};
    border: ${(props) => props.theme.darkBorder};
    margin: 0.5rem;
    padding: 0.25em 1em;
    transition: box-shadow 0.4s ease;
    &:hover { box-shadow: ${(props) => props.theme.hoverShadow}; }
    color: white;
`;

export default Filter;