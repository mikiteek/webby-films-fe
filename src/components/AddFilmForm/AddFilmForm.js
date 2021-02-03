import React, {Component} from "react";
import {connect} from "react-redux";
import {ValidatorForm} from "react-form-validator-core";

import TextValidator from "../TextValidator";
import filmsOperations from "../../redux/films/filmsOperations";
import styles from "./AddFilmForm.module.scss";

ValidatorForm.addValidationRule("isUniqueItems", (value) => {
  const items = value.split(", ");
  for (let i = 0; i < items.length; i++) {
    if (i !== items.lastIndexOf(items[i])) {
      return false;
    }
  }
  return true;
});

class AddFilmForm extends Component {
  state = {
    title: "",
    releaseYear: "",
    format: "",
    stars: "",
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      ...this.state,
      stars: this.state.stars.split(", ")
    }
    const item = await this.props.onSubmit(body);
    if (item) {
      this.resetForm();
    }
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  handleChangeSelect = (event) => {
    const {target: {value}} = event;
    this.setState({format: value});
  }


  resetForm = () => {
    this.setState({
      title: "",
      releaseYear: "",
      format: "",
      stars: "",
    });
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
            <div>
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
                validators={["required", "isNumber", "minNumber:1850", "maxNumber:2020"]}
                errorMessages={["release year is required", "value must be number", "year must be more than 1849", "year must be less than 2021"]}
              />
            </div>
            <div>
              <select className={styles.textValidatorInput} required value={format} onChange={this.handleChangeSelect} name="format">
                <option value="" defaultValue className={styles.option}>Chose film's format</option>
                <option value="DVD" className={styles.option}>DVD</option>
                <option value="VHS" className={styles.option}>VHS</option>
                <option value="Blu-Ray" className={styles.option}>Blu-Ray</option>
              </select>
            </div>
            <TextValidator
              className={styles.textValidatorInput}
              onChange={this.handleChange}
              name="stars"
              type="text"
              value={stars}
              placeholder="Stars; Nikol Kidman, Nick Frost"
              validators={["required", "isUniqueItems"]}
              errorMessages={["stars is required, delimeter is space with comma", "stars must be unique by one film"]}
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