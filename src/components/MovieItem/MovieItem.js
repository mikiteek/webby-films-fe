import React, {Component} from "react";
import {connect} from "react-redux";

import filmsOperations from "../../redux/films/filmsOperations";
import styles from "./MovieItem.module.scss";

class MovieItem extends Component {
  handleDeleteMovie = (event) => {
    const {target: {dataset}} = event;
    this.props.onDeleteContact(dataset.id);
  }

  toggleDropDownList = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    const {id} = this.props;
    const dropDownList = document.querySelector(".js-drop-down-list" + id);
    dropDownList.classList.toggle(styles.dropDownListShow);
  }

  render() {
    const {title, id, releaseYear, format, stars} = this.props;
    const dropDownListStyles = ["js-drop-down-list" + id, styles.dropDownList].join(" ");
    return (
      <li className={styles.movieItem}>
        <div className={styles.headerBlock} onClick={this.toggleDropDownList}>
          <h3 className={styles.movieInfo}>
            {title}
          </h3>
          <button className={styles.btn} type="button" onClick={this.handleDeleteMovie} data-id={id}>Delete</button>
        </div>
        <ul className={dropDownListStyles}>
          <li className={styles.dropDownListItem}>
            <p className={styles.dropDownListItemTitle}>Release year:</p>
            <p>{releaseYear}</p>
          </li>
          <li className={styles.dropDownListItem}>
            <p className={styles.dropDownListItemTitle}>Format:</p>
            <p>{format}</p>
          </li>
          <li className={styles.dropDownListItem}>
            <p className={styles.dropDownListItemTitle}>Stars:</p>
            <p>{stars.join(", ")}</p>
          </li>
        </ul>
      </li>
    );
  }
}

const mapDispatchToProps = {
  onDeleteContact: filmsOperations.deleteFilm,
}

export default connect(null, mapDispatchToProps)(MovieItem);