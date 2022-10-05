import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, CLEAR_DETAIL_MOVIE, CLEAR_MOVIE_LIST} from "../actions";

const initialState = {
    movies: [],
    movieDetail: [],
    favoriteMovies: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MOVIES:
            return{
                ...state,
                movies: payload.Search
            }
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: payload
            }
        case ADD_MOVIE_FAVORITE:
            const movies = state.favoriteMovies.filter(movie => movie[0].imdbID === payload)
            if (movies.length === 0){
                return{
                    ...state,
                    favoriteMovies: [...state.favoriteMovies, state.movies.filter(movie => movie.imdbID === payload)]
                }
            } else {
                console.log(state)
                alert('This movie was already added')
                return{
                    ...state
                }
            }
             
        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie => movie[0].imdbID !== payload)
            }
        case CLEAR_DETAIL_MOVIE: 
            return{
                ...state,
                movieDetail: []
            }
        case CLEAR_MOVIE_LIST:
            return{
                ...state,
                movies: []
            }
        default:
            return state;
    }
}

export default rootReducer;