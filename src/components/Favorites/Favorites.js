import React, { Component } from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
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
          <Card
            id={movie[0].imdbID}
            key={movie[0].imdbID}
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
    favoriteMovies: state.favoriteMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
