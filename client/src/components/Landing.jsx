import React from "react";
import { Link } from "react-router-dom";
import Head from "./styles/head";
import Buttons from "./styles/buttons";
import styled from "styled-components";
import "./css/landing.css"

const Landing = () => {
  return (
    <div className='landing'>
      <Head1>
        <h1>Videogames</h1>
        <Link to='/home'>
          <Buttons1>
            <h4>Start</h4>
          </Buttons1>
        </Link>
      </Head1>
    </div>
  );
};

const Head1 = styled(Head)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Buttons1 = styled(Buttons)`
  height: 9rem;
  color: white;
  position: absolute;
  left: 140px;
  top: 180px;
  a { text-decoration: none; };
`;

export default Landing;