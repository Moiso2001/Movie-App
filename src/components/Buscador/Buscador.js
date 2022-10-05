import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Loading from "../Loading";
import Card from "../Card";

import { GoSearch } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';
import { getMovies, clearMovieList } from "../../actions";

import styles from './Buscador.module.css'


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    this.setState({title: ''})
  }
  handleErase(event){
    event.preventDefault();
    this.props.clearMovieList()
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className={styles.formContainer}>
          <div className={styles.divInput}>
            <input
              className={styles.input}
              type="text"
              id="title"
              autoComplete="off"
              value={title}
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

const mapDispatchToProps = (dispatch) => {
  return{
    getMovies: (title) => dispatch(getMovies(title)),
    clearMovieList: () => dispatch(clearMovieList())
  }
}

export default connect(null, mapDispatchToProps)(Buscador);
