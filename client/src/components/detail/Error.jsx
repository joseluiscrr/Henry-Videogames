import React from "react";
import Head from "../styles/head";
import ToWhere from "../from-to/ToWhere";

const Error = () => {
    return (
        <Head>
            <h1>Sorry, we couldn't find the page you were looking for :(</h1>
            <ToWhere to='/home' inner={'Go back'}/>
        </Head>
    );
};

export default Error;