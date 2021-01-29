import React, {Component} from "react";
import {ValidatorForm} from "react-form-validator-core";


import TextValidator from "../TextValidator";
import styles from "./AddFilmForm.module.scss";

class AddFilmForm extends Component {
  state = {
    title: "Donny Darco",
    releaseYear: 1986,
    format: "DVD",
    stars: "Samanta Darco, Jacke Noring",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({[name]: value});
  }

  render() {
    const {title, releaseYear, format, stars} = this.state;
    return (
      <div>
        <h2>Add film</h2>
        <ValidatorForm
          // ref="form"
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

export default AddFilmForm;