import React, {Component} from "react";
import {ValidatorForm} from "react-form-validator-core";

import FileValidator from "../FileValidator";
import styles from "./AddFilmsFromFilesForm.module.scss";

class AddFilmsFromFilesForm extends Component {
  state = {
    file: "",
  }

  handleChange = (event) => {
    this.setState({file: event.target.files[0]});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.file)
  }

  render() {
    const {file} = this.state;
    return (
      <div>
        <h2 className={styles.formTitle}>Upload film's data from file (.txt or .json)</h2>
        <ValidatorForm
          onSubmit={this.handleSubmit}
        >
          <div className={styles.inputsBlock}>
            <FileValidator
              className={styles.fileValidatorInput}
              onChange={this.handleChange}
              name="file"
              type="file"
              value={file}
              accept=".json, text/plain"
              validators={['required', 'isFile', 'maxFileSize:' + 1 * 1024 * 1024, 'allowedExtensions:text/plain,.json']}
              errorMessages={['file is required', 'file is not valid', 'size must not exceed 1MB', 'only .json and .txt']}
            />
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.btn} type="submit">Upload films' data</button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default AddFilmsFromFilesForm;