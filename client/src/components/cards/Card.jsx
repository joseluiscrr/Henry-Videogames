import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import Paginated from "../from-to/Paginated";
import Menu from "../menu/Menu";
import NoFilter from "./NoFilter";
import NoSearch from "./NoSearch";
import styled from "styled-components";

const Card = () => {
    const loading = useSelector((state) => state.loading);
    const games = useSelector((state) => state.gamesLoad);
    const page = useSelector((state) => state.pageReference);
    let index = page * 15;
    let end = index + 15;
    let results = (games === [] || !Array.isArray(games) ? [] : games.slice(index, end));
    let id = 1;

    return (
        <>
            {
                results.length === 0 && (
                    <NoFilter />
                )
            }
            <Div>
                {
                    !Array.isArray(games) ?
                    (
                        <>
                            <NoSearch />
                        </>
                    ) :
                    ( 
                        results.map((r) => (
                            <Game key={id++} id={r.id} image={r.image} name={r.name} genres={r.genres} rating={r.rating} />
                        ))
                    )
                }
            </Div>
            {results.length !== 0 && loading === false && <Paginated />}
            {results.length > 0 && loading === false && <Menu />}
        </>
    );
};

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    height: max-content;
    @media (max-width: 1200px) { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
    @media (max-width: 800px) { grid-template-columns: 1fr; grid-template-rows: 1fr; }
`;

export default Card;