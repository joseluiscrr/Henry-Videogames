import { filterGenre, sortName, sortRating } from "./constans"
import { GET_GAMES, GET_QUERY, GET_GENRES, PAGE_REFERENCE, SET_LOADING, SET_REFERENCE, SORT_NAME, SORT_RATING, FILTER_GENRE, GET_DETAILS, POST_GAME, GET_BASE } from "./actions";

let initialState = {
  gamesLoaded: [],
  gamesUnfiltered: [],
  gamesDetails: [],
  genresLoaded: [],
  platformsLoaded: ["PC", "PlayStation 5", "PlayStation 4", "Xbox One", "Xbox Series S/X", "Nintendo Switch", "iOS", "Android", "Nintendo 3DS", "macOS", "Xbox 360", "Xbox", "PlayStation 3", "PlayStation 2", "Wii U", "Nintendo 64", "Game Boy Advance", "Game Boy Color", "Game Boy", "GameCube"],
  loading: false,
  reference: '',
  pageReference: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        gamesLoaded: action.payload,
        gamesUnfiltered: action.payload,
        loading: false,
        pageReference: 0,
        reference: ''
      };
    case GET_QUERY:
      return {
        ...state,
        gamesLoaded: action.payload,
        gamesUnfiltered: action.payload,
        loading: true
      };
    case GET_GENRES:
      return {
        ...state,
        genresLoaded: action.payload
      };
    case SET_LOADING: 
      return{
        ...state,
        loading: !state.loading
      };
    case SET_REFERENCE:
      return{
        ...state,
        reference: action.payload
      };
    case PAGE_REFERENCE:
      return{
        ...state,
        pageReference: action.payload
      };
    case SORT_NAME: 
      return {
        ...state, 
        gamesLoaded: sortName(action.payload, state.gamesLoaded),
        pageReference: 0
      };
    case SORT_RATING:
      return {
        ...state, 
        gamesLoaded: sortRating(action.payload, state.gamesLoaded),
        pageReference: 0
      };
    case FILTER_GENRE: 
      return {
        ...state, 
        gamesLoaded: filterGenre(action.payload, state.gamesLoaded),
        pageReference: 0
      };
      case GET_DETAILS:
        return {
          ...state,
          gamesDetails: action.payload,
          loading: false
        };
      case POST_GAME: 
        return {...state};
      case GET_BASE:
        return {
          ...state,
          gamesLoaded: action.payload,
          gamesUnfiltered: action.payload,
          loading: false,
          pageReference: 0,
          reference: 'Owns'
        };
      // case DELETE_GAME: 
      //   return {...state};
      default: return state;
  };
};

export default reducer;