import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";

function useGenre() {
    const dispatch = useDispatch();
    const genresLoaded = useSelector(state => state.genresLoaded);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return genresLoaded;
};

export default useGenre;