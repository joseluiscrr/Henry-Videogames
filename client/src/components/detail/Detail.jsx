import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, setLoading } from "../../redux/actions";
import Error from "./Error";
import Load from "../home/Load";
import Details from "./Details";
import notImage from "../images/NotImage.jpeg"
import "../css/details.css";

const Detail = (props) => {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const details = useSelector((state) => state.gamesDetails);
    const loading = useSelector((state) => state.loading);
    const { image, name, genres, description, released, rating, platforms } = details;

    useEffect(() => {
        dispatch(getDetails(id));
        dispatch(setLoading());
    }, [id, dispatch]);

    if(loading) return <Load />;
    if(name && description) {
        return(
            <Details 
                image={image ? image : notImage}
                name={name}
                genres={genres}
                description={description}
                released={released}
                rating={rating}
                platforms={platforms}
            />
        );
    } else {
        return <Error />;
    };
};

export default Detail;