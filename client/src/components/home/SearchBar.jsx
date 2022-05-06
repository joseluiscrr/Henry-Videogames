import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Buttons from "../styles/buttons";
import { getQuery, setLoading, setPageReference, setReference } from "../../redux/actions";
import style from "styled-components";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const handleInput = (r) => { setInput(r.target.value) };
    const handleSubmit = async (r) => {
        r.preventDefault();
        if(input !== '') {
            await dispatch(getQuery(input));
            dispatch(setReference(input));
            dispatch(setPageReference(0));
            dispatch(setLoading());
            setInput('');
        };
    };

    return (
        <Div>
            <form onSubmit={handleSubmit}>
                <Buttons1 
                    as='input'
                    name="input"
                    type="text"
                    placeholder="Search games"
                    value={input}
                    onChange={handleInput}
                />
                <Input type="submit" tabindex="-1" />
            </form>
        </Div>
    );
};

let Div = style.div`
    display: flex;
    justify-content: center;
    form { width: 20%; }  
`;

let Buttons1 = style(Buttons)`
    outline: none;
    padding: 0.25em 1em;
    width: 100%;
`;

let Input = style.input`
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
`;

export default SearchBar;