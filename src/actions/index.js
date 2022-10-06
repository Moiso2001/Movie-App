export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const CLEAR_DETAIL_MOVIE = 'CLEAR_DETAIL_MOVIE'; 
export const CLEAR_MOVIE_LIST = 'CLEAR_MOVIE_LIST';

export const getMovies = function(title){
    return function(dispatch){
        return fetch("https://www.omdbapi.com/?apikey=ac45fe53&&s=" + title)
        .then(response => response.json())
        .then(json => {
            json.Response === 'True' ? dispatch({type: GET_MOVIES, payload: json}): alert('Movie doesnt exists')}); // Control to check if the movie exists or not avoiding errors                                                                                                                                      
    }                                                                                                               // Because the JSON have a Response that is what I'm validating
}

export const getMoviesDetail = (imdbID) => {
    return function(dispatch){
        return fetch("https://www.omdbapi.com/?apikey=ac45fe53&&i=" + imdbID)           // Search movie by ID looking for extra details
        .then(response => response.json())
        .then(json => dispatch({type: GET_MOVIE_DETAIL, payload: json}))
    }
}

export const addMovieFavorite = (id) => {           
    return{ 
        type: ADD_MOVIE_FAVORITE,                                                      // Reducer handle functionality
        payload: id,
    };
}

export const removeMovieFavorite = (id) => {
    return{                                                                           // Reducer handle functionality
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}

export const clearDetailMovie = () => {
    return {                                                                        // Reducer handle functionality
        type: CLEAR_DETAIL_MOVIE,
    }
}

export const clearMovieList = () => {
    return{                                                                         // Reducer handle functionality
        type: CLEAR_MOVIE_LIST,
    }
}