import React, {Component} from "react";
import {connect} from "react-redux";

import filmsOperations from "../../redux/films/filmsOperations";
import filmsActions from "../../redux/films/filmsActions";
import styles from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    title: "",
    star: "",
  }

  handleSubmit = event => {
    event.preventDefault();
    const {title, star} = this.state;
    this.props.onSubmit({title, star})
    this.onSetSearchParams({title, star});
    this.resetForm();
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  resetForm = () => {
    this.setState({title: "", star: ""});
  }

  render() {
    return (
      <div className="js-form-search-block">
        <form className={styles.formFilms} onSubmit={this.handleSubmit}>
          <input className={styles.formInput} type="text" name="title" placeholder="Film's title (optional)" onChange={this.handleChange}/>
          <input className={styles.formInput} type="text" name="star" placeholder="Star's name (optional)" onChange={this.handleChange}/>
          <br/>
          <button className={styles.btn} type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: filmsOperations.getFilmsByQuery,
  onSetSearchParams: filmsActions.searchParams,
}

export default connect(null, mapDispatchToProps)(SearchForm);