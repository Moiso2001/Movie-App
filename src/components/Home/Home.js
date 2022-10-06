import React from 'react';
import { useSelector } from 'react-redux';                            // Home component :)) this will be our body and Home page
import Card from '../Card';

import styles from './Home.module.css';

export default function Home() {

    const movies = useSelector(state => state.movies);                  // useSelector Hook from react-redux library, this will help us to bring the redux state to the
                                                                        
  return (
    <div className={styles.divGlobal}>                    
        <h1 className={styles.title}>Movies List</h1>
        <hr/>
        <div className={styles.divCards}>
        {movies.map(movie =>                                           // You could see a map "mapping" the movie state and making a card for each movie :)) 
        <Card                                                          // Also you could see the TYPE is 'fav' this in order to add the fav icon and method to the card
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
