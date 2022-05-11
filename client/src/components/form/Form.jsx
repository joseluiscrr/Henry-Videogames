import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGenre from "../hooks/UseGenre";
import { postGame } from "../../redux/actions";
import Contains from "./Contains";
import Thanx from "./Thanx";
import "../css/form.css";

const Form = () => {
    const dispatch = useDispatch();
    const genresLoaded = useGenre();
    const platformsLoaded = useSelector((state) => state.platformsLoaded);
    const initialState = { name: '', description: '', rating: '', released: '', genres: [], platforms: [] };
    const [ done, setDone ] = useState(false);
    const [ danger, setDanger ] = useState(false);
    const [ submission, setSubmission ] = useState({ ...initialState });
    let genresList = {};
    console.log(genresList);
    let platformsList = {};

    const handleSubmissionChange = (r) => {
        setSubmission({ ...submission, [r.target.name]: r.target.value });
    };

    const checkboxGenres = (r) => {
        const { name, checked } = r.target;
        genresList[name] = checked;
    };

    const checkboxPlatforms = (r) => {
        const { name, checked } = r.target;
        platformsList[name] = checked;
    };

    const handleSubmit = (r) => {
        r.preventDefault();
        if(submission.name === '' || submission.description === '') return setDanger(true);
        Object.entries(genresList).map((r) => r[1] && submission.genres.push(r[0]));
        Object.entries(platformsList).map((r) => r[1] && submission.platforms.push(r[0]));
        dispatch(postGame(submission));
        setDone(true);
        setDanger(false);
        setSubmission({ ...initialState });
    };

    return (
        <div>
            {
                done ?
                (
                    <Thanx setDone={setDone} />
                ) :
                (
                    <Contains 
                        handleSubmit={handleSubmit}
                        handleSubmissionChange={handleSubmissionChange}
                        checkboxGenres={checkboxGenres}
                        checkboxPlatforms={checkboxPlatforms}
                        danger={danger}
                        submission={submission}
                        genresLoaded={genresLoaded}
                        platformsLoaded={platformsLoaded}
                    />
                )
            }
        </div>
    );
};

export default Form;