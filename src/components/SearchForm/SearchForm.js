import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import filmsOperations from "../../redux/films/filmsOperations";
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

  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {location: {pathname}} = this.props;
    const btnRef = document.querySelector("."+ styles.btn);
    if (btnRef && pathname === "/add-film") {
      btnRef.disabled = true;
    }
    else if (btnRef) {
      btnRef.disabled = false;
    }
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
}

export default connect(null, mapDispatchToProps)(withRouter(SearchForm));