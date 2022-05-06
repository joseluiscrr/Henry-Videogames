import React from "react";
import Head from "../styles/head";
import Center from "../styles/center";
import Buttons from "../styles/buttons";
import ToWhere from "../from-to/ToWhere";

const Thanx = ({ setDone }) => {
    return (
        <>
            <Head>
                <h1>Thanks for submitting</h1>
                <Center>
                    <Buttons onClick={() => setDone(false)}>Submit another game</Buttons>
                    <ToWhere to='/home' inner='Go home' />
                </Center>
            </Head>
        </>
    );
};

export default Thanx;