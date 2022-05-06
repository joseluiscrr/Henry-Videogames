import React, { useRef } from "react";
import Click from "../hooks/Click";
import { useDispatch, useSelector } from "react-redux";
import Sort from "./div/Sort";
import { getGenres, sortName, sortRating } from "../../redux/actions";
import Genre from "./div/Genre";
import Clear from "./div/Clear";
import Owns from "./div/Owns"
import Buttons from "../styles/buttons";
import styled from "styled-components";
import "../css/menu.css";

const Menu = () => {
    const dispatch = useDispatch();
    const reference = useRef(null);
    const [bool, setBool] = Click(reference, false);
    const games = useSelector((state) => state.gamesLoaded);
    const onClick = async () => {
        setBool(!bool);
        await dispatch(getGenres());
    };

    return (
        <div className={'menu-container'}>
            {
                (games) && (
                    <Buttons1 onClick={onClick}>
                        <span>Filter</span>
                    </Buttons1>
                )
            }
            <Nav ref={reference} className={`menu ${bool && 'active'}`}>
                <ul>
                    <div className='resultsClear'><h3>Result: {games.length}</h3><Owns /></div>
                    <li>
                        <Sort 
                            innerLeft={'Desc'}
                            innerRight={'Asc'}
                            actionLeft={sortName}
                            actionRight={sortName}
                            argLeft={1}
                            argRight={-1}
                            title={'Name'}
                        />
                    </li>
                    <li>
                        <Sort
                            innerLeft={'Desc'}
                            innerRight={'Asc'}
                            actionLeft={sortRating}
                            actionRight={sortRating}
                            argLeft={-1}
                            argRight={1}
                            title={'Score'}
                        />
                    </li>
                    <li><Genre /></li>
                    <Li><Clear /></Li>
                </ul>              
            </Nav>
        </div>
    );
};

const Buttons1 = styled(Buttons)`
    position: absolute;
    top: 23.8%;
    right: 20%;
    span { font-weight: 700; font-size: 14px; margin: 10px; }
`;

const Nav = styled.nav`
    position: absolute;
    top: 33%;
    right: 12%;
    width: 300px;
    visibility: hidden;
    transform: translateY(200px);
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    border: ${(props) => props.theme.glassBorder};
    background: #8080801c;
    box-shadow: 0 8px 32px 0 rgb(251 251 251 / 37%);
    backdrop-filter: blur(20px);
    border-radius: 18px;
    .active { opacity: 1; visibility: visible; transform: translateY(0); };
    h3 { padding-left: 21px; }
    ul { list-style: none; padding: 0; margin: 0; };
    li { border-top: 1px solid grey; button{border: ${props => props.theme.darkBorder}} }
`;

const Li = styled.li`
    display: flex;
    justify-content: center;
`;

export default Menu;