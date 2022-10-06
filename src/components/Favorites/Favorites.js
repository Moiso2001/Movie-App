import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../Card";

import styles from './Favorites.module.css'

export class ConnectedList extends Component {

  render() {
    return (
      <div className={styles.divGlobal}>
        <div className={styles.divTitle}>
          <h2 className={styles.title}>Favorite Movies</h2>
        </div>
        <hr/>
        <div className={styles.divCards}>
        
          {this.props.favoriteMovies.length > 0 ? this.props.favoriteMovies.map((movie) => 
          <Card                                                                                    // As we saw in Card documentation, here isn't being
            id={movie[0].imdbID}                                                                   // pass any type, that means all of this cards will be rendered  with
            key={movie[0].imdbID}                                                                  // delet icon and method,
            title={movie[0].Title}
            img={movie[0].Poster}                                                                 
          />): null}
      
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    favoriteMovies: state.favoriteMovies                                            // We bring Favorite Component with the favoriteMovies(redux-state) this will be the 
  }                                                                                 // array maped with the movies selected before when the user clicked on the Heart/Fav Icon
}

export default connect(mapStateToProps)(ConnectedList);
