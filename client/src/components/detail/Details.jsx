import React from "react";
import ToHome from "../from-to/ToHome";
import Dynamic from "../styles/dynamic";
import Template from "../from-to/Template";
import styled from "styled-components";
import "../css/details.css";
import { deleteGame } from "../../redux/actions";

const Details = ({ id, image, name, genres, description, released, rating, platforms }) => {
    console.log(id);
    return (
        <>
            <ToHome top='6%' inner='Go home' />
            <Template action={deleteGame} inner={'Delete game'} arg={id}/>
            <Div className={'container'} image={image} >
                <div className={'title'}>
                    <H1>{name}</H1>
                    {
                        genres.length === 0 ?
                        <Genres>no genres associated</Genres> :
                        <Genres>{genres}</Genres>
                    }
                </div>
                <div className={'description'}>
                    <Descp>{description}</Descp>
                </div>
                <div className={'platforms'}>
                    {
                        platforms.length === 0 ?
                        <h4>no platfroms associated</h4> :
                        <h4>{platforms}</h4>
                    }
                </div>
                <div className={'points'}>
                    <Released>{released}</Released>
                    <Dynamic1 color={rating} size='20px'>{rating}</Dynamic1>
                </div>
                <div className={'image'}>
                    <Img src={image} alt={'game'} />
                </div>
            </Div>
        </>
    );
};

const Div = styled.div`
    background: linear-gradient(190deg, #00000085 0%, #000000 100%), ${(props) => `url(${props.image})center/cover`};
    margin: 0;
    width: 1366px;
    height: 625px;
`;

const Img = styled.img`
    padding: 5px;
    width: 664px;
    height: 325px;
`;

const H1 = styled.h1`
    position: absolute;
    margin: 0;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 40px;
    font-size: 60px;
    overflow: hidden;
    padding-left: 45px;
`;

const Genres = styled.h4`
    margin: 0;
    position: absolute;
    left: -5px;
    right: -250px;
    top: 100px;
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-left: 90px;
    background: white;
    color: black;
`;

const Descp = styled.h4`
    margin: 0;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    font-weight: 400;
`;

const Released = styled.h4`
    margin: 3px;
    color: black;
    margin-left: 12px;
`;

const Dynamic1 = styled(Dynamic)`
    position: absolute;
    bottom: 16px;
    left: 34px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
`;

export default Details;