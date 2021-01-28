import React, {Component} from "react";

import styles from "./SearchForm.module.scss";

class SearchForm extends Component {
  state = {
    title: "",
    star: "",
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
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

export default SearchForm;