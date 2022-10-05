import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';
import { getMoviesDetail, clearDetailMovie } from '../../actions/index';
import Loading from '../Loading';


const Movie = function(){

    const movie = useSelector(state => state.movieDetail)
    const dispatch = useDispatch()
    const { id } = useParams();

useEffect(() => {
    dispatch(getMoviesDetail(id))

    return () => {
        dispatch(clearDetailMovie())
    }
},[])

console.log(movie);

    if (Object.keys(movie).length > 0){
        return (
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
    }else return <Loading/>
        
}




export default (Movie);