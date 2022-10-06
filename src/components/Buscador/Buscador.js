import React, { Component } from "react";
import { connect } from "react-redux";


import { GoSearch } from 'react-icons/go';                          // Buscador COMPONENT :) (SEARCHER)?? 
import { AiOutlineDelete } from 'react-icons/ai';                   // Our "Buscador" is the white input in our nav, is in charge to bring from the API the data, to next show it in our body :))
import { getMovies, clearMovieList } from "../../actions";

import styles from './Buscador.module.css'


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {                                  // Title set into local state in order to have it
      title: ""                                     // updated and manipulated by our handlers easily
    };
  }
  handleChange(event) {                             // HandleChange is being use by our input to have an event litsener
    this.setState({ title: event.target.value });   // "litsening" our title state in order to update the input value
  }
  handleSubmit(event) {                             // HandleSubmit is being use by our form onSubmit and our search icon
    event.preventDefault();                         // button in order to send the state.title(string) to our getMoives(redux-action) // "getMovies will ask to the API requesting the data and bringin to our movie state(look reducer documentation)"
    this.props.getMovies(this.state.title)          // additionaly setting our title in '' empty string cleaning our input.
    this.setState({title: ''})                      // THIS WITH THE "OnClick" METHOD.
  }
  handleErase(event){                               // HandleErase help us giving the user an option to clean the movies
    event.preventDefault();                         // showed in the body, the clearMovieList(redux-action) set our movie(redux-state) to []
    this.props.clearMovieList()
  }                        

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} className={styles.formContainer}>
          <div className={styles.divInput}>
            <input
              className={styles.input}
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              placeholder='Ex: Shrek...'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className={styles.divButton}>
            <GoSearch className={styles.button} onClick={(e) => this.handleSubmit(e)}/>
            <AiOutlineDelete className={styles.button} onClick={(e) => this.handleErase(e)}/>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {                            //connect redux-react method because this is
  return{                                                             // a class component without beautifull hooks :((
    getMovies: (title) => dispatch(getMovies(title)),
    clearMovieList: () => dispatch(clearMovieList())
  }
}

export default connect(null, mapDispatchToProps)(Buscador);        
