import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, CLEAR_DETAIL_MOVIE, CLEAR_MOVIE_LIST} from "../actions";
// Actions imported from ../actions folder, those are const declarations with the string 
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
                movies: payload.Search                                              // payload will be the JSON from the api, this json have the movie details in the .Search property
            }                                                                       // here we just bring those movies to our movie state to have it updated in our home component
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: payload                                                // Payload is our JSON from the API with detailed information about the specific movie looked.
            }
        case ADD_MOVIE_FAVORITE:
            const movies = state.favoriteMovies.filter(movie => movie[0].imdbID === payload)        // payload is an ID here, the ID is used to check any possible coincidence with the favoriteMovies(redux-state)
            if (movies.length === 0){                                                               // if there is a coincidence this will be saved in movies variable to after check if there is no coincidence 
                alert('Movie added to favorites :))')                                               // is because the movie isn't in the state, if it's not the reducer will added and pop up succesfull message :)
                return{
                    ...state,
                    favoriteMovies: [...state.favoriteMovies, state.movies.filter(movie => movie.imdbID === payload)] // here is adding the movie mark as favorite into the movieFavorite redux state
                }
            } else {                                                                                // If there is a coincidence in the state is because the movie is already in the state
                alert('This movie was already added')                                               // message pop up notifying what i mentioned before
                return{
                    ...state                                                                        // returning the state without modifications
                }
            }
             
        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie => movie[0].imdbID !== payload) // payload is an ID used to filter everything that does not have the ID, deleting the movie requested from the state :))
            }

    // Those clear actions works to set the following states into an empty array, "cleaning" our state 
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