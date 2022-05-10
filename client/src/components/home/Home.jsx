import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "../styles/head";
import ToWhere from "../from-to/ToWhere";
import SearchBar from "./SearchBar";
import Start from "./Start";
import Card from "../cards/Card";
import Load from "./Load";
import styled from "styled-components";
import { getGames } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const reference = useSelector((state) => state.reference);
    const gamesLoaded = useSelector((state) => state.gamesLoaded);
    const loading = useSelector((state) => state.loading);
    let title = reference === '' ? 'Find' : reference.charAt(0).toUpperCase() + reference.slice(1);

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    return (
        <Div>
            <Head><h1>{title} Games</h1></Head>
            <Div2><ToWhere to='/create' inner={'Do your own'} /></Div2>
            <SearchBar />
            {
                gamesLoaded.length === 0 && reference === '' && !loading && (
                    <Start />
                )
            }
            {loading ? <Load /> : <Card />}
        </Div>
    );
};

let Div = styled.div`
    display: table;
    width: 100%;
    overflow-y: scroll;
    height: 100vh;
    min-height: 45em;
`;

let Div2 = styled.div`
    position: absolute;
    top: 24%;
    left: 20%;
`;

export default Home;