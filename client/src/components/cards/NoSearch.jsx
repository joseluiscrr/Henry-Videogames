import React from "react";
import { useSelector } from "react-redux";
import Head from "../styles/head";

const NoSearch = () => {
    const reference = useSelector(state => state.reference)

    return(
        <Head>
            <h1>No {reference} games found </h1>
        </Head>
    );
};

export default NoSearch;