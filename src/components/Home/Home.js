import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';

import styles from './Home.module.css';

export default function Home() {

    const movies = useSelector(state => state.movies);

  return (
    <div className={styles.divGlobal}>
        <h1 className={styles.title}>Movies List</h1>
        <hr/>
        <div className={styles.divCards}>
        {movies.map(movie => 
        <Card
            key={movie.imdbID}
            id={movie.imdbID}
            img={movie.Poster}
            year={movie.Year}
            title={movie.Title}
            type='fav'
        />)}
        </div>
    </div>
  )
}
