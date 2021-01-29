import React, {Component} from "react";
import {connect} from "react-redux";
import {ValidatorForm} from "react-form-validator-core";

import TextValidator from "../TextValidator";
import filmsOperations from "../../redux/films/filmsOperations";
import styles from "./AddFilmForm.module.scss";

class AddFilmForm extends Component {
  state = {
    title: "",
    releaseYear: "",
    format: "",
    stars: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      ...this.state,
      stars: this.state.stars.split(", ")
    }
    this.props.onSubmit(body)
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  render() {
    const {title, releaseYear, format, stars} = this.state;
    return (
      <div className={styles.formBlock}>
        <h2 className={styles.formTitle}>Add film</h2>
        <ValidatorForm
          onSubmit={this.handleSubmit}
          instantValidate={false}
        >
          <div className={styles.inputsBlock}>
            <TextValidator
              className={styles.textValidatorInput}
              onChange={this.handleChange}
              name="title"
              type="text"
              value={title}
              placeholder="Enter title; ex: Casablanca"
              validators={["required"]}
              errorMessages={["title is required"]}
            />
            <TextValidator
              className={styles.textValidatorInput}
              onChange={this.handleChange}
              name="releaseYear"
              type="number"
              value={releaseYear}
              placeholder="Release year; ex: 1986"
              validators={["required", "isNumber", "minNumber:1890"]}
              errorMessages={["release year is required", "value must be number", "year must be more than 1889"]}
            />
            <TextValidator
              className={styles.textValidatorInput}
              onChange={this.handleChange}
              name="format"
              type="text"
              value={format}
              placeholder="Enter format; ex: DVD"
              validators={["required"]}
              errorMessages={["format is required"]}
            />
            <TextValidator
              className={styles.textValidatorInput}
              onChange={this.handleChange}
              name="stars"
              type="text"
              value={stars}
              placeholder="Stars; Nikol Kidman, Nick Frost"
              validators={["required"]}
              errorMessages={["stars is required, delimeter is space with comma"]}
            />
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.btn} type="submit">Add to collection</button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: filmsOperations.addFilm,
}

export default connect(null, mapDispatchToProps)(AddFilmForm);