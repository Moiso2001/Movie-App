import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';
import { getMoviesDetail, clearDetailMovie } from '../../actions/index';
import Loading from '../Loading';

                                                                                // My favorite component :) the movie or details component
const Movie = function(){

    const movie = useSelector(state => state.movieDetail)    // When you click on the name of a card the movie object will be added to movieDetail(redux-state) and with this hook you are bring it here.
    const dispatch = useDispatch()                           // useDispatch hook to "dispatch" our actions imported in the line 05.                                
    const { id } = useParams();                              // Remember this Movie is being rendered with the route /movie/:id here we're destructuring params with "useParams" and asking for the ID this will be the imdbID settled when you clicked the name of the card.

useEffect(() => {
    dispatch(getMoviesDetail(id))                           // compoment did mount dispatching the getMoviesDetail action, this action will ask more information of the movie.

    return () => {
        dispatch(clearDetailMovie())                        // component will unmount, when you unmount the component we clean the movieDetail(redux-state) so this page will be set into an empty page
    }                                                       // this helps when the user close the MovieDetail component and open it again with a different movie, if we don't do this, for a few seconds the user
},[])                                                       // will se the last movie opened, next being deleted and re-render it with the new movie :( not something good at all...

console.log(movie);

    if (Object.keys(movie).length > 0){                              // "movie" it's the state and we don't want to render anything if we're not sure that movie(redux-state) have something in there
        return (                                                     // this is a little verification of that, if movie have something there, render it.. otherwise don't do it.
            <div className={styles.divGlobal}>
                <div className={styles.divTitle}>
                    <h2 className={styles.Title}>{movie.Title}</h2>
                </div>
                <div className={styles.divBody}>
                    <img src={movie.Poster} alt='poster'/>
                    <div>
                        <p>{movie.Rated}</p>
                        <p>{movie.Year}</p>
                        <span>{movie.Plot}</span>
                    </div>
                </div>
                <div className={styles.divDescription}>
                    <span>{`Director: ${movie.Director}`}</span>
                    <span>{`Box Office: ${movie.BoxOffice}`}</span>  
                    <span>{`IMDB Rating: ${movie.imdbRating}`}</span>  
                    <span>{`Awards: ${movie.Awards}`}</span> 
                </div >
            </div>
        )
    }else return <Loading/>                                              // If movie(redux-state) is empty render our Loading component :))
        
}




export default (Movie);