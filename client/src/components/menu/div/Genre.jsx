import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";

const Genre = () => {
    const genresLoad = useSelector((state) => state.genresLoaded);
    let key = 1;

    return (
        <>
            {
                genresLoad.map((r) => (
                    <Filter key={key++} genre={r} />
                ))
            }
        </>
    );
};

export default Genre;