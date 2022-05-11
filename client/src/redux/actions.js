const axios = require("axios").default;

export const GET_GAMES = 'GET_GAMES';
export const GET_QUERY = 'GET_QUERY';
export const GET_GENRES = 'GET_GENRES';
export const SET_LOADING = 'SET_LOADING';
export const PAGE_REFERENCE = 'PAGE_REFERENCE';
export const SET_REFERENCE = 'SET_REFERENCE';
export const SORT_NAME = 'SORT_NAME';
export const SORT_RATING = 'SORT_RATING';
export const FILTER_GENRE = 'FILTER_GENRE';
export const GET_DETAILS = 'GET_DETAILS';
export const POST_GAME = 'POST_GAME';
export const GET_BASE = 'GET_BASE';
export const DELETE_GAME = 'DELETE_GAME'

export const getGames = () => {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        });
    };
};

export const getQuery = (input) => {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames?name=${input}`)
        .then((r) => r.json())
        .then((json) => {
            return dispatch({
                type: 'GET_QUERY',
                payload: json
            });
        });
    };
};

export const getGenres = () => {
    return function(dispatch) {
        return fetch('http://localhost:3001/genres')
        .then((r) => r.json())
        .then((json) => {
            return dispatch({
                type: 'GET_GENRES',
                payload: json
            });
        });
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};

export const setPageReference = (num) => {
    return {
          type: PAGE_REFERENCE,
          payload: num,
    };
};

export const setReference = (name) => {
    return {
          type: SET_REFERENCE,
        payload: name,
    };
};

export const sortName = (num) => {
    return {
        type: SORT_NAME,
        payload: num,
    };
};

export const sortRating = (num) => {
    return {
        type: SORT_RATING,
        payload: num,
    };
};

export const filterGenre = (genre) => {
    return {
        type: FILTER_GENRE,
        payload: genre
    };
};

export const getDetails = (id) => {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/videogames/' + id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data[0]
            });    
        } catch (error) {
            console.log(error)   
        };
    };
};

export const postGame = (payload) => {
    return async function(dispatch) {
        var response = await axios.post('http://localhost:3001/videogame', payload);
        return response;
    };
};

export const getBase = () => {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_BASE',
            payload: json.data.slice(100)
        });
    };
};

export const deleteGame = (payload) => {
    return async function(dispatch) {
        var response = await axios.delete('http://localhost:3001/videogame/', payload);
        console.log(response);
        return dispatch({
            type: 'DELETE_GAME',
            payload: response
        });
    };
};