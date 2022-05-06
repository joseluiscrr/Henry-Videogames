import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import Paginated from "../from-to/Paginated";
import Menu from "../menu/Menu";
import NoFilter from "./NoFilter";
import NoSearch from "./NoSearch";
import style from "styled-components";

const Card = () => {
    const loading = useSelector((state) => state.loading);
    const games = useSelector((state) => state.gamesLoaded);
    const page = useSelector((state) => state.pageReference);
    let index = page * 15;
    let end = index + 15;
    let results = (games === [] || !Array.isArray(games) ? [] : games.slice(index, end));

    // console.log(games);

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
                            <Game key={r.id} id={r.id} image={r.image} name={r.name} genres={r.genres} rating={r.rating} />
                        ))
                    )
                }
            </Div>
            {results.length !== 0 && loading === false && <Paginated />}
            {results.length > 0 && loading === false && <Menu />}
        </>
    );
};

const Div = style.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    height: max-content;
    @media (max-width: 1200px) { grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; }
    @media (max-width: 800px) { grid-template-columns: 1fr; grid-template-rows: 1fr; }
`;

export default Card;